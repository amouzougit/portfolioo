# Journal des sessions

Une entrée par session de travail. Ordre antichronologique, la plus récente en haut.
Format : objectif, fait, décisions, ouvert.

---

## Session 007 · 25 août 2026 · Page projets détaillée, orientée recruteurs

**Objectif**

Sortir le détail des projets de l'accueil vers une page dédiée, écrite pour un recruteur
industriel. Suggestion venue d'un ami : ne pas tout empiler sur une seule page.

**Fait**

- `styles.css` créé : les 462 lignes du bloc `<style>` d'`index.html` extraites en source
  unique, partagée par les deux pages. Plus de bloc `<style>` inline dans `index.html`.
- `projets.html` créée, 975 lignes. Sommaire de 7 entrées, puis 6 projets détaillés, un bloc
  « Autres réalisations », puis un appel au contact. Nav renvoyant vers `index.html#...`,
  lien de retour à l'accueil.
- Format identique pour chaque projet : Contexte, Le problème, Ce que j'ai fait,
  Décisions techniques, Résultat, Transposable à. Le bloc Décisions techniques est le
  différenciateur : il montre le raisonnement, pas la liste des outils.
- Badge de nature sur chaque projet : Professionnel, Réalisation technique, Académique.
- Ancres stables `#bi-dolibarr`, `#chatbot-rag`, `#pipeline-elt`, `#back-end-metier`,
  `#digital-twin`, `#supply-chain`, `#autres`, pour envoyer à un recruteur le lien d'un
  seul projet.
- Projet 04 ajouté, back-end métier Java de gestion immobilière. Retenu pour une raison
  précise : c'est le seul projet qui montre la conception d'une application métier de bout
  en bout, découpage par domaine, séparation des couches, gestion des secrets. Les autres
  montrent la lecture de données, l'IA ou le pipeline, pas la conception applicative.
- Bloc « Autres réalisations » créé, format court volontaire. OffreAPI y figure, API REST
  Spring Boot avec Spring Security, JWT, MongoDB et documentation OpenAPI générée.
- Projet BH2M enrichi avec la matière réelle fournie par Kevo : les 3 processus Offre,
  SSE et Achats, le taux horaire vendu en moyenne glissante 12 mois, le calendrier fiscal
  MASE de juillet à juin, l'année fiscale achats d'octobre à septembre, la source de
  données unique croisant DIGIRISK, tickets et déclarations.
- Accueil allégé : 3 cartes projets au lieu de 5, lien « Voir le détail » sur chaque carte,
  bouton vers `projets.html`. Les 2 projets académiques UTBM ne sont plus sur l'accueil.
- `sitemap.xml`, `sw.js` (`v18`, PRECACHE et ALWAYS_FRESH) et `CLAUDE.md` mis à jour.
- Règle `.underline` ajoutée : elle était utilisée sur le lien mail du formulaire sans
  jamais avoir été définie.
- Vérifié : 0 tiret cadratin, 0 emoji, 5 ancres atteignables et non masquées par la nav
  fixe, 3 cartes sur l'accueil, numérotation 01/02/03 intacte, aucune erreur console,
  `styles.css` chargé sur les deux pages.

**Décisions**

| Sujet | Décision |
|---|---|
| Structure | Une seule page `projets.html`, pas une page par projet : un seul lien à envoyer, un seul fichier à tenir cohérent avec le CV |
| CSS | Extrait dans `styles.css`, contre la règle « tout inline » d'avant. Dupliquer 900 lignes de CSS aurait créé exactement le type d'incohérence que le CLAUDE.md cherche à éviter |
| `styles.css` en network-first | Une version périmée à côté d'un HTML frais afficherait une page nue |
| Confidentialité BH2M | Méthode publiée, données jamais. Aucun montant, volume, nom de client ou de fournisseur. Note de confidentialité visible en bas du projet |
| « Indicateur historique qui amalgamait » | Reformulé en « distinction méthodologique alignée sur le référentiel MASE ». La version d'origine disait publiquement que le reporting sécurité d'une PME certifiée était faux |
| « Performance par acheteur » | Reformulé en « performance achats par portefeuille » : évite la lecture « suivi individuel de salariés » |
| Chiffre `+35% de performances` | Ajouté, il figure au CV mais pas encore sur le site |
| Badges de nature | Obligatoires. Un recruteur ne doit jamais découvrir seul qu'un projet était scolaire |

