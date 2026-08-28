#!/bin/sh
# Prepare le dossier a publier pour Cloudflare Pages.
#
# Pourquoi une liste explicite plutot qu'un deploiement de la racine :
# Cloudflare Pages sert tout ce qu'il trouve, et sa syntaxe _redirects ne
# connait pas le "!" de Netlify qui force une regle sur un fichier existant.
# CLAUDE.md, SESSIONS.md et README.md seraient donc lisibles publiquement.
# On ne deploie que ce qui doit etre public : ce qui n'est pas liste ici
# n'atteint jamais le web.
set -e
rm -rf dist
mkdir -p dist
# _redirects n'est pas copie : sa syntaxe "301!" est propre a Netlify et Cloudflare
# la rejette. Les fichiers qu'il protegeait ne sont de toute facon pas publies ici.
cp index.html projets.html merci.html 404.html styles.css sw.js manifest.json \
   robots.txt sitemap.xml CV_Kevo_Amouzou_Industriel.pdf dist/
cp -r images dist/images
echo "dist prepare :"
ls dist
