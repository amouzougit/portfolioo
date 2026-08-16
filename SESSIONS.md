# Journal des sessions

Une entrée par session de travail. Ordre antichronologique, la plus récente en haut.
Format : objectif, fait, décisions, ouvert.

---

## Session 003 — 16 août 2026 — Relecture du contenu et nettoyage des résidus

**Objectif**

Relire le texte publié en le confrontant au CV PDF, puis sortir du dépôt les fichiers de travail
qui n'ont rien à faire en production.

**Fait**

Contenu du site, écarts avec le CV
- `+15 tableaux de bord` subsistait dans la timeline BH2M. La session 002 avait annoncé sa
  suppression, elle n'avait été faite que dans le hero et les cartes de résultats. Le site se
  contredisait donc lui-même. Remplacé par `10+ indicateurs de pilotage sur 3 processus métiers`.
- Deux chiffres absents du CV retirés : `+50 tâches quotidiennes` (timeline et carte de résultats)
  et `+50 comptes utilisateurs sécurisés`. Formulations reprises sans le chiffre.
- Reste de positionnement supply chain dans la section Postes recherchés : « data et business se
  rencontrent », « vision stratégique supply chain/affaires ». Réécrit sur le positionnement
  industriel.
- `Master Informatique et Systèmes` complété en `Master Informatique et Systèmes d'Information`,
  intitulé exact du CV.
- Mobilité : la page disait trois choses différentes (« France & Europe » dans le badge,
  « France entière » dans le hero, « France métropole, Luxembourg, Suisse » dans les postes
  recherchés). Tout aligné sur le CV : France entière, permis B, télétravail hybride possible.
- Numérotation des sections : elle affichait 01, 03, 02. Remise en ordre 01, 02, 03.
- Espace avant deux-points rétabli : `Secteurs :`, `Localisation :`, `Niveau :`.

README
- Le fichier était resté sur l'ancien positionnement et contredisait le site sur presque tout :
  « Ingénieur d'Affaires & Data Engineering », « Senior (3-4 ans) », « Polonais (Courant) »,
  « +15 Metabase Dashboards », « 95% user adoption », « training 100+ staff », « <2s Latency »,
  « Senior AI Engineer », « Tech Startup (Canada) », « 6 projets », « Disponible Août 2026 »,
  plus les emojis et les tirets cadratins bannis, et une description de la stack technique
  (GSAP, Tailwind, Alpine) supprimée en session 002.
- Réécrit intégralement à partir du CV et du site. C'est la page d'accueil du dépôt GitHub,
  donc un document lu par un recruteur.

Code mort
- `myPortfolio()` supprimé, 55 lignes : données Alpine devenues inutiles après le passage des
  projets en HTML statique, jamais appelées, et déjà divergentes du HTML affiché.
- Commentaire `<!-- Canada -->` corrigé en `<!-- Mission IA en remote -->`, l'expérience est
  présentée comme « client international » partout ailleurs.

Résidus sortis du dépôt
- `PROMPT-KIMI.md`, `diagnostic-portfolio-2026-08-15.md` et `images/resilience_chart.png`
  étaient suivis par git, donc servis en production. N'importe qui pouvait lire
  `/diagnostic-portfolio-2026-08-15.md`, un document de 30 Ko listant tous les défauts du
  portfolio. Déplacés dans `.archive/`, ignoré par git. Ils répondent maintenant 404.
- `CACHE_VERSION` passé de `v3` à `v4`.

**Décisions**

| Sujet | Décision |
|---|---|
| Chiffres absents du CV | Retirés du site plutôt qu'ajoutés au CV, le PDF n'est pas retouché |
| Mobilité | Formulation du CV, France entière, reprise partout |
| Fichiers de travail | Conservés en local dans `.archive/`, hors dépôt et hors production |
| README | Réécrit, aligné sur le CV et le site |

**Contrôles**

0 tiret cadratin et 0 emoji dans `index.html` et `README.md`. Aucune occurrence de
`+15`, `95%`, `100+`, `Polonais`, `Senior (`, `supply chain`, `+50`, `Canada`, `Août 2026`.
5 ancres présentes, 3 cartes projets, numérotation 01 / 02 / 03, blocs script équilibrés,
JSON-LD valide, 107 `div` ouverts et fermés. Servi en local : page, CV, portrait, `sw.js`,
`manifest.json`, `robots.txt` et `sitemap.xml` en 200, les trois résidus en 404.

**Ouvert**

- `CLAUDE.md` est périmé : il décrit encore `index.html.bak`, `style.css`, `projects.js`,
  Tailwind CDN, Alpine, GSAP et `CV_Kevo_Amouzou_CDI.pdf`, tous supprimés. Non traité.
