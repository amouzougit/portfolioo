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

Décrocher un CDI. Positionnement retenu : **Ingénieur Digitalisation Industrielle et SI**,
aligné sur `CV_Kevo_Amouzou_Industriel.pdf`.

Ne pas confondre deux choses :

- le **positionnement visé**, « Ingénieur Digitalisation Industrielle et SI », qui sert dans le
  titre, les metas, le JSON-LD, le hero et le pied de page ;
- le **poste réellement occupé** chez BH2M, « Assistant Chef de Projet Digitalisation Industrielle
  et SI », qui est l'intitulé exact du CV et ne doit apparaître que sur la ligne BH2M.

Cibles de postes : chef de projet digitalisation industrielle, ingénieur méthodes et amélioration
continue, data et pilotage industriel. Secteurs : industrie, énergie, ingénierie. Pas de
spécialisation sectorielle affichée : la seule expérience du secteur est la mission BH2M.

## Architecture

Site statique, sans build, sans dépendances à installer.

```
index.html                      tout le site : HTML, CSS inline, JS inline, projets en HTML statique
sw.js                           service worker (HTML et CV en network-first, autres ressources
                                en stale-while-revalidate)
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
session 002 : le CSS est écrit à la main dans `index.html` et le JS se limite à trois blocs
(bouton retour en haut, lien de navigation actif, menu mobile). Ne pas les réintroduire.

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
le flux, de mettre `/Length` à jour et de reconstruire la table xref. Vérifier ensuite que les
flux se décompressent et que le nombre de lignes de texte est inchangé.

## Workflow

```bash
# aperçu local
python3 -m http.server 8899 --bind 127.0.0.1   # puis http://127.0.0.1:8899/index.html

# déploiement : pousser sur main déclenche Netlify
git push origin main
```

Incrémenter `CACHE_VERSION` dans `sw.js` après toute modification d'un fichier listé dans
`PRECACHE`. Ce n'est plus une condition de fraîcheur depuis la session 003, seulement une
purge propre : `index.html` et le CV sont en network-first, `images/kevo.jpeg` en
stale-while-revalidate, donc un oubli ne fige plus le site sur une version périmée.

Le HTML et le CV sont refetchés avec `cache: 'reload'`, ce qui court-circuite aussi le cache
HTTP du navigateur. Un visiteur déjà venu voit donc la nouvelle page dès le premier chargement
suivant un déploiement.

Vérifications avant de pousser :

```bash
grep -c "—" index.html README.md            # doit renvoyer 0 pour les deux
python3 -c "import re;[print(f,len(re.findall('[\U0001F300-\U0001FAFF]',open(f,encoding='utf-8').read()))) for f in ['index.html','README.md']]"   # doit renvoyer 0
```

Contrôler aussi :

- les 5 ancres `#about`, `#skills`, `#projects`, `#experience`, `#contact` ;
- l'affichage des 3 cartes projets ;
- la numérotation des sections, `01 · Résultats`, `02 · Compétences`, `03 · Projets`, dans cet
  ordre d'apparition ;
- l'absence d'erreur console.

## Journal des sessions

Voir @SESSIONS.md. Y consigner chaque session : date, objectif, ce qui a été fait, décisions prises,
ce qui reste ouvert.
