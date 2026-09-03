# Journal des sessions

Une entrée par session de travail. Ordre antichronologique, la plus récente en haut.
Format : objectif, fait, décisions, ouvert.

---

## Session 017 · 1er septembre 2026 · L'URL du portfolio ajoutée au CV

**Objectif**

Le CV ne portait pas l'adresse du site. Un recruteur qui reçoit le PDF par mail, sans passer
par LinkedIn, ne trouvait jamais le portfolio.

**Résultat**

`kevo-amouzou.pages.dev` figure désormais **en fin de ligne italique**, en F1 romain :

```
Belfort, France  |  +33 7 80 86 65 75  |  kevoamouzou@gmail.com  |  linkedin.com/in/kevo-amouzou
Permis B  |  Mobilite : France entiere  |  Teletravail hybride possible  |  kevo-amouzou.pages.dev
```

La ligne de contact n'est pas touchée. Les deux lignes s'équilibrent, et l'URL en romain au
milieu d'un italique se distingue naturellement.

**Quatre pièges rencontrés, dont trois inédits**

1. **Piège n°1 de `CLAUDE.md`, tombé dedans malgré la lecture.** L'expression
   `^(\d+) 0 obj\s*(<<.*?>>)\s*stream` a enjambé l'objet 3 pour attraper le flux de l'objet 4.
   Solution : partir du mot-clé `stream` et remonter vers l'objet qui le précède.
2. **Inédit : `find('\nendstream')` dépasse la vraie fin du flux.** Il a atterri sur le
   `endstream` de l'objet 7, avalant les objets 1, 5, 6 et 7 dans la tranche remplacée. Le
   contrôle de complétude de la table xref l'a arrêté avant tout dégât. Borner par `/Length`.
3. **Inédit : le calcul de largeur par la table `/W` est faux d'environ 30 %.** Le modèle
   donnait 375 pt pour une ligne qui en mesure 473 au rendu. Ni `Tz`, ni `Tc`, ni `Tw` sur
   cette ligne, cause non identifiée. **Le moteur de rendu est le seul juge fiable** :
   `qlmanage -t` puis mesure de l'extension d'encre au pixel.
4. **Conséquence : la ligne de contact ne pouvait pas accueillir l'URL.** Elle finit à 473 pt
   sur 550, il n'y restait que 77 pt pour un ajout qui en fait 121. Cinq variantes ont été
   fabriquées et mesurées au rendu : la seule qui tenait imposait de perdre « , France » et de
   resserrer tous les séparateurs, pour 10 pt de marge. La ligne italique, elle, s'arrête à
   332 pt et laisse 217 pt : l'URL y tient avec **96 pt de marge**, sans rien sacrifier.

**Glyphes vérifiés avant d'écrire**

Le sous-ensemble F3 oblique ne porte que 38 caractères. Les 24 caractères de
`  |  kevo-amouzou.pages.dev` ont été confrontés au sous-ensemble **F1**, reconstitué en
listant tous les caractères réellement rendus avec cette police dans le document : aucun
manquant. D'où le choix du romain, qui est aussi le meilleur choix typographique pour une URL.

**Vérifié**

| Contrôle | Original | Nouveau |
|---|---|---|
| Flux décompressés | 7 ok, 13 en échec | identique, donc préexistant |
| Entrées xref valides | 27/27 | 27/27 |
| `startxref` pointe sur | `xref` | `xref` |
| Lignes de texte | 59 | 60 |

Une seule ligne ajoutée, `  |  kevo-amouzou.pages.dev`, aucune perdue. Rendu contrôlé à l'œil
sur l'image produite par Quick Look : aucun carré vide, espacement conforme au reste de la ligne.

**Méthode retenue**

La table xref n'est plus décalée à la main : elle est **régénérée entièrement** en rescannant
le fichier reconstruit. Le piège n°2 de `CLAUDE.md`, les offsets qui ne bougent pas tous,
devient sans objet. `CLAUDE.md` est complété des pièges 5 à 8.

**Ouvert**

- `README.md` ne mentionne toujours ni Batica ni la direction visuelle.
- Reste à vérifier, par Kevo seul : que LinkedIn dit la même chose que le CV sur l'intitulé
  BH2M, les dates des deux expériences et le niveau d'anglais B2.

---

## Session 020 · 3 septembre 2026 · Le menu mobile ne se fermait pas

**Objectif**

Un lecteur à qui Kevo a envoyé le portfolio signale : « je n'arrive pas à fermer le menu. Il
est ouvert d'emblée et je ne peux pas le fermer. »

**Cause**

```html
<div id="mobile-menu" hidden class="mobile-menu md:hidden ... flex flex-col gap-5">
```

L'attribut `hidden` n'est porté que par la feuille de style du navigateur,
`[hidden] { display: none }`. **Les styles de la page l'emportent toujours sur celle du
navigateur.** La classe `.flex { display: flex }` gagnait donc, l'élément restait affiché, et
le JS qui bascule `menu.hidden` n'avait aucun effet visible : ni à l'ouverture, ni à la
fermeture, ni sur Échap.

Défaut présent depuis l'écriture du menu, sur les deux pages, et invisible depuis un poste de
bureau puisque `md:hidden` masque le bloc au-dessus de 768 px. Seul un visiteur mobile le
rencontrait. C'est le premier bug remonté par un vrai lecteur.

**Correctif**

`[hidden] { display: none !important; }` en tête de `styles.css`. Le `!important` plutôt qu'un
simple ordre de déclaration : sans lui, n'importe quelle classe utilitaire ajoutée plus bas
recasserait le menu.

**Vérifié, avant et après**

| État | `hidden` | `display` |
|---|---|---|
| Avant correctif, règle `[hidden]` neutralisée | `true` | **visible** |
| Après, fermé | `true` | `none` |
| Après, ouvert | `false` | `flex`, `aria-expanded=true`, icône croix |
| Après, refermé | `true` | `none`, `aria-expanded=false`, icône menu |

Séquence identique vérifiée sur `projets.html`. Zéro erreur console.
`CACHE_VERSION` passé à `v40`. Le contrôle est ajouté à `CLAUDE.md`.

**Leçon**

Toute la vérification de cette série s'est faite au-dessus de 768 px. Le mobile n'a jamais été
testé, et c'est là qu'était le seul bug bloquant du site. Un lecteur l'a trouvé en trente
secondes.

---

## Session 019 · 2 septembre 2026 · Mersey Gateway, et Batica entre au CV

**Objectif**

Kevo signale un projet absent partout : l'étude de cas Mersey Gateway, projet fil rouge du
Master 2 A2I, en équipe de cinq.

**Fait, sur le site**

