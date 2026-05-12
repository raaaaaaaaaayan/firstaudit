# Audit firstaudit.ma — 2026-05-12

Document d'audit du site, des fixes appliqués et des points à valider/poursuivre.
Branche : `claude/improve-website-audit-WPJZ3`.

> **Mise à jour 2026-05-12 (2e passe)** — Les corrections fiscales listées en §2 ont été **validées par l'utilisateur contre sa base fiscale** et appliquées dans un 2e commit. Voir §1.6 ci-dessous.

---

## 1. Corrections appliquées dans ce commit

### 1.1 SEO — critique

- **Canonicals cassés corrigés** : 9 pages article pointaient vers des URLs `/article-*` qui n'existent pas. Réalignées sur les vraies URLs (`/loi-finances-2026`, `/tpme-maroc`, etc.).
- **Canonicals manquants ajoutés** : `glossaire.html`, `outils.html`, `salaire-net.html`, `simulateurs.html`.
- **Open Graph / Twitter** : `og:image`, `og:url`, `og:title`, `og:type`, `og:locale`, `og:site_name`, `twitter:card`, `twitter:image` ajoutés sur les 16 pages publiques (utilise `expert-comptable.webp` comme image de partage).
- **Preconnect Google Fonts** ajouté sur 15 pages (1 seule l'avait avant). Gain estimé 100–200 ms First Paint.
- **Sitemap.xml** mis à jour : ajout de `/outils`, dates `lastmod` actualisées, suppression d'URLs orphelines (`/blog` était mal positionné).

### 1.2 Liens internes

- **24 liens cassés `href="index#..."`** corrigés en `href="/#..."` sur 14 fichiers.
- **Liens nav cassés `href="blog"`, `href="simulateurs"` etc.** corrigés en chemins absolus (`/blog`, `/simulateurs`...). Évite les 301 inutiles via le rewriter `.htaccess`.

### 1.3 Performance

- **Lazy-loading + dimensions** ajoutés sur 12 images (`blog.html` x9, `mutations-2026.html`, `notification-dgimpots.html`, `tendances-creation-2025.html`, `index.html`). Plus de Cumulative Layout Shift sur les vignettes d'articles.
- **`decoding="async"`** ajouté en parallèle.

### 1.4 `.htaccess`

> ⚠️ **À noter** : le repo contient un `CNAME = firstaudit.ma`, qui suggère un déploiement **GitHub Pages**. Sur GitHub Pages, **`.htaccess` n'est pas interprété** — il n'a aucun effet. Si tu es bien sur GitHub Pages, soit le `.htaccess` est un reliquat d'un ancien hébergeur Apache, soit tu as un déploiement Apache parallèle. Dans le 1er cas, le fichier peut être supprimé ; dans le 2e, mes améliorations seront utiles.

- Réécrit pour Apache 2.2 **et** 2.4 (blocs `<IfModule mod_authz_core.c>` / `!mod_authz_core.c`).
- Ajout de redirections 301 pour les anciennes URLs `/article-*` (préserve le SEO si des liens externes existent encore).
- Ajout de headers de sécurité : `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Cache navigateur étendu (WebP, AVIF, fonts).
- Bloque l'accès à `.md`, `.log`, `.bak`, `.sql`, `.env` (sécurité).
- Suppression d'`ErrorDocument 404 /` qui générait des soft-404 (Google les pénalise).

### 1.5 Calculateurs fiscaux

- **Disclaimer "calcul indicatif / non opposable DGI"** ajouté en tête des pages `salaire-net.html` et `simulateurs.html`. Important pour la responsabilité légale d'un expert-comptable.

### 1.6 Corrections fiscales (2e passe, validées par l'utilisateur)

**`salaire-net.html`** — Calculateur de salaire net :
- **Barème IR mensuel** : remplacé l'ancien barème pré-LF 2025 (4 tranches max 30 %) par le barème LF 2026 à **6 tranches** (0 / 10 / 20 / 30 / 34 / 37 %), équivalent annuel 0 / 40k / 60k / 80k / 100k / 180k.
- **Frais professionnels** : remplacé l'ancienne règle « 20 % de la base IR plafonné à 2 500 DH » par la règle LF 2026 :
  - Brut annuel ≤ 78 000 DH → **35 %** plafonné à 30 000 DH/an (2 500 DH/mois)
  - Brut annuel > 78 000 DH → **25 %** plafonné à 35 000 DH/an (≈ 2 917 DH/mois)
- **CNSS** : conservé à 6 000 DH/mois (confirmé par l'utilisateur — la LF 2026 n'a PAS relevé le plafond, contrairement à mon hypothèse initiale).
- Label dynamique pour les frais pro (affiche le taux et plafond effectivement appliqués).
- Texte de l'info-box mis à jour pour décrire les 6 tranches et la règle frais pro à 2 paliers.

**`simulateurs.html`** — Simulateur IS :
- Texte info-box réécrit avec les **4 catégories LF 2026** : PME (20 %), GE (35 %), Banques/Assurances/Réassurance/BAM/CDG (40 %), CFC + ZAI (20 % peu importe BNF).
- Options de formulaire enrichies : ajout de **« ZAI — Zone d'Accélération Industrielle »**, libellé « CFC » explicité, libellé Banque/Assurance étendu (Réassurance, BAM, CDG).
- Logique JS `calculerIS()` mise à jour :
  - `credit` → 40 %
  - `casa-finance` / `zai` → 20 % (forcé, indépendant du BNF)
  - `standard` / `export` → 20 % si BNF ≤ 100 M, sinon 35 %
- **Cotisation minimale** : ajout de l'exonération **36 premiers mois** (`anneeCreation` désormais utilisée). CM = 0 si l'entreprise a moins de 3 ans.

**`glossaire.html`** :
- Entrée **IS** : alignée sur les **4 catégories LF 2026** (PME / GE / Banques+assurances / CFC+ZAI), avec mention de la CM 0,25 % et de l'exonération 36 mois.
- Entrée **TVA** : ne mentionne plus 14 % et 7 % (supprimés par convergence LF 2024 → LF 2026). Désormais : 20 % normal, 10 % réduit, 0 % exonération.

**`loi-finances-2026.html`** :
- Section « TVA : Harmonisation et simplification » réécrite : la convergence LF 2024 → LF 2026 est désormais présentée comme **achevée** au 1er janvier 2026, avec 2 taux principaux (20 % et 10 %) + le taux 0 %. Suppression des mentions 14 % et 7 %.

---

## 2. À valider AVEC TA BASE FISCALE (non modifié par prudence)

> **Mise à jour 2e passe** : Les points 2.1 à 2.6 ci-dessous ont été **validés et appliqués** dans la 2e passe (voir §1.6). Cette section est conservée pour traçabilité.

Je n'ai pas modifié les calculs fiscaux car certaines valeurs dépendent de l'application effective de la LF 2026 et de tes sources de référence. **À valider avec un expert-comptable / la base DGI avant publication.**

### 2.1 Plafond CNSS — `salaire-net.html:2604,2691,2782`

- **Actuellement** : 6 000 DH/mois (`Math.min(salaireBrut, 6000) * 0.0448`)
- **À vérifier** : la LF 2026 a-t-elle effectivement relevé ce plafond à 8 000 DH/mois ?
- **Si oui**, modifier :
  - texte info-box (ligne 2604)
  - libellé détail IR (ligne 2691)
  - constante JS (ligne 2782)

### 2.2 Barème IR (salaires) — `salaire-net.html:2751-2756`

- **Actuellement, barème MENSUEL utilisé** :
  ```
  0–2 500 DH    : 0 %
  2 501–4 166   : 10 %
  4 167–6 666   : 20 %
  6 667–15 000  : 30 %  (tronqué)
  ```
  → équivalent annuel 0/30k/50k/80k, **ancien barème pré-LF 2025**
- **Barème LF 2025 (toujours en vigueur en 2026, à confirmer)** — version ANNUELLE :
  ```
  0–40 000 DH     : 0 %
  40 001–60 000   : 10 %
  60 001–80 000   : 20 %
  80 001–100 000  : 30 %
  100 001–180 000 : 34 %
  > 180 000       : 37 %
  ```
  → équivalent mensuel : 3 333 / 5 000 / 6 667 / 8 333 / 15 000 / > 15 000
- **Impact actuel** : sous-estime l'IR pour les salaires > 6 667 DH/mois et ignore les tranches 34 % et 37 %.
- **Action** : valider le barème exact avec ta base, puis remplacer `baremeIR` en conséquence.

### 2.3 Barème IS — `simulateurs.html:3269` + JS simulateur

- **Actuellement** annoncé : "20 % pour bénéfices < 100 M DH, 35 % au-delà, 40 % établissements financiers".
- **À vérifier** : depuis LF 2023 le barème progressif IS est en transition (cible 2026). Vérifier les taux exacts applicables 2026 selon la catégorie d'entreprise (PME, grande entreprise, banque, assurance, statut CFC, etc.).
- **Action** : aligner texte info-box + logique JS du simulateur IS.

### 2.4 Définition IS dans le glossaire — `glossaire.html:2577`

- **Actuellement** : "Taux de 20 % pour bénéfices < 100 M DH, 35 % au-delà".
- **À aligner** avec le barème progressif réel (point 2.3).

### 2.5 Frais professionnels — `salaire-net.html:2607,2706,2790-2791`

- **Actuellement** : "20 % de la Base IR plafonné à **2 500 DH/mois**" (= 30 000 DH/an).
- **À vérifier** : le plafond annuel des frais professionnels est-il bien de 30 000 DH en 2026 ? (LF 2024 l'avait relevé). Si plafond annuel ≠ 30 000 DH, la valeur mensuelle 2 500 est à corriger.

### 2.6 TVA dans le glossaire — `glossaire.html:2592`

- **Actuellement** : "Taux normal 20 %, taux réduits 14 %, 10 % et 7 %".
- **OK** : tous ces taux existent au Maroc en 2026 (10 % pour hôtellerie / restauration / opérations bancaires). Mais ne mentionne pas le **taux 0 %** (exonération avec droit à déduction) ni la trajectoire de convergence (LF 2024 prévoit une harmonisation progressive).
- **Action** : enrichir la définition si pertinent.

---

## 3. Travaux recommandés (prochaine itération)

### 3.1 Performance — gros chantier

- **Extraire un `styles.css` partagé** : aujourd'hui ~87 % du poids HTML est du CSS inline dupliqué (1.40 MB sur 1.61 MB total). Un fichier partagé (~12–15 KB) sauverait ~190 KB. Demande de toucher aux 17 pages, à faire avec une review.
- **Convertir PNG → WebP/AVIF** : `logo.png` (42 KB), `favicon-512.png` (42 KB). Gain estimé ~40 KB.
- **Doublon favicon** : `favicon-192.png` et `apple-touch-icon.png` sont presque identiques (~11 KB chacun). Fusionner.

### 3.2 SEO — enrichissement

- **Schema.org JSON-LD manquant sur 15 pages** : seul `index.html` a `AccountingService`. Ajouter :
  - `Article` + `BreadcrumbList` sur les pages article (loi-finances, IS, etc.)
  - `FAQPage` si présence de Q/R
  - `BreadcrumbList` sur outils/glossaire
- **Image OG dédiée** : `expert-comptable.webp` (630×658) marche, mais Facebook/LinkedIn préfèrent 1200×630. Créer une bannière sociale dédiée.

### 3.3 Accessibilité

- Aucun audit a11y poussé n'a été fait. À planifier :
  - Vérifier les contrastes (les `#64748b` sur fond clair peuvent être limites WCAG AA).
  - Labels formulaires (salaire-net, simulateurs) : vérifier l'association `label`/`input`.
  - Navigation clavier sur le bouton dark mode + les onglets simulateurs.
  - `aria-current="page"` sur le lien nav actif.

### 3.4 Tag Google Ads

- Le tag `AW-17941133676` est répété sur 5+ pages (c'est un tag **Google Ads**, pas Analytics — pas de tag `G-` Analytics 4 trouvé).
- Si c'est intentionnel (suivi de conversion Ads uniquement), OK. Sinon ajouter aussi un tag GA4 pour avoir l'audience.

### 3.5 Contenu

- `favicon-code.html` : fichier de doc interne, à supprimer ou déplacer hors webroot.
- `logo.png` : présent dans le repo mais jamais utilisé. Soit l'employer en navigation, soit le supprimer.
- Pages outils (`outils.html`, `simulateurs.html`) : ajouter des liens contextuels vers les articles fiscaux concernés (maillage interne).

---

## 4. Notes méthodologiques

- Audit produit en croisant 3 agents (structure / fiscal / perf) puis vérification manuelle des findings critiques.
- Date de référence : 12 mai 2026.
- Toute valeur fiscale dans la section 2 doit être validée contre la **base fiscale officielle (CGI, LF 2026, circulaires DGI)** avant publication. Mes hypothèses peuvent être inexactes sur des évolutions très récentes (BO postérieur à janvier 2026).
- Ce fichier `AUDIT.md` sera servi publiquement sur GitHub Pages (`https://firstaudit.ma/AUDIT.md`). Si tu veux le cacher, ajoute un `_config.yml` :
  ```yaml
  exclude:
    - AUDIT.md
  ```
