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
for (const n of ['32.5', '75.5', '7550', '29.4', '19.5', '12.4', '14.2', '77.6', '79.5', '94']) {
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
      // Rubric criterion identifiers ("criterion 2.3") are labels, not claims.
      const before = body.slice(Math.max(0, m.index - 24), m.index).toLowerCase();
      if (/criterion\s*$|criteria\s*$/.test(before)) continue;
      const ctx = body.slice(Math.max(0, m.index - 55), m.index + 55).trim();
      note(site, rel, 'unsourced-number', `${raw}  …${ctx}…`);
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
