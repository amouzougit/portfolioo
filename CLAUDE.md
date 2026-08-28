# CLAUDE.md

Contexte projet pour tout agent (Claude Code, Kimi, autre) travaillant sur ce dépôt.
Lire ce fichier avant toute modification.

## Projet

Portfolio professionnel de Kevo Amouzou, utilisé activement pour une recherche de CDI.
Ce n'est pas un projet d'expérimentation : chaque phrase publiée peut être lue par un recruteur
et confrontée au CV et au profil LinkedIn.

- Production : https://kevo-amouzou.pages.dev/
- Déploiement : Cloudflare Pages, branche `main` du dépôt github.com/amouzougit/portfolioo
- Ancienne production : https://keen-selkie-a72fc7.netlify.app/ toujours en ligne mais figée
  au 16 août 2026. L'équipe Netlify `school` plafonne à 20 déploiements par cycle de
  facturation, plafond atteint. Site conservé le temps de la bascule, à ne plus alimenter.
- Domaine cible `kevoamouzou.com` : non enregistré à ce jour, ne pas y faire pointer d'URL

## Objectif

Décrocher un CDI. Positionnement retenu : **Ingénieur Digitalisation Industrielle et SI**,
aligné sur `CV_Kevo_Amouzou_Industriel.pdf`.

Ne pas confondre deux choses :

- le **positionnement visé**, « Ingénieur Digitalisation Industrielle et SI », qui sert dans le
  titre, les metas, le JSON-LD, le hero et le pied de page ;
- le **poste réellement occupé** chez BH2M, « Assistant Chef de Projet Digitalisation Industrielle
  et SI », qui est l'intitulé exact du CV et ne doit apparaître que sur la ligne BH2M.

Cibles de postes : ingénieur digitalisation industrielle, ingénieur méthodes et amélioration
continue, data et pilotage industriel. Ces trois intitulés sont affichés à l'identique dans le
hero et dans la section Postes recherchés, ils doivent le rester.

Ne pas afficher « Chef de projet » comme objectif : en France ce titre suppose 3 à 5 ans
d'expérience, et le hero annonce « Ingénieur ». Le titre réellement occupé chez BH2M,
« Assistant Chef de Projet », reste bien sûr affiché sur la ligne BH2M.

Secteurs : industrie, énergie, ingénierie, et rien d'autre. Les trois sont énoncés une seule
fois, dans l'encadré en bas de la section Postes recherchés. Élargir à Automotive, Pharma,
Distribution ou Consulting a déjà été fait et retiré : sans expérience du secteur, cela se lit
comme du tir à vue. « Énergie » est légitime, la mission BH2M est de l'ingénierie hydroélectrique.

## Architecture

Site statique, sans build, sans dépendances à installer.

```
index.html                      accueil : HTML et JS inline, 3 cartes projets en apercu
projets.html                    page projets detaillee : 5 projets, une ancre par projet
styles.css                      style unique du site, partage par index.html et projets.html
sw.js                           service worker (HTML, CV et styles.css en network-first,
                                autres ressources en stale-while-revalidate)
manifest.json                   PWA
robots.txt, sitemap.xml         indexation
_redirects                      Netlify : CLAUDE.md, SESSIONS.md et README.md renvoient vers /
                                (Netlify ne supporte pas le glob /*.md, il faut des chemins
                                explicites, avec ! pour forcer la regle)
images/kevo.jpeg                portrait, seule image de la page
images/icon-192.png, icon-512   icônes PWA
CV_Kevo_Amouzou_Industriel.pdf  CV lié depuis le site, seul CV diffusé
.archive/                       fichiers de travail hors dépôt (gitignored), ne pas les remettre
                                sous git : ils seraient servis en production
```

Chargé par CDN : Phosphor Icons (unpkg), polices Fontshare. Formulaire de contact : Formspree,
endpoint `mjknokbg`.

Aucun framework JavaScript. Tailwind CDN, Alpine.js, GSAP et ScrollTrigger ont été retirés en
session 002 : le CSS est écrit à la main et le JS se limite à quelques blocs (bouton retour en
haut, lien de navigation actif, menu mobile, envoi du formulaire). Ne pas les réintroduire.

Le CSS a été sorti de `index.html` vers `styles.css` en session 007, quand `projets.html` est
apparue. Source unique : une couleur, un composant ou une classe utilitaire ne se modifie qu'à
un seul endroit. Ne pas remettre de bloc `<style>` dans `index.html` ni dans `projets.html`.
`merci.html` fait exception et garde son style propre : page autonome, hors parcours de lecture.

`styles.css` est dans `ALWAYS_FRESH` de `sw.js`. Il porte tout le style du site : une version
périmée servie à côté d'un HTML frais afficherait une page nue.

## Règles de contenu, non négociables

1. **Aucun chiffre qui ne figure pas dans le CV.** Si un chiffre est ajouté au site, il doit être
   ajouté au CV dans le même mouvement. Un recruteur compare les deux.
2. **Aucun intitulé de poste inventé ou gonflé.** Les titres du site sont ceux du CV, mot pour mot.
3. **Aucun témoignage, avatar, logo client ou preuve sociale non vérifiable.**
4. **Pas d'emoji.** Aucun, nulle part dans le rendu.
5. **Pas de tiret cadratin.** Utiliser `·`, `:`, `,` ou un tiret simple pour les plages de dates.
6. **Pas d'image de banque d'images.** Le portrait est la seule image de la page.
7. Écriture directe et factuelle, en français. Pas de promesse générique sans preuve derrière.
8. Typographie française : espace avant `:`, `?`, `!`, `;`.

## Cohérence à maintenir en permanence

