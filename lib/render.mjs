import { esc, renderMarkdown, renderPlain, toPlain } from './markdown.mjs';
import { makeComponents, makePlainComponents, ratingStats, selectReviews } from './components.mjs';

function jsonld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}

/** Schema graph for a page. Only emits AggregateRating when real reviews back it. */
export function buildSchema({ site, page, ctx, reviews }) {
  const base = site.url.replace(/\/$/, '');
  const pageUrl = `${base}${page.path === '/' ? '/' : page.path}`;
  const graph = [];

  const orgId = `${base}/#publisher`;
  graph.push({
    '@type': 'Organization',
    '@id': orgId,
    name: site.publisher.name,
    url: site.publisher.url,
    ...(site.publisher.sameAs ? { sameAs: site.publisher.sameAs } : {}),
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
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${base}/#website` },
    ...(page.datePublished ? { datePublished: page.datePublished } : {}),
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
  });

  // Aggregate rating, only where genuine owner-supplied reviews were rendered.
  if (page.path === '/' && reviews.length) {
    const stats = ratingStats(reviews);
    if (stats.count > 0) {
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
        },
        review: reviews.slice(0, 12).map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author || 'Verified customer' },
          datePublished: r.date,
          reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5', worstRating: '1' },
          reviewBody: r.body,
        })),
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
  if (page.path !== '/') crumbs.push({ name: page.navLabel || page.title, item: pageUrl });
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

export function renderPage({ site, page, reviews, buildDate }) {
  const ctx = {
    sections: [],
    usedRefs: new Set(),
    components: makeComponents({ reviews, site }),
    faq: null,
    aggregate: null,
    renderedReviews: [],
  };

  const bodyHtml = renderMarkdown(page.body, ctx);
  const base = site.url.replace(/\/$/, '');
  const pageUrl = `${base}${page.path === '/' ? '/' : page.path}`;
  const mdPath = page.path === '/' ? '/index.md' : `${page.path}.md`;

  const nav = site.nav
    .map(
      (n) =>
        `<li><a href="${esc(n.href)}"${n.href === page.path ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`
    )
    .join('');

  const cover = page.cover
    ? `<header class="cover"><div class="container">
  <div>
    ${page.kicker ? `<p class="kicker">${esc(page.kicker)}</p>` : ''}
    <h1>${esc(page.h1 || page.title)}</h1>
    ${page.standfirst ? `<p class="standfirst">${esc(page.standfirst)}</p>` : ''}
    <p class="publisher-note">${site.publisher.disclosureAboveFold}</p>
    ${
      page.cta?.length
        ? `<div class="cta-row">${page.cta
            .map(
              (c, i) =>
                `<a class="btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}" href="${esc(c.href)}">${esc(c.label)}</a>`
            )
            .join('')}</div>`
        : ''
    }
  </div>
  ${page.coverBlocks ? `<div class="cover-side">${renderMarkdown(page.coverBlocks, ctx)}</div>` : ''}
</div></header>`
    : `<header class="cover"><div class="container"><div>
    ${page.kicker ? `<p class="kicker">${esc(page.kicker)}</p>` : ''}
    <h1>${esc(page.h1 || page.title)}</h1>
    ${page.standfirst ? `<p class="standfirst">${esc(page.standfirst)}</p>` : ''}
    <p class="publisher-note">${site.publisher.disclosureAboveFold}</p>
  </div></div></header>`;

  const refPayload = {};
  for (const n of ctx.usedRefs) {
    const r = site.references?.[n - 1];
    if (r) refPayload[n] = { citation: r.citation, url: r.url || null };
  }

  const schema = buildSchema({ site, page, ctx, reviews: ctx.renderedReviews.length ? reviews : [] });

  const footerCols = site.footer.columns
    .map(
      (col) =>
        `<div class="footer-col"><span class="footer-col-title">${esc(col.title)}</span>${col.links
          .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
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
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta property="og:type" content="${page.path === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(pageUrl)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
<link rel="stylesheet" href="/css/style.css?v=${site.assetVersion}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${jsonld(schema)}
</head>
<body>
<a class="skip" href="#main">Skip to main content</a>
<div class="eyebrow-bar"><div class="container"><p>${esc(site.eyebrow)}</p></div></div>
<header class="masthead"><div class="container">
  <a class="wordmark" href="/">${site.wordmark}</a>
  <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="primary-nav">&#9776;</button>
  <nav class="nav" id="primary-nav" aria-label="Primary"><ul>${nav}</ul></nav>
</div></header>
<main id="main"><article>
${cover}
<div class="prose"><div class="container">
${bodyHtml}
</div></div>
</article></main>
<footer class="site-footer"><div class="container">
  <div class="footer-top">
    <p class="footer-blurb">${esc(site.footer.blurb)}</p>
    <nav class="footer-nav" aria-label="Footer">${footerCols}</nav>
  </div>
  <p class="disclosure">${site.footer.disclosure}</p>
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