- Huitième projet détaillé, ancre `#mersey-gateway`, placé en **05**, premier des académiques
  puisque c'est le fil rouge. Les trois autres projets UTBM décalent en 06, 07, 08.
- Nom corrigé : le pont s'appelle **Mersey** Gateway, pas Mercey.
- Chiffres du contexte vérifiés par recherche, pas de mémoire : ouverture octobre 2017,
  600 M£ de construction, 1,86 Md£ sur la durée de vie jusqu'en 2044. Faits publics sur
  l'ouvrage, ils donnent l'échelle sans rien affirmer sur le travail de Kevo.
- Aucun outil revendiqué, faute de confirmation. Les tags sont des méthodes uniquement.

**Pourquoi ça comptait**

C'était le seul élément du dossier montrant l'analyse d'un cahier des charges, une estimation
de coûts multi-scénarios et une recommandation soutenue devant un jury. Les sept autres projets
sont data, simulation ou développement : **aucun ne parlait de chiffrage**. Il crée aussi un fil
narratif absent : Mersey Gateway, BH2M, Batica, trois pièces du même métier.

**Fait, sur le CV**

Le CV listait **deux fois le même projet** : « Data Pipeline Industriel » et « Urban Mobility
Analytics », même stack, même description, une seule entrée sur le site. Le doublon est
remplacé par Batica, absent du CV jusque-là.

**L'arbitrage, tranché par la mesure**

Deux candidats pour une place. Vérifié avant de choisir : la dernière ligne des réalisations
est à y=163,13, FORMATION à y=135,90, soit 27,23 pt d'écart pour un espacement d'entrée de
24,95 pt, et la dernière ligne de la page est à y=7,22. **Une quatrième entrée toucherait
FORMATION, et tout décaler ferait sortir la page.** Le CV est plein.

Batica l'emporte : c'est le seul élément récent, autonome et livré, et le seul endroit où le CV
montrerait du développement applicatif, sa ligne Data & Infrastructure s'arrêtant à Airflow,
dbt, PostgreSQL et Docker. Mersey Gateway reste sur le site, où il a la place de raconter le
jury, les scénarios et l'équipe.

Effet de bord utile : « 29 tables, 108 policies RLS » passent du site au CV, ce qui ferme
l'écart de chiffres sur Batica.

**Piège d'encodage, troisième variante**

Les deux lignes remplacées n'avaient pas le même encodage : la première en tableau `TJ`
justifié, la seconde en littéral `(...) Tj`. Un remplacement qui ne gère qu'une forme échoue
silencieusement sur l'autre. La ligne `TJ` a été remplacée en bloc par un `Tj` simple, ce qui
perd la justification mais rend le texte correctement.

**Vérifié**

- Largeur mesurée au rendu : L1 484,98 pt, L2 428,99 pt, marge droite 549,92.
- 27/27 entrées xref, `startxref` sur `xref`, même profil de flux, 80 lignes avant et après.
- Deux lignes ajoutées, deux retirées, aucune autre touchée.
- Rendu contrôlé au zoom 4x : aucun carré vide.
- Site : 7 SVG valides, ids uniques, sommaire 01 à 08, zéro erreur console.

**Ouvert**

- Kaizen reste sur le site sans être au CV : le sous-ensemble F1 n'a pas de K majuscule.
- Mersey Gateway reste sur le site sans être au CV, faute de place. Assumé.
- Le CV est plein. Toute addition future suppose un retrait, ou une régénération depuis
  la source mPDF.

---

## Session 018 · 1er septembre 2026 · Le site montre enfin quelque chose

**Objectif**

Kevo trouve le site « trop statique ».

**Requalification du problème**

Mesuré avant de répondre : **une seule image sur tout le site**, le portrait, et **zéro sur
la page projets**. Sept projets décrits, six schémas dessinés à la main, aucune capture de ce
qui a été construit. Le problème n'est donc pas le manque de mouvement, c'est que **le site
raconte et ne montre jamais**. Ajouter des animations au scroll aurait fait bouger du texte
sans rien prouver.

Contrainte : les captures de BH2M sont exclues, la page projets promet qu'aucune donnée client
n'y figure et c'est ce qui la rend crédible. Batica en revanche est un projet personnel,
public, sans donnée client.

**Fait**

- Capture de la page d'accueil publique de Batica intégrée dans le bloc `#batica`, après le
  schéma. Recadrée sous le bandeau Chrome, redimensionnée à 1400 px, JPEG progressif de 66 Ko.
- Composant `.capture` : même cadre que `.schema-wrap`, pour que la preuve dessinée et la
  preuve photographiée se lisent comme deux formes du même geste.
- Légende honnête : c'est la page d'accueil publique, pas un écran applicatif, et la mention
  « plateforme en bêta, aucun chantier réel suivi » est rappelée.

**Images générées : demandées, testées, écartées**

Kevo a demandé des illustrations générées pour les autres projets. Refusé une première fois au
motif de la règle 6, puis testé à sa demande. **Le résultat était meilleur que prévu** : trait
technique plat, fond sur `#EFF1EF`, trait sur `#2E4C5C`, un seul accent sur `#9E5819`, aucun
texte. La comparaison avec le piège Power BI était trop dure : une illustration
non figurative n'affirme aucune compétence.

Écartées quand même, et Kevo a laissé la décision : **chaque projet détaillé a déjà son schéma
dessiné à la main**. Le schéma dit « voici mon architecture », l'illustration dit « voici une
image de données ». Mises côte à côte, la générique affaiblit la spécifique, le lecteur en
déduisant que la première est illustrative elle aussi.

**Deux constats sur Batica, transmis à Kevo**

- La page publique est servie **en anglais par défaut**, alors qu'elle est liée depuis un
  portfolio francophone. Un sélecteur `FR` existe.
- Le badge « Bêta » est affiché, ce qui colle exactement à ce que le portfolio annonce.

**Limite d'outillage rencontrée**

Impossible de capturer Batica moi-même : l'extension n'a pas la permission d'exécuter du
JavaScript sur `kevo-control.vercel.app`, et le défilement en dépend. Seule une capture du haut
de page a été obtenue, vide. C'est Kevo qui a fourni l'image exploitable.

---

## Session 016 · 1er septembre 2026 · Le badge de disponibilité retiré

**Objectif**

Kevo propose de retirer le badge « Disponible immédiatement · CDI · France entière » du hero.

**Pourquoi c'était juste**

Le badge ne disait rien que la page ne dise déjà, souvent **sur le même écran** :

| Information | Déjà présente |
|---|---|
| CDI | ligne « CDI visés », juste en dessous |
| France entière | ligne sous les chiffres, « Permis B, mobilité France entière » |
| Disponible immédiatement | titre de la section Postes recherchés, et bloc Contact |