- `CLAUDE.md`, `SESSIONS.md` et `README.md` restent servis en production. `SESSIONS.md` décrit
  les chiffres retirés du site, ce qui est lisible par un recruteur. Piste : un `netlify.toml`
  renvoyant 404 sur ces chemins.
- Deux tags de compétences, `Active Directory` et `KeePass`, ne figurent pas dans la rubrique
  Compétences du CV. Ils apparaissent en revanche dans les missions BH2M.
- La Licence Génie Logiciel de l'Université de Lomé figure sur le site mais pas dans la rubrique
  Formation du CV.
- Formspree toujours jamais testé en conditions réelles.
- Profil LinkedIn toujours à confronter au site et au CV.

---

## Session 002 — 16 août 2026 — Revue externe et passage en version sobre

**Objectif**

Appliquer les recommandations de la revue externe (Kimi) sur le fond, la forme et la performance.

**Fait**

Structure, de 12 sections à 7
- Supprimé : bandeau "Domaines d'expertise", bandeau de 4 chiffres en doublon, section
  "Ce que je leur apporte", bibliographie, section Certifications autonome.
- Certifications et langues regroupées dans une carte compacte de la section Compétences.
- Compétences ramenées de 6 blocs à 3 : digitalisation et SI industriels, data et développement,
  méthodes et conduite de projet.
- Projets ramenés de 6 à 3. La mention "Projet confidentiel" est remplacée par le contexte réel :
  "Déployé en production chez BH2M, code propriétaire", "Mission internationale en remote",
  "Code ouvert, dépôt public".
- Hauteur de page divisée par un peu plus de deux, environ 7 500 pixels.

Contenu
- Intitulé visé abaissé : "Ingénieur Digitalisation Industrielle et SI" remplace
  "Chef de Projet SI et Méthodes Industrielles" dans le titre, les metas, le JSON-LD, le hero,
  l'alt du portrait et le pied de page. Le titre exact du CV reste affiché sur la ligne BH2M.
- Les 3 cartes de résultats sont réécrites au format problème métier, action, résultat.
- Chiffre Metabase aligné sur le CV industriel : 10+ indicateurs sur 3 processus métiers
  (Offre, Achats, SSE) remplace "+15 dashboards".
- Dates de la mission IA alignées sur le CV : Oct. 2025 - Jan. 2026. Employeur : client international.
- Chiffres du hero contextualisés (outil, techno, périmètre) au lieu d'un nombre seul.
- Ajout de la phrase de positionnement : "Je cherche des contextes industriels où la digitalisation
  n'est pas un projet informatique, mais une transformation des opérations de terrain."
- Ajout de la mobilité : Belfort, permis B, mobilité France entière, télétravail hybride.
- Pas de spécialisation énergie ou hydroélectrique : la seule expérience du secteur est le stage BH2M.
- Restes de l'ancien positionnement supply chain nettoyés (postes recherchés, compétences clés du
  Master A2I, sous-titres).

Sobriété visuelle et performance
- Palette : fond #F7F7F4 légèrement chaud, accent bleu industriel #0F4C81, plus aucun dégradé.
- Hover des cartes : translateY(-2px) et ombre légère, plus de tilt 3D ni de halo.
- Supprimé : GSAP, ScrollTrigger, Alpine.js, curseur personnalisé, canvas animé, blobs de fond,
  barre de progression de scroll, indicateur "Scroll", compteurs animés, grain de bruit.
- Toutes les animations au scroll supprimées. Reste un fondu unique de 300 ms sur le hero.
- Les 3 projets sont désormais du HTML statique, le menu mobile en JavaScript natif
  (avec fermeture par Échap et gestion de aria-expanded).
- Chiffres figés, affichés immédiatement.

**Décisions**

| Sujet | Décision |
|---|---|
| Intitulé visé | Ingénieur Digitalisation Industrielle et SI |
| Spécialisation sectorielle | Aucune, cible industrie et ingénierie large |
| Chiffre Metabase | 10+ indicateurs sur 3 processus, aligné sur le CV industriel |
| Dates mission IA | Oct. 2025 - Jan. 2026, aligné sur le CV |
| Animations | Aucune au scroll, un seul fondu au chargement |
| Bibliothèques JS | GSAP, ScrollTrigger et Alpine supprimés |

**Déploiement**

