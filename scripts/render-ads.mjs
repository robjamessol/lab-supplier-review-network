#!/usr/bin/env node
/**
 * Renders the sidebar ad creatives in shared/assets/ads/.
 *
 * WHY THIS FILE EXISTS. The two creatives shipped on 2026-09-15 (d7380c9) were
 * produced by something that was never committed, so the offer baked into
 * peptriva-welcome25.png could not be changed without redrawing it by hand.
 * The newsroom has the same problem in a worse form: content/sponsor.json there
 * points at `tools/ad-creatives/render-np-rail.mjs` in the peptriva repo, and
 * that file does not exist in any repo. An ad whose source is lost is an ad
 * that goes stale the first time an offer moves, which is exactly what happened
 * here when the shared first-order code went from 25% to 10%.
 *
 * The creative is a 420x700 PNG for a 210x350 slot (2x). Copy comes from OFFER
 * below, so changing the rate and the code is a one-line edit plus a re-render.
 *
 * ⚡ The code and rate here must match SHARED_FIRST_ORDER_CODE and
 * SHARED_FIRST_ORDER_RATE in the peptriva repo
 * (apps/backend/src/lib/emails/first-order-offer.ts). They are duplicated
 * rather than imported because this is a separate repo with no dependency on
 * the store, and audit.mjs checks the rendered pages for a code that disagrees
 * with the one in lib/render.mjs.
 *
 *   node scripts/render-ads.mjs            # render all
 *   node scripts/render-ads.mjs --check    # fail if a creative is missing
 *
 * This repo has no dependencies of its own, so `playwright` has to be
 * resolvable when you render: either install it here, or point NODE_PATH at a
 * checkout that has it (the store repo does).
 */
import { chromium } from 'playwright';
import { mkdirSync, existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = `${ROOT}/shared/assets/ads`;

/** Where the store repo lives, for fonts and the wordmark. Override with STORE_REPO. */
const STORE = process.env.STORE_REPO || '/Users/rob/peptriva';
const SF = `${STORE}/apps/storefront/public`;

/**
 * Fonts and the wordmark are INLINED as data URIs, not linked with file://.
 * Playwright's setContent() serves an about:blank document, and a file:// URL
 * from that origin is blocked with no error — the first render of this script
 * came out in Times with a broken-image box where the wordmark should be, and
 * looked like a font-name typo rather than a security refusal.
 */
const b64 = (p) => readFileSync(p).toString('base64');
const font = (f) => `url(data:font/woff2;base64,${b64(`${SF}/assets/fonts/${f}`)}) format('woff2')`;
const WORDMARK = `data:image/svg+xml;base64,${b64(`${SF}/assets/brand/wordmark/peptriva-wordmark-white.svg`)}`;

/** The offer. One place. */
const OFFER = { rate: 10, code: 'WELCOME10' };

const C = { blurple: '#5C4DFF', halo: '#A3B9FF', navyTop: '#0A1B4A', navyBot: '#060F2E' };

const CSS = `
@font-face{font-family:'IT';src:${font('inter-tight-700.woff2')};font-weight:700}
@font-face{font-family:'IT';src:${font('inter-tight-600.woff2')};font-weight:600}
@font-face{font-family:'IN';src:${font('inter-600.woff2')};font-weight:600}
@font-face{font-family:'IN';src:${font('inter-500.woff2')};font-weight:500}
@font-face{font-family:'IN';src:${font('inter-400.woff2')};font-weight:400}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:420px;height:700px}
.c{width:420px;height:700px;position:relative;overflow:hidden;
   background:
     radial-gradient(ellipse 70% 50% at 20% 10%, rgba(92,77,255,.30), transparent 70%),
     linear-gradient(170deg, ${C.navyTop} 0%, ${C.navyBot} 100%);
   font-family:'IN',sans-serif;-webkit-font-smoothing:antialiased;
   padding:44px 36px 28px;display:flex;flex-direction:column}
.wm{width:168px;display:block;margin:0 0 8px}
.eyebrow{font-family:'IN';font-weight:600;font-size:12.5px;letter-spacing:.16em;
         text-transform:uppercase;color:${C.halo};margin:0 0 36px}
.h1{font-family:'IT';font-weight:700;font-size:42px;line-height:1.06;letter-spacing:-.02em;
    color:#fff;margin:0 0 18px;max-width:262px}
.sub{font-family:'IN';font-weight:500;font-size:15.5px;line-height:1.45;color:#E4E9F7;margin:0 0 30px}
.rows{display:flex;flex-direction:column;gap:15px;margin:0 0 auto}
.row{display:flex;align-items:center;gap:13px}
.tick{width:22px;height:22px;border-radius:999px;background:${C.blurple};
      display:flex;align-items:center;justify-content:center;flex:0 0 22px}
.tick svg{width:12px;height:12px}
.rowt{font-family:'IN';font-weight:500;font-size:15px;color:#EDF1FB;line-height:1.3}
.cta{display:flex;align-items:center;justify-content:center;height:58px;border-radius:999px;
     background:#fff;color:#0B1230;font-family:'IT';font-weight:700;font-size:18px;
     letter-spacing:-.01em;margin:0 0 18px}
.ruo{font-family:'IN';font-weight:400;font-size:11px;line-height:1.45;color:#96A6CF;text-align:center}
`;

const tick = `<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4"
  stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>`;

const row = (t) => `<div class="row">${tick}<span class="rowt">${t}</span></div>`;

/**
 * The offer creative. Every claim on it is one the store's own guards enforce:
 * the code auto-applies (cart-store banks it from ?promo_code=), it is
 * first-order only (Guard 1 refuses it once a person has ordered), and the RUO
 * line is the same sentence the storefront footer carries.
 */
const offerAd = () => `<div class="c">
  <img class="wm" src="${WORDMARK}" alt="">
  <p class="eyebrow">Research peptides</p>
  <h1 class="h1">${OFFER.rate}% off your first order</h1>
  <p class="sub">Code ${OFFER.code} for new customers.</p>
  <div class="rows">
    ${row('Applies at checkout automatically')}
    ${row('First order only')}
    ${row('Shop research peptides')}
  </div>
  <div class="cta">Shop with ${OFFER.code} &rarr;</div>
  <p class="ruo">Research use only. Not for human or veterinary use.</p>
</div>`;

const CREATIVES = { [`peptriva-welcome${OFFER.rate}.png`]: offerAd() };

if (process.argv.includes('--check')) {
  const missing = Object.keys(CREATIVES).filter((f) => !existsSync(`${OUT}/${f}`));
  if (missing.length) {
    console.error(`render-ads: missing creative(s): ${missing.join(', ')} — run node scripts/render-ads.mjs`);
    process.exit(1);
  }
  console.log(`render-ads: OK — ${Object.keys(CREATIVES).length} creative(s) present`);
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 420, height: 700 }, deviceScaleFactor: 1 });
for (const [file, body] of Object.entries(CREATIVES)) {
  await page.setContent(`<style>${CSS}</style>${body}`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/${file}` });
  console.log(`  rendered ${file}`);
}
await browser.close();
console.log(`render-ads: done — ${OUT}`);
