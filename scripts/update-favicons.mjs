import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ignored = new Set(['.git', 'output', 'tmp', '.playwright-cli']);
const faviconBlock = '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png"><link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest">';

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

for (const file of await walk(root)) {
  const original = await readFile(file, 'utf8');
  let html = original
    .replace(/<link rel="(?:shortcut )?icon"[^>]*>/g, '')
    .replace(/<link rel="apple-touch-icon"[^>]*>/g, '')
    .replace(/<link rel="manifest"[^>]*>/g, '');
  html = html.replace('</head>', `${faviconBlock}</head>`);
  html = html.replace('"logo":"https://firstaudit.ma/logo.png"', '"logo":{"@type":"ImageObject","url":"https://firstaudit.ma/logo.png","contentUrl":"https://firstaudit.ma/logo.png","width":512,"height":512}');
  if (html !== original) await writeFile(file, html, 'utf8');
}

console.log('Favicons haute résolution appliqués à toutes les pages HTML.');
