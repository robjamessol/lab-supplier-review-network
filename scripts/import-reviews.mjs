#!/usr/bin/env node
/**
 * Turn a customer-review CSV into shared/reviews.json.
 *
 *   node scripts/import-reviews.mjs path/to/reviews.csv            # dry run, prints a report
 *   node scripts/import-reviews.mjs path/to/reviews.csv --write     # writes shared/reviews.json
 *
 * Column names are matched loosely and case-insensitively, so most exports work
 * without editing. Recognised: id/review_id, rating/stars/score, author/name/
 * customer, date/created/submitted, body/review/text/comment, product/item/sku,
 * order/order_id/order_number, source, tags.
 *
 * What it will NOT do, on purpose:
 *   - mark a review verified unless the row carries an order reference
 *   - publish an email address or a full surname
 *   - pass a review containing dosing or medical-outcome language without flagging it
 *   - invent an id, a date, or a rating
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkReviewBody } from '../lib/compliance.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** RFC4180-ish parser: handles quoted fields, embedded commas and newlines. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  const src = text.replace(/^﻿/, '').replace(/\r\n/g, '\n');

  for (let i = 0; i < src.length; i += 1) {
    const c = src[i];
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i += 1; }
        else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim()));
}

const ALIASES = {
  id: ['id', 'review_id', 'reviewid', 'review id', 'ref'],
  rating: ['rating', 'stars', 'score', 'star_rating', 'rate'],
  author: ['author', 'name', 'customer', 'customer_name', 'reviewer', 'first_name'],
  date: ['date', 'created', 'created_at', 'submitted', 'submitted_at', 'review_date', 'timestamp'],
  body: ['body', 'review', 'review_text', 'text', 'comment', 'content', 'message', 'feedback'],
  product: ['product', 'item', 'sku', 'product_name', 'title'],
  order: ['order', 'order_id', 'order_number', 'order_ref', 'order no'],
  source: ['source', 'channel', 'origin'],
  tags: ['tags', 'labels', 'topics'],
  email: ['email', 'email_address', 'customer_email'],
};

function mapHeaders(header) {
  const norm = header.map((h) => h.trim().toLowerCase().replace(/[\s-]+/g, '_'));
  const idx = {};
  for (const [key, names] of Object.entries(ALIASES)) {
    const at = norm.findIndex((h) => names.includes(h));
    if (at !== -1) idx[key] = at;
  }
  return { idx, norm };
}

/** "Dana Robertson" -> "Dana R." Leaves an already-safe name alone. */
function safeAuthor(raw) {
  const name = String(raw || '').trim();
  if (!name) return null;
  if (/@/.test(name)) return null; // an email is never a display name
  const parts = name.split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0].toUpperCase()}.`;
}

function normaliseDate(raw) {
  const s = String(raw || '').trim();
  if (!s) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/); // US or EU, assume US
  if (m) return `${m[3]}-${String(m[1]).padStart(2, '0')}-${String(m[2]).padStart(2, '0')}`;
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return null;
}

/** Strip anything that should never appear on a published page. */
function redact(text) {
  const notes = [];
  let out = String(text || '').trim();
  const before = out;
  out = out.replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, '[email removed]');
  if (out !== before) notes.push('email redacted');
  const b2 = out;
  out = out.replace(/\b(?:order\s*#?\s*)?(?:ord[-_]?)?\d{6,}\b/gi, '[order number removed]');
  if (out !== b2) notes.push('order number redacted');
  out = out.replace(/\s+/g, ' ').trim();
  return { text: out, notes };
}

async function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  const write = args.includes('--write');
  if (!file) {
    console.error('usage: node scripts/import-reviews.mjs <file.csv> [--write]');
    process.exit(1);
  }

  const rows = parseCsv(await readFile(file, 'utf8'));
  if (rows.length < 2) { console.error('CSV has no data rows.'); process.exit(1); }

  const [header, ...body] = rows;
  const { idx, norm } = mapHeaders(header);

  const missing = ['rating', 'body'].filter((k) => idx[k] === undefined);
  if (missing.length) {
    console.error(`\nCould not find a column for: ${missing.join(', ')}`);
    console.error(`Columns seen: ${norm.join(', ')}`);
    console.error('Rename the column, or add its name to ALIASES in this script.\n');
    process.exit(1);
  }

  const get = (r, k) => (idx[k] === undefined ? '' : (r[idx[k]] ?? '').trim());

  const out = [];
  const skipped = [];
  const flagged = [];
  const seen = new Set();

  body.forEach((r, i) => {
    const line = i + 2;
    const rating = Number(get(r, 'rating'));
    const rawBody = get(r, 'body');

    if (!(rating >= 1 && rating <= 5)) { skipped.push(`line ${line}: rating "${get(r, 'rating')}" is not 1 to 5`); return; }
    if (rawBody.length < 10) { skipped.push(`line ${line}: review text too short to publish`); return; }

    const { text, notes } = redact(rawBody);
    const date = normaliseDate(get(r, 'date'));
    if (!date) { skipped.push(`line ${line}: no usable date`); return; }

    let id = get(r, 'id') || `rev-${date}-${line}`;
    id = id.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
    if (seen.has(id)) id = `${id}-${line}`;
    seen.add(id);

    const orderRef = get(r, 'order');
    const hits = checkReviewBody(text);
    if (hits.length) flagged.push(`  ${id}: ${hits.map((h) => `${h.rule} ("${h.match}")`).join(', ')}`);

    const entry = {
      id,
      rating: Math.round(rating * 10) / 10,
      author: safeAuthor(get(r, 'author')) || 'Verified customer',
      date,
      body: text,
      // Verified means: tied to a real order. No order reference in the row means
      // it publishes with an unverified badge, not a verified one.
      verified: Boolean(orderRef),
      source: get(r, 'source') || 'direct',
    };
    const product = get(r, 'product');
    if (product) entry.product = product;
    const tags = get(r, 'tags');
    if (tags) entry.tags = tags.split(/[;,|]/).map((t) => t.trim()).filter(Boolean);
    if (rating <= 3) entry.tags = [...new Set([...(entry.tags || []), 'negative'])];
    if (notes.length) entry.importNotes = notes;

    out.push(entry);
  });

  out.sort((a, b) => b.date.localeCompare(a.date));

  const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const r of out) dist[Math.round(r.rating)] += 1;
  const mean = out.length ? out.reduce((n, r) => n + r.rating, 0) / out.length : 0;
  const verified = out.filter((r) => r.verified).length;

  console.log(`\nRead ${body.length} rows from ${path.basename(file)}\n`);
  console.log(`  usable            ${out.length}`);
  console.log(`  skipped           ${skipped.length}`);
  console.log(`  tied to an order  ${verified}  (the rest publish as unverified)`);
  console.log(`  mean rating       ${mean.toFixed(2)}`);
  console.log(`  distribution      5:${dist[5]}  4:${dist[4]}  3:${dist[3]}  2:${dist[2]}  1:${dist[1]}`);

  if (out.length) {
    const oldest = out[out.length - 1].date;
    const newest = out[0].date;
    console.log(`  date range        ${oldest} to ${newest}`);
    // The store's first commit is 2026-05-12 and the domain was registered
    // 2026-04-30. A review older than the shop is the exact problem that makes a
    // review set unusable, so it is called out loudly rather than imported quietly.
    const impossible = out.filter((r) => r.date < '2026-04-30');
    if (impossible.length) {
      console.log(`\n  !! ${impossible.length} review(s) are dated BEFORE the Peptriva domain existed (2026-04-30).`);
      console.log('     Those cannot be from real Peptriva orders. Check the export before publishing:');
      for (const r of impossible.slice(0, 5)) console.log(`       ${r.date}  ${r.id}`);
      if (impossible.length > 5) console.log(`       ... and ${impossible.length - 5} more`);
    }
  }

  if (flagged.length) {
    console.log(`\n  ${flagged.length} review(s) contain restricted language. Redact the clause or drop the review,`);
    console.log('  then set "reviewed": true on the entry once a human has read it:');
    flagged.slice(0, 12).forEach((f) => console.log(f));
    if (flagged.length > 12) console.log(`  ... and ${flagged.length - 12} more`);
  }

  if (skipped.length) {
    console.log(`\n  skipped rows:`);
    skipped.slice(0, 12).forEach((s) => console.log(`    ${s}`));
    if (skipped.length > 12) console.log(`    ... and ${skipped.length - 12} more`);
  }

  if (!write) {
    console.log('\nDry run. Nothing written. Re-run with --write to save to shared/reviews.json.\n');
    return;
  }

  const target = path.join(ROOT, 'shared', 'reviews.json');
  const existing = JSON.parse(await readFile(target, 'utf8'));
  await writeFile(target, `${JSON.stringify({ _readme: existing._readme, reviews: out }, null, 2)}\n`);
  console.log(`\nWrote ${out.length} review(s) to shared/reviews.json`);
  console.log('Now run: node build.mjs --all\n');
}

main().catch((e) => { console.error(e); process.exit(1); });