Site, CV PDF, `README.md` et profil LinkedIn doivent dire la même chose sur : intitulés de poste,
dates, employeurs, secteurs, niveau de langue, chiffres. Toute modification de l'un implique de
vérifier les autres.

`README.md` compte autant que le site : c'est la page d'accueil du dépôt GitHub, donc un document
lu par un recruteur. Les règles de contenu ci-dessus s'y appliquent intégralement.

Le CV est un PDF mPDF à xref classique, encodage Identity où le CID vaut le point de code Unicode.
Le modifier suppose de réencoder le texte glyphe par glyphe dans le flux de page, de recompresser
le flux, de mettre `/Length` à jour et de décaler la table xref. Script de référence, session 008 :
`.archive/patch_cv.py`.

Trois pièges, tous rencontrés :

1. **Les objets ne sont pas rangés par numéro.** Le flux de page appartient à l'objet 4, qui se
   trouve à l'offset 87, alors que l'objet 3 est à l'offset 9. Une expression du type
   `\n3 0 obj(.{0,400}?)stream` enjambe l'objet 3 et attrape le flux de l'objet 4. Cibler
   l'objet qui contient réellement `Td` et `Tj` après décompression.
2. **Seuls les offsets situés après l'objet modifié se décalent.** L'objet 4 porte le flux mais
   commence avant lui : son propre offset ne bouge pas.
3. **Les polices sont des sous-ensembles.** Seuls les contours des glyphes réellement
   utilisés sont embarqués. La table `/W` déclare pourtant des largeurs pour bien plus de
   caractères : elle ne prouve **pas** qu'un glyphe est affichable. Ajouter une lettre absente
   de la ligne d'origine produit un carré vide à l'écran, alors que le calcul de largeur
   passe. Vérifier quels caractères la police porte déjà, en listant ceux du texte existant
   rendu avec cette police, et confirmer par un rendu réel. Exemple rencontré : la ligne
   italique `Permis B | Mobilite : France entiere | Teletravail hybride possible` ne contient
   ni `k`, ni `z`, ni `g`. Y écrire `kevo-amouzou.pages.dev` affiche `□evo-amou□ou.pa□es.dev`.
4. **Le layout est figé.** Les valeurs des compétences démarrent à x=195.59, la marge droite est
   à 549.92, soit 354.33 points de budget en F1 9pt. Calculer la largeur du texte avec la table
   `/W` de la police avant d'allonger une ligne, sinon elle sort de la page sans prévenir.

Vérifier ensuite : tous les flux se décompressent, chaque entrée xref pointe bien sur
`N 0 obj`, `startxref` tombe sur `xref`, le nombre de lignes de texte est inchangé, et le PDF
s'ouvre dans un vrai lecteur. Comparer systématiquement avec la version d'avant, certaines
anomalies préexistent.

## Workflow

```bash
# aperçu local
python3 -m http.server 8899 --bind 127.0.0.1   # puis http://127.0.0.1:8899/index.html

# aperçu de ce qui sera reellement publie
./build.sh && cd dist && python3 -m http.server 8898 --bind 127.0.0.1

# déploiement : pousser sur main déclenche Cloudflare Pages
git push origin main
```

Réglages Cloudflare Pages, à ne pas modifier sans lire ce qui suit :

| Champ | Valeur |
|---|---|
| Build command | `./build.sh` |
| Build output directory | `dist` |
| Branche de production | `main` |

`build.sh` copie une **liste explicite** de fichiers vers `dist/`. Tout ce qui n'y figure
pas n'est jamais publié. C'est ce qui protège `CLAUDE.md`, `SESSIONS.md` et `README.md` :
Cloudflare Pages ne connaît pas le `!` de la syntaxe `_redirects` de Netlify, qui force une
redirection sur un fichier existant. Sans cette liste, le journal de travail serait lisible
publiquement. Ajouter un fichier au site implique donc de l'ajouter à `build.sh`.

Un `git push` déclenche un déploiement. Grouper les commits et pousser une seule fois.

Incrémenter `CACHE_VERSION` dans `sw.js` après toute modification d'un fichier listé dans
`PRECACHE`. Ce n'est plus une condition de fraîcheur depuis la session 003, seulement une
purge propre : `index.html` et le CV sont en network-first, `images/kevo.jpeg` en
stale-while-revalidate, donc un oubli ne fige plus le site sur une version périmée.

Le HTML et le CV sont refetchés avec `cache: 'reload'`, ce qui court-circuite aussi le cache
HTTP du navigateur. Un visiteur déjà venu voit donc la nouvelle page dès le premier chargement
suivant un déploiement.

Vérifications avant de pousser :

```bash
grep -c "—" index.html projets.html styles.css README.md   # doit renvoyer 0 partout
python3 -c "import re;[print(f,len(re.findall('[\U0001F300-\U0001FAFF]',open(f,encoding='utf-8').read()))) for f in ['index.html','projets.html','README.md']]"   # doit renvoyer 0
```

Contrôler aussi :

- les 5 ancres `#about`, `#skills`, `#projects`, `#experience`, `#contact` sur `index.html` ;
- les 5 ancres `#bi-dolibarr`, `#chatbot-rag`, `#pipeline-elt`, `#digital-twin`,
  `#supply-chain` sur `projets.html` ;
- l'affichage des 3 cartes projets sur l'accueil et des 5 projets détaillés sur `projets.html` ;
- que `styles.css` est bien chargé sur les deux pages, aucun bloc `<style>` inline ;
- la numérotation des sections, `01 · Résultats`, `02 · Compétences`, `03 · Projets`, dans cet
  ordre d'apparition ;
- l'absence d'erreur console.

## Journal des sessions

Voir @SESSIONS.md. Y consigner chaque session : date, objectif, ce qui a été fait, décisions prises,
ce qui reste ouvert.
