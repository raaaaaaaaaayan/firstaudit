import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { scheduledArticles } from './articles.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const preview = process.argv.includes('--preview');
const forcedDate = process.env.PUBLISH_DATE;
const now = forcedDate ? new Date(forcedDate) : new Date();
const published = scheduledArticles
  .filter((article) => preview || new Date(article.publishAt) <= now)
  .sort((a, b) => new Date(b.publishAt) - new Date(a.publishAt));
const articleDirectory = preview ? join(root, 'output', 'preview', 'articles') : join(root, 'articles');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const formatDate = (value) => new Intl.DateTimeFormat('fr-MA', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Casablanca'
}).format(new Date(value));

const articleUrl = (article) => `https://firstaudit.ma/articles/${article.slug}`;
const localizedArticlePaths = {
  'impot-societes-maroc-2026-taux-calcul': { fr: '/articles/impot-societes-maroc-2026-taux-calcul', en: '/en/insights/corporate-tax-morocco-2026/', es: '/es/recursos/impuesto-sociedades-marruecos-2026/', ar: '/ar/articles/corporate-tax-morocco-2026/' },
  'tva-maroc-2026-taux-exonerations': { fr: '/articles/tva-maroc-2026-taux-exonerations', en: '/en/insights/vat-morocco-2026/', es: '/es/recursos/iva-marruecos-2026/', ar: '/ar/articles/vat-morocco-2026/' },
  'creer-sarl-maroc-etapes': { fr: '/articles/creer-sarl-maroc-etapes', en: '/en/insights/set-up-sarl-morocco/', es: '/es/recursos/crear-sarl-marruecos/', ar: '/ar/articles/set-up-sarl-morocco/' }
};
const localizedLinks = (article) => {
  const paths = localizedArticlePaths[article.slug];
  if (!paths) return `<link rel="alternate" hreflang="fr-MA" href="${articleUrl(article)}"><link rel="alternate" hreflang="x-default" href="${articleUrl(article)}">`;
  return `<link rel="alternate" hreflang="fr-MA" href="https://firstaudit.ma${paths.fr}"><link rel="alternate" hreflang="en-MA" href="https://firstaudit.ma${paths.en}"><link rel="alternate" hreflang="es-MA" href="https://firstaudit.ma${paths.es}"><link rel="alternate" hreflang="ar-MA" href="https://firstaudit.ma${paths.ar}"><link rel="alternate" hreflang="x-default" href="https://firstaudit.ma${paths.fr}">`;
};
const languageSwitcher = (article) => {
  const paths = localizedArticlePaths[article.slug] || { fr: `/articles/${article.slug}`, en: '/en/insights/', es: '/es/recursos/', ar: '/ar/articles/' };
  return `<div class="language-switcher" aria-label="Langues"><a href="${paths.fr}">FR</a><a href="${paths.en}">EN</a><a href="${paths.es}">ES</a><a href="${paths.ar}" lang="ar">العربية</a></div>`;
};

function renderFaqSchema(article) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  }).replaceAll('<', '\\u003c');
}

function renderArticleSchema(article) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishAt,
    dateModified: article.publishAt,
    inLanguage: 'fr-MA',
    mainEntityOfPage: articleUrl(article),
    author: { '@type': 'AccountingService', name: 'First Audit et Conseils', url: 'https://firstaudit.ma/' },
    publisher: { '@type': 'AccountingService', name: 'First Audit et Conseils', url: 'https://firstaudit.ma/' }
  }).replaceAll('<', '\\u003c');
}