À quoi s'ajoutent deux arguments de forme. C'était le dernier élément en forme de pilule après
le passage aux coins cassés. Et son point vert portait `animate-pulse`, **la seule autre
animation du site** : la retirer rend enfin vraie l'affirmation selon laquelle le tracé du
schéma est le seul mouvement de la page.

**Fait**

- Badge supprimé. Le `h1` devient le premier élément du hero et remonte de y=222 à **y=160**.
- Aucune information perdue : la ligne devient « CDI visés, disponible immédiatement : ».
- CSS mort supprimé dans la foulée : `.animate-pulse`, `@keyframes pulse`, et les quatre
  utilitaires `emerald` qui n'avaient plus aucun porteur.

**Vérifié**

- `h1` premier enfant du hero, à y=160. Zéro `animate-pulse` restant. 5 cotes toujours en place.
- Audit de contraste : 244 éléments, zéro échec.
- `CACHE_VERSION` en `v32`.

**Note sur le cache, troisième occurrence**

La capture envoyée par Kevo montrait la `v30` : la boucle était corrigée mais les trois chiffres
étaient encore dans leurs tuiles, alors que la production servait bien la `v31`. Le service
worker et le cache navigateur retardent d'une version. Toujours demander un rechargement forcé
avant de juger une capture, et vérifier quelle version elle montre avant de conclure.

**Premier défaut visuel confirmé de mes yeux**

La capture a aussi permis de valider le correctif de rotation de la session 015 : la boucle
affiche bien « AMÉLIORATION CONTINUE » à la verticale. Premier contrôle de rendu réel de la
série, tous les autres ayant été des mesures.

---

## Session 015 · 1er septembre 2026 · Revue de l'exécution, les chiffres portent la cote

**Objectif**

Claude Design a relu l'exécution de sa propre direction. Cinq points, une priorité désignée.
Application de la priorité.

**Le défaut trouvé par Kevo avant tout le reste**

Sur sa capture, le libellé de la boucle du hero affichait « ATION CONTINUE », à l'horizontale
et tronqué. Le texte porte `transform="rotate(-90 22 214)"` en attribut SVG, mais partageait
la keyframe `coteApparait` avec le reste du schéma, et celle-ci se termine sur
`transform: none`. **Un transform CSS l'emporte toujours sur l'attribut de présentation.**
L'animation redressait donc le texte en fin de course, et centré sur x=22 il sortait du
`viewBox` par la gauche. Corrigé par une keyframe `coteFondu`, opacité seule, réservée au
libellé. Mesuré après : matrice de rotation appliquée, rendu 14 x 141 px donc vertical, texte
complet, aucun chevauchement avec la boucle ni avec les boîtes.

Règle retenue : **ne jamais animer `transform` sur un élément SVG qui porte déjà un attribut
`transform`.**

**La priorité de la revue, appliquée**

Les trois chiffres sous le hero, 10+, 80%, 500+, étaient dans des tuiles teintées avec bordure
et coin arrondi : le gabarit « gros chiffre, légende dessous » de n'importe quelle page de
présentation. C'était le premier bloc sous le hero, dans les dix secondes qui décident.

Les tuiles sont supprimées, `.stat-card` avec. Les trois chiffres portent désormais la cote,
modificateur `.cote-valeur` : valeur à 20px à l'encre, trait au bleu de tracé, légende à 12px.
Aucune boîte, aucun fond, la page reste nue autour du trait.

Effet secondaire visé par la revue et obtenu : la cote ne se lisait comme un système qu'à
partir du Parcours. Elle apparaît maintenant **quatre fois dans le hero lui-même**, la boucle
plus les trois chiffres. Un lecteur qui ne descend pas la voit quand même comme un système.
Le compte par section ne bouge pas : 2 sections sur 7 en portent, `#about` et `#experience`,
plus les schémas de `projets.html`. La discipline de la relecture tient.

**Défaut d'ordre de déclaration, deuxième de la journée**

`.cote-valeur` était déclaré avant `.cote` : à spécificité égale, la base écrasait son
modificateur, la valeur sortait à 12px en bleu au lieu de 20px à l'encre. Bloc déplacé juste
après sa base plutôt que passé en `.cote.cote-valeur`. Même arbitrage qu'en session 013 pour
`.hero-schema` : l'ordre se relit, la surenchère de sélecteurs non.

**Vérifié**

- Valeur à 20px, encre `#161D1B` à 15,09:1. Trait au bleu de tracé à 8,03:1.
- Trois colonnes égales de 198px.
- Audit de contraste sur le rendu : 245 éléments, **zéro échec**.
- `CACHE_VERSION` en `v31`.

**Points de la revue non traités, volontairement**

- **La section Compétences reste un mur de tags.** La revue la désigne comme le vrai risque de
  métronome et le passage que le recruteur saute. C'est le prochain chantier, et il demande une
  restructuration, pas un réglage.
- **Le schéma du hero sur mobile.** Il retombe sous le texte en pleine largeur, environ 494px
  de haut. La revue suggère une version compressée plutôt qu'un simple empilement.
- **Les deux colonnes de texte du hero qui se concurrencent.** Jugement visuel, non vérifiable
  depuis ce poste : ni la revue ni moi n'avons de rendu pixel. À trancher sur capture.

**Limite de méthode, à garder en tête**

Les deux défauts visuels de la journée, le portrait trop petit et ce libellé redressé, ont été
trouvés par Kevo sur des captures. Aucun contrôle numérique ne les avait vus : opacité,
`stroke-dashoffset` et marges de boîte étaient tous verts. Les captures de l'extension
reviennent désynchronisées sur ce poste. Distinguer désormais **mesuré** de **vu**, et
demander une capture pour tout jugement de rendu.

---

## Session 014 · 1er septembre 2026 · Portrait du parcours, taille et colonne vide

**Objectif**

Kevo trouve le portrait trop petit dans Parcours, capture à l'appui.

**Diagnostic**

Il l'était, mais le problème principal était ailleurs. Mesuré : la timeline fait 2585 px de
haut, le portrait 300 px. **88 % de la colonne de droite était vide**, sur toute la hauteur
de la section. Agrandir la photo n'aurait traité que la moitié du défaut.

**Fait**

- Colonne portrait élargie de 240 à 300 px.
- Portrait en `position: sticky; top: 6rem` au-delà de 1024 px : il accompagne la lecture du
  parcours au lieu de la quitter au premier écran.
- `CACHE_VERSION` en `v29`.

**Vérifié**

- Position mesurée à 0, 25, 50, 75 et 95 % de la section : le portrait se cale à 96 px du haut
  et reste visible sur toute la traversée.
