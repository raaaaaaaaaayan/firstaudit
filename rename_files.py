#!/usr/bin/env python3
"""
Script pour renommer les fichiers du site First Audit pour GitHub Pages
et mettre à jour tous les liens internes
"""

import os
import re
from pathlib import Path

# Mapping des anciens noms vers les nouveaux noms (URLs plus courtes et SEO)
RENAME_MAP = {
    # Articles - noms plus courts
    'article-cgi-2026.html': 'impot-societes-2026.html',
    'article-creation-entreprise.html': 'creer-entreprise.html',
    'article-creations-entreprises-2025.html': 'tendances-creation-2025.html',
    'article-digitalisation-comptable.html': 'digitalisation-comptable.html',
    'article-dispositif-tpme.html': 'tpme-maroc.html',
    'article-loi-finances-2026.html': 'loi-finances-2026.html',
    'article-mutations-entreprise-2026.html': 'mutations-2026.html',
    'article-notification-electronique-2026.html': 'notification-dgimpots.html',
    'article-recettes-fiscales-2025.html': 'recettes-fiscales-2025.html',
    
    # Pages principales
    'calculateur-salaire-net.html': 'salaire-net.html',
    'calculateurs.html': 'outils.html',
    'articles.html': 'blog.html',
    
    # Images
    'el-hassan-boukhanni.jpg': 'expert-comptable.jpg',
    'logo-invert.jpg': 'logo.jpg',
}

def update_html_links(content, rename_map):
    """Met à jour tous les liens dans le contenu HTML"""
    for old_name, new_name in rename_map.items():
        # Remplacer les liens href
        content = re.sub(
            rf'href="({old_name})"',
            f'href="{new_name}"',
            content
        )
        content = re.sub(
            rf"href='({old_name})'",
            f"href='{new_name}'",
            content
        )
        
        # Remplacer les liens src pour les images
        content = re.sub(
            rf'src="({old_name})"',
            f'src="{new_name}"',
            content
        )
        content = re.sub(
            rf"src='({old_name})'",
            f"src='{new_name}'",
            content
        )
    
    return content

def main():
    base_dir = Path('/home/claude')
    output_dir = Path('/mnt/user-data/outputs/site-first-audit')
    output_dir.mkdir(exist_ok=True, parents=True)
    
    # Étape 1: Copier et renommer les fichiers
    print("📁 Renommage des fichiers...\n")
    for old_name, new_name in RENAME_MAP.items():
        old_path = base_dir / old_name
        new_path = output_dir / new_name
        
        if old_path.exists():
            print(f"✓ {old_name:50} → {new_name}")
            
            if old_path.suffix in ['.html', '.xml', '.txt']:
                # Pour les fichiers texte, lire et mettre à jour les liens
                content = old_path.read_text(encoding='utf-8')
                content = update_html_links(content, RENAME_MAP)
                new_path.write_text(content, encoding='utf-8')
            else:
                # Pour les images et autres fichiers binaires, copier directement
                new_path.write_bytes(old_path.read_bytes())
        else:
            print(f"⚠ {old_name} non trouvé")
    
    # Étape 2: Copier les fichiers qui ne changent pas de nom
    print("\n📄 Copie des fichiers inchangés...\n")
    for file_path in base_dir.glob('*'):
        if file_path.is_file() and file_path.name not in RENAME_MAP:
            output_path = output_dir / file_path.name
            
            print(f"✓ {file_path.name}")
            
            if file_path.suffix in ['.html', '.xml', '.txt']:
                content = file_path.read_text(encoding='utf-8')
                content = update_html_links(content, RENAME_MAP)
                output_path.write_text(content, encoding='utf-8')
            else:
                output_path.write_bytes(file_path.read_bytes())
    
    # Créer un fichier de documentation
    doc_path = output_dir / 'RENAMING_MAP.md'
    doc_content = """# Mapping des URLs

Ce fichier documente les changements de noms de fichiers pour GitHub Pages.

## Articles

| Ancien nom | Nouveau nom | Raison |
|------------|-------------|--------|
"""
    
    for old_name, new_name in sorted(RENAME_MAP.items()):
        if old_name.startswith('article-'):
            doc_content += f"| {old_name} | {new_name} | URL plus courte et SEO |\n"
    
    doc_content += "\n## Pages principales\n\n| Ancien nom | Nouveau nom | Raison |\n|------------|-------------|--------|\n"
    
    for old_name, new_name in sorted(RENAME_MAP.items()):
        if old_name.startswith(('calculateur', 'articles.html')):
            doc_content += f"| {old_name} | {new_name} | URL simplifiée |\n"
    
    doc_content += "\n## Images\n\n| Ancien nom | Nouveau nom | Raison |\n|------------|-------------|--------|\n"
    
    for old_name, new_name in sorted(RENAME_MAP.items()):
        if old_name.endswith(('.jpg', '.png')):
            doc_content += f"| {old_name} | {new_name} | Nom plus générique |\n"
    
    doc_path.write_text(doc_content, encoding='utf-8')
    
    print(f"\n✅ Terminé! Fichiers renommés dans: {output_dir}")
    print(f"📋 Documentation créée: {doc_path}")
    
    # Statistiques
    html_files = list(output_dir.glob('*.html'))
    print(f"\n📊 Statistiques:")
    print(f"   - {len(html_files)} fichiers HTML")
    print(f"   - {len(list(output_dir.glob('*.jpg')))} images")
    print(f"   - {len(RENAME_MAP)} fichiers renommés")

if __name__ == '__main__':
    main()