Commit `1324685` poussé sur `main` le 16 août 2026, déploiement Netlify confirmé.
Contrôles en production : 0 emoji, 0 tiret cadratin, 0 référence à Tailwind, GSAP, Alpine, Unsplash
ou au domaine non enregistré, 0 témoignage, 0 mention "Polonais" ou "+15 dashboards".
robots.txt, sitemap.xml, manifest, service worker, icônes et CV répondent en 200.
`index.html.bak`, `style.css` et `projects.js` renvoient bien 404.
Page mesurée en production : 7 sections, 3 projets, 14 requêtes, chargement complet en 2,0 s
contre 4,5 s avant, hauteur 6 566 pixels contre environ 11 000.

Observation utile : au premier chargement après déploiement, l'ancien service worker a servi
la page en cache. Le nouveau s'est installé puis a pris la main au chargement suivant. Les
visiteurs déjà venus verront donc l'ancienne version une seule fois, puis la nouvelle.

**Ouvert**

- Fait : Tailwind CDN remplacé par 260 lignes de CSS écrites à la main, plus un reset équivalent
  au preflight. Avec GSAP, ScrollTrigger et Alpine, environ 560 Ko de JavaScript en moins.
- Le CV PDF doit suivre le changement d'intitulé : son en-tête dit encore
  "Chef de Projet SI et Méthodes Industrielles".
- Fait : `CV_Kevo_Amouzou_Industriel.pdf` est suivi par git et servi en production.
- Formspree n'a pas été testé en conditions réelles.
- Fait : robots.txt, sitemap.xml, icônes PWA carrées 192 et 512, favicon, .gitignore,
  suppression de index.html.bak, style.css et projects.js.
- Fait : l'en-tête du CV PDF est corrigé en "INGENIEUR DIGITALISATION INDUSTRIELLE & SI".
  Le fichier est un PDF mPDF à xref classique, encodage Identity où le CID vaut le point de code
  Unicode. Le titre a été réencodé glyphe par glyphe dans le flux de la page, le flux recompressé,
  /Length mis à jour et la table xref reconstruite. Contrôles : 62 lignes de texte identiques
  avant et après sauf le titre, mêmes flux décompressables, rendu vérifié via Quick Look.
- Fait : les 8 tirets cadratins du CV remplacés par des tirets simples, 5 dans des chaînes Tj
  et 3 isolés dans des tableaux TJ avec crénage. Rendu revérifié.
- Reste ouvert : envoi réel du formulaire Formspree jamais testé.
- Fait : `CV_Kevo_Amouzou_CDI.pdf` supprimé du dépôt.

---

## Session 001 — 15 et 16 août 2026 — Diagnostic complet et remise à niveau du contenu

**Objectif**

Auditer le portfolio avant sa mise à jour, puis appliquer les corrections bloquantes.
Déclencheur : le stage BH2M, terminé le 17 juillet 2026, était encore présenté comme en cours.

**Fait**

Synchronisation du dépôt
- Le dossier local était 20 commits derrière `origin/main`, avec un `index.html` de 373 lignes
  correspondant à un design antérieur, sans rapport avec le site en ligne (1811 lignes).
- Travail local sauvegardé sur la branche `sauvegarde-locale-2026-08-15` (commit `081a78b`),
  puis `main` avancé en fast-forward jusqu'à `681e5d9`. Empreinte SHA-256 du `index.html` local
  vérifiée identique à la page servie par Netlify.

Contenu
- Stage BH2M passé au passé partout : texte du hero, badge, pastille de timeline, bullets, JSON-LD.
- Intitulés alignés sur le CV.
- "Niveau : Senior (3-4 ans d'expérience)" remplacé par "jeune diplômé double Master".
- Polonais supprimé (absent du CV), "bilingue" remplacé par anglais B2.
- Bullets BH2M traduits de l'anglais vers le français.
- Disponibilité : "août 2026" remplacé par "disponible immédiatement", 4 occurrences.
- Chiffres non sourcés retirés : +300% adoption, ROI 6 mois, ROI inférieur à 2 mois, 95% adoption,
  100+ personnes formées, -40% de risque, -25% de deadstock, 85% de couverture de tests,
  "millions de lignes par jour", portefeuille M€, zéro erreur, latence.
- Section témoignages supprimée (trois personnes nominatives non validées), faux avatars supprimés.
- Numérotation des sections remise en ordre, 01 à 05.

Nettoyage visuel
- 11 emojis supprimés, 35 tirets cadratins supprimés.
- Toutes les images de banque d'images supprimées : fond du hero, 3 visuels décoratifs,
  6 vignettes de projets. Seul le portrait subsiste.
- Faux badges flottants supprimés : "Live Stack", "Double Master UTBM", "3× Oracle Certified",
  pastilles LinkedIn / GitHub / Email posées sur une photo d'illustration.