- Production confrontée au build local, ligne à ligne : les deux servent
  `grid-template-columns: minmax(0, 1fr) 300px` en ligne 476 et `position: sticky; top: 6rem`
  en ligne 480 de `styles.css`.
- Deuxième fausse alerte de la journée sur le cache de bordure : un premier contrôle donnait
  0 pour les deux règles alors que `sw.js` annonçait déjà `v29`. `styles.css` était encore
  servi depuis le cache. Le piège est documenté dans `CLAUDE.md` depuis la session 013, il
  reste facile d'y retomber : `sw.js` et `styles.css` ne basculent pas au même instant.

**État de la direction après quatre sessions de design**

Sessions 011 à 014 prises ensemble, la direction « cotation industrielle » est intégralement
en place : palette à cinq couleurs et deux statuts, Cabinet Grotesk, General Sans et
JetBrains Mono, coins cassés, trame millimétrée, ligne de cote sur ses trois emplacements,
tracé du schéma au chargement. Le seul écart volontaire avec la proposition d'origine reste
le portrait, gardé hors du hero.

**Note d'environnement, deuxième piège du banc de test**

`scrollTo` ne faisait rien et toutes les mesures sortaient identiques. Deux causes cumulées :
`requestAnimationFrame` ne se déclenche pas dans un onglet inactif, et le
`html { scroll-behavior: smooth }` du site rend `scrollTo` asynchrone, donc jamais exécuté
dans un onglet gelé. Mesurer un défilement depuis cet environnement suppose de forcer
`scroll-behavior: auto` et de ne pas attendre de frame.

---

## Session 013 · 1er septembre 2026 · Cotation industrielle, changement d'identité

**Objectif**

Mise en oeuvre complète de la direction « cotation industrielle » proposée par Claude Design :
le vocabulaire du plan de contrôle et de la cote technique, plutôt qu'un des trois looks
générés par défaut. Palette, polices, rayons, trame de fond, élément signature, mouvement.

**Vérifié avant de construire, pas après**

- Contrastes de la palette recalculés un par un. Quatre couleurs sur cinq passent. **L'ambre
  écart `#B5651D` tombait à 3,82:1**, sous le seuil de 4,5, alors qu'il est destiné à du petit
  texte. Assombri en `#9E5819`, 4,79:1, à teinte 28° et saturation 0,72 constantes.
- La proposition annonçait ~4,7:1 pour l'encre secondaire : elle est à 6,39:1. Prudence, pas erreur.
- Les trois polices sont bien sur Fontshare. JetBrains Mono y est référencée `jet-brains-mono`,
  pas `jetbrains-mono`.

**Cinq conflits entre la proposition et le site réel, tranchés**

| Proposition | Décision |
|---|---|
| Photo dans le hero | Refusée. Sortie du hero en session 012 après mesure, le `h1` passait sous le pli. Reste dans Parcours |
| « -85% de ressaisie » | Chiffre inventé. Le chiffre réel, au CV, est 80% |
| Sélecteur FR EN | Aucune version anglaise n'existe |
| « PROJET 03 » sur l'accueil | Numérotation retirée en session 011, elle annonçait une séquence qui s'arrêtait à 03 sur 6 |
| Coins 4-6px | Retenue, appliquée partout sauf sur les vrais cercles : pastilles de timeline, point de disponibilité, cibles d'icônes |

**Fait**

- Palette : fond `#EFF1EF`, encre `#161D1B`, encre secondaire `#4B5A55`, bleu de tracé
  `#2E4C5C`, vert conforme `#2F6D4F`, ambre écart `#9E5819`. Deux statuts seulement.
  Les accents bleu, violet et cyan des cartes de compétences sont ramenés au bleu de tracé :
  trois teintes arbitraires, c'était exactement la décoration que la direction dit d'écarter.
- Polices : Clash Display sort, Cabinet Grotesk 700 et 800 entre. General Sans reste.
  JetBrains Mono 500 arrive pour les données, les cotes et les libellés.
- Échelle : `h1` 64px en 800, corps 17px, libellés utilitaires 12px mono majuscule à 0,04em.
- Rayons resserrés à 3, 4, 5 et 6px. Les boutons pilule et les pastilles de catégorie
  perdent leur `rounded-full`.
- Trame millimétrée sur le fond, deux dégradés à 2,8% en pas de 32px. Les sections `bg-mist`
  la recouvrent, ce qui alterne page tramée et page nue.
- **Élément signature, la ligne de cote** : trait peint au centre d'une boîte de 9px, amorce
  perpendiculaire en bordure extérieure. Deux pseudo-éléments, aucun balisage ajouté.
  Réservée à trois emplacements, conformément à la relecture de la direction, qui vaut mieux
  que sa proposition initiale : la boucle du hero, la timeline du parcours, les schémas de
  `projets.html`. Partout ailleurs, aucun séparateur.
- Schéma du hero réécrit dans le vocabulaire du plan de contrôle : libellés en mono majuscule,
  outil annoté au diamètre, trait plutôt que flèche, boîte finale en vert conforme, boucle en
  ambre. Les traits se tirent au chargement, `stroke-dashoffset`, dans l'ordre de lecture.
- Deux cotes sur la timeline, `6 mois` et `4 mois`, déduites des dates déjà affichées.

**Le défaut le plus important n'était pas dans la direction**

En vérifiant que les trois polices se chargeaient, `document.fonts` n'en listait qu'une.
L'API Fontshare renvoie une réponse tronquée quand plusieurs familles sont demandées dans la
même URL. Testé sur l'URL de production elle-même : elle ne renvoyait que Clash Display.
**General Sans ne se chargeait pas depuis la session 002**, le texte du site tombait sur la
police système, et rien ne le signalait puisque le repli est correct.

Ajouter `&cb=1` à l'URL fautive faisait réapparaître la seconde famille : c'est un cache CDN.
Correction retenue : une requête par famille, syntaxe vérifiée stable sur trois essais
consécutifs. Les six fontes se chargent désormais, dont General Sans pour la première fois.

**Vérifié**

- Audit de contraste sur le rendu réel, pas sur la palette théorique : 245 éléments testés sur
  l'accueil, 370 sur la page projets, **zéro échec** aux seuils AA.
- Schéma du hero 420 x 494, marge minimale de 80px dans les boîtes, aucun débordement,
  tous les traits atteignent `stroke-dashoffset: 0`.
- Les six fontes en `loaded`. Les quatre pages servent le fond `#EFF1EF`.
- Balises équilibrées sur les quatre pages, zéro erreur console, zéro tiret cadratin,
  zéro emoji, aucun lien interne en `.html`, 5 ancres sur l'accueil et 7 sur projets.
- `CACHE_VERSION` en `v28`.

**Ouvert**

