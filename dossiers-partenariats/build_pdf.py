#!/usr/bin/env python3
"""Convert the due diligence markdown into a polished PDF using WeasyPrint."""

from pathlib import Path
import markdown
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

ROOT = Path(__file__).parent
MD_PATH = ROOT / "centre-cga-laval-dd-2026-05-26.md"
PDF_PATH = ROOT / "centre-cga-laval-dd-2026-05-26.pdf"


def build_html(md_text: str) -> str:
    body = markdown.markdown(
        md_text,
        extensions=["extra", "tables", "toc", "sane_lists"],
    )
    cover = """
<section class="cover">
  <div class="cover-top">
    <div class="brand">FIRST AUDIT</div>
    <div class="brand-sub">Cabinet d'expertise comptable</div>
  </div>
  <div class="cover-center">
    <div class="cover-tag">Dossier confidentiel</div>
    <h1 class="cover-title">Due Diligence &amp; Analyse d'alliance</h1>
    <h2 class="cover-subtitle">Centre de Comptabilité et Gestion des Affaires Inc.</h2>
    <div class="cover-meta">
      <div><span>Marque</span><strong>Centre CGA Laval</strong></div>
      <div><span>Associé principal</span><strong>Mohammed Boujrad, CPA, CGA</strong></div>
      <div><span>Juridiction</span><strong>Laval, Québec, Canada</strong></div>
    </div>
  </div>
  <div class="cover-bottom">
    <div class="cover-date">26 mai 2026</div>
    <div class="cover-classif">Classification : Confidentiel — Usage interne</div>
  </div>
</section>
"""
    return f"""<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><title>Due Diligence — Centre CGA Laval</title></head>
<body>
{cover}
<main class="content">
{body}
</main>
</body>
</html>
"""