**Ouvert**

- Faire valider le texte BH2M par le tuteur de stage avant mise en ligne. Vérifier aussi
  la clause de confidentialité de la convention de stage : elle porte sur les données,
  pas sur la méthode, mais elle doit être lue.
- Projet 05, logistique internationale : peu de matière, laissé court volontairement
  plutôt que gonflé. À enrichir ou à retirer.
- `waniapi` est un fork de `Hophoet/waniapi` d'après sa page GitHub. Ne jamais le mettre
  en lien : un recruteur qui clique voit « forked from » en haut de page. Le dépôt lié pour
  la gestion immobilière est `Projet-Professionnel-Gestion-_Immobiliere`.
- `PROJECT-API` annonce une licence MIT dans son README mais aucun fichier `LICENSE` n'est
  visible dans le dépôt. Et son README indique « en développement actif, juin 2026 » alors
  qu'on est fin août. Deux détails qu'un relecteur technique peut remarquer.
- Vérifier qu'aucun `application.properties` contenant un vrai secret JWT ou de vrais
  identifiants SMTP n'a jamais été commité dans `PROJECT-API`. Un secret poussé dans Git
  y reste, même supprimé ensuite. Le CV revendique « Sécurité des SI » : c'est le premier
  endroit où ça se vérifie.
- Nature du projet 04 à confirmer : badge « Réalisation technique » retenu faute de savoir
  s'il s'agissait d'une commande réelle ou d'un projet encadré. Le nom du dépôt dit
  « Projet Professionnel », ce qui en contexte scolaire français reste ambigu.
- Agile et Scrum : déjà présents sur l'accueil en compétence et dans la mission R&D IA.
  Ne pas les répéter sur la page projets sans un projet précis où le montrer.
- PMI France et Olympiades du Management de Projet : déjà sur l'accueil, lignes 387-388.
  Ne pas dupliquer.
- Le rendu n'a pas pu être capturé en image : l'outil de capture du navigateur renvoyait
  des images blanches avec une fenêtre désynchronisée. Vérification faite par le DOM à la
  place, concluante. Un contrôle visuel humain reste à faire.

---

## Session 006 · 21 août 2026 · Profil APEC aligné sur le CV industriel

**Objectif**

Mettre le profil APEC en cohérence avec `CV_Kevo_Amouzou_Industriel.pdf` et `index.html`.

**Fait**

- Audit du profil APEC à partir d'une capture : titre, objectif professionnel, expériences,
  formations, compétences, souhaits, projets.
- Contenu de remplacement rédigé champ par champ, uniquement à partir du CV, dans
  `.archive/apec-a-coller-2026-08-21.md`, hors dépôt.
- Écarts relevés côté APEC : « Chef de Projet Informatique » dans le titre, objectif
  professionnel visant trois métiers absents du site, « Master Supply Chain » inexistant,
  mission Ingénieur R&D IA manquante, BH2M sans description et daté juin au lieu de juillet,
  « Master Computer Science » au lieu de l'intitulé français, UTBM absent des deux formations.
- Vérification des dates de la mission IA : `index.html:1025` affiche déjà `Oct. 2025 - Jan. 2026`,
  identique au CV. Aucune modification du site nécessaire.

**Décisions**

| Sujet | Décision |
|---|---|
| Dates de la mission IA | Site et CV déjà alignés sur Oct. 2025 - Jan. 2026, point clos |
| Nom du projet jumeau numérique | « Digital Supply Chain Twin », nom du CV et du site, retenu partout |
| Troisième projet du CV | Non publié sur l'APEC, son dépôt n'est pas public |
| Titre APEC | « Ingénieur Digitalisation Industrielle et SI », sans « Chef de Projet » |

**Ouvert**

- Le point « Écart de dates entre le site et le CV » ouvert en session 003 est clos : il ne
  correspondait plus à l'état de `index.html`.
- Le dépôt GitHub `SC_Resilience_Twin` porte un nom différent du titre affiché sur le site et
  le CV, « Digital Supply Chain Twin ». Renommer le dépôt ou l'assumer.
- Profil LinkedIn toujours à vérifier, mêmes écarts possibles que sur l'APEC.
- Fourchette de salaire à trancher sur l'APEC, « À négocier » exclut le profil des recherches
  filtrées.

