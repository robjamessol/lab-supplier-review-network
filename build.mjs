#!/usr/bin/env node
import { mkdir, writeFile, rm, readFile, readdir, cp, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderPage, renderMarkdownAlternate } from './lib/render.mjs';
import { renderSitemap, renderRobots, renderLlmsTxt, renderLlmsFull, MAIN_JS, FAVICON } from './lib/site-files.mjs';
import { styles, PALETTES } from './lib/styles.mjs';
import { checkCopy, checkReviewBody } from './lib/compliance.mjs';
import { toPlain } from './lib/markdown.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITES_DIR = path.join(ROOT, 'sites');
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString();

function fail(msg) {
  console.error(`\n  BUILD FAILED: ${msg}\n`);
  process.exit(1);
}

async function loadReviews() {
  const file = path.join(ROOT, 'shared', 'reviews.json');
  if (!existsSync(file)) return [];
  const raw = JSON.parse(await readFile(file, 'utf8'));
  const list = Array.isArray(raw) ? raw : raw.reviews || [];
  const seen = new Set();
  const clean = [];
  for (const [i, r] of list.entries()) {
    if (r.placeholder === true && process.env.ALLOW_PLACEHOLDER !== '1') continue;
    if (!r.id) fail(`reviews.json entry ${i} has no id`);
    if (seen.has(r.id)) fail(`reviews.json has duplicate id "${r.id}"`);
    seen.add(r.id);
    const rating = Number(r.rating);
    if (!(rating >= 1 && rating <= 5)) fail(`review "${r.id}" has invalid rating ${r.rating}`);
    if (!r.body || r.body.length < 10) fail(`review "${r.id}" has no usable body`);
    if (r.date && !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) fail(`review "${r.id}" date must be YYYY-MM-DD`);
    const hits = checkReviewBody(r.body);
    if (hits.length && !r.reviewed) {
      console.warn(
        `  ! review "${r.id}" contains restricted language (${hits
          .map((h) => h.rule)
          .join(', ')}). Redact it or set "reviewed": true after a human read.`
      );
    }
    clean.push({ ...r, rating });
  }
  return clean;
}

async function loadSite(siteId) {
  const dir = path.join(SITES_DIR, siteId);
  if (!existsSync(dir)) fail(`no site directory at sites/${siteId}`);
  const configPath = path.join(dir, 'site.config.mjs');
  const { site, pages } = await import(`${configPath}?t=${Date.now()}`);
  return { dir, site, pages };
}

async function buildSite(siteId, reviews) {
  const { dir, site, pages } = await loadSite(siteId);
  const out = path.join(ROOT, 'dist', siteId);
  await rm(out, { recursive: true, force: true });
  await mkdir(path.join(out, 'css'), { recursive: true });
  await mkdir(path.join(out, 'js'), { recursive: true });

  // --- compliance gate over every rendered sentence -----------------------
  const violations = [];
  for (const p of pages) {
    const surface = [p.title, p.description, p.h1, p.standfirst, p.kicker, p.body, p.coverBlocks]
      .filter(Boolean)
      .join('\n');
    violations.push(...checkCopy(surface, { where: `${siteId}${p.path}` }));
  }
  violations.push(
    ...checkCopy(
      [site.eyebrow, site.tagline, site.footer.blurb, site.footer.disclosure, site.publisher.disclosureShort]
        .filter(Boolean)
        .join('\n'),
      { where: `${siteId} chrome` }
    )
  );
  if (violations.length) {
    for (const v of violations) {
      console.error(`  [${v.rule}] ${v.where}: "${v.match}"\n      ${v.message}\n      …${v.context}…`);
    }
    fail(`${violations.length} copy-rule violation(s) in ${siteId}`);
  }

  // --- pages -------------------------------------------------------------
  for (const p of pages) {
    const html = renderPage({ site, page: p, reviews, buildDate: BUILD_DATE });
    const md = renderMarkdownAlternate({ site, page: p });
    if (p.path === '/') {
      await writeFile(path.join(out, 'index.html'), html);
      await writeFile(path.join(out, 'index.md'), md);
    } else {
      const slug = p.path.replace(/^\//, '');
      await mkdir(path.join(out, slug), { recursive: true });
      await writeFile(path.join(out, slug, 'index.html'), html);
      await writeFile(path.join(out, `${slug}.md`), md);
    }
  }

  // --- assets and machine surfaces ---------------------------------------
  await writeFile(path.join(out, 'css', 'style.css'), styles({ palette: site.palette, paper: site.paper }));
  await writeFile(path.join(out, 'js', 'main.js'), MAIN_JS);
  await writeFile(path.join(out, 'favicon.svg'), FAVICON((PALETTES[site.palette] || PALETTES.royal).accent));
  await writeFile(path.join(out, 'sitemap.xml'), renderSitemap({ site, pages, buildDate: BUILD_DATE }));
  await writeFile(path.join(out, 'robots.txt'), renderRobots({ site }));
  await writeFile(path.join(out, 'llms.txt'), renderLlmsTxt({ site, pages }));
  await writeFile(path.join(out, 'llms-full.txt'), renderLlmsFull({ site, pages }));

  const publicDir = path.join(dir, 'public');
  if (existsSync(publicDir)) await cp(publicDir, out, { recursive: true });

  const words = pages.reduce((n, p) => n + toPlain(p.body).split(/\s+/).length, 0);
  console.log(
    `  ✓ ${siteId.padEnd(26)} ${String(pages.length).padStart(2)} pages  ${String(words).padStart(6)} words  → dist/${siteId}`
  );
  return { siteId, pages: pages.length, words };
}

async function main() {
  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const idx = args.indexOf('--site');
  const reviews = await loadReviews();

  let targets;
  if (all || idx === -1) {
    targets = (await readdir(SITES_DIR, { withFileTypes: true }))
      .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
      .map((d) => d.name)
      .sort();
  } else {
    targets = [args[idx + 1]];
  }

  console.log(`\nBuilding ${targets.length} site(s) with ${reviews.length} customer review(s)\n`);
  if (!reviews.length) {
    console.log('  note: shared/reviews.json holds no live reviews yet.');
    console.log('        Review blocks render as empty and no AggregateRating is emitted.\n');
  }

  const results = [];
  for (const t of targets) results.push(await buildSite(t, reviews));
  const total = results.reduce((n, r) => n + r.words, 0);
  console.log(`\nDone. ${results.length} site(s), ${total.toLocaleString()} words.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
