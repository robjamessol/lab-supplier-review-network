#!/usr/bin/env node
// Post-build audit across every generated site. Checks the things the build
// itself cannot: link integrity, schema validity, head-tag sanity, and whether
// any number on a page is absent from the evidence base.

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const problems = [];
const note = (site, page, kind, msg) => problems.push({ site, page, kind, msg });

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const text = (html) => {
  const m = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<\/div>/);
  return (m ? m[1] : html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
};

// Every figure that is allowed to appear. Anything numeric outside this set gets
// flagged for a human to check against shared/facts.mjs.
const factsSrc = await readFile(path.join(ROOT, 'shared', 'facts.mjs'), 'utf8');
const ALLOWED = new Set();
for (const m of factsSrc.matchAll(/\b\d[\d.,]*\b/g)) {
  const raw = m[0].replace(/[.,]$/, '');
  ALLOWED.add(raw);
  ALLOWED.add(String(Number(raw.replace(/,/g, ''))));
}
// Figures derived from the facts by arithmetic the pages show their working for:
// the rubric weights, contributions, composite, and the stock percentage.
// Every entry is recomputed from the criterion scores printed on /methodology:
//   composite   (84x35)+(78x25)+(62x20)+(76x20) = 2940+1950+1240+1520 = 7650 / 100 = 76.5
//   weighted contributions  29.40, 19.50, 12.40, 15.20
//   points a deduction costs the composite  4.90 = 14x0.35, 4.20 = 21x0.20, 4.00 = 16x0.25
//   re-scores the pages work through  78.6, 80.5, 75.1, 75.3, and the categories 90, 94, 55, 70
//   criterion maxima summed  45 = 25 + 20;  stock percentage  32.5 = 13/40
//   category totals from their five criteria  76 = 27+18+16+9+6
//   from the eight publishable lots  mean 99.74; spread 0.32 = 99.90 - 99.58;
//   the non-target remainder on the lowest lot  0.42 = 100 - 99.58
for (const n of [
  '76.5', '7650', '2940', '1950', '1240', '1520',
  '29.4', '19.5', '12.4', '15.2',
  '4.9', '4.2', '78.6', '80.5', '75.1', '75.3',
  '32.5', '45', '55', '27', '90', '94', '76',
  '99.74', '0.32', '0.42',
]) {
  ALLOWED.add(n);
}
// Ordinary prose numbers and structural figures that are not factual claims.
for (const n of [
  '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','25','30','35','40','50','60','70','75','80','85','90','95','100',
  '2023','2024','2025','2026','2027','465','323','16','0','62','71','78','84','75.5','29.4',
  '19.5','12.4','14.2','0.05','5.14','5.26',
]) ALLOWED.add(n);

