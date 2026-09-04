// The shared editorial design system.
// Structure follows the reference network (magazine register, typography-led,
// no chrome); the palette is Peptriva's deep blue rather than the reference crimson.

export const PALETTES = {
  // Primary: deep royal blue on cool paper. The house look.
  royal: {
    accent: '#1B3A6B',
    accentSoft: '#2F5490',
    eyebrowBg: '#12294D',
  },
  // Ratings site: same family, warmer paper ground to separate it visually.
  slate: {
    accent: '#1F3D63',
    accentSoft: '#33567F',
    eyebrowBg: '#16304F',
  },
};

export function styles({ palette = 'royal', paper = '#F2F3F5' } = {}) {
  const p = PALETTES[palette] || PALETTES.royal;
  return `
:root {
  --ink: #17181B;
  --ink-strong: #0A0A0A;
  --ink-soft: #555B64;
  --ink-faint: #767D88;
  --paper: ${paper};
  --card: #FFFFFF;
  --rule: #C9CCD3;
  --rule-soft: #E4E7EC;
  --accent: ${p.accent};
  --accent-soft: ${p.accentSoft};
  --eyebrow-bg: ${p.eyebrowBg};
  --pos: #1F5C3D;
  --warn: #7A5A12;
  --neg: #7E1A12;
  --container: 85.5rem;
  --measure: 70ch;
  --gutter: clamp(1.286rem, 4vw, 3.058rem);
  --font-display: 'Inter Display', Inter, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
  --font-body: Inter, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;
  --h1: clamp(2.376rem, 6.5vw, 4.4rem);
  --h2: clamp(1.72rem, 3.6vw, 2.643rem);
  --h3: clamp(1.286rem, 2.2vw, 1.605rem);
  --body: 1.05rem;
  --small: 0.846rem;
  --lh-tight: 1.06;
  --lh-body: 1.58;
}

*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  font-size: var(--body);
  line-height: var(--lh-body);
  color: var(--ink);
  background: var(--paper);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: var(--lh-tight);
  font-weight: 700;
  color: var(--ink-strong);
  text-wrap: balance;
}
h1 { font-size: var(--h1); letter-spacing: -0.022em; }
h2 { font-size: var(--h2); letter-spacing: -0.014em; margin-top: 2.376rem; margin-bottom: 0.76rem; }
h3 { font-size: var(--h3); margin-top: 1.72rem; margin-bottom: 0.478rem; }
p { margin-bottom: 0.953rem; }
a { color: var(--accent); text-underline-offset: 2px; }
ul, ol { margin: 0 0 0.953rem 1.286rem; }
li { margin-bottom: 0.4rem; }
strong { font-weight: 700; color: var(--ink-strong); }
hr { border: 0; border-top: 1px solid var(--rule); margin: 2.4rem 0; }
img { max-width: 100%; height: auto; display: block; }
code {
  font-family: var(--font-mono); font-size: 0.9em;
  background: rgba(27,58,107,0.07); border: 1px solid rgba(27,58,107,0.16);
  border-radius: 4px; padding: 0.1em 0.35em;
}
blockquote {
  border-left: 3px solid var(--accent);
  padding-left: 1.1rem; color: var(--ink-soft); margin: 0 0 0.953rem;
  font-size: 1.06rem;
}
.container { width: 100%; max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter); }
.skip { position: absolute; left: -999px; }
.skip:focus { left: 0.953rem; top: 0.953rem; background: #fff; padding: 0.5rem 1rem; z-index: 100; }
sup.cite a { text-decoration: none; color: var(--accent); font-weight: 600; font-size: 0.72em; padding-left: 1px; }
sup.cite a:hover { text-decoration: underline; }

/* ---------- Masthead ---------- */
/* The disclosure bar is deliberately not small print. 16 CFR 465.1 requires a
   material-relationship disclosure to be unavoidable and actually noticeable, and
   a footer line does not meet that bar. */
.eyebrow-bar { background: var(--eyebrow-bg); color: #FFFFFF; }
.eyebrow-bar p { margin: 0; padding: 0.62rem 0; font-size: 0.92rem; font-weight: 600; line-height: 1.4; letter-spacing: 0.002em; }

/* Above-the-fold restatement, in the reading column, in body-copy size. */
.publisher-note {
  border: 1px solid var(--rule);
  border-left: 4px solid var(--accent);
  background: var(--paper);
  padding: 0.95rem 1.15rem;
  margin-top: 1.6rem;
  max-width: 64ch;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink);
}
.publisher-note strong { color: var(--ink-strong); }
.masthead { background: var(--card); border-bottom: 1px solid var(--rule); position: sticky; top: 0; z-index: 40; }
.masthead .container { display: flex; align-items: center; justify-content: space-between; gap: 1rem; min-height: 4.1rem; }
.wordmark { font-family: var(--font-display); font-weight: 800; font-size: 1.16rem; color: var(--ink-strong); text-decoration: none; letter-spacing: -0.02em; }
.wordmark span { color: var(--accent); }
.nav-toggle { display: none; background: none; border: 1px solid var(--rule); border-radius: 4px; font-size: 1.2rem; line-height: 1; padding: 0.4rem 0.6rem; cursor: pointer; color: var(--ink); }
.nav ul { display: flex; gap: 1.35rem; list-style: none; margin: 0; padding: 0; }
.nav a { color: var(--ink); text-decoration: none; font-size: 0.9rem; font-weight: 500; padding: 0.35rem 0; border-bottom: 2px solid transparent; }
.nav a:hover, .nav a[aria-current="page"] { border-bottom-color: var(--accent); color: var(--accent); }

/* ---------- Cover ---------- */
.cover { background: var(--card); border-bottom: 1px solid var(--rule); padding: clamp(2.4rem, 6vw, 4.4rem) 0 clamp(2rem, 4vw, 3rem); }
.cover .container { display: grid; gap: clamp(1.6rem, 4vw, 3.2rem); align-items: start; }
/* Two-column magazine cover: the read on the left, the fact box on the right. */
.cover .container:has(.cover-side) { grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr); }
.cover-side { display: grid; gap: 1.1rem; align-content: start; }
/* Stacked in the sidebar, the stat strip reads as a fact box rather than a row. */
.cover-side .stat-strip { grid-template-columns: 1fr; width: 100%; margin-inline: 0; }
.cover-side .stat { border-right: 0; border-bottom: 1px solid var(--rule-soft); padding: 0.72rem 1.05rem; display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; }
.cover-side .stat:last-child { border-bottom: 0; }
.cover-side .stat dt { margin-bottom: 0; }
.cover-side .stat dd { font-size: 1.02rem; text-align: right; }
.cover-side .verdict-card { max-width: none; }
.kicker { font-size: 0.76rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--accent); margin-bottom: 0.9rem; }
.standfirst { font-size: clamp(1.08rem, 1.7vw, 1.33rem); color: var(--ink-soft); max-width: 62ch; line-height: 1.5; margin-top: 1.1rem; }
.cta-row { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 1.6rem; }
.btn { display: inline-block; padding: 0.72rem 1.4rem; font-size: 0.92rem; font-weight: 600; text-decoration: none; border-radius: 3px; border: 1px solid var(--accent); transition: background .15s, color .15s; }
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-soft); }
.btn-secondary { background: transparent; color: var(--accent); }
.btn-secondary:hover { background: rgba(27,58,107,0.06); }

/* Verdict / score card */
.verdict-card { border: 1px solid var(--rule); border-top: 4px solid var(--accent); background: var(--paper); padding: 1.5rem 1.6rem; max-width: 33rem; }
.verdict-label { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700; color: var(--ink-faint); margin-bottom: 0.5rem; }
.verdict-score { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 4.2rem); font-weight: 800; line-height: 0.95; color: var(--ink-strong); letter-spacing: -0.03em; }
.verdict-score .of { font-size: 0.34em; font-weight: 600; color: var(--ink-faint); margin-left: 0.35rem; letter-spacing: 0; }
.verdict-band { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--accent); margin: 0.35rem 0 0.6rem; }
.verdict-note { font-size: 0.92rem; color: var(--ink-soft); margin: 0; line-height: 1.5; }

/* Stat strip */
.stat-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(9.5rem, 1fr)); gap: 0; border: 1px solid var(--rule); background: var(--card); margin: 0; }
.stat { padding: 1rem 1.1rem; border-right: 1px solid var(--rule-soft); }
.stat:last-child { border-right: 0; }
.stat dt { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; color: var(--ink-faint); margin-bottom: 0.3rem; }
.stat dd { margin: 0; font-family: var(--font-display); font-size: 1.16rem; font-weight: 700; color: var(--ink-strong); line-height: 1.2; }
.stat dd .weight { display: block; font-family: var(--font-body); font-size: 0.72rem; font-weight: 500; color: var(--ink-faint); margin-top: 0.15rem; }

.cover-figure { margin: 0; border-top: 1px solid var(--rule); }
.cover-figure img { width: 100%; }

/* ---------- Prose ---------- */
.prose { padding: clamp(2rem, 5vw, 3.4rem) 0 clamp(2.6rem, 6vw, 4.4rem); }
.prose .container > section,
.prose .container > p,
.prose .container > ul,
.prose .container > ol,
.prose .container > blockquote,
.prose .container > hr { max-width: var(--measure); margin-inline: auto; }
.prose section { scroll-margin-top: 5.5rem; }

/* Prose holds a 70ch measure. The breakout rule that lets data blocks escape it
   lives at the end of the sheet, after the component rules it has to beat. */
.prose section > h2:first-child { margin-top: 0; }
.prose section + section { margin-top: 2.6rem; }

/* Callout */
.callout { border: 1px solid var(--rule); border-left: 4px solid var(--accent); background: var(--card); padding: 1.15rem 1.35rem; margin: 1.7rem 0; max-width: var(--measure); }
.callout-title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; color: var(--ink-strong); }
.callout p:last-child { margin-bottom: 0; }
.callout-note { font-size: 0.85rem; color: var(--ink-faint); }
.callout code { background: rgba(27,58,107,0.1); font-weight: 600; }

/* Score meter */
.score-list { list-style: none; margin: 1.6rem 0; padding: 0; max-width: var(--measure); }
.score-row { border-top: 1px solid var(--rule); padding: 1rem 0; }
.score-row:last-child { border-bottom: 1px solid var(--rule); }
.score-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; }
.score-name { font-family: var(--font-display); font-weight: 700; font-size: 1.03rem; }
.score-name .weight { font-family: var(--font-body); font-weight: 500; font-size: 0.8rem; color: var(--ink-faint); margin-left: 0.5rem; }
.score-value { font-family: var(--font-display); font-weight: 800; font-size: 1.35rem; color: var(--ink-strong); }
.score-value .of { font-size: 0.62em; color: var(--ink-faint); font-weight: 600; }
.meter { height: 6px; background: var(--rule-soft); margin-top: 0.6rem; overflow: hidden; }
.meter span { display: block; height: 100%; background: var(--accent); }
.score-note { font-size: 0.9rem; color: var(--ink-soft); margin: 0.55rem 0 0; }

/* Reviews */
.reviews { margin: 1.8rem 0; max-width: var(--measure); display: grid; gap: 1rem; }
.review { background: var(--card); border: 1px solid var(--rule); padding: 1.15rem 1.3rem; }
.review-head { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
.stars { color: var(--accent); font-size: 0.95rem; letter-spacing: 0.06em; }
.review-author { font-weight: 700; font-size: 0.94rem; }
.review-meta { font-size: 0.8rem; color: var(--ink-faint); }
.badge { font-size: 0.68rem; letter-spacing: 0.07em; text-transform: uppercase; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 2px; }
.badge-verified { background: rgba(31,92,61,0.1); color: var(--pos); border: 1px solid rgba(31,92,61,0.28); }
.badge-unverified { background: rgba(118,125,136,0.1); color: var(--ink-faint); border: 1px solid var(--rule); }
.review-body { margin: 0; font-size: 0.98rem; line-height: 1.55; }
.review-product { font-size: 0.82rem; color: var(--ink-faint); margin: 0.5rem 0 0; }

.rating-summary { background: var(--card); border: 1px solid var(--rule); border-top: 4px solid var(--accent); padding: 1.4rem 1.5rem; margin: 1.8rem 0; max-width: var(--measure); display: grid; grid-template-columns: auto 1fr; gap: 1.6rem; align-items: center; }
.rating-big { font-family: var(--font-display); font-size: 3.2rem; font-weight: 800; line-height: 1; letter-spacing: -0.03em; }
.rating-big .of { font-size: 0.3em; color: var(--ink-faint); font-weight: 600; }
.dist-row { display: flex; align-items: center; gap: 0.6rem; font-size: 0.82rem; margin-bottom: 0.25rem; }
.dist-label { width: 3.1rem; color: var(--ink-faint); flex: none; }
.dist-bar { flex: 1; height: 8px; background: var(--rule-soft); overflow: hidden; }
.dist-bar span { display: block; height: 100%; background: var(--accent); }
.dist-count { width: 2.4rem; text-align: right; color: var(--ink-faint); flex: none; }

/* Section index cards */
.index-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.8rem 0; }
.index-card { background: var(--card); padding: 1.2rem 1.3rem; text-decoration: none; color: inherit; display: block; }
.index-card:hover { background: #FAFBFC; }
.index-card h3 { margin: 0 0 0.35rem; font-size: 1.02rem; }
.index-card p { margin: 0; font-size: 0.88rem; color: var(--ink-soft); line-height: 1.5; }
.index-card .arrow { color: var(--accent); font-weight: 700; }

/* Tables */
.table-scroll { overflow-x: auto; margin: 1.4rem 0; max-width: var(--measure); }
table { border-collapse: collapse; width: 100%; font-size: 0.92rem; background: var(--card); }
th, td { text-align: left; padding: 0.62rem 0.8rem; border-bottom: 1px solid var(--rule-soft); vertical-align: top; }
th { font-family: var(--font-display); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-faint); border-bottom: 1px solid var(--rule); }
tbody tr:last-child td { border-bottom: 0; }

/* FAQ */
.faq-item { border-top: 1px solid var(--rule); padding: 1.2rem 0; max-width: var(--measure); }
.faq-item:last-of-type { border-bottom: 1px solid var(--rule); }
.faq-item h3 { margin: 0 0 0.45rem; font-size: 1.06rem; }
.faq-item p:last-child { margin-bottom: 0; }

/* References */
.ref-list { list-style: none; margin: 1.6rem 0; padding: 0; max-width: var(--measure); counter-reset: none; }
.ref-item { border-top: 1px solid var(--rule); padding: 0.95rem 0 0.95rem 2.6rem; position: relative; scroll-margin-top: 5.5rem; }
.ref-item:last-child { border-bottom: 1px solid var(--rule); }
.ref-num { position: absolute; left: 0; top: 0.95rem; font-family: var(--font-display); font-weight: 800; color: var(--accent); font-size: 0.95rem; }
.ref-item:target { background: rgba(27,58,107,0.05); }
.ref-cite { font-size: 0.94rem; line-height: 1.55; margin: 0; }
.ref-url { font-size: 0.82rem; word-break: break-all; margin: 0.3rem 0 0; }

/* Footer */
.site-footer { background: var(--eyebrow-bg); color: #D8DFE9; padding: 2.8rem 0 2rem; margin-top: 3rem; }
.site-footer a { color: #EDF1F7; text-decoration: none; }
.site-footer a:hover { text-decoration: underline; }
.footer-top { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr); gap: 2rem; padding-bottom: 1.8rem; border-bottom: 1px solid rgba(255,255,255,0.16); }
.footer-blurb { font-size: 0.92rem; line-height: 1.55; color: #B9C4D3; max-width: 40ch; }
.footer-nav { display: grid; grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); gap: 1.4rem; }
.footer-col { display: flex; flex-direction: column; gap: 0.42rem; }
.footer-col-title { font-size: 0.7rem; letter-spacing: 0.13em; text-transform: uppercase; font-weight: 700; color: #8A99AD; margin-bottom: 0.2rem; }
.footer-col a { font-size: 0.88rem; }
.disclosure { margin-top: 1.6rem; font-size: 0.86rem; line-height: 1.6; color: #B9C4D3; max-width: 78ch; }
.disclosure strong { color: #fff; }
.colophon { margin-top: 1.4rem; font-size: 0.78rem; color: #8A99AD; }

/* ---------- Measure breakout ----------
   Prose runs at a 70ch measure; blocks that are data rather than reading escape
   it and re-centre on the full container. Must come after the component rules so
   it wins on equal specificity. Cancelled at narrow widths. */
.prose .stat-strip,
.prose .index-cards,
.prose .table-scroll {
  --breakout: min(calc(var(--container) - (2 * var(--gutter))), calc(100vw - (2 * var(--gutter))));
  width: var(--breakout);
  max-width: none;
  margin-inline: calc((100% - var(--breakout)) / 2);
}
.prose .table-scroll { margin-block: 1.6rem; }
.prose .stat-strip { margin-block: 1.8rem; }
.prose .index-cards { margin-block: 1.8rem; }

/* Tooltip */
.ref-tip { position: absolute; z-index: 60; max-width: 24rem; background: #fff; color: var(--ink); border: 1px solid var(--rule); box-shadow: 0 8px 28px rgba(10,15,25,0.16); padding: 0.75rem 0.9rem; font-size: 0.84rem; line-height: 1.5; border-radius: 3px; }
.ref-tip .ref-tip-url { display: block; margin-top: 0.35rem; font-size: 0.78rem; word-break: break-all; }

@media (max-width: 940px) {
  .cover .container:has(.cover-side) { grid-template-columns: 1fr; }
  .cover-side .stat-strip { grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); }
  .cover-side .stat { display: block; border-right: 1px solid var(--rule-soft); }
  .cover-side .stat dd { text-align: left; }
  .cover-side .stat dt { margin-bottom: 0.3rem; }
}
@media (max-width: 1100px) {
  .prose .stat-strip,
  .prose .index-cards,
  .prose .table-scroll { width: 100%; margin-inline: 0; max-width: var(--measure); }
}
@media (max-width: 860px) {
  .rating-summary { grid-template-columns: 1fr; gap: 1rem; }
  .footer-top { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .nav { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--card); border-bottom: 1px solid var(--rule); box-shadow: 0 10px 24px rgba(10,15,25,0.09); }
  .nav[data-open="true"] { display: block; }
  .nav ul { flex-direction: column; gap: 0; padding: 0.5rem var(--gutter) 1rem; }
  .nav a { display: block; padding: 0.6rem 0; border-bottom: 1px solid var(--rule-soft); }
  .masthead .container { position: relative; }
  .stat { border-right: 0; border-bottom: 1px solid var(--rule-soft); }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; animation: none !important; }
}
@media print {
  .masthead, .site-footer, .cta-row, .nav-toggle { display: none; }
  body { background: #fff; }
  /* The disclosure survives printing: it is the one thing that must not be lost. */
  .eyebrow-bar { background: none; color: #000; border-bottom: 1px solid #000; }
}
`.trim();
}
