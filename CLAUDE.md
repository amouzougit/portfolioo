# CLAUDE.md

Contexte projet pour tout agent (Claude Code, Kimi, autre) travaillant sur ce dépôt.
Lire ce fichier avant toute modification.

## Projet

Portfolio professionnel de Kevo Amouzou, utilisé activement pour une recherche de CDI.
Ce n'est pas un projet d'expérimentation : chaque phrase publiée peut être lue par un recruteur
et confrontée au CV et au profil LinkedIn.

- Production : https://keen-selkie-a72fc7.netlify.app/
- Déploiement : Netlify, branche `main` du dépôt github.com/amouzougit/portfolioo
- Domaine cible `kevoamouzou.com` : non enregistré à ce jour, ne pas y faire pointer d'URL

## Objectif

Décrocher un CDI. Positionnement retenu : **Chef de Projet SI et Méthodes Industrielles,
digitalisation des opérations**, aligné sur `CV_Kevo_Amouzou_Industriel.pdf`.

Cibles de postes : chef de projet digitalisation industrielle, ingénieur méthodes et amélioration
continue, data et pilotage industriel. Secteurs : industrie, énergie, ingénierie.

## Architecture

Site statique, sans build, sans dépendances à installer.

```
index.html                      tout le site : HTML, CSS inline, JS inline, données projets (Alpine.js)
sw.js                           service worker (HTML en network-first, statique en cache-first)
manifest.json                   PWA
images/kevo.jpeg                portrait, seule image de la page
CV_Kevo_Amouzou_Industriel.pdf  CV lié depuis le site
CV_Kevo_Amouzou_CDI.pdf         ancien CV, périmé, non lié
index.html.bak                  résidu à supprimer
style.css, projects.js          orphelins, plus référencés par index.html
```

Dépendances chargées par CDN : Tailwind (mode CDN), Alpine.js, GSAP + ScrollTrigger, Phosphor Icons,
Fontshare. Formulaire de contact : Formspree, endpoint `mjknokbg`.

## Règles de contenu, non négociables

1. **Aucun chiffre qui ne figure pas dans le CV.** Si un chiffre est ajouté au site, il doit être
   ajouté au CV dans le même mouvement. Un recruteur compare les deux.
2. **Aucun intitulé de poste inventé ou gonflé.** Les titres du site sont ceux du CV, mot pour mot.
3. **Aucun témoignage, avatar, logo client ou preuve sociale non vérifiable.**
4. **Pas d'emoji.** Aucun, nulle part dans le rendu.
5. **Pas de tiret cadratin.** Utiliser `·`, `:`, `,` ou un tiret simple pour les plages de dates.
6. **Pas d'image de banque d'images.** Le portrait est la seule image de la page.
7. Écriture directe et factuelle, en français. Pas de promesse générique sans preuve derrière.

## Cohérence à maintenir en permanence

Site, CV PDF et profil LinkedIn doivent dire la même chose sur : intitulés de poste, dates,
employeurs, niveau de langue, chiffres. Toute modification de l'un implique de vérifier les deux autres.

## Workflow

```bash
# aperçu local
python3 -m http.server 8899 --bind 127.0.0.1   # puis http://127.0.0.1:8899/index.html

# déploiement : pousser sur main déclenche Netlify
git push origin main
```

Après toute modification de `index.html`, incrémenter `CACHE_VERSION` dans `sw.js`. Sans cela,
les visiteurs déjà venus continuent de voir l'ancienne page.

Vérifications avant de pousser :

```bash
grep -c "—" index.html                     # doit renvoyer 0
python3 -c "import re;print(len(re.findall('[\U0001F300-\U0001FAFF]',open('index.html',encoding='utf-8').read())))"   # doit renvoyer 0
```

Contrôler aussi : les 5 ancres (`#about`, `#skills`, `#projects`, `#experience`, `#contact`),
l'affichage des 6 cartes projets, et l'absence d'erreur console.

## Journal des sessions

Voir @SESSIONS.md. Y consigner chaque session : date, objectif, ce qui a été fait, décisions prises,
ce qui reste ouvert.
