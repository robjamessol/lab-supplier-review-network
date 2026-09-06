// ::: block components available inside page markdown.

import { esc, renderMarkdown, slugify } from './markdown.mjs';
import { rankingRows } from '../shared/vendors.mjs';

const STAR = '★';
const STAR_EMPTY = '☆';

export function stars(rating) {
  const full = Math.round(Number(rating) || 0);
  return STAR.repeat(Math.max(0, Math.min(5, full))) + STAR_EMPTY.repeat(Math.max(0, 5 - full));
}

/** Reviews are supplied by the owner in shared/reviews.json. Never invent one. */
export function selectReviews(all, { product, minRating, maxRating, limit, tag, ids, source } = {}) {
  let out = all.slice();
  if (ids?.length) {
    const set = new Set(ids);
    out = out.filter((r) => set.has(r.id));
  }
  if (source) out = out.filter((r) => (r.source || '') === source);
  if (product) out = out.filter((r) => (r.product || '').toLowerCase().includes(product.toLowerCase()));
  if (tag) out = out.filter((r) => (r.tags || []).includes(tag));
  if (minRating != null) out = out.filter((r) => r.rating >= minRating);
  if (maxRating != null) out = out.filter((r) => r.rating <= maxRating);
  out.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  if (limit) out = out.slice(0, limit);
  return out;
}

