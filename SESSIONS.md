# Journal des sessions

Une entrée par session de travail. Ordre antichronologique, la plus récente en haut.
Format : objectif, fait, décisions, ouvert.

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
- Reste ouvert : l'en-tête du CV PDF dit encore "Chef de Projet SI et Méthodes Industrielles"
  alors que le site dit "Ingénieur Digitalisation Industrielle et SI". Le texte du PDF est
  positionné glyphe par glyphe, il faut rouvrir le document source et réexporter.
- Reste ouvert : envoi réel du formulaire Formspree jamais testé.
- Reste ouvert : `CV_Kevo_Amouzou_CDI.pdf` est encore dans le dépôt sans être lié.

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
`diagnostic-portfolio-2026-08-15.md`.