function renderArticle(article) {
  const sectionLinks = article.sections.map((section, index) =>
    `<li><a href="#section-${index + 1}">${escapeHtml(section.title)}</a></li>`
  ).join('');
  const sections = article.sections.map((section, index) => `
            <section id="section-${index + 1}">
              <h2>${escapeHtml(section.title)}</h2>
              ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n              ')}
            </section>`).join('');
  const faq = article.faq.map(([question, answer]) => `
              <details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('');
  const sources = article.sources.map(([label, href]) =>
    `<li><a href="${escapeHtml(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${escapeHtml(label)}</a></li>`
  ).join('');
  const related = [
    ...published.filter((item) => item.slug !== article.slug && item.category === article.category),
    ...published.filter((item) => item.slug !== article.slug && item.category !== article.category)
  ].filter((item, index, items) => items.findIndex((candidate) => candidate.slug === item.slug) === index).slice(0, 3);
  const relatedLinks = related.map((item) => `<a href="/articles/${escapeHtml(item.slug)}"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.title)}</strong></a>`).join('');

  return `<!doctype html>
<html lang="fr-MA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(article.title)} | First Audit</title>
  <meta name="description" content="${escapeHtml(article.description)}">
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
  <link rel="canonical" href="${articleUrl(article)}">
  ${localizedLinks(article)}
  <link rel="icon" href="/favicon.ico">
  <meta property="og:type" content="article"><meta property="og:locale" content="fr_MA"><meta property="og:site_name" content="First Audit et Conseils"><meta property="og:title" content="${escapeHtml(article.title)}"><meta property="og:description" content="${escapeHtml(article.description)}"><meta property="og:url" content="${articleUrl(article)}"><meta property="og:image" content="https://firstaudit.ma/assets/images/hero-approved-firstaudit.png">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/assets/css/site.css">
  <script type="application/ld+json">${renderArticleSchema(article)}</script>
  <script type="application/ld+json">${renderFaqSchema(article)}</script>
</head>
<body>
  <a class="skip-link" href="#contenu">Aller au contenu</a>
  <header class="site-header"><nav class="nav-shell" aria-label="Navigation principale"><a class="brand" href="/"><span class="brand-copy"><strong>First Audit</strong><small>et Conseils</small></span></a><ul class="nav-links" data-menu><li><a href="/#expertises">Expertises</a></li><li><a href="/outils">Outils &amp; ressources</a></li><li><a href="/blog" aria-current="page">Analyses</a></li><li><a href="/#cabinet">Le cabinet</a></li><li class="mobile-language-item">${languageSwitcher(article)}</li></ul><div class="nav-actions">${languageSwitcher(article)}<a class="button button-primary" href="/#contact">Prendre rendez-vous</a></div><button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-menu-toggle><span></span></button></nav></header>
  <main id="contenu">
    <header class="article-hero" data-category="${escapeHtml(article.category)}"><div class="container article-hero-grid"><div><p class="eyebrow">${escapeHtml(article.label)}</p><h1>${escapeHtml(article.title)}</h1><div class="article-meta"><span>Publié le ${formatDate(article.publishAt)}</span><span>${escapeHtml(article.readingTime)} de lecture</span><span>First Audit et Conseils</span></div></div><div class="article-cover-panel" aria-hidden="true"><span>First Audit · Analyse</span><strong>${escapeHtml(article.label)}</strong><small>Maroc · Édition 2026</small></div></div></header>
    <div class="container article-shell">
      <article class="article-body">
        <p>${escapeHtml(article.intro)}</p>
        <div class="article-callout"><strong>À retenir</strong><ul>${article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
        ${sections}
        <section><h2>Questions fréquentes</h2><div class="faq-list">${faq}</div></section>
        <section class="article-sources"><h2>Sources et périmètre</h2><p>Contenu informatif préparé pour le millésime 2026. La règle applicable dépend toujours des faits, de la date de l’opération et des justificatifs.</p><ul>${sources}</ul></section>
      </article>
      <aside class="article-aside"><div class="toc-card"><strong>Dans ce guide</strong><ol>${sectionLinks}<li><a href="#contact-article">Faire vérifier un cas</a></li></ol></div><div class="article-related"><span>À lire ensuite</span>${relatedLinks}<a class="all-articles-link" href="/blog">Toutes les analyses →</a></div><div class="aside-cta" id="contact-article"><span>Une situation particulière ?</span><strong>Faites valider le traitement avant le dépôt.</strong><a class="button button-primary" href="/#contact">Contacter le cabinet</a></div></aside>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><a class="brand" href="/"><span class="brand-copy"><strong>First Audit</strong><small>et Conseils</small></span></a><p>Expertise comptable, audit et conseil à Rabat.</p></div><div class="footer-column"><strong>Outils</strong><a href="/outils">Tous les outils</a><a href="/salaire-net">Salaire net</a><a href="/simulateurs">IS &amp; CM</a></div><div class="footer-column"><strong>Analyses</strong><a href="/blog">Tous les articles</a><a href="/calendrier-fiscal">Calendrier fiscal</a></div><div class="footer-column"><strong>Contact</strong><a href="tel:+212661263721">+212 661 26 37 21</a><a href="mailto:contact@firstaudit.ma">contact@firstaudit.ma</a></div></div><div class="container footer-bottom"><span>© 2026 First Audit et Conseils.</span><span>Contenu informatif, à confirmer selon votre situation.</span></div></footer>
  <script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

function renderCard(article) {
  return `<a class="library-card" href="/articles/${article.slug}" data-category="${escapeHtml(article.category)}"><span class="tag">${escapeHtml(article.label)}</span><h2>${escapeHtml(article.title)}</h2><p>${escapeHtml(article.description)}</p><footer><span>${formatDate(article.publishAt)}</span><span>${escapeHtml(article.readingTime)} →</span></footer></a>`;
}

function replaceBlock(source, start, end, content) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Marqueurs introuvables : ${start} / ${end}`);
  }
  return source.slice(0, startIndex + start.length) + `\n${content}\n          ` + source.slice(endIndex);
}

await mkdir(articleDirectory, { recursive: true });
for (const article of published) {
  await writeFile(join(articleDirectory, `${article.slug}.html`), renderArticle(article), 'utf8');
}

if (!preview) {
  const expected = new Set(published.map((article) => `${article.slug}.html`));
  for (const file of await readdir(articleDirectory)) {
    if (file.endsWith('.html') && !expected.has(file)) await rm(join(articleDirectory, file));
  }

  const blogPath = join(root, 'blog.html');
  const blog = await readFile(blogPath, 'utf8');
  const updatedBlog = replaceBlock(blog, '<!-- scheduled-articles:start -->', '<!-- scheduled-articles:end -->', published.map(renderCard).join('\n          '));
  await writeFile(blogPath, updatedBlog, 'utf8');

  const sitemapPath = join(root, 'sitemap.xml');
  const sitemap = await readFile(sitemapPath, 'utf8');
  const sitemapEntries = published.map((article) => `  <url>\n    <loc>${articleUrl(article)}</loc>\n    <lastmod>${article.publishAt.slice(0, 10)}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');
  const updatedSitemap = replaceBlock(sitemap, '<!-- scheduled-articles:start -->', '<!-- scheduled-articles:end -->', sitemapEntries);
  await writeFile(sitemapPath, updatedSitemap, 'utf8');
}

console.log(`${published.length} article(s) ${preview ? 'généré(s) en aperçu' : 'publié(s)'} au ${now.toISOString()}.`);