- 109 lignes de CSS mort supprimées, script "typewriter" supprimé (il ciblait des éléments inexistants).

Technique
- Domaine non enregistré `kevoamouzou.com` remplacé par l'URL Netlify aux 6 emplacements
  (canonical, og:url, og:image, twitter:image, JSON-LD url et image).
- `worksFor` invalide retiré du JSON-LD, Université de Lomé ajoutée à `alumniOf`.
- Image LCP : `loading="lazy"` retiré, `fetchpriority="high"` et preload ajoutés.
- Section Contact réparée : la grille à 2 colonnes contenait 3 enfants, le formulaire tombait
  seul sur une deuxième rangée. Les deux cartes sont fusionnées.
- `sw.js` réécrit : cache `v2`, HTML en network-first, précache nettoyé.
- Champ anti-spam ajouté au formulaire Formspree.
- Titre du hero corrigé ("DataEngineering" était collé sur desktop).
- Cartes projets : ajout d'un filet de sécurité, elles restaient invisibles après un rechargement
  en milieu de page.

Repositionnement
- Bascule du positionnement sur le CV industriel : "Chef de Projet SI et Méthodes Industrielles,
  digitalisation". Titre, metas, JSON-LD, h1, accroche, badges, footer, postes recherchés,
  compétences et domaines d'expertise mis à jour.
- CV lié : `CV_Kevo_Amouzou_Industriel.pdf` remplace `CV_Kevo_Amouzou_CDI.pdf`.
- Ajouts sourcés par le nouveau CV : refonte Angular et Spring Boot (-40% code dupliqué,
  +35% de performances), Urban Mobility 600k+ lignes par mois, méthodes Lean, PDCA, A3, 5S,
  ISO 14001 et 45001, MS Project, PMO, MES, Permis B et mobilité France entière.

Passage en thème clair
- Palette inversée : fond #F7F8FA, surfaces blanches, texte #1A2233, secondaire #5A6478,
  accent bleu industriel #0B63CE, bordures #E4E7EC.
- Tokens Tailwind redéfinis (`dark`, `accent`, `secondary`, plus `ink`, `line`, `mist`),
  bloc CSS inline entièrement retravaillé, canvas et blobs adoucis, manifest et `theme-color` alignés.
- Effet de bord : les opacités faibles héritées du thème sombre (`text-secondary/35` à `/60`)
  ont été supprimées au passage, ce qui règle aussi les contrastes inférieurs à 4,5:1.

**Décisions**

| Sujet | Décision |
|---|---|
| Domaine | Rester sur l'URL Netlify tant que kevoamouzou.com n'est pas acheté |
| Témoignages | Supprimés, non vérifiables |
| Polonais | Supprimé, absent du CV |
| Chiffres | Seuls ceux du CV sont conservés |
| Emojis, tirets cadratins, images de stock | Bannis du site |
| Positionnement | Chef de Projet SI et Méthodes Industrielles, aligné sur le CV industriel |
| Dates de la mission IA | Laissées telles quelles sur le site (Oct. - Nov. 2025) |
| Palette | Thème clair, fond #F7F8FA, accent #0B63CE |

**Ouvert**

- Écart connu et assumé : le site affiche "+15 dashboards Metabase", chiffre présent dans l'ancien
  CV mais pas dans le CV industriel qui parle de "10+ indicateurs sur 3 processus métiers".
  À trancher si le CV industriel devient le seul document diffusé.
- Écart de dates entre le site (mission IA Oct. - Nov. 2025) et le CV industriel
  (Oct. 2025 - Jan. 2026). Laissé en l'état sur demande.
- `CV_Kevo_Amouzou_Industriel.pdf` doit être ajouté au dépôt, sinon le lien de téléchargement
  renverra une 404 en production.
- Tester réellement l'envoi du formulaire Formspree et ajouter une page de confirmation.
- Second passage technique non fait : suppression de Tailwind CDN (407 Ko), réduction de Phosphor
  à une seule variante, allègement du canvas animé, contrastes inférieurs à 4,5:1,
  robots.txt et sitemap.xml absents, suppression de `index.html.bak`. Les contrastes ont en
  revanche été réglés par le passage en thème clair.
- Profil LinkedIn à vérifier : il doit dire la même chose que le site sur les intitulés,
  les dates et le niveau d'anglais.

**Références**

Rapport de diagnostic complet, 45 points avec fichier, ligne, problème et correction :
`.archive/diagnostic-portfolio-2026-08-15.md`, conservé en local, hors dépôt depuis la session 003.