---

## Session 005 · 19 août 2026 · Loxya ajouté à la stack BH2M

**Objectif**

Faire apparaître Loxya, outil utilisé chez BH2M, aux côtés de Dolibarr déjà présent partout.

**Fait**

- `index.html` : Loxya nommé dans la puce « Ressources et équipements » de l'expérience BH2M,
  ajouté comme `skill-tag` dans la carte Digitalisation et SI industriels, ajouté au `knowsAbout`
  du JSON-LD, aux `keywords` de la meta description et à la stack du rôle « Ingénieur
  digitalisation industrielle ».
- `README.md` : Loxya ajouté à la ligne Digitalisation et SI industriels.
- `sw.js` : `CACHE_VERSION` passé de `v16` à `v17`.
- Dolibarr était déjà présent dans les deux fichiers, aucune modification nécessaire de ce côté.
- `CV_Kevo_Amouzou_Industriel.pdf` : « Loxya » ajouté en fin de ligne « Digitalisation & SI ».
  Le PDF est un PyFPDF 1.7.2, xref classique, polices DejaVu sous-ensemblées en Identity-H
  où le CID vaut le point de code Unicode. La chaîne `(SharePoint) Tj` du flux de page a été
  réencodée en UTF-16BE, le flux recompressé, `/Length` mis à jour et la table xref reconstruite
  entièrement : l'objet 4 est le premier du fichier, donc tous les décalages suivants bougent.
  Vérifié après coup : les 27 entrées xref pointent bien sur leur `N 0 obj`, les 7 flux se
  décompressent, les `/Length` correspondent, 79 lignes de texte comme avant, et le rendu
  visuel de la page est conforme.
- Puce BH2M du CV réécrite dans la foulée : « Mise en place de Loxya, systeme de gestion des
  ressources et equipements atelier ». La ligne est justifiée, il a donc fallu la recomposer.
  Méthode : lecture des largeurs de glyphes dans le tableau `/W` de l'objet 6, mesure du bord
  droit sur les autres lignes justifiées de la page pour retrouver la marge, soit 547,0 pt,
  puis nouveau découpage en deux lignes, nouvel écart inter-mots `-164` dans le tableau `TJ`
  et `Tw` de la ligne précédente aligné à `1.476`, soit `164 / 1000 x 9 pt`. Le modèle de
  largeur a été validé avant modification : il reproduit le bord droit des 17 lignes justifiées
  de la page à 0,1 pt près.

**Décisions**

| Sujet | Décision |
|---|---|
| Formulation Loxya | Nommer l'outil derrière une réalisation déjà écrite, sans ajouter de nouvelle affirmation ni de chiffre |

**Ouvert**

- Profil LinkedIn à aligner de la même façon.

## Session 004 · 16 août 2026 · Fraîcheur, formulaire, relecture externe et positionnement

**Objectif**

Fermer les points ouverts de la session 003, puis appliquer une relecture externe du site.
Treize commits, de `6cb9ce1` à `7033d0f`.

**Fait**

Accès public aux fichiers de travail
- `_redirects` ajouté : `/CLAUDE.md`, `/SESSIONS.md` et `/README.md` renvoient 301 vers `/`.
  Netlify ne supporte pas le glob `/*.md`, il faut des chemins explicites, avec `!` pour
  forcer la règle même quand le fichier existe. Vérifié en production : 301 et contenu non servi.
- Les fichiers de travail hors dépôt vivent dans `.archive/`, ignoré par git.

Service worker, commit `56bfd5a`
- Le vrai défaut n'était pas le HTML mais le CV : `CV_Kevo_Amouzou_Industriel.pdf` et
  `images/kevo.jpeg` étaient en cache-first sans revalidation. Un CV mis à jour restait l'ancien
  pour tout visiteur déjà venu tant que `CACHE_VERSION` n'était pas incrémenté. Le CV avait été
  retouché deux fois juste avant.
- CV passé en network-first comme le HTML. Les deux sont refetchés avec `cache: 'reload'`, ce qui
  court-circuite aussi le cache HTTP du navigateur : l'ancien `fetch(request)` pouvait être
  satisfait sans jamais toucher le réseau. Le refetch se fait par URL, une requête de navigation
  ne pouvant pas être reconstruite en JavaScript.
