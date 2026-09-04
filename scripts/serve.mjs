#!/usr/bin/env node
// Local preview: node scripts/serve.mjs [site-id] [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = process.argv[2] || 'peptriva-review';
const port = Number(process.argv[3] || 4321);
const base = path.join(ROOT, 'dist', site);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

createServer(async (req, res) => {
  try {
    const url = decodeURIComponent((req.url || '/').split('?')[0]);
    let file = path.join(base, url);
    if (!file.startsWith(base)) throw Object.assign(new Error('bad path'), { code: 'ENOENT' });
    const s = await stat(file).catch(() => null);
    if (s?.isDirectory()) file = path.join(file, 'index.html');
    else if (!s && !path.extname(file)) file = path.join(base, url, 'index.html');
    const buf = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404');
  }
}).listen(port, () => console.log(`serving dist/${site} at http://localhost:${port}`));