- `README.md` n'a pas été retouché : il ne mentionne ni Batica ni la nouvelle direction.
- Les trois points de la session 009 restent ouverts : Batica absent du CV et de LinkedIn,
  nombre de tests mobiles non affiché.
- Le portrait est en `.portrait-parcours`, non recadré pour le nouveau format. À revoir si le
  rendu ne convient pas.

---

## Session 012 · 1er septembre 2026 · Le schéma de process prend le hero

**Objectif**

« Fais ce qui est bon. » Le geste laissé ouvert en session 011 est fait : le schéma de process
remplace le portrait dans le hero. Un seul geste fort, la police d'affichage n'est pas touchée.

**Fait**

- Schéma vertical en cinq étapes dans le hero, langage graphique de `projets.html`, mêmes
  classes SVG : relevé terrain, ERP MES GMAO, modélisation SQL, tableau de bord, décision.
  Une boucle en pointillés ramène la décision vers le terrain, libellée « amélioration
  continue ». La boucle est le sujet du schéma : c'est la seule forme qu'on retient, et le
  PDCA figure au CV.
- Animation : la chaîne s'assemble une fois au chargement, dans l'ordre de lecture, délais
  échelonnés de 0,10 s à 0,92 s. `prefers-reduced-motion: reduce` fige tout à l'état final.
  C'est le seul mouvement du site, ailleurs rien ne s'anime.
- Portrait descendu dans Parcours, classe `.parcours-grid`, colonne de droite de 240 px à
  partir de 1024 px. La colonne était vide, la timeline étant plafonnée à `max-w-3xl` dans un
  conteneur `max-w-6xl`.
- Conséquence LCP assumée : le portrait n'étant plus au-dessus du pli, le `<link rel="preload">`
  et `fetchpriority="high"` sont retirés, `loading="lazy"` est remis. La décision inverse
  datait de la session 004, quand le portrait était l'élément LCP. Le LCP est désormais le `h1`.

**Deux défauts trouvés en mesurant, pas en supposant**

1. `min-width: 600px` de `.schema` écrasait le `min-width: 0` de `.hero-schema` : le bloc
   hero-schema était déclaré **avant** `.schema` dans la feuille. Le SVG sortait à 600 px dans
   un conteneur de 500. Corrigé en déplaçant le bloc après `.schema` plutôt qu'en gonflant la
   spécificité : l'ordre de déclaration est plus lisible qu'une surenchère de sélecteurs.
2. Les libellés flottaient dans des boîtes deux fois trop larges, 127 px de texte dans 336 px.
   `viewBox` resserré de 460 à 400 de large, boîtes de 336 à 300. Marges mesurées après :
   87 px minimum, symétriques.

**Vérifié**

- Rendu 420 x 483, aucun débordement du conteneur, boucle entièrement dans le `viewBox`.
- Les 11 éléments animés atteignent tous l'opacité 1 une fois l'animation terminée.
- Desktop simulé : hero texte à gauche et schéma à droite, Parcours timeline à gauche
  et portrait à droite, côte à côte.
- `h1` à y=222 pour un pli à 579 : la thèse reste au-dessus du pli.
- SVG valide en XML, zéro erreur console, `CACHE_VERSION` en `v27`.

**Note d'environnement**

Les animations paraissaient bloquées à l'opacité 0. `getAnimations()` a montré
`playState: running` avec `currentTime: 0` : Chrome gèle la timeline des onglets non actifs.
Artefact du banc de test, pas un défaut du site. Vérifier une animation depuis cet
environnement suppose d'appeler `finish()` avant de lire l'état.

**Ouvert**

- Clash Display sur fond crème reste l'un des looks par défaut les plus répandus. Sortir de ce
  défaut suppose de changer la police d'affichage, toujours pas fait, et c'est le dernier point
  qui sépare ce site d'une identité vraiment propre.
- Les trois points de la session 009 restent ouverts : Batica absent du CV et de LinkedIn,
  `README.md` qui ne le mentionne pas, nombre de tests mobiles non affiché.

---

## Session 011 · 31 août 2026 · Passe de design, corrections structurelles

**Objectif**

Kevo demande un regard de design sur l'ensemble du site. Audit rendu, puis mise en oeuvre du
périmètre qu'il a retenu : les corrections structurelles. Palette et polices inchangées.

**Diagnostic, cinq points**

1. **Le hero enterrait sa thèse.** Le portrait était en `order-1` en dessous de 1024 px.
   Mesuré à 778 px de large : image à y=160, `h1` à y=574, pli à y=579. Le premier écran était
   intégralement une photo. Sur un laptop en fenêtre partagée, un recruteur voyait un visage
   et aucun argument.
2. **La numérotation annonçait une séquence inexistante.** `01 · Résultats`,
   `02 · Compétences`, `03 · Projets`, puis rien sur Parcours, Postes recherchés et Contact.
   Trois sections numérotées sur six.
3. **Aucune hiérarchie.** Cinq sections en `py-24`, même largeur, un seul fond alterné.
4. **La typo ne travaillait pas.** Clash Display 64px gras comme unique geste. `font-mono`
   défini et utilisé 4 fois en tout.
5. **Le meilleur élément était invisible depuis l'accueil.** Les schémas SVG de `projets.html`
   sont ce que le site a de plus spécifique, l'accueil n'en montre aucun.

**Fait**

- Hero : `order-2 lg:order-1` et `order-1 lg:order-2` supprimés. Le texte était déjà premier
  dans le DOM, ce sont ces classes qui le renvoyaient sous la photo. Résultat mesuré, même
  viewport de 778 px : `h1` à y=222, au-dessus du pli, portrait descendu à y=1122. Desktop
  vérifié en simulant la grille à 2 colonnes : texte à gauche, portrait à droite, inchangé.
- Numérotation retirée des trois eyebrows de l'accueil, les libellés restent. `projets.html`
  garde `01` à `07` : c'est une vraie liste ordonnée.
- `#projects` passe de `py-24` à `py-32`, classe `.py-32` ajoutée. Le coeur de la page respire
  plus que le reste.
- Classe `.num` : chiffres en chasse fixe système avec `tabular-nums`. Appliquée aux trois
  chiffres du hero, aux 7 numéros d'article et à `.toc-num`. Aucune police supplémentaire
  chargée, la pile est celle du système.

**Régression introduite puis corrigée**

En passant `.toc-num` en chasse fixe, le `min-width: 22px` qui calait le sommaire a été retiré,
puisque les chiffres tabulaires règlent la cause. Mais la ligne « + Autres réalisations » ne
porte pas un chiffre : elle s'est décalée de 7 px. Deux itérations mesurées, `2ch` puis
`calc(2ch + 2px)` pour tenir compte du `letter-spacing`. Vérifié : le sommaire ne présente plus
que deux valeurs de x, les deux colonnes, et le `+` tombe exactement sur les chiffres.