CSS_STR = """
@page {
  size: A4;
  margin: 22mm 18mm 24mm 18mm;
  @top-left {
    content: "First Audit · Dossier confidentiel";
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 8.5pt;
    color: #6b7280;
  }
  @top-right {
    content: "Centre CGA Laval — Mohammed Boujrad, CPA, CGA";
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 8.5pt;
    color: #6b7280;
  }
  @bottom-center {
    content: "Page " counter(page) " / " counter(pages);
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 8.5pt;
    color: #6b7280;
  }
  @bottom-right {
    content: "26 mai 2026";
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 8.5pt;
    color: #6b7280;
  }
}

@page :first {
  margin: 0;
  @top-left { content: none; }
  @top-right { content: none; }
  @bottom-center { content: none; }
  @bottom-right { content: none; }
}

html { font-size: 10.5pt; }

body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #1f2937;
  line-height: 1.55;
  margin: 0;
  padding: 0;
}

.cover {
  page: cover;
  height: 297mm;
  width: 210mm;
  padding: 30mm 24mm;
  box-sizing: border-box;
  background: linear-gradient(160deg, #0b2545 0%, #13315c 55%, #1c4a8f 100%);
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  page-break-after: always;
}

.cover-top { display: flex; flex-direction: column; }
.cover .brand {
  font-size: 26pt;
  letter-spacing: 6pt;
  font-weight: 700;
  color: #ffffff;
}
.cover .brand-sub {
  font-size: 10pt;
  letter-spacing: 2pt;
  text-transform: uppercase;
  color: #c7d2fe;
  margin-top: 4pt;
}

.cover-center { margin-top: 20mm; }
.cover-tag {
  display: inline-block;
  padding: 4pt 10pt;
  border: 1px solid #c7d2fe;
  border-radius: 999px;
  font-size: 8.5pt;
  letter-spacing: 1.4pt;
  text-transform: uppercase;
  color: #c7d2fe;
  margin-bottom: 16pt;
}
.cover-title {
  font-size: 32pt;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 8pt 0;
  color: #ffffff;
}
.cover-subtitle {
  font-size: 16pt;
  font-weight: 400;
  color: #dbeafe;
  margin: 0 0 22pt 0;
}
.cover-meta {
  margin-top: 12mm;
  border-top: 1px solid rgba(255,255,255,0.18);
  padding-top: 10pt;
}
.cover-meta > div {
  display: flex;
  justify-content: space-between;
  padding: 7pt 0;
  border-bottom: 1px solid rgba(255,255,255,0.10);
  font-size: 10.5pt;
}
.cover-meta > div span { color: #c7d2fe; }
.cover-meta > div strong { color: #ffffff; font-weight: 600; }

.cover-bottom { font-size: 9.5pt; color: #dbeafe; }
.cover-bottom .cover-date { font-size: 12pt; font-weight: 600; color: #ffffff; margin-bottom: 4pt; }

.content { padding-top: 4mm; }

h1, h2, h3, h4 {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #0b2545;
  line-height: 1.25;
  margin-top: 16pt;
  margin-bottom: 8pt;
  page-break-after: avoid;
}

.content h1 {
  font-size: 20pt;
  border-bottom: 2px solid #0b2545;
  padding-bottom: 6pt;
  margin-top: 0;
  page-break-before: always;
}
.content h1:first-of-type { page-break-before: avoid; }

.content h2 {
  font-size: 14.5pt;
  color: #0b2545;
  border-left: 4px solid #1c4a8f;
  padding-left: 10pt;
  margin-top: 22pt;
}

.content h3 {
  font-size: 12pt;
  color: #13315c;
  margin-top: 16pt;
}

.content h4 {
  font-size: 10.5pt;
  color: #13315c;
  text-transform: uppercase;
  letter-spacing: 0.6pt;
  margin-top: 12pt;
}

p { margin: 6pt 0; text-align: justify; }

strong { color: #0b2545; }

a { color: #1c4a8f; text-decoration: none; word-break: break-all; }

ul, ol { margin: 6pt 0 10pt 0; padding-left: 18pt; }
li { margin: 3pt 0; }

blockquote {
  border-left: 3px solid #1c4a8f;
  background: #f1f5f9;
  margin: 10pt 0;
  padding: 8pt 14pt;
  color: #334155;
  font-style: italic;
  border-radius: 0 4pt 4pt 0;
}

hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 18pt 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10pt 0 14pt 0;
  font-size: 9.5pt;
  page-break-inside: avoid;
}

th {
  background: #0b2545;
  color: #ffffff;
  text-align: left;
  padding: 6pt 8pt;
  font-weight: 600;
  font-size: 9.5pt;
  border: 1px solid #0b2545;
}

td {
  padding: 5pt 8pt;
  border: 1px solid #e2e8f0;
  vertical-align: top;
}

tr:nth-child(even) td { background: #f8fafc; }

code {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 9pt;
  background: #f1f5f9;
  padding: 1pt 4pt;
  border-radius: 3pt;
  color: #0b2545;
}

/* Couleurs spécifiques pour les marqueurs ROUGE / ORANGE / JAUNE / VERT */
td:has(strong:contains("ROUGE")), td strong:has-text("ROUGE") { color: #b91c1c; }

/* Table d'identification : première colonne plus large */
.content table th:first-child,
.content table td:first-child { font-weight: 500; }

/* Petits highlights */
.content p strong:first-child:last-child { display: inline; }

/* Avertissement final - dernière section */
.content h2:last-of-type + p,
.content h2:last-of-type ~ p { font-size: 9.5pt; color: #475569; }
"""


def main() -> None:
    md_text = MD_PATH.read_text(encoding="utf-8")
    html_text = build_html(md_text)
    debug_html = ROOT / "_preview.html"
    debug_html.write_text(html_text, encoding="utf-8")

    font_config = FontConfiguration()
    HTML(string=html_text, base_url=str(ROOT)).write_pdf(
        target=str(PDF_PATH),
        stylesheets=[CSS(string=CSS_STR, font_config=font_config)],
        font_config=font_config,
    )
    size_kb = PDF_PATH.stat().st_size / 1024
    print(f"OK -> {PDF_PATH} ({size_kb:.1f} KB)")


if __name__ == "__main__":
    main()
