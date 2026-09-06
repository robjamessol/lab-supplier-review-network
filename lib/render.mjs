import { esc, renderMarkdown, renderPlain, toPlain } from './markdown.mjs';
import { makeComponents, makePlainComponents, ratingStats, selectReviews } from './components.mjs';
import { renderPlate } from './plates.mjs';
import { PALETTES } from './styles.mjs';

function jsonld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}

/** Schema graph for a page. AggregateRating is emitted from reviews.json on the home page. */
const ISSUE_PUBLISHED = '2026-09-04';
const ISSUE_MODIFIED = '2026-09-06';

export function buildSchema({ site, page, ctx, reviews }) {
  const base = site.url.replace(/\/$/, '');
  const pageUrl = `${base}${page.path === '/' ? '/' : page.path}`;
  const graph = [];
  const published = page.datePublished || ISSUE_PUBLISHED;
  const modified = page.dateModified || ISSUE_MODIFIED;

  const orgId = `${base}/#publisher`;
  graph.push({
    '@type': 'Organization',
    '@id': orgId,
    name: site.publisher.name,
    url: site.publisher.url,
    description: site.publisher.disclosureShort || site.tagline,
    ...(site.publisher.sameAs?.length ? { sameAs: site.publisher.sameAs } : {}),
  });

  graph.push({
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: site.name,
    description: site.tagline,
    url: `${base}/`,
    publisher: { '@id': orgId },
    inLanguage: 'en',
  });

  graph.push({
    '@type': page.path === '/' ? ['WebPage', 'CollectionPage'] : 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${base}/#website` },
    datePublished: published,
    dateModified: modified,
    about: { '@type': 'Organization', name: site.subject.name, url: site.subject.url },
  });

  if (page.path !== '/') {
    graph.push({
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: page.h1 || page.title,
      description: page.description,
      url: pageUrl,
      datePublished: published,
      dateModified: modified,
      inLanguage: 'en',
      author: { '@id': orgId },
      publisher: { '@id': orgId },
      mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      about: { '@type': 'Organization', name: site.subject.name, url: site.subject.url },
    });
  }

  // Customer AggregateRating from reviews.json only (never invent reviews).
  // Editorial verdict (~4.8 / 95.6) is a separate instrument and is NOT folded into AggregateRating.
  if (page.path === '/' && reviews.length) {
    const stats = ratingStats(reviews);
    if (stats.count > 0) {
      const reviewSource = ctx.renderedReviews?.length ? ctx.renderedReviews : reviews;
      const editorial = site.editorialVerdict || null;
      graph.push({
        '@type': 'Product',
        '@id': `${base}/#subject`,
        name: site.subject.name,
        description: site.subject.description,
        brand: { '@type': 'Brand', name: site.subject.name },
        url: site.subject.url,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(stats.average),
          reviewCount: String(stats.count),
          bestRating: '5',
          worstRating: '1',
          description:
            'Customer review average from order-verified reviews on file. Separate from the editorial documentary verdict.',
        },
        review: reviewSource.slice(0, 12).map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author || 'Verified customer' },
          datePublished: r.date,
          reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5', worstRating: '1' },
          reviewBody: r.body,
        })),
        ...(editorial
          ? {
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'EditorialVerdict',
                  value: String(editorial.score),
                  unitText: `out of ${editorial.of}`,
                  description: editorial.note || 'Independent editorial documentary score; not a customer AggregateRating.',
                },
              ],
            }
          : {}),
      });
    }
  }

  if (ctx.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: ctx.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: toPlain(f.a) },
      })),
    });
  }

  const crumbs = [{ name: 'Home', item: `${base}/` }];
  if (page.path !== '/') crumbs.push({ name: page.navLabel || page.h1 || page.title, item: pageUrl });
  graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  });

  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * On an FAQ page the questions are H2 sections, matching the reference network,
 * so the FAQPage entities are read back off those sections rather than out of a
 * component block.
 */
function faqFromSections(body) {
  const out = [];
  const parts = String(body).split(/^##\s+/m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const q = (nl === -1 ? part : part.slice(0, nl)).trim();
    const a = nl === -1 ? '' : part.slice(nl + 1);
    if (!q.endsWith('?')) continue;
    const text = toPlain(a).split('\n\n')[0];
    if (text) out.push({ q, a: text });
  }
  return out;
}


const NETWORK_PATHS = null; // sister links on every page

const SHOP_HOME = 'https://www.peptriva.com/';
const SHOP_WELCOME = 'https://www.peptriva.com/?promo_code=WELCOME25';