- Images et icônes passées en stale-while-revalidate.
- Precache rendu tolérant. `cache.addAll` échouait en bloc sur un seul 404, ce qui annulait
  l'installation et laissait l'ancien worker aux commandes indéfiniment. C'était le piège le plus
  sérieux du fichier.
- Vérifié dans Chrome : bascule v3 vers v5 et purge des anciens caches constatées, cache
  empoisonné volontairement puis navigation réelle servant bien la page et le CV frais.

Formulaire de contact, commits `4320d68` et `c00b330`
- Testé en production pour la première fois : l'endpoint fonctionne, les messages sont relayés.
- Après envoi, le visiteur était éjecté vers la page générique de Formspree, en anglais.
  `merci.html` créée, aux couleurs et polices du site, en `noindex`.
- Première tentative par champ `_next` : Formspree ne l'honore pas sur l'offre gratuite, les
  redirections personnalisées sont réservées aux offres payantes. Le champ partait correctement,
  le service l'ignorait. Constaté sur deux envois réels.
- Envoi passé en `fetch` avec `Accept: application/json`, ce qui laisse la redirection sous
  notre contrôle. Succès : redirection vers `/merci.html`. Échec : message d'erreur sous le
  bouton avec l'adresse email en repli, bouton réactivé. Sans JavaScript, le POST classique
  reste en place. Les trois cas sont testés.

Relecture externe, commits `7ee4ec2` et `f65436f`
- Sans arbitrage : répétition « Profil hybride » supprimée (introduite par erreur en session 003
  lors de la réécriture de la ligne supply chain), promesse « Réponse en 24h » retirée des trois
  emplacements, « partenaires » retiré, « Collaboration internationale » retiré, sous-titre
  Projets reformulé, LinkedIn et email ajoutés dans le hero.
- Premier poste recherché : « Chef de projet digitalisation industrielle » devient « Ingénieur
  digitalisation industrielle ». Les offres réelles de chef de projet en industrie demandent
  3 à 5 ans, vérifié par recherche.
- Secteurs recentrés sur industrie, énergie, ingénierie. Les rôles affichaient six secteurs sans
  expérience derrière : Consulting, Manufacturing, Distribution, Automotive, Electronics, Pharma.
  Les tags par rôle sont supprimés, les secteurs énoncés une seule fois dans l'encadré.
- « Énergie » ajouté au positionnement du hero. Cela revient sur la décision de session 002,
  assumé : la mission BH2M est de l'ingénierie hydroélectrique, la mention est factuelle.
- Ligne « CDI visés » ajoutée au hero, reprenant à l'identique les trois intitulés du bas de page.
  La section détaillée est conservée.

Contexte BH2M et vocabulaire, commit `d16cab0`
- Recherche en ligne : BH2M est un bureau d'études en conception et rénovation d'alternateurs
  hydroélectriques jusqu'à 400 MW, PME créée en février 2021 par Sébastien Bruna et dix collègues
  pour reprendre l'expertise de la division Hydro de General Electric à Belfort, certifiée
  ISO 9001 depuis décembre 2023.
- L'effectif n'est pas affiché : les sources divergent, 16 selon BFC Industries, « bientôt 13 »
  selon un article plus ancien. Les clients de BH2M (EDF, Engie, CNR) ne sont pas nommés, ce sont
  ceux de l'employeur et non ceux du candidat.
- Vocabulaire AMOA ajouté. Les offres d'AMOA junior en ESN décrivent le travail réellement fait
  chez BH2M, mais le site ne contenait aucune occurrence de `AMOA`, `expression de besoin`,
  `recueil`, `spécifications`, `recette` ni `MOA`. Un ATS filtrant sur AMOA ne le trouvait pas.
  Chaque terme ajouté est adossé à une ligne existante du CV.
- Type d'employeur explicité dans l'encadré : industriel en direct, bureau d'études, ESN ou
  société de conseil sur mission industrielle. Le positionnement industriel ne change pas.

Apports du second CV, dit CV ESN, commit `d16cab0`
- Deux missions BH2M : gestion des ressources et équipements d'atelier, automatisation du
  reporting projet. La frise BH2M passe à 7 puces.
- Quatrième projet, logistique internationale, Master A2I, sans impact chiffré ni lien de code.
- Excel et Macros à côté de VBA, Industrie 4.0 dans les SI industriels.
- Bloc « Qualités professionnelles », présenté comme tel et non comme des compétences techniques.
- Primavera P6 affiché séparément, libellé « En cours de formation », commit `69f72eb`.
  Posé à plat au milieu de MS Project, il aurait laissé croire à une maîtrise.