**Décisions**

| Sujet | Décision |
|---|---|
| Périmètre | Corrections structurelles seules. Le schéma en hero et le changement de police d'affichage ont été proposés et écartés pour cette passe |
| Numérotation | Retirée de l'accueil, conservée sur `projets.html`. Une numérotation marque une séquence, pas une décoration |
| Chiffres | En chasse fixe : ce sont des mesures, pas de la marque. Et `tabular-nums` règle la cause du calage du sommaire au lieu du symptôme |
| Photo | Conservée, descendue sous l'argument. Le portrait n'est pas la thèse |

**Ouvert**

- Le geste fort reste à faire : un schéma de process en hero, dans le langage graphique de
  `projets.html`, tracé une fois au chargement, `prefers-reduced-motion` respecté. Le portrait
  descendrait dans Parcours.
- Clash Display sur fond crème est l'un des looks par défaut les plus répandus. Sortir de ce
  défaut suppose de changer la police d'affichage, écarté pour cette passe.
- Les trois points de la session 009 restent ouverts : Batica absent du CV et de LinkedIn,
  `README.md` qui ne le mentionne pas, nombre de tests mobiles non affiché.

---

## Session 010 · 31 août 2026 · ERR_FAILED sur les liens en .html

**Objectif**

Kevo signale `ERR_FAILED` sur `https://kevo-amouzou.pages.dev/index.html#experience`.

**Diagnostic**

Reproduit dans Chrome, puis contre-épreuve : service worker désenregistré et caches vidés,
la même URL se charge normalement. Le service worker était donc en cause, pas Cloudflare seul.

La chaîne complète :

1. Cloudflare Pages redirige en 308 tout chemin en `.html` vers sa version sans extension.
   Vérifié sur `/index.html`, `/projets.html`, `/merci.html` et `/404.html`, les quatre.
2. `sw.js` intercepte toutes les navigations et renvoie la réponse suivie de
   `fetch(url, { cache: 'reload' })`, donc une réponse dont `redirected` vaut `true`.
3. Un service worker n'a pas le droit de renvoyer une réponse redirigée à une requête de
   navigation. La spécification en fait une erreur réseau. Chrome l'affiche en `ERR_FAILED`.

Cassé depuis la bascule Cloudflare de la session 008, le 26 août, pas depuis Batica. Les
liens `/index.html#...` datent de la session 007, la redirection 308 de la session 008.
Le bump de `CACHE_VERSION` en session 009 a seulement rafraîchi le service worker.

Portée réelle, plus large que le symptôme signalé : les 9 liens concernés sont la navigation
principale, le menu mobile et le pied de page de `projets.html`. Tout le chemin de retour vers
l'accueil était mort pour un visiteur déjà venu.

**Fait**

- `projets.html` : les 9 liens `/index.html#x` deviennent `/#x`.
- `sw.js` : `networkFirst` reconstruit une réponse sans marque de redirection quand la réponse
  reçue est redirigée. Signets, liens externes et URL tapées à la main sont couverts.
- `CACHE_VERSION` passé de `v24` à `v25`.
- `CLAUDE.md` : le piège est documenté dans la section Cloudflare, une commande de contrôle des
  liens en `.html` est ajoutée aux vérifications avant push, et le contrôle de production
  précise qu'il faut tester avec le service worker actif, pas seulement en `curl`.

**Hypothèse fausse écartée en cours de route**

`cache.add('/index.html')` échouerait sur une réponse redirigée, rendant le précache inopérant.
Testé en conditions réelles : l'appel passe. Le précache n'était pas en cause et reste inchangé.

**Vérifié en production, service worker actif**

| Cas | Avant | Après |
|---|---|---|
| `/index.html#experience` | ERR_FAILED | charge, ancre présente |
| `/projets.html` | ERR_FAILED | charge, Batica présent |
| `/merci.html` | ERR_FAILED | charge |
| Clic « Parcours » depuis `/projets` | ERR_FAILED | mène à `/#experience` |

Zéro erreur console sur les deux pages. `liens vers /index.html` : 0.

**Décisions**

| Sujet | Décision |
|---|---|
| Deux corrections plutôt qu'une | Les liens propres suppriment la cause, le filet dans `sw.js` couvre ce qu'on ne contrôle pas : signets, liens externes, URL tapées |
| Précache | Laissé tel quel, l'hypothèse qui le mettait en cause a été testée et invalidée |
| Vérification de production | Ne plus se contenter de `curl` : la redirection 308 ne casse que la navigation du navigateur, `curl` renvoie 200 sans rien voir |

**Ouvert**

- Les trois points de la session 009 restent ouverts : Batica absent du CV et de LinkedIn,
  `README.md` qui ne le mentionne pas, nombre de tests mobiles non affiché.
- Le site Netlify figé au 16 août n'a pas ce défaut, il ne redirige pas les chemins `.html`.
  Sans importance tant qu'il n'est plus alimenté.

---

## Session 009 · 31 août 2026 · Batica ajouté aux projets

**Objectif**

Ajouter Batica au portfolio : plateforme personnelle de suivi de chantier à distance pour la
diaspora africaine, déployée sur Vercel et EAS.

**Fait**

- `projets.html` : 7e bloc `project-detail`, ancre `#batica`, inséré en position 04, juste après
  le pipeline ELT. L'ordre du site est par nature, 01-02 professionnel, 03-04 technique,
  05-07 académique. Les trois projets UTBM ont donc été renumérotés 04-06 vers 05-07,
  dans les articles, dans le sommaire et dans les commentaires de section.
- En-tête de `projets.html` : « Six projets » devient « Sept projets ».
- Schéma SVG dessiné à la main, `st6` / `sd6` / marqueur `a6` : la chaîne de preuve du jalon
  jusqu'à la décision de payer, avec le paiement explicitement hors plateforme.
- `index.html` : carte Batica pleine largeur en tête de la grille projets, avec un lien
  « Voir la plateforme » vers `https://kevo-control.vercel.app/`. « Voir les 6 projets en
  détail » devient « 7 », deux occurrences.
- `styles.css` : `.project-featured` et `.project-featured-body` ajoutés. La grille de l'accueil
  est à 3 colonnes ; une 4e carte ordinaire y aurait laissé une carte orpheline sur une
  deuxième ligne. La carte mise en avant occupe donc toute la largeur, en `grid-column: 1 / -1`,
  et son contenu se scinde en 1.7fr / 1fr au-delà de 1024 px.
