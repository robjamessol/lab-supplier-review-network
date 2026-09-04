// Minimal, dependency-free markdown renderer.
// Supports the subset the network actually uses, plus ::: component blocks
// and [^n] citation markers that resolve against the site's reference list.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

export function esc(str = '') {
  return String(str).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

export function slugify(str = '') {
  return String(str)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

// Inline: bold, italic, code, links, citations.
function inline(text, ctx = {}) {
  let out = esc(text);

  out = out.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);

  // [label](href)
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const external = /^https?:\/\//.test(href);
    const rel = external ? ' rel="noopener"' : '';
    const target = external ? ' target="_blank"' : '';
    return `<a href="${esc(href)}"${rel}${target}>${label}</a>`;
  });

  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');

  // Citation markers [^3] -> superscript link into /references
  out = out.replace(/\[\^(\d+)\]/g, (_, n) => {
    if (ctx.usedRefs) ctx.usedRefs.add(Number(n));
    return `<sup class="cite"><a href="/references#ref-${n}" data-ref="${n}">[${n}]</a></sup>`;
  });

  return out;
}

function renderTable(rows, ctx) {
  const [head, , ...body] = rows;
  const cells = (line) =>
    line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim());
  const th = cells(head).map((c) => `<th scope="col">${inline(c, ctx)}</th>`).join('');
  const tb = body
    .map((line) => `<tr>${cells(line).map((c) => `<td>${inline(c, ctx)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="table-scroll"><table><thead><tr>${th}</tr></thead><tbody>${tb}</tbody></table></div>`;
}

/**
 * Render markdown to HTML.
 * ctx.components maps a ::: block name to (props, body, ctx) => html
 * ctx.usedRefs collects citation numbers actually referenced.
 * ctx.sections collects {id, title, level} for every heading, for TOC + anchors.
 */
export function renderMarkdown(src, ctx = {}) {
  const lines = String(src).replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  let openSection = false;

  const closeSection = () => {
    if (openSection) {
      out.push('</section>');
      openSection = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // ::: component blocks
    const comp = line.match(/^:::(\w[\w-]*)\s*(\{.*\})?\s*$/);
    if (comp) {
      const name = comp[1];
      let props = {};
      if (comp[2]) {
        try {
          props = JSON.parse(comp[2]);
        } catch {
          throw new Error(`Bad JSON props on ::: ${name} block: ${comp[2]}`);
        }
      }
      const bodyLines = [];
      i += 1;
      while (i < lines.length && !/^:::\s*$/.test(lines[i])) {
        bodyLines.push(lines[i]);
        i += 1;
      }
      i += 1; // consume closing :::
      const fn = ctx.components?.[name];
      if (!fn) throw new Error(`Unknown component block ":::${name}"`);
      out.push(fn(props, bodyLines.join('\n'), ctx));
      continue;
    }

    // Headings
    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const title = h[2].trim();
      const id = slugify(title);
      if (level === 2) {
        closeSection();
        out.push(`<section id="${id}">`);
        openSection = true;
        out.push(`<h2>${inline(title, ctx)}</h2>`);
      } else {
        out.push(`<h${level} id="${id}">${inline(title, ctx)}</h${level}>`);
      }
      ctx.sections?.push({ id, title, level });
      i += 1;
      continue;
    }

    // Horizontal rule
    if (/^---+\s*$/.test(line)) {
      out.push('<hr>');
      i += 1;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      out.push(`<blockquote>${inline(buf.join(' '), ctx)}</blockquote>`);
      continue;
    }

    // Table
    if (/^\|/.test(line) && /^\|[\s:-]+\|/.test(lines[i + 1] || '')) {
      const buf = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        buf.push(lines[i]);
        i += 1;
      }
      out.push(renderTable(buf, ctx));
      continue;
    }

    // Lists
    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const tag = ordered ? 'ol' : 'ul';
      const items = [];
      while (
        i < lines.length &&
        (ordered ? /^\s*\d+\.\s+/.test(lines[i]) : /^\s*[-*]\s+/.test(lines[i]))
      ) {
        items.push(lines[i].replace(/^\s*(?:[-*]|\d+\.)\s+/, ''));
        i += 1;
      }
      out.push(`<${tag}>${items.map((t) => `<li>${inline(t, ctx)}</li>`).join('')}</${tag}>`);
      continue;
    }

    // Blank
    if (!line.trim()) {
      i += 1;
      continue;
    }

    // Paragraph
    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,4}\s|:::|>|\||\s*[-*]\s|\s*\d+\.\s|---+\s*$)/.test(lines[i])
    ) {
      buf.push(lines[i]);
      i += 1;
    }
    out.push(`<p>${inline(buf.join(' '), ctx)}</p>`);
  }

  closeSection();
  return out.join('\n');
}

/** Strip markdown to plain prose, for meta descriptions and llms-full text. */
export function toPlain(src) {
  return String(src)
    .replace(/^:::.*$/gm, '')
    .replace(/\[\^(\d+)\]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/[*`]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