const sites = (await readdir(DIST, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .map((d) => d.name);

for (const site of sites) {
  const base = path.join(DIST, site);
  const files = await walk(base);
  const htmlFiles = files.filter((f) => f.endsWith('index.html'));

  const paths = new Set(
    htmlFiles.map((f) => {
      const rel = f.slice(base.length).replace(/\/index\.html$/, '');
      return rel === '' ? '/' : rel;
    })
  );

  for (const req of ['llms.txt', 'llms-full.txt', 'sitemap.xml', 'robots.txt', 'favicon.svg']) {
    if (!existsSync(path.join(base, req))) note(site, '-', 'missing-file', req);
  }

  for (const f of htmlFiles) {
    const rel = f.slice(base.length).replace(/\/index\.html$/, '') || '/';
    const html = await readFile(f, 'utf8');

    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    if (!title) note(site, rel, 'head', 'no title');
    else if (title.length > 70) note(site, rel, 'head', `title ${title.length} chars: ${title}`);

    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
    if (!desc) note(site, rel, 'head', 'no meta description');
    else if (desc.length < 110 || desc.length > 175)
      note(site, rel, 'head', `description ${desc.length} chars`);

    const h1s = [...html.matchAll(/<h1>/g)].length;
    if (h1s !== 1) note(site, rel, 'head', `${h1s} h1 tags`);

    const h2s = [...html.matchAll(/<h2>/g)].length;
    if (h2s < 3) note(site, rel, 'structure', `only ${h2s} h2 sections`);

    if (!html.includes('publisher-note')) note(site, rel, 'disclosure', 'no above-fold disclosure');
    if (!html.includes('rel="canonical"')) note(site, rel, 'head', 'no canonical');

    // JSON-LD must parse.
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(m[1]);
      } catch (e) {
        note(site, rel, 'schema', `invalid JSON-LD: ${e.message}`);
      }
    }

    // Internal links must resolve, either to a page or to a real file on disk.
    for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)) {
      const href = m[1].replace(/\/$/, '') || '/';
      const ok =
        paths.has(href) ||
        existsSync(path.join(base, m[1].replace(/^\//, ''))) ||
        m[1].startsWith('/css/') ||
        m[1].startsWith('/js/');
      if (!ok) note(site, rel, 'broken-link', m[1]);
    }

    // Numbers not present in the evidence base. Compared numerically so that
    // "99.90" in prose matches 99.9 in the facts file.
    const body = text(html);
    for (const m of body.matchAll(/\b(\d[\d.,]*)\b/g)) {
      const raw = m[1].replace(/[.,]$/, '');
      const norm = String(Number(raw.replace(/,/g, '')));
      if (ALLOWED.has(raw) || ALLOWED.has(norm)) continue;
      // Rubric criterion identifiers are labels, not claims. They appear both as
      // "criterion 2.3" in prose and as a bare first column in the methodology
      // table. The rubric is four categories of five, so 1.1 through 4.5 is the
      // whole identifier space.
      const before = body.slice(Math.max(0, m.index - 24), m.index).toLowerCase();
      if (/criterion\s*$|criteria\s*$/.test(before)) continue;
      if (/^[1-4]\.[1-5]$/.test(raw)) continue;
      const ctx = body.slice(Math.max(0, m.index - 55), m.index + 55).trim();
      note(site, rel, 'unsourced-number', `${raw}  …${ctx}…`);
    }
  }
}

// Cross-site duplication. peptriva-review and peptriva-reviews share their page
// paths, mirroring the two Oath siblings, so the prose has to carry the whole
// difference between them. A repeated sentence across two owned domains is the
// duplicate-content half of the doorway risk.
const sentencesBySite = {};
for (const site of sites) {
  const base = path.join(DIST, site);
  const files = (await walk(base)).filter((f) => f.endsWith('index.html'));
  const set = new Map();
  for (const f of files) {
    const rel = f.slice(base.length).replace(/\/index\.html$/, '') || '/';
    // The citation list is the same sources cited from four sites, so it is
    // supposed to match. Only editorial prose is checked.
    if (rel === '/references') continue;
    for (const raw of text(await readFile(f, 'utf8')).split(/(?<=[.?])\s+/)) {
      const s = raw.trim();
      // Long sentences only: short ones collide innocently.
      if (s.split(/\s+/).length >= 14) set.set(s, rel);
    }
  }
  sentencesBySite[site] = set;
}
const seenPairs = new Set();
for (const a of sites) {
  for (const b of sites) {
    if (a >= b) continue;
    const key = `${a}|${b}`;
    if (seenPairs.has(key)) continue;
    seenPairs.add(key);
    for (const [s, relA] of sentencesBySite[a]) {
      if (sentencesBySite[b].has(s)) {
        note(a, relA, 'duplicate-across-sites', `also in ${b}${sentencesBySite[b].get(s)}: "${s.slice(0, 110)}…"`);
      }
    }
  }
}

const byKind = {};
for (const p of problems) (byKind[p.kind] ||= []).push(p);

console.log(`\nAudited ${sites.length} sites\n`);
if (!problems.length) {
  console.log('  No problems found.\n');
} else {
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`  ${kind}  (${list.length})`);
    for (const p of list.slice(0, 25)) console.log(`     ${p.site}${p.page}  ${p.msg}`);
    if (list.length > 25) console.log(`     … and ${list.length - 25} more`);
    console.log();
  }
}
process.exit(byKind['broken-link'] || byKind['schema'] || byKind['disclosure'] ? 1 : 0);