- `sw.js` : `CACHE_VERSION` passé de `v23` à `v24`.
- `CLAUDE.md` corrigé : il annonçait encore 5 projets et 3 cartes, et sa liste d'ancres était
  incomplète. Elle omettait déjà `#back-end-metier`, ajouté en session 007.

**Décisions**

| Sujet | Décision |
|---|---|
| Chiffres Batica | « 5 rôles, 29 tables, 108 policies RLS » conservés. Ils décrivent un projet personnel vérifiable en ligne, pas un résultat employeur. La règle 1 vise la cohérence avec le CV sur les chiffres professionnels |
| Statut affiché | « Plateforme déployée », et il est écrit noir sur blanc qu'aucun chantier réel n'y est suivi. Pas d'utilisateurs, pas de volumes, pas de clients |
| Nature | `nature-tech`, « Réalisation technique », comme le pipeline ELT. Ni professionnel, ni académique |
| Placement | Position 04 et non 07 : l'ordre par nature prime sur l'ordre chronologique |
| Carte d'accueil | Pleine largeur plutôt qu'une 4e carte dans la grille à 3 colonnes |
| Nombre de tests | Non affiché. Le chiffre était tronqué dans la description fournie, il n'a pas été inventé |

**Vérifié**

- Rendu réel sous Chrome sur `dist/` : 4 cartes sur l'accueil, Batica sur toute la largeur de
  la grille et les 3 autres alignées sur la rangée suivante, colonnes internes 361 / 213 px.
- Les 15 textes du schéma SVG tiennent dans leurs cadres, marge minimale de 8 px, aucun
  débordement du `viewBox` ni de la boîte de défilement.
- Zéro tiret cadratin, zéro emoji, aucun bloc `<style>` inline, 7 ancres présentes,
  aucune erreur console sur les deux pages.

**Ouvert**

- Batica ne figure pas sur `CV_Kevo_Amouzou_Industriel.pdf` ni, a priori, sur LinkedIn.
  Un recruteur qui lit le site y trouve un projet que le CV ignore. À arbitrer.
- Deux détails techniques restent hors du site faute d'information complète : le nombre de
  tests mobiles et la fin de la phrase sur les 108 policies.
- `README.md` ne mentionne pas Batica.
- L'écart « +15 dashboards Metabase » de la session 004 est réglé, l'accueil affiche
  désormais « 10+ indicateurs de pilotage sur 3 processus métiers ».

---

## Session 008 · 26 août 2026 · Bascule vers Cloudflare Pages

**Objectif**

Remettre le site en ligne : Netlify ne déploie plus.

**Diagnostic**

Le site était figé au 16 août, commit `772541a`. Huit commits jamais publiés, dont les trois
sur Loxya antérieurs à la session 007. Cause : l'équipe Netlify `school` a épuisé ses crédits.
20 déploiements de production consomment 300 crédits, soit 15 crédits chacun, et c'est tout
le budget du cycle. Les sites publiés restent en ligne, les nouveaux déploiements sont
suspendus jusqu'au 4 septembre 2026.

Ce n'était ni un bug, ni le lien Git : GitHub avait bien tout, `raw.githubusercontent.com`
servait `projets.html` en 200.

**Fait**

- URL de production basculée sur `https://kevo-amouzou.pages.dev` : 15 occurrences dans
  `index.html` (7), `projets.html` (4), `sitemap.xml` (2), `README.md` et `CLAUDE.md`.
  Concerne canonical, og:url, og:image, twitter:image, JSON-LD et le champ `_next` de Formspree.
- `build.sh` créé, avec une liste explicite des fichiers à publier vers `dist/`.
- `dist/` ajouté au `.gitignore`.
- Site Netlify conservé en ligne sur demande de Kevo, figé au 16 août, à ne plus alimenter.

**Décisions**

| Sujet | Décision |
|---|---|
| Hébergeur | Cloudflare Pages. Pas pour les 9 jours d'attente mais pour le plafond de 20 déploiements par cycle, qui se serait represente a chaque fois. 500 builds par mois côté Cloudflare |
| Nom du projet | `kevo-amouzou` et non `portfolioo` : l'URL sera lue par des recruteurs, `portfolioo.pages.dev` ressemble à une faute de frappe |
| Publication | Liste explicite dans `build.sh` plutôt que `_redirects`. Cloudflare ignore le `!` de Netlify, et un `SESSIONS.md` public exposerait les notes internes |
| Netlify | Laissé en ligne, non coupé |

**Ouvert**

- **Ajout du portfolio et de GitHub au CV : tenté, annulé.** Les polices du PDF sont des
  sous-ensembles. La ligne italique du bandeau ne contient ni `k`, ni `z`, ni `g`, donc
  `kevo-amouzou.pages.dev` s'y affiche `□evo-amou□ou.pa□es.dev`. La ligne de contact, elle,
  porte ces glyphes mais n'a que 78 pt de marge pour une URL qui en demande 123. Toutes les
  variantes qui tiennent imposent de perdre « France » après Belfort ou de resserrer les
  séparateurs d'une ligne sur deux, ce qui désaccorde le bandeau. Kevo a demandé de ne pas
  abîmer le CV : rien n'a été modifié.
- Solution propre si le besoin revient : régénérer le CV depuis son outil source, où les
  polices embarqueront les glyphes nécessaires, et y placer portfolio et GitHub dès la
  composition. Ne pas retenter le patch binaire pour cet ajout.
- Accroche du hero réordonnée : valeur, puis preuve, puis diplôme. Elle ouvrait sur « Double
  formation UTBM », c'est-à-dire sur l'élément le moins différenciant du profil, dans la
  phrase la plus lue de la page. Elle ouvre désormais sur « Je digitalise les opérations
  industrielles ». Mêmes faits, aucun ajout, seul l'ordre change.
- « Mission chez BH2M, février à juillet 2026 » devient « Six mois sur le terrain chez BH2M,
  de février à juillet 2026 » : la mission est terminée depuis fin juillet, la formulation au
  passé dit une expérience acquise plutôt qu'un poste en cours mal daté.
- « dashboards » conservé et non traduit en « tableaux de bord » : c'est le mot du CV, qui
  écrit « connexion ERP-dashboards ». Cohérence avant élégance.
- Portrait porté à 500 px, via `width: min(500px, 100%)` et `aspect-ratio: 1 / 1` plutôt
  qu'une largeur fixe : à 1024 px de viewport, seuil de passage en deux colonnes, la colonne
  droite ne fait que 480 px et un carré rigide de 500 px déborderait. Densité restante 2,72x.
- Portrait agrandi de 380 à 440 px sur desktop, puis à 500 px. Le fichier fait 1358 x 1599 px, la densité
  disponible passe de 3,57x à 3,09x : toujours largement au-dessus du Retina. Recadrage
  carré conservé volontairement, le fichier source a beaucoup de vide au-dessus de la tête
  et `object-cover` le supprime. Passer au ratio portrait natif aurait réintroduit ce vide.