/** Labeled sidebar ads (COA + WELCOME25). Injected on every HTML page. */
function renderAdSidebar() {
  const unit = (href, src, alt) => `<div class="ad-unit">
  <p class="ad-label">Advertisement</p>
  <a class="ad-link" href="${esc(href)}" target="_blank" rel="noopener sponsored">
    <img src="${esc(src)}" alt="${esc(alt)}" width="420" height="700" loading="lazy" decoding="async">
  </a>
</div>`;
  return `<aside class="ad-rail" aria-label="Advertisements">
  ${unit(SHOP_HOME, '/ads/peptriva-coa.png', 'Peptriva: every peptide ships with its COA. Shop peptriva.')}
  ${unit(SHOP_WELCOME, '/ads/peptriva-welcome25.png', 'Peptriva: 25 percent off your first order with code WELCOME25.')}
</aside>`;
}


function renderRelated({ site, page }) {
  const seen = new Set([page.path]);
  const issue = [];
  for (const n of [...(site.nav || []), ...(site.nav2 || [])]) {
    if (!n?.href || seen.has(n.href)) continue;
    seen.add(n.href);
    issue.push(n);
  }
  for (const n of [
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'References', href: '/references' },
    { label: 'Contact', href: '/contact' },
  ]) {
    if (seen.has(n.href)) continue;
    issue.push(n);
    seen.add(n.href);
  }

  let html = '';
  if (issue.length) {
    const heading = page.path === '/' ? 'Read this Peptriva issue' : 'Also in this Peptriva issue';
    html += `<aside class="related" aria-label="${esc(heading)}"><h2>${esc(heading)}</h2><ul>${issue
      .map((n) => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`)
      .join('')}</ul></aside>`;
  }

  const sisters = (site.network || []).filter((n) => n.href.replace(/\/$/, '') !== site.url.replace(/\/$/, ''));
  if (sisters.length) {
    html += `<aside class="related related-network" aria-label="Related Peptriva reviews"><h2>Related Peptriva reviews</h2><ul>${sisters
      .map(
        (n) =>
          `<li><a href="${esc(n.href)}">${esc(n.label)}</a>${n.note ? ` <span class="related-note">${esc(n.note)}</span>` : ''}</li>`
      )
      .join('')}</ul></aside>`;
  }
  return html;
}

export function renderPage({ site, page, reviews, buildDate, staging = false }) {
  const ctx = {
    sections: [],
    usedRefs: new Set(),
    components: makeComponents({ reviews, site }),
    faq: null,
    aggregate: null,
    renderedReviews: [],
  };

  const bodyHtml = renderMarkdown(page.body, ctx);
  if (page.faqFromSections) {
    const found = faqFromSections(page.body);
    if (found.length) ctx.faq = (ctx.faq || []).concat(found);
  }
  const base = site.url.replace(/\/$/, '');
  const pageUrl = `${base}${page.path === '/' ? '/' : page.path}`;
  const mdPath = page.path === '/' ? '/index.md' : `${page.path}.md`;

  const nav = site.nav
    .map(
      (n) =>
        `<li><a href="${esc(n.href)}"${n.href === page.path ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`
    )
    .join('');

  const nav2 = site.nav2?.length
    ? `<ul class="nav-row-2">${site.nav2
        .map(
          (n) =>
            `<li><a href="${esc(n.href)}"${n.href === page.path ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`
        )
        .join('')}</ul>`
    : '';

  const kpiStrip = page.kpi?.length
    ? `<dl class="stat-strip kpi">${page.kpi
        .map(
          ([label, value, sub]) =>
            `<div class="stat"><dt>${esc(label)}</dt><dd>${esc(value)}${
              sub ? `<span class="weight">${esc(sub)}</span>` : ''
            }</dd></div>`
        )
        .join('')}</dl>`
    : '';

  const accent = (PALETTES[site.palette] || PALETTES.royal).accent;
  const heroFigure = page.plate
    ? `<figure class="cover-figure">${renderPlate(page.plate.name, {
        accent,
        ground: site.paper,
        ink: '#17181B',
        ...page.plate,
      })}<figcaption>${esc(page.plate.caption || '')}</figcaption></figure>`
    : '';

  const coverHead = `
    ${page.kicker ? `<p class="kicker">${esc(page.kicker)}</p>` : ''}
    <h1>${esc(page.h1 || page.title)}</h1>
    ${page.standfirst ? `<p class="standfirst">${esc(page.standfirst)}</p>` : ''}
    ${site.publisher.disclosureAboveFold ? `<p class="publisher-note">${site.publisher.disclosureAboveFold}</p>` : ''}
    ${
      page.cta?.length
        ? `<div class="cta-row">${page.cta
            .map(
              (c, i) =>
                `<a class="btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}" href="${esc(c.href)}">${esc(c.label)}</a>`
            )
            .join('')}</div>`
        : ''
    }`;

  const cover = `<header class="cover">
<div class="container${page.coverBlocks ? ' cover-split' : ''}">
  <div>${coverHead}</div>
  ${page.coverBlocks ? `<div class="cover-side">${renderMarkdown(page.coverBlocks, ctx)}</div>` : ''}
</div>
${kpiStrip ? `<div class="container kpi-wrap">${kpiStrip}</div>` : ''}
${heroFigure ? `<div class="container">${heroFigure}</div>` : ''}
</header>`;

  const refPayload = {};
  for (const n of ctx.usedRefs) {
    const r = site.references?.[n - 1];
    if (r) refPayload[n] = { citation: r.citation, url: r.url || null };
  }

  const schema = buildSchema({ site, page, ctx, reviews });

  const footerCols = site.footer.columns
    .map(
      (col) =>
        `<div class="footer-col"><span class="footer-col-title">${esc(col.title)}</span>${col.links
          .map((l) => {
          const external = /^https?:\/\//.test(l.href);
          const peptriva = external && /(?:^|\/\/|\.)peptriva\.com(?:[:/?#]|$)/i.test(l.href);
          const rel = external ? (peptriva ? ' rel="noopener sponsored"' : ' rel="noopener"') : '';
          const target = external ? ' target="_blank"' : '';
          return `<a href="${esc(l.href)}"${rel}${target}>${esc(l.label)}</a>`;
        })
          .join('')}</div>`
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${esc(pageUrl)}">
<link rel="alternate" type="text/markdown" href="${esc(mdPath)}" title="Markdown version">
<meta name="robots" content="${staging ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large'}">
<meta property="og:type" content="${page.path === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(pageUrl)}">
<meta property="og:image" content="${esc(base)}/og-image.svg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${esc(base)}/og-image.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
<link rel="stylesheet" href="/css/style.css?v=${site.assetVersion}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${site.gaId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${site.gaId}');</script>` : ''}
${jsonld(schema)}
</head>
<body>
<a class="skip" href="#main">Skip to main content</a>
<div class="eyebrow-bar"><div class="container"><p>${esc(site.eyebrow)}</p></div></div>
<header class="masthead"><div class="container">
  <a class="wordmark" href="/">${site.wordmark}</a>
  <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="primary-nav">&#9776;</button>
  <nav class="nav" id="primary-nav" aria-label="Primary"><ul>${nav}</ul>${nav2}</nav>
</div>${site.mastheadStrip ? `<div class="issue-strip"><div class="container"><p>${esc(site.mastheadStrip)}</p></div></div>` : ''}</header>
<main id="main"><article>
${cover}
<div class="prose"><div class="container layout-with-rail">
<div class="layout-main">
${bodyHtml}
${renderRelated({ site, page })}
</div>
${renderAdSidebar()}
</div></div>
</article></main>
<footer class="site-footer"><div class="container">
  <div class="footer-top">
    <p class="footer-blurb">${esc(site.footer.blurb)}</p>
    <nav class="footer-nav" aria-label="Footer">${footerCols}</nav>
  </div>
  ${site.footer.disclosure ? `<p class="disclosure">${site.footer.disclosure}</p>` : ''}
  <p class="colophon">${esc(site.footer.colophon.replace('{year}', String(new Date(buildDate).getUTCFullYear())))}</p>
</div></footer>
<script type="application/json" id="ref-data">${JSON.stringify(refPayload).replace(/</g, '\\u003c')}</script>
<script src="/js/main.js?v=${site.assetVersion}" defer></script>
</body>
</html>`;
}

/** The .md alternate served alongside every HTML page, for AI answer engines. */
export function renderMarkdownAlternate({ site, page, reviews = [] }) {
  const base = site.url.replace(/\/$/, '');
  const ctx = { plainComponents: makePlainComponents({ reviews, site }) };
  const cover = page.coverBlocks ? renderPlain(page.coverBlocks, ctx) : '';
  const lines = [
    `# ${page.h1 || page.title}`,
    '',
    `> ${page.description}`,
    '',
    `Source: ${base}${page.path === '/' ? '/' : page.path}`,
    `Publisher: ${site.publisher.name}${site.publisher.relationshipNote ? `, ${site.publisher.relationshipNote}` : ''}`,
    '',
    '---',
    '',
    ...(page.standfirst ? [page.standfirst, ''] : []),
    ...(cover ? [cover, ''] : []),
    renderPlain(page.body, ctx),
  ];
  return lines.join('\n');
}

export { selectReviews, ratingStats };
