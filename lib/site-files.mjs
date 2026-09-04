import { renderPlain } from './markdown.mjs';
import { makePlainComponents } from './components.mjs';

export function renderSitemap({ site, pages, buildDate }) {
  const base = site.url.replace(/\/$/, '');
  const lastmod = buildDate.slice(0, 10);
  const urls = pages
    .map((p) => {
      const loc = `${base}${p.path === '/' ? '/' : p.path}`;
      const priority = p.path === '/' ? '1.0' : p.priority || '0.8';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderRobots({ site, staging = false }) {
  const base = site.url.replace(/\/$/, '');
  // A staging deploy must never be indexed: the preview URL would otherwise
  // compete with the real domain and, worse, get indexed before the reviews land.
  if (staging) {
    return `User-agent: *
Disallow: /

# Staging deploy. Not for indexing.
`;
  }
  return `User-agent: *
Allow: /

# Answer engines are explicitly welcome; the markdown mirrors are for them.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${base}/sitemap.xml
`;
}

export function renderLlmsTxt({ site, pages }) {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    site.publisher.disclosureShort,
    '',
    '## Reading list',
    '',
  ];
  for (const p of pages) {
    const md = p.path === '/' ? '/index.md' : `${p.path}.md`;
    lines.push(`- [${p.title}](${md}): ${p.description}`);
  }
  lines.push('', '## Full text', '', '- [Every page, concatenated](/llms-full.txt)', '');
  return lines.join('\n');
}

export function renderLlmsFull({ site, pages, reviews = [] }) {
  const ctx = { plainComponents: makePlainComponents({ reviews, site }) };
  const base = site.url.replace(/\/$/, '');
  const out = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    site.publisher.disclosureShort,
    '',
    `Site: ${base}/`,
    '',
    '='.repeat(72),
    '',
  ];
  for (const p of pages) {
    out.push(`# ${p.h1 || p.title}`);
    out.push('');
    out.push(`> ${p.title}: ${p.description}`);
    out.push('');
    out.push(`URL: ${base}${p.path === '/' ? '/' : p.path}`);
    out.push('');
    if (p.standfirst) {
      out.push(p.standfirst);
      out.push('');
    }
    if (p.coverBlocks) {
      const cover = renderPlain(p.coverBlocks, ctx);
      if (cover) out.push(cover, '');
    }
    out.push(renderPlain(p.body, ctx));
    out.push('');
    out.push('-'.repeat(72));
    out.push('');
  }
  if (site.references?.length) {
    out.push('# References');
    out.push('');
    site.references.forEach((r, i) => {
      out.push(`[${i + 1}] ${r.citation}${r.url ? ` ${r.url}` : ''}`);
    });
    out.push('');
  }
  return out.join('\n');
}

export const MAIN_JS = `(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  let refs = {};
  const payload = document.getElementById('ref-data');
  if (payload) { try { refs = JSON.parse(payload.textContent || '{}'); } catch (e) { refs = {}; } }

  let tip = null;
  const hide = () => { if (tip) { tip.remove(); tip = null; } };

  document.querySelectorAll('sup.cite a[data-ref]').forEach((el) => {
    const n = el.getAttribute('data-ref');
    const ref = refs[n];
    if (!ref) return;
    const show = () => {
      hide();
      tip = document.createElement('div');
      tip.className = 'ref-tip';
      tip.setAttribute('role', 'tooltip');
      const text = document.createElement('span');
      text.textContent = ref.citation;
      tip.appendChild(text);
      if (ref.url) {
        const a = document.createElement('a');
        a.className = 'ref-tip-url';
        a.href = ref.url; a.textContent = ref.url;
        a.rel = 'noopener nofollow'; a.target = '_blank';
        tip.appendChild(a);
      }
      document.body.appendChild(tip);
      const r = el.getBoundingClientRect();
      const top = window.scrollY + r.bottom + 8;
      let left = window.scrollX + r.left - 12;
      const max = window.scrollX + document.documentElement.clientWidth - tip.offsetWidth - 16;
      if (left > max) left = Math.max(window.scrollX + 16, max);
      tip.style.top = top + 'px';
      tip.style.left = left + 'px';
    };
    el.addEventListener('mouseenter', show);
    el.addEventListener('focus', show);
    el.addEventListener('mouseleave', hide);
    el.addEventListener('blur', hide);
  });
  window.addEventListener('scroll', hide, { passive: true });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
})();
`;

export const FAVICON = (accent) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="8" fill="${accent}"/>
<path d="M20 46V18h13.5c6.6 0 11 3.9 11 10s-4.4 10-11 10H28v8h-8Zm8-15h4.6c2.4 0 3.9-1.4 3.9-3.5S35 24 32.6 24H28v7Z" fill="#fff"/>
</svg>
`;