Lecture du second CV, commits `02fe837` et `7033d0f`
- Le CV ESN, `Amouzou KEVO- CV.pdf`, a été décodé via ses tables `ToUnicode` : il utilise une
  police sous-ensemble à encodage propriétaire, une extraction naïve ne rend que du charabia.
- Il confirme mot pour mot tout ce qui avait été ajouté au site à l'aveugle : les deux missions
  BH2M, le projet logistique et ses dates, Excel, Macros, Industrie 4.0, les six qualités
  professionnelles. Rien n'avait été inventé.
- `PMO` ajouté aux compétences : présent dans la rubrique Pilotage Projet du CV industriel,
  il manquait au site depuis le début. `Kanban` ajouté, présent sur le second CV.
- Mission IA localisée : le second CV écrit « Client international (Canada) ». La ligne de la
  frise et le contexte de la carte chatbot le mentionnent désormais. C'était le seul endroit du
  site qu'un recruteur ne pouvait pas situer, et le premier point de la relecture externe.
- Cinquième projet ajouté, Digital Supply Chain Twin en Python et SimPy, avec le lien vers
  `github.com/amouzougit/SC_Resilience_Twin`, dépôt vérifié en 200. Il figure sur les deux CV
  mais avait disparu du site quand la session 002 a réduit les projets de six à trois. Le site
  lie donc maintenant deux dépôts publics au lieu d'un.
- Non retenu faute de réponse : rien. Les arbitrages ont tous été tranchés.

Engagement professionnel, commit `61b3ac4`
- Deux éléments transmis en fin de session, absents des deux CV : membre actif de PMI France et
  participant aux Olympiades du Management de Projet, édition 2026.
- C'est la première preuve tierce et vérifiable du site. Toutes les autres formes de preuve
  sociale ont été bannies en session 001 faute de vérifiabilité. Une adhésion à une organisation
  reconnue et une participation à une compétition en sont, et elles étayent le tag `PMO` que le
  site affiche.
- Formulations volontairement neutres : « Participant », aucun résultat revendiqué, ni finaliste
  ni lauréat. À remonter si la compétition avance, avec le résultat réel.
- La carte certifications et langues passe de deux à trois colonnes. JSON-LD complété avec
  `memberOf` sur PMI France.

Recherche d'offres dans le bassin, non versée au site
- Recherches France Travail en CDI sur le Territoire de Belfort et le Doubs, par angle :
  ingénieur méthodes 9 offres, chef de projet informatique 2, amélioration continue 1,
  ERP ou données ou data 0.
- Conclusion utile pour la suite : localement l'angle SI et data est vide, l'angle méthodes et
  industrialisation recrute. Le positionnement du site ne change pas, mais les candidatures
  locales doivent attaquer par les méthodes et amener la digitalisation en différenciateur.
- Quatre offres de Belfort ouvertes et lues en détail. Le partage est net :

  | Offre | Expérience exigée | Accessible |
  |---|---|---|
  | Talents Industrie, Ingénieur Industrialisation, 45 à 55 k | 5 ans minimum | non |
  | Moben & Rooster, Ingénieur Méthodes, 42 à 55 k | 5 ans minimum | non |
  | Davidson Digital Est, Ingénieur méthodes et industrialisation | ouvert aux débutants | oui |
  | ALTEN, Ingénieur Méthodes Industrialisation | débutants acceptés | oui |

  Les deux postes accessibles sont chez des ESN. Les deux postes en industrie directe demandent
  cinq ans. La décision d'afficher « ESN ou société de conseil » dans les types d'employeurs est
  donc validée par le marché local, ce n'était pas un élargissement de confort.
- Point de vigilance relevé : Davidson exige un diplôme d'ingénieur, ALTEN accepte
  explicitement un master. Les diplômes UTBM du candidat sont des masters, pas un diplôme
  d'ingénieur habilité CTI. Certains filtres automatiques peuvent écarter sur ce seul critère.
- À noter pour plus tard : l'offre Talents Industrie porte sur l'assemblage et les essais de
  turbines et d'alternateurs, exactement le métier de BH2M. C'est une cible à cinq ans, pas
  aujourd'hui.