export function ratingStats(reviews) {
  const n = reviews.length;
  if (!n) return { count: 0, average: null, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sum = 0;
  for (const r of reviews) {
    const v = Math.round(Number(r.rating));
    sum += Number(r.rating);
    if (distribution[v] != null) distribution[v] += 1;
  }
  return { count: n, average: Math.round((sum / n) * 10) / 10, distribution };
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return esc(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/**
 * Plain-text counterparts of every component, for the markdown mirrors and
 * llms-full.txt. Keep these in step with makeComponents: a block with no plain
 * renderer silently disappears from the surfaces answer engines read.
 */
export function makePlainComponents({ reviews = [], site = {} } = {}) {
  const strip = (s) =>
    String(s ?? '')
      .replace(/\[\^(\d+)\]/g, (_, n) => ` [${n}]`)
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1 ($2)')
      .replace(/[*`]/g, '');

  return {
    verdict: (p) =>
      [
        `${p.label || 'Verdict'}: ${p.score} out of ${p.of ?? '5'}`,
        p.band ? `Band: ${p.band}` : '',
        p.note ? strip(p.note) : '',
      ]
        .filter(Boolean)
        .join('\n'),

    stats: (p) =>
      (p.items || [])
        .map(([label, value, weight]) => `- ${label}: ${value}${weight ? ` (${weight})` : ''}`)
        .join('\n'),

    callout: (p, body) => [p.title ? `${p.title}` : '', strip(body), p.note ? strip(p.note) : '']
      .filter(Boolean)
      .join('\n'),

    scores: (p) =>
      (p.rows || [])
        .map(
          (r) =>
            `- ${r.name}${r.weight ? ` (${r.weight} weight)` : ''}: ${r.score} of ${r.of ?? 100}.${
              r.note ? ` ${strip(r.note)}` : ''
            }`
        )
        .join('\n'),

    indexCards: (p) =>
      (p.cards || []).map((c) => `- ${c.title} (${c.href}): ${strip(c.text)}`).join('\n'),

    faq: (p) =>
      (p.items || []).map((it) => `Q. ${it.q}\nA. ${strip(it.a)}`).join('\n\n'),

    reviews: (p) => {
      const picked = selectReviews(reviews, p);
      if (!picked.length) return '';
      return picked
        .map(
          (r) =>
            `- ${r.rating} out of 5, ${r.author || 'verified customer'}${
              r.date ? `, ${r.date}` : ''
            }${
              r.source === 'google'
                ? ' (Google review)'
                : r.verified === false
                  ? ' (unverified)'
                  : ' (verified order)'
            }: ${strip(r.body)}${
              r.product ? ` [${r.product}]` : ''
            }${
              Array.isArray(r.images) && r.images.length
                ? ` [photos: ${r.images.join(', ')}]`
                : ''
            }`
        )
        .join('\n');
    },

    ratingSummary: (p) => {
      const s = ratingStats(selectReviews(reviews, p));
      if (!s.count) return '';
      const dist = [5, 4, 3, 2, 1].map((n) => `${n} star: ${s.distribution[n]}`).join(', ');
      return `Average rating ${s.average} out of 5 across ${s.count} review${
        s.count === 1 ? '' : 's'
      }. Distribution: ${dist}.`;
    },

    ctaBand: (p, body) =>
      [p.title || '', strip(body), ...(p.links || []).map((l) => `- ${l.label}: ${l.href}`)]
        .filter(Boolean)
        .join('\n'),

    references: () =>
      (site.references || [])
        .map((r, i) => `[${i + 1}] ${r.citation}${r.url ? ` ${r.url}` : ''}`)
        .join('\n'),

    vendorRank: (p) => {
      const scale = Number(p.scale) === 100 ? 100 : 5;
      const rows = rankingRows({ scale });
      return rows
        .map(
          (r) =>
            `${r.rank}. ${r.name}${r.featured ? ' (featured)' : ''}: ${r.score} / ${r.of} (${r.band}). ${strip(r.blurb)}`
        )
        .join('\n');
    },
  };
}

export function makeComponents({ reviews = [], site = {} } = {}) {
  return {
    /** Cover verdict / score card. */
    verdict(props) {
      const { label = 'Editorial verdict', score, of = '5', band = '', note = '' } = props;
      return `<div class="verdict-card">
  <p class="verdict-label">${esc(label)}</p>
  <p class="verdict-score">${esc(score)}<span class="of">/ ${esc(of)}</span></p>
  <p class="verdict-band">${esc(band)}</p>
  <p class="verdict-note">${esc(note)}</p>
</div>`;
    },

    /** Horizontal key-fact strip. props.items = [[label, value, weight?], ...] */
    stats(props) {
      const items = props.items || [];
      const cells = items
        .map(
          ([label, value, weight]) =>
            `<div class="stat"><dt>${esc(label)}</dt><dd>${esc(value)}${
              weight ? `<span class="weight">${esc(weight)}</span>` : ''
            }</dd></div>`
        )
        .join('');
      return `<dl class="stat-strip">${cells}</dl>`;
    },

    /** Editorial callout. Body is markdown. */
    callout(props, body, ctx) {
      const title = props.title ? `<p class="callout-title">${esc(props.title)}</p>` : '';
      const note = props.note ? `<p class="callout-note">${esc(props.note)}</p>` : '';
      return `<aside class="callout">${title}${renderMarkdown(body, ctx)}${note}</aside>`;
    },

    /** Weighted score rows with meters. props.rows = [{name, weight, score, of, note}] */
    scores(props) {
      const rows = (props.rows || [])
        .map((r) => {
          const of = r.of ?? 100;
          const pct = Math.max(0, Math.min(100, (Number(r.score) / Number(of)) * 100));
          return `<li class="score-row">
  <div class="score-head">
    <span class="score-name">${esc(r.name)}${r.weight ? `<span class="weight">${esc(r.weight)} weight</span>` : ''}</span>
    <span class="score-value">${esc(r.score)}<span class="of"> / ${esc(of)}</span></span>
  </div>
  <div class="meter" role="img" aria-label="${esc(r.score)} out of ${esc(of)}"><span style="width:${pct.toFixed(1)}%"></span></div>
  ${r.note ? `<p class="score-note">${esc(r.note)}</p>` : ''}
</li>`;
        })
        .join('');
      return `<ul class="score-list">${rows}</ul>`;
    },

    /** Owner-supplied customer reviews. Renders nothing if none match. */
    reviews(props, body, ctx) {
      const picked = selectReviews(reviews, props);
      if (!picked.length) {
        return `<!-- no reviews matched ${esc(JSON.stringify(props))} -->`;
      }
      ctx.renderedReviews = (ctx.renderedReviews || []).concat(picked);
      const cards = picked
        .map((r) => {
          const verified = r.verified !== false;
          const isGoogle = r.source === 'google';
          const badgeClass = isGoogle
            ? 'badge-google'
            : verified
              ? 'badge-verified'
              : 'badge-unverified';
          const badgeLabel = isGoogle ? 'Google review' : verified ? 'Verified order' : 'Unverified';
          const imgs = Array.isArray(r.images) ? r.images.filter(Boolean) : [];
          const gallery = imgs.length
            ? `<div class="review-gallery">${imgs
                .map(
                  (src) =>
                    `<figure class="review-photo"><img src="${esc(src)}" alt="Customer photo from Google review by ${esc(
                      r.author || 'verified customer'
                    )}" loading="lazy" decoding="async" width="640" height="480"></figure>`
                )
                .join('')}</div>`
            : '';
          return `<article class="review">
  <div class="review-head">
    <span class="stars" aria-label="${esc(r.rating)} out of 5">${stars(r.rating)}</span>
    <span class="review-author">${esc(r.author || 'Verified customer')}</span>
    <span class="badge ${badgeClass}">${badgeLabel}</span>
    ${r.date ? `<span class="review-meta">${fmtDate(r.date)}</span>` : ''}
  </div>
  <p class="review-body">${esc(r.body)}</p>
  ${gallery}
  ${r.product ? `<p class="review-product">Order: ${esc(r.product)}</p>` : ''}
</article>`;
        })
        .join('');
      return `<div class="reviews">${cards}</div>`;
    },

    /** Aggregate rating block with distribution bars. */
    ratingSummary(props, body, ctx) {
      const picked = selectReviews(reviews, props);
      const s = ratingStats(picked);
      if (!s.count) return '<!-- no reviews to summarise -->';
      ctx.aggregate = s;
      const rows = [5, 4, 3, 2, 1]
        .map((star) => {
          const c = s.distribution[star];
          const pct = s.count ? (c / s.count) * 100 : 0;
          return `<div class="dist-row"><span class="dist-label">${star} star</span><span class="dist-bar"><span style="width:${pct.toFixed(
            1
          )}%"></span></span><span class="dist-count">${c}</span></div>`;
        })
        .join('');
      return `<div class="rating-summary">
  <div>
    <p class="rating-big">${s.average}<span class="of">/5</span></p>
    <p class="verdict-label" style="margin-top:.4rem">${s.count} review${s.count === 1 ? '' : 's'}</p>
  </div>
  <div>${rows}</div>
</div>`;
    },

    /** Card grid linking to the site's other pages. props.cards = [{href,title,text}] */
    indexCards(props) {
      const cards = (props.cards || [])
        .map(
          (c) =>
            `<a class="index-card" href="${esc(c.href)}"><h3>${esc(c.title)} <span class="arrow">&rarr;</span></h3><p>${esc(
              c.text
            )}</p></a>`
        )
        .join('');
      return `<div class="index-cards">${cards}</div>`;
    },

    /** FAQ entries. Also feeds FAQPage schema via ctx.faq. */
    faq(props, body, ctx) {
      const items = props.items || [];
      ctx.faq = (ctx.faq || []).concat(items);
      return items
        .map(
          (it) =>
            `<div class="faq-item" id="${slugify(it.q)}"><h3>${esc(it.q)}</h3>${renderMarkdown(it.a, ctx)}</div>`
        )
        .join('');
    },

    /**
     * Closing call to action. Points at evidence (the ledger, the terms, the
     * catalogue) rather than at product pages: four owned domains pushing
     * commercial anchors at one store is the link-scheme half of the doorway risk.
     */
    ctaBand(props, body, ctx) {
      const links = (props.links || [])
        .map(
          (l, i) =>
            `<a class="btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}" href="${esc(l.href)}"${
              /^https?:/.test(l.href) ? ' rel="noopener"' : ''
            }>${esc(l.label)}</a>`
        )
        .join('');
      return `<aside class="cta-band">
  ${props.title ? `<p class="cta-band-title">${esc(props.title)}</p>` : ''}
  ${body.trim() ? renderMarkdown(body, ctx) : ''}
  ${links ? `<div class="cta-row">${links}</div>` : ''}
</aside>`;
    },


    /** Shared editorial vendor ranking from shared/vendors.mjs */
    vendorRank(props) {
      const scale = Number(props.scale) === 100 ? 100 : 5;
      const rows = rankingRows({ scale });
      const items = rows
        .map((r) => {
          const pct = Math.max(0, Math.min(100, (Number(r.score) / Number(r.of)) * 100));
          const shop = r.featured
            ? `<p class="vendor-shop"><a href="https://www.peptriva.com/" target="_blank" rel="noopener sponsored">Visit Peptriva</a>
  · <a href="https://www.peptriva.com/?promo_code=WELCOME25" target="_blank" rel="noopener sponsored">25% off with WELCOME25</a></p>`
            : '';
          return `<li class="vendor-row${r.featured ? ' vendor-featured' : ''}">
  <div class="vendor-head">
    <span class="vendor-rank">#${esc(r.rank)}</span>
    <span class="vendor-name">${esc(r.name)}${r.featured ? '<span class="vendor-badge">Featured #1</span>' : ''}</span>
    <span class="vendor-score">${esc(r.score)}<span class="of"> / ${esc(r.of)}</span></span>
  </div>
  <div class="meter" role="img" aria-label="${esc(r.score)} out of ${esc(r.of)}"><span style="width:${pct.toFixed(1)}%"></span></div>
  <p class="vendor-band">${esc(r.band)}</p>
  <p class="vendor-blurb">${esc(r.blurb)}</p>
  ${shop}
</li>`;
        })
        .join('');
      return `<ol class="vendor-rank">${items}</ol>`;
    },

    /** The reference list page body, built from the site's reference table. */
    references(props, body, ctx) {
      const refs = site.references || [];
      const items = refs
        .map(
          (r, idx) =>
            `<li class="ref-item" id="ref-${idx + 1}"><span class="ref-num">[${idx + 1}]</span><p class="ref-cite">${esc(
              r.citation
            )}</p>${
              r.url
                ? `<p class="ref-url"><a href="${esc(r.url)}" rel="noopener nofollow" target="_blank">${esc(r.url)}</a></p>`
                : '<p class="ref-url">Primary record; no public URL.</p>'
            }</li>`
        )
        .join('');
      return `<ol class="ref-list">${items}</ol>`;
    },
  };
}