- Attributs `width` et `height` de l'image corrigés : ils annonçaient 380x447 alors que le
  rendu est carré, le navigateur réservait donc un espace au mauvais ratio avant chargement.
- Classe `.lg:w-[380px]` remplacée par `.portrait-hero` : un nom de classe contenant une
  valeur en dur devient faux dès qu'on change cette valeur.
- CV mis à jour : Six Sigma, AMDEC et VSM sur la ligne Méthodes, Power Automate et
  SAP (notions) sur la ligne Digitalisation, MongoDB sur la ligne Data. Le PDF a été
  repatché à la main, voir la section Modification du CV du CLAUDE.md.
- Reste un écart mineur : le site liste `Java` en compétence, le CV ne le nomme pas mais
  porte « Refonte applicative (Angular / Spring Boot) » en expérience. Spring Boot implique
  Java, aucun recruteur n'y verra une incohérence. Ne pas forcer Java dans une ligne
  « Data & Infrastructure » où il serait mal placé.
- Java, Spring Boot, Angular et MongoDB ajoutés aux compétences. Ils étaient démontrés par
  les projets 02 et 04 et par OffreAPI, et Angular et Spring Boot figurent déjà au CV, mais
  aucun n'était revendiqué en compétence. Le site montrait sans dire. MongoDB reste le seul
  des quatre absent du CV.
- SAP : pratique académique, confirmé par Kevo. Affiché « SAP, notions » et non « SAP » tout
  court. Le laisser nu à côté d'ERP Dolibarr et Oracle Fusion Cloud, tous deux réellement
  déployés, laissait croire à une expérience équivalente sur l'item le plus vérifié en
  entretien dans l'industrie française. La ligne BH2M continue de dire « démarche
  transposable à un environnement SAP », ce qui reste exact.
- Six Sigma : aucune certification, laissé parmi les méthodes à côté de PDCA, A3, 5S, AMDEC
  et VSM, où aucune certification n'est attendue. Même registre que Lean, déjà au CV sans
  certification. Ne pas le déplacer dans le bloc Certifications.
- `Primavera P6` retiré des mots-clés : il n'était sur aucun autre support.
- Créer le projet Cloudflare Pages sous le nom exact `kevo-amouzou`, sinon les URL absolues
  du site pointeront à côté. Build command `./build.sh`, output directory `dist`.
- Mettre à jour le lien du portfolio sur LinkedIn. Il n'est pas sur le CV, donc c'est le seul
  endroit à corriger côté candidature.
- Le CV ne porte ni l'URL du portfolio ni celle de GitHub. Un recruteur qui ne lit que le PDF
  n'atteint jamais les trois dépôts publics mis en avant sur la page projets.
- Un `git push` égale un déploiement, quel que soit l'hébergeur. Grouper les commits.

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
| Projet 04, gestion immobilière | Retenu en format complet : seul projet montrant la conception d'une application métier de bout en bout, ce qui manquait pour un poste SI. Badge « Académique », c'est un projet de soutenance |
| OffreAPI | Format court en « Autres réalisations ». Le détailler répéterait le projet 04, deuxième back-end Java Spring Boot en couches. Seuls JWT et la doc OpenAPI générée sont retenus, ce sont ses deux apports propres |
| Texte BH2M | Validé tel quel par Kevo, sans passage par le tuteur |
| Bénévolat PMI Grand Est | Remplace « Membre actif » au lieu de s'y ajouter : deux lignes auraient dit deux fois la même chose, en plus faible |

**Ouvert**

- Validation du texte BH2M par le tuteur : proposée, non retenue. Kevo a tranché, le texte
  part tel quel. Le risque est faible, aucune donnée n'est publiée, mais la clause de
  confidentialité de la convention de stage reste à lire une fois.
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
- Projet 04 : établissement et année de la soutenance à ajouter sous le titre. Les deux
  autres projets académiques affichent « UTBM, Master 2 A2I · Oct. 2025 - Jan. 2026 ».
  Le 04 affiche seulement « Projet de soutenance », ce qui détonne. Une ligne suffit.
- Agile et Scrum : déjà présents sur l'accueil en compétence et dans la mission R&D IA.
  Ne pas les répéter sur la page projets sans un projet précis où le montrer.
- PMI : la ligne « Membre actif de PMI France » est devenue « Bénévole PMI France,
  Project Management Institute, région Grand Est ». Remplacement et non ajout, « bénévole »
  dit déjà « membre » et vaut plus qu'une adhésion payée. Les Olympiades restent sur la
  deuxième ligne.
- L'engagement professionnel (PMI, Olympiades, bénévolat Grand Est) est sur le site mais
  absent de `CV_Kevo_Amouzou_Industriel.pdf`. Écart connu, à combler côté CV si l'engagement
  doit compter dans les candidatures.
- Bug de mise en page corrigé dans la section Parcours, visible en production. Les `<li>`
  de la timeline sont des conteneurs flex contenant trois enfants : la flèche, le `<strong>`
  du libellé, puis un nœud de texte nu. En flexbox un nœud de texte nu devient un élément
  flex anonyme : le libellé et le texte formaient donc deux colonnes séparées qui se
  coupaient n'importe où. Libellé et texte réunis dans un seul `<span>`, 10 puces corrigées.
- Cinq schémas d'architecture ajoutés en SVG écrit à la main, un par projet sauf le 06.
  Placés juste après les tags, avant le contexte : c'est la première chose que voit un
  recruteur qui scanne. Motif : la page faisait 2 094 mots, 10,7 écrans de défilement et
  zéro image. Un schéma se lit en 3 secondes là où un paragraphe en demande 30, et savoir
  représenter une architecture est en soi une compétence d'ingénieur SI.
- Schémas sous `min-width: 600px` dans un cadre à défilement horizontal plutôt que
  redimensionnés : sous 600px le texte deviendrait illisible.
- Reste à faire sur la lisibilité : raccourcir BH2M (640 mots, 31% de la page, le bloc
  « Ce que ça démontre » fait doublon avec les décisions) et ajouter en tête de chaque
  projet une phrase à retenir.
- Cabinets de conseil et ESN : question posée, réponse négative assumée. Ne pas ajouter
  « conseil » aux secteurs cibles, cela diluerait le positionnement. Une ESN lit déjà
  « industrie, énergie, ingénierie » comme son terrain, et screene la mobilité et la
  transposabilité, toutes deux déjà présentes.
- GMAO absent du site. À rapprocher éventuellement de Loxya, gestion des ressources et
  équipements atelier, si le rapprochement est légitime. À confirmer par Kevo.
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