Divers
- `preconnect` vers `cdnjs.cloudflare.com` supprimé, plus rien n'y était chargé depuis GSAP.
- Espaces avant les points d'interrogation rétablis dans le placeholder du formulaire.
- `CLAUDE.md` mis à jour deux fois : architecture et dépendances réelles, puis cibles de postes
  et règle sur les secteurs.
- `CACHE_VERSION` de v3 à v15.

**Décisions**

| Sujet | Décision |
|---|---|
| Premier poste affiché | Ingénieur, pas Chef de projet |
| Secteurs | Industrie, énergie, ingénierie, et rien d'autre |
| Spécialisation énergie | Affichée, revient sur la décision de session 002 |
| Structure | La section Postes recherchés est conservée, résumée dans le hero |
| Effectif BH2M | Non affiché, sources divergentes |
| Clients de BH2M | Non nommés, ce sont ceux de l'employeur |
| Redirection formulaire | AJAX, `_next` inutilisable sur l'offre gratuite |
| Promesse de délai | Supprimée, non prouvable |
| Primavera P6 | Affiché comme formation en cours |
| Industrie 4.0 | Ajouté, justifié par sa présence sur le second CV |
| Pays de la mission IA | Canada affiché, le second CV l'écrit noir sur blanc |
| Nature du contrat de la mission IA | Toujours non précisée, aucun des deux CV ne la donne |
| Digital Supply Chain Twin | Réintégré comme cinquième projet, avec son dépôt public |
| Écart site / CV industriel | Assumé, le CV n'est pas mis à jour. Décision de l'utilisateur |

**Ouvert**

- **Le second CV se contredit avec le CV industriel sur trois points. Le plus grave de la
  session, et rien n'a été corrigé, ces documents appartiennent à l'utilisateur.**

  | Élément | CV industriel | CV ESN | Site |
  |---|---|---|---|
  | Poste BH2M | Assistant Chef de Projet Digitalisation Industrielle et SI | Chef de Projet SI / PMO | Assistant Chef de Projet |
  | Dates BH2M | Fév. 2026 - Juil. 2026 | Feb 2026 - Present | Fév. 2026 - Juil. 2026 |
  | Mission IA | Oct. 2025 - Jan. 2026 | Oct 2025 - Oct 2025 | Oct. 2025 - Jan. 2026 |

  Le même poste, chez le même employeur, sur la même période, porte deux intitulés selon le
  document. Le CV ESN annonce en outre un poste en cours alors que le stage s'est terminé le
  17 juillet 2026. La durée de la mission IA passe de quatre mois à un.
  Le titre visé diverge aussi : « Ingénieur Digitalisation Industrielle et SI » contre
  « Consultant SI industriel / Data et transformation digitale, Industrie 4.0 / PMO ».

- **Divergence site / CV industriel, assumée.** Plusieurs éléments issus du second CV sont sur
  le site mais pas sur `CV_Kevo_Amouzou_Industriel.pdf`, seul CV lié : deux missions BH2M,
  projet logistique A2I, Excel, Macros, Industrie 4.0, qualités professionnelles, Canada,
  Digital Supply Chain Twin. Décision de l'utilisateur de laisser en l'état. Trois issues
  restent possibles : régénérer le CV depuis son fichier source, retoucher le PDF, ou retirer
  du site ce qui n'y figure pas.
- Nature du contrat de la mission IA toujours inconnue : prestation, CDD, freelance ou stage.
  Aucun des deux CV ne le dit. Le pays, lui, est désormais affiché.
- Licence Génie Logiciel de l'Université de Lomé : sur le site, absente de la rubrique Formation
  du CV. À ajouter au CV plutôt qu'à retirer du site.
- Domaine `kevoamouzou.com` toujours non enregistré. Une URL Netlify générée sur un CV fait
  provisoire.
- Les points 1, 7 et 8 d'une consigne de relecture reçue n'ont jamais été transmis, la
  numérotation saute de 6 à 9.
- Profil LinkedIn confronté au site et au CV, déclaré cohérent.

---

## Session 003 · 16 août 2026 · Relecture du contenu et nettoyage des résidus

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

## Session 002 · 16 août 2026 · Revue externe et passage en version sobre

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

## Session 001 · 15 et 16 août 2026 · Diagnostic complet et remise à niveau du contenu

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
