// Editorial hero plates, drawn rather than photographed.
//
// The network this copies runs a generated cinematic photograph at the top of
// every page, described in its own alt text as an "editorial plate": a KPI tile
// array, a rubric scorecard, a cover still. Photographs of a laboratory Peptriva
// does not own would be set dressing, so these are diagrams of the thing the page
// actually argues, built from the page's own numbers.

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const W = 1216;
const H = 400;

function frame(inner, { accent, ground, h = H }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" role="img" width="${W}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity=".055"/>
      <stop offset="1" stop-color="${accent}" stop-opacity=".012"/>
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${accent}" stroke-opacity=".07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${h}" fill="${ground}"/>
  <rect width="${W}" height="${h}" fill="url(#grid)"/>
  <rect width="${W}" height="${h}" fill="url(#g)"/>
  ${inner}
</svg>`;
}

/** A row of certificate cards, one per lot, height keyed to purity. */
function ledgerPlate({ accent, ground, ink, lots }) {
  const n = lots.length;
  const gap = 18;
  const pad = 64;
  const cw = (W - pad * 2 - gap * (n - 1)) / n;
  const baseY = H - 74;

  const cards = lots
    .map((l, i) => {
      const x = pad + i * (cw + gap);
      // 99.50 to 100.00 mapped across the available height, so real differences
      // between lots stay visible without exaggerating them.
      const t = Math.max(0, Math.min(1, (l.purity - 99.5) / 0.5));
      const h = 66 + t * 158;
      const y = baseY - h;
      return `<g>
    <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cw.toFixed(1)}" height="${h.toFixed(1)}" fill="#fff" stroke="${accent}" stroke-opacity=".28"/>
    <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cw.toFixed(1)}" height="4" fill="${accent}"/>
    <text x="${(x + cw / 2).toFixed(1)}" y="${(y + 30).toFixed(1)}" text-anchor="middle" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="${ink}">${l.purity.toFixed(2)}</text>
    <text x="${(x + cw / 2).toFixed(1)}" y="${(baseY + 20).toFixed(1)}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" font-weight="600" fill="${ink}" fill-opacity=".62">${esc(l.short)}</text>
  </g>`;
    })
    .join('\n');

  return frame(
    `<line x1="${pad}" y1="${baseY}" x2="${W - pad}" y2="${baseY}" stroke="${accent}" stroke-opacity=".4"/>
  ${cards}
  <text x="${pad}" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="${accent}">PURITY BY LOT, INDEPENDENT CERTIFICATE, HPLC-UV AREA PERCENT</text>`,
    { accent, ground }
  );
}

/** Two gates in series, the release condition drawn as an AND. */
function gatePlate({ accent, ground, ink }) {
  const h = 292;
  const y = 158;
  const box = (x, t1, t2, filled) => `<g>
    <rect x="${x}" y="${y - 46}" width="228" height="92" fill="${filled ? accent : '#fff'}" stroke="${accent}" stroke-opacity=".45"/>
    <text x="${x + 114}" y="${y - 10}" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${filled ? '#fff' : ink}">${esc(t1)}</text>
    <text x="${x + 114}" y="${y + 14}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" fill="${filled ? '#fff' : ink}" fill-opacity="${filled ? '.85' : '.62'}">${esc(t2)}</text>
  </g>`;
  const arrow = (x) =>
    `<path d="M${x} ${y}H${x + 52}m-9 -6 9 6 -9 6" fill="none" stroke="${accent}" stroke-opacity=".55" stroke-width="1.5"/>`;

  return frame(
    `${box(64, 'Production certificate', 'held on file')}
  ${arrow(292)}
  ${box(344, 'Independent certificate', 'published on the ledger')}
  ${arrow(572)}
  <g>
    <circle cx="678" cy="${y}" r="30" fill="#fff" stroke="${accent}" stroke-opacity=".45"/>
    <text x="678" y="${y + 5}" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${accent}">AND</text>
  </g>
  ${arrow(708)}
  ${box(760, 'Sellable stock', 'the lot can be bought', true)}
  <text x="64" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="${accent}">THE RELEASE CONDITION, ENFORCED IN THE ORDER SYSTEM</text>
  <text x="64" y="${h - 34}" font-family="ui-monospace, Menlo, monospace" font-size="12.5" fill="${ink}" fill-opacity=".6">lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()</text>`,
    { accent, ground, h }
  );
}

/** Four weighted categories as proportional bars. */
function rubricPlate({ accent, ground, ink, rows, composite }) {
  const pad = 64;
  const top = 96;
  const rowH = 58;
  const barX = 300;
  const barW = W - barX - pad - 150;

  const bars = rows
    .map((r, i) => {
      const y = top + i * rowH;
      const w = (r.score / 100) * barW;
      return `<g>
    <text x="${pad}" y="${y + 16}" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${ink}">${esc(r.name)}</text>
    <text x="${pad}" y="${y + 34}" font-family="Inter, sans-serif" font-size="11" fill="${ink}" fill-opacity=".55">weight ${r.weight}</text>
    <rect x="${barX}" y="${y + 2}" width="${barW}" height="26" fill="${accent}" fill-opacity=".09"/>
    <rect x="${barX}" y="${y + 2}" width="${w.toFixed(1)}" height="26" fill="${accent}" fill-opacity="${0.35 + (r.weight / 100) * 1.4}"/>
    <text x="${(barX + barW + 16).toFixed(1)}" y="${y + 21}" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${ink}">${r.score}</text>
    <text x="${(barX + barW + 52).toFixed(1)}" y="${y + 21}" font-family="Inter, sans-serif" font-size="11" fill="${ink}" fill-opacity=".5">/ 100</text>
  </g>`;
    })
    .join('\n');

  return frame(
    `<text x="${pad}" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="${accent}">FOUR WEIGHTED CATEGORIES, ONE HUNDRED POINTS</text>
  ${bars}
  <g>
    <text x="${W - pad}" y="62" text-anchor="end" font-family="Inter, sans-serif" font-size="34" font-weight="800" fill="${accent}">${composite}</text>
    <text x="${W - pad}" y="80" text-anchor="end" font-family="Inter, sans-serif" font-size="10.5" font-weight="600" letter-spacing="1.2" fill="${ink}" fill-opacity=".55">WEIGHTED COMPOSITE</text>
  </g>`,
    { accent, ground }
  );
}

/** Evidence layers, ranked by how checkable each one is. */
function layersPlate({ accent, ground, ink, layers }) {
  const pad = 64;
  const top = 92;
  const rowH = 62;
  return frame(
    `<text x="${pad}" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="${accent}">FOUR EVIDENCE LAYERS, ORDERED BY HOW CHECKABLE EACH ONE IS</text>
  ${layers
    .map((l, i) => {
      const y = top + i * rowH;
      const w = 300 + (layers.length - i) * 190;
      return `<g>
    <rect x="${pad}" y="${y}" width="${Math.min(w, W - pad * 2)}" height="46" fill="#fff" stroke="${accent}" stroke-opacity=".3"/>
    <rect x="${pad}" y="${y}" width="4" height="46" fill="${accent}" fill-opacity="${1 - i * 0.22}"/>
    <text x="${pad + 20}" y="${y + 28}" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${ink}">${esc(l.name)}</text>
    <text x="${Math.min(w, W - pad * 2) + pad - 18}" y="${y + 28}" text-anchor="end" font-family="Inter, sans-serif" font-size="11.5" fill="${ink}" fill-opacity=".6">${esc(l.note)}</text>
  </g>`;
    })
    .join('\n')}`,
    { accent, ground }
  );
}

/** The publication rules of a review record, as a stack of plates. */
function dossierPlate({ accent, ground, ink, rules }) {
  const pad = 64;
  return frame(
    `<text x="${pad}" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="${accent}">THE STANDING RULES OF PUBLICATION</text>
  ${rules
    .map((r, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const cw = (W - pad * 2 - 40) / 3;
      const x = pad + col * (cw + 20);
      const y = 92 + row * 132;
      return `<g>
    <rect x="${x.toFixed(1)}" y="${y}" width="${cw.toFixed(1)}" height="112" fill="#fff" stroke="${accent}" stroke-opacity=".3"/>
    <rect x="${x.toFixed(1)}" y="${y}" width="${cw.toFixed(1)}" height="3" fill="${accent}"/>
    <text x="${(x + 18).toFixed(1)}" y="${y + 40}" font-family="Inter, sans-serif" font-size="13.5" font-weight="700" fill="${ink}">${esc(r.t)}</text>
    <text x="${(x + 18).toFixed(1)}" y="${y + 66}" font-family="Inter, sans-serif" font-size="11.5" fill="${ink}" fill-opacity=".6">${esc(r.a)}</text>
    <text x="${(x + 18).toFixed(1)}" y="${y + 86}" font-family="Inter, sans-serif" font-size="11.5" fill="${ink}" fill-opacity=".6">${esc(r.b)}</text>
  </g>`;
    })
    .join('\n')}`,
    { accent, ground }
  );
}

export const PLATES = { ledgerPlate, gatePlate, rubricPlate, layersPlate, dossierPlate };

export function renderPlate(name, opts) {
  const fn = PLATES[name];
  if (!fn) throw new Error(`Unknown hero plate "${name}"`);
  return fn(opts);
}
