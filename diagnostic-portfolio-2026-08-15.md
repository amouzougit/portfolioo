# Diagnostic portfolio Kevo Amouzou

Date du diagnostic : 15 août 2026
Site audité : https://keen-selkie-a72fc7.netlify.app/ (version réellement en ligne)
Dépôt source du site en ligne : github.com/amouzougit/portfolioo, branche `main`, commit `681e5d9`
Aucun fichier n'a été modifié.

## 0. État du dépôt : synchronisation faite

Le dépôt local était sur le commit `b3dd428`, soit 20 commits de retard sur `origin/main`, avec un `index.html` de 373 lignes correspondant à l'ancien design. Le site en ligne, lui, est servi depuis `origin/main` (`681e5d9`), `index.html` de 1811 lignes. Les deux n'avaient rien en commun.

Synchronisation effectuée le 15 août 2026 :

1. Travail local sauvegardé sur la branche `sauvegarde-locale-2026-08-15`, commit `081a78b` : ancien `index.html`, `style.css`, `projects.js`, et `main.js` qui n'était pas suivi par git.
2. `main` avancé en fast-forward de `b3dd428` à `681e5d9`. Aucun commit écrasé, aucun fichier perdu.
3. Vérification : le `index.html` local et la page servie par Netlify ont la même empreinte SHA-256 (`4cb41a56...`), 104 863 octets, 1811 lignes.

État actuel du dossier `/Users/kevo/Documents/portfolioo` :

```
CV_Kevo_Amouzou_CDI.pdf   164 979 o
README.md                   7 267 o
images/kevo.jpeg           98 658 o
images/resilience_chart.png 129 518 o
index.html                104 863 o   <- fichier à corriger
index.html.bak             44 256 o   <- résidu, voir 2.3
manifest.json               1 654 o
projects.js                 2 092 o   <- orphelin, plus référencé
style.css                   2 315 o   <- orphelin, plus référencé
sw.js                       2 524 o
```

Le fichier `.DS_Store` est présent et non suivi. Il n'est pas déployé, mais un `.gitignore` contenant `.DS_Store` serait utile.

Toutes les lignes citées dans ce rapport font référence au `index.html` local actuel (1811 lignes), désormais identique à la version en ligne.

---

## 1. Exactitude du contenu

### 1.1 BLOQUANT — Le stage BH2M est présenté comme en cours

Le stage est terminé depuis le 17 juillet 2026. Six emplacements le présentent au présent.

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 613 | "Actuellement chez **BH2M** et membre du **PMI France Chapter**" | "Dernière expérience : BH2M (Fév. - Juil. 2026)" ou reformuler au passé |
| index.html | 617 | Badge "BH2M · Digital Transformation Lead" sans borne temporelle, lu comme poste actuel | "BH2M · Fév. - Juil. 2026" |
| index.html | 1212 | Point de timeline `timeline-dot-active` (pastille cyan pulsante = poste en cours) sur BH2M | Passer BH2M sur la pastille inactive (`bg-white/15 ring-2 ring-dark`) comme les autres entrées |
| index.html | 1221-1233 | Bullets BH2M rédigés au présent implicite | Passé composé ou nominal ("Déployé", "Automatisé") |
| index.html | 497-498, 520-523 | JSON-LD : `jobTitle` actuel + `worksFor.name` = "Available for CDI - August 2026" | `worksFor` n'a pas de sens ici, le retirer ; `jobTitle` peut rester le titre visé |
| CV PDF (repo racine) | - | Le CV lui-même indique "BH2M, Fév. 2026 - **Présent**" et "Master 2 A2I, 2025 - **En cours**" | Régénérer le CV avec "Fév. - Juil. 2026" et le master achevé, puis remplacer `CV_Kevo_Amouzou_CDI.pdf` |

### 1.2 BLOQUANT — Intitulés de poste incohérents entre le site et le CV

Un recruteur qui ouvre le CV depuis le site voit deux titres différents pour les mêmes missions.

| Fichier | Ligne | Site | CV PDF | Correction suggérée |
|---|---|---|---|---|
| index.html | 1216, 617 | "Digital Transformation Lead — Data & ERP" | "Assistant Chef de Projet / Ingénieur d'Affaires" | Aligner sur le CV. "Lead" sur un stage de fin d'études est contestable en entretien |
| index.html | 1244-1245 | "Senior AI Engineer — GenAI/RAG", "Tech Startup (Canada) · Remote" | "Ingénieur R&D - Intelligence Artificielle (Remote)", "Client canadien - Université de Lomé (collaboration internationale)" | Aligner : retirer "Senior", corriger l'employeur. Deux mois de mission ne soutiennent pas un titre "Senior" |
| index.html | 936, 947 | Témoignages attribués à "Manager BI, BH2M" et "CTO, Startup Canada" | - | Voir 1.6 |

### 1.3 BLOQUANT — Niveau d'expérience annoncé faux

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 1369 | "**Niveau:** Senior (3-4 ans d'expérience), Lead Technical, ou rôle stratégique" | Le parcours affiché est : stage 6 mois + mission 2 mois + alternance académique. Remplacer par "Jeune diplômé (Master), première expérience CDI" ou supprimer la ligne. C'est la contradiction la plus facilement repérée par un recruteur |

### 1.4 BLOQUANT — Langues : le polonais n'existe nulle part ailleurs

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 1122-1123 | "Polonais — Courant" | Absent du CV. Soit c'est réel et il faut l'ajouter au CV, soit le supprimer du site |
| index.html | 613 vs 1118-1119 | Le hero dit "Bilingue Français/Anglais", la section Compétences dit "Anglais B2 — Pro", le CV dit "Anglais B2" | "Bilingue" contredit B2. Uniformiser sur "Anglais B2, capacité à négocier en contexte international" (formulation du CV) |
| index.html | 1126-1127 | "Espagnol A2" | Conforme au CV. Le CV précise "en cours d'apprentissage", l'ajouter serait plus honnête |

### 1.5 IMPORTANT — Dates de formation à passer au passé

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 1262 | Master 2 A2I : "2025 — Juil. 2026" listé après le stage, sans mention d'obtention | Si le diplôme est obtenu : "2025 - 2026, diplômé". Sinon préciser la date de délibération |
| index.html | 1284 | L'entrée Licence affiche "Lomé, Togo" dans l'emplacement réservé à la date (toutes les autres entrées y ont une période) | Mettre les années de la licence, déplacer le lieu sous l'établissement |
| index.html | 798 | "3x Oracle Certified" daté "2024-2025" | Le CV ne date qu'une certification (Oracle Cloud Infrastructure 2024). Vérifier les dates réelles ou retirer la mention "2024-2025" |

### 1.6 BLOQUANT — Témoignages non vérifiables

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 931-962 | Trois témoignages signés "Marie A. — Manager BI, BH2M", "Jean-Louis D. — CTO, Startup Canada", "Sophie P. — Head of Supply Chain" | Risque maximal en entretien : un recruteur peut demander le contact, ou vérifier auprès de BH2M. Si ces personnes existent et ont donné leur accord écrit, mettre nom complet et poste exact, idéalement une recommandation LinkedIn liée. Sinon supprimer toute la section (lignes 922-965) |

### 1.7 IMPORTANT — Incohérences entre sections

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 602, 624, 1308, 1407 | "Disponible CDI — Août 2026" répété 4 fois. Nous sommes le 15 août 2026 : la formulation "disponible à partir d'août" est déjà dépassée | Passer à "Disponible immédiatement" |
| index.html | 1469 | Footer "Ingénieur d'Affaires & Data Engineering" | Cohérent avec le hero, mais le CV titre "Ingénieur / Chef de Projet Digital & Industrie". Choisir un seul positionnement et l'appliquer partout (site, CV, LinkedIn) |
| index.html | 704 vs 742 | Deux sections consécutives présentées comme des blocs de badges rouges quasi identiques : "Tendances 2026 — Mon Expertise Stratégique" puis "Certifications Professionnelles". Le commentaire HTML ligne 700 annonce d'ailleurs "CERTIFICATIONS ORACLE" pour la première | Fusionner ou différencier visuellement. Corriger le commentaire ligne 700 |
| index.html | 632-651 vs 779-800 | Les KPI +15 / 80% / 500+ sont affichés deux fois (hero et bandeau "Trust signals"), plus une troisième fois dans les cartes projets | Garder une seule occurrence forte, en hero |
| index.html | 808, 850, 926, 971, 1015, 1141 | Numérotation des sections incohérente : 02b, 02a, 02c, 02b (doublon), 02, 03 | Renuméroter dans l'ordre d'affichage : 01, 02, 03... |
| index.html | 1221-1233 | Bullets BH2M en anglais ("dashboards production", "time saved", "user adoption", "accounts secured") dans une page `lang="fr"` | Traduire en français, ou ajouter `lang="en"` sur les fragments anglais |

---

## 2. Liens et ressources

Tests effectués le 15 août 2026 depuis cette machine.

| Ressource | URL | Statut | Verdict |
|---|---|---|---|
| CV PDF | /CV_Kevo_Amouzou_CDI.pdf | 200, 165 Ko, 2 pages | Présent mais périmé (voir 1.1) |
| GitHub profil | github.com/amouzougit | 200 | OK |
| GitHub SC_Resilience_Twin | .../SC_Resilience_Twin | 200 | OK |
| GitHub urban-mobility-analytics | .../urban-mobility-analytics | 200 | OK |
| LinkedIn | linkedin.com/in/kevo-amouzou | HTTP 999 | LinkedIn bloque les robots, ce code ne signifie pas lien cassé. À vérifier manuellement : l'URL doit correspondre à l'URL publique actuelle du profil |
| Email | mailto:kevoamouzou@gmail.com | - | Cohérent partout (lignes 626, 1451, 1458) |
| Images du site | /images/kevo.jpeg, /images/resilience_chart.png | 200 | OK |
| manifest.json | /manifest.json | 200 | OK |
| sw.js | /sw.js | 200 | OK |
| robots.txt | /robots.txt | 404 | Manquant |
| sitemap.xml | /sitemap.xml | 404 | Manquant |
| Domaine cible | https://kevoamouzou.com | NXDOMAIN, whois : "No match for domain" | Le domaine n'est pas enregistré |

### 2.1 BLOQUANT — Le domaine kevoamouzou.com n'est pas enregistré, et le site pointe dessus

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 21 | `<link rel="canonical" href="https://kevoamouzou.com">` vers un domaine inexistant | Soit acheter le domaine et le brancher sur Netlify, soit mettre le canonical sur `https://keen-selkie-a72fc7.netlify.app`. En l'état, Google reçoit l'instruction d'indexer une URL qui n'existe pas : le site risque de ne pas être indexé du tout |
| index.html | 11, 19 | `og:image` et `twitter:image` vers `https://kevoamouzou.com/images/kevo.jpeg` | URL morte : aucun aperçu visuel quand le lien est partagé sur LinkedIn ou WhatsApp. Point critique pour une recherche de CDI |
| index.html | 13 | `og:url` vers le même domaine | Idem |
| index.html | 495-496 | JSON-LD `url` et `image` vers le même domaine | Idem |

Une fois le domaine choisi, ces 6 occurrences doivent utiliser la même origine.

### 2.2 IMPORTANT — Lien "Code" pointant vers le profil GitHub et non vers un dépôt

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 1519 | Projet "GenAI Integration — RAG Architecture" : `linkRepo: "https://github.com/amouzougit"` | Le bouton "Code" mène au profil, pas au code. Mettre le vrai dépôt, ou `null` (le template affiche alors "Projet confidentiel", lignes 1189-1193) |
| index.html | 1555 | Projet "Inventory Optimization Dashboard" : même problème | Idem |

### 2.3 MINEUR — Fichiers résiduels publiés

| Fichier | Problème | Correction suggérée |
|---|---|---|
| index.html.bak (44 Ko) | Accessible publiquement sur https://keen-selkie-a72fc7.netlify.app/index.html.bak, contient une version antérieure du portfolio | Supprimer du dépôt |
| README.md | Servi publiquement (7 Ko) | Sans gravité, mais vérifier qu'il ne contient rien de contradictoire |
| style.css, projects.js | Présents dans le dépôt mais plus référencés par `index.html` (tout est inline) | Supprimer, ou réextraire le CSS/JS inline dedans (voir 3.2) |

---

## 3. Qualité technique

### 3.1 Console et exécution

Testé sur Chrome desktop, page chargée depuis Netlify.

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| MINEUR | index.html | 1801 | `console.log('✅ Service Worker enregistré: ...')` en production | Retirer le log |
| IMPORTANT | index.html | 31 | Tailwind est chargé via `cdn.tailwindcss.com` (407 Ko de JS, compilation des classes dans le navigateur). Le CDN affiche lui-même un avertissement "should not be used in production" | Générer un CSS Tailwind statique, ou revenir à un `style.css` compilé. Gain immédiat de 400 Ko et de plusieurs centaines de ms |
| IMPORTANT | index.html | 1711-1743 | Code mort : le script "typewriter" cherche `#tw-text` et `#tw-cursor`, ces éléments n'existent nulle part dans le HTML. La règle CSS `.tw-cursor` (ligne 377) est également inutilisée | Supprimer le bloc, ou ajouter l'élément prévu dans le hero si l'effet est voulu |
| IMPORTANT | index.html | 1746 | Toutes les animations GSAP démarrent sur `window.addEventListener('load')`, et les éléments animés partent de `opacity: 0` | `load` attend toutes les images, dont 448 Ko d'image Unsplash en hero. Sur connexion lente ou si un CDN est bloqué, des sections entières restent invisibles. Passer à `DOMContentLoaded`, et ne jamais laisser un contenu en `opacity: 0` sans fallback CSS |
| MINEUR | index.html | 894, 1249 | Texte contenant `ROI <2 mois` et `<2s latency` : un `<` non échappé dans du texte HTML | Remplacer par `&lt;2`. Rendu correct dans les navigateurs, mais signalé par le validateur W3C |

Note : les avertissements émis par les scripts tiers (Tailwind CDN) ne remontent pas dans la lecture de console utilisée ici, qui filtre sur l'origine du site. Une vérification manuelle dans DevTools est recommandée.

### 3.2 Performance

Mesures : 16 requêtes au premier rendu, `DOMContentLoaded` à 4,0 s, `load` à 4,3 s sur desktop avec cache partiellement chaud. Hauteur de page 10 890 px.

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| BLOQUANT | index.html | 681-685 | L'image LCP (portrait, 98 Ko) porte `loading="lazy"` | Retirer `loading="lazy"`, ajouter `fetchpriority="high"` et un `<link rel="preload">`. Un lazy sur l'image LCP dégrade directement le score Core Web Vitals |
| IMPORTANT | index.html | 593 | Image de fond du hero : Unsplash en `w=2000`, 448 Ko, affichée à 32 % d'opacité derrière un dégradé | Servir une version `w=1200`, ou l'héberger localement en WebP compressé. Gain d'environ 350 Ko sur le chemin critique |
| IMPORTANT | index.html | 30, 31, 33, 34 | Quatre scripts sans `defer` ni `async` : Phosphor, Tailwind, GSAP, ScrollTrigger. Tous bloquent le rendu | Ajouter `defer` sur GSAP/ScrollTrigger/Phosphor, supprimer Tailwind CDN (voir 3.1) |
| IMPORTANT | index.html | 30 | Le script Phosphor injecte 6 feuilles de style (regular, thin, light, bold, fill, duotone) alors que seule la variante regular est utilisée. La police regular pèse 147 Ko | Charger uniquement `@phosphor-icons/web@2.1.2/src/regular/style.css`, ou remplacer les quelques icônes par des SVG inline |
| IMPORTANT | index.html | 1615-1671 | Canvas "neural network" : 55 nœuds, boucle O(n²) soit 1 485 calculs de distance par frame, `requestAnimationFrame` en continu, jamais mis en pause hors écran. S'ajoute à 3 blobs en `filter: blur(120px)` et à plusieurs `backdrop-filter` | Réduire à 25-30 nœuds, arrêter la boucle quand `document.hidden`, et désactiver le canvas sous 768 px et en `prefers-reduced-motion` |
| IMPORTANT | index.html | 674 | `resilience_chart.png` : 3030 x 1726 px, 129 Ko, affichée dans un panneau de 120 px de large | Redimensionner à 240 px de large (moins de 15 Ko) |
| MINEUR | index.html | 23 | Favicon = `kevo.jpeg`, 98 Ko, 1358 x 1599 px | Générer un vrai favicon 32 x 32 et 180 x 180 |
| MINEUR | manifest.json | icons | Les icônes 192, 512 et maskable pointent toutes vers le même JPEG portrait 1358 x 1599 | Générer de vraies icônes PNG carrées aux tailles déclarées, sinon l'installation PWA affiche une icône déformée |
| MINEUR | index.html | 528-531 | `preconnect` déclaré pour fontshare, tailwind et unpkg, mais pas pour `images.unsplash.com` d'où viennent 19 références d'images | Ajouter `<link rel="preconnect" href="https://images.unsplash.com">`, ou héberger les images localement |
| MINEUR | index.html | 683-684 | `width="380" height="380"` déclarés sur une image dont le ratio réel est 1358 x 1599 | Déclarer le ratio réel pour éviter tout décalage de mise en page |

### 3.3 IMPORTANT — Service worker : les visiteurs déjà venus ne verront pas les corrections

| Fichier | Problème | Correction suggérée |
|---|---|---|
| sw.js (ligne 6) | `CACHE_NAME = 'kevo-portfolio-v1'` figé, stratégie cache-first sur toutes les requêtes de même origine, y compris le document HTML | Un visiteur ayant déjà ouvert le site continuera de voir l'ancienne page après le correctif, sans limite de temps. À corriger obligatoirement dans le même lot que les corrections de contenu : incrémenter `CACHE_NAME` à chaque déploiement, et passer le HTML en network-first |
| sw.js (lignes 7-14) | Précache de `/style.css` et `/projects.js`, fichiers qui ne sont plus utilisés par la page ; `main.js` est absent du site (404) | Nettoyer la liste de précache |

### 3.4 Accessibilité

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| IMPORTANT | index.html | 1469 | Copyright en `text-secondary/35` : contraste calculé 1,92:1 sur le fond `#0B0F19` (minimum WCAG AA : 4,5:1) | Utiliser `text-secondary` sans opacité, ou au minimum `/70` (4,2:1) |
| IMPORTANT | index.html | 1190, 1457, 1471, 1472 | `text-secondary/40` : 2,15:1 | Idem. Concerne notamment la mention "Projet confidentiel" et la ligne email/localisation du bloc contact |
| IMPORTANT | index.html | 783, 788, 793, 798 | `text-secondary/50` : 2,71:1, sur les libellés des 4 chiffres clés | Idem |
| IMPORTANT | index.html | 703, 741, 1406 | `text-secondary/60` : 3,39:1 | Idem |
| IMPORTANT | index.html | 59-65 | `body { cursor: none }` avec curseur personnalisé en JS | Si le JS échoue ou est partiellement bloqué, l'utilisateur n'a plus de curseur visible. Le `<noscript>` (ligne 27) ne couvre que le cas JS désactivé, pas le cas JS en erreur. Prévoir un fallback, ou revenir à un curseur natif |
| IMPORTANT | index.html | 480-486 | `prefers-reduced-motion` neutralise les animations CSS mais pas les animations JS (canvas, GSAP, compteurs, curseur) | Ajouter un test `matchMedia('(prefers-reduced-motion: reduce)')` en tête des IIFE lignes 1563, 1615, 1688 et du bloc GSAP ligne 1746 |
| MINEUR | index.html | 541 | `<div id="scroll-progress" aria-hidden="true" role="progressbar">` : `role` et `aria-hidden` se contredisent, et il manque `aria-valuenow` | Garder uniquement `aria-hidden="true"` |
| MINEUR | index.html | 562 | Pas de lien d'évitement ("aller au contenu") avant la navigation | Ajouter un skip link visible au focus |
| MINEUR | index.html | 582-588 | Menu mobile : pas de piège de focus, pas de retour de focus sur le bouton à la fermeture, pas de fermeture par Échap | Ajouter la gestion clavier |
| MINEUR | index.html | 626, 1322, 1366, 1407, 1458, 1508 | Emojis utilisés comme contenu textuel (lus par les lecteurs d'écran : "émoji enveloppe") | Les envelopper dans `<span aria-hidden="true">` |
| MINEUR | index.html | 2 vs 1221-1233 | `lang="fr"` alors que plusieurs blocs sont en anglais | Voir 1.7 |

Points positifs vérifiés : 11 images sur 11 ont un `alt`, un seul `<h1>`, `aria-label` présents sur les liens icônes, anneaux de focus (`focus:ring`) présents sur les éléments interactifs principaux.

### 3.5 Responsive

Note : le redimensionnement de fenêtre n'a pas pu être appliqué au viewport lors du test, ces points relèvent de l'analyse du code et doivent être confirmés sur un appareil réel.

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| IMPORTANT | index.html | 632 | Bloc KPI en `grid-cols-3` sans variante mobile : 3 cartes sur 390 px, soit environ 110 px chacune pour "Dashboards Metabase déployés" | `grid-cols-1 sm:grid-cols-3`, ou réduire les libellés |
| MINEUR | index.html | 605-608 | `<br>` forcés dans le `<h1>` avec `hidden md:block` et `md:hidden` : la coupure "Ingénieur / d'Affaires & / Data / Engineering" est fragile selon la largeur | Laisser le texte se répartir naturellement avec `max-w-[Xch]` |
| MINEUR | index.html | 1291 | Colonne visuelle du parcours en `lg:sticky` avec `aspect-ratio: 9/16` : sur tablette elle occupe une hauteur importante avant le contenu | Masquer sous `lg` |

### 3.6 SEO

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| BLOQUANT | index.html | 21, 11, 13, 19, 495, 496 | Canonical, og:url, og:image, twitter:image et JSON-LD pointent vers un domaine non enregistré | Voir 2.1 |
| IMPORTANT | (absent) | - | Pas de `robots.txt` ni de `sitemap.xml` (404 tous les deux) | Ajouter les deux fichiers à la racine du dépôt |
| IMPORTANT | index.html | 520-523 | JSON-LD : `worksFor` renseigné avec `{"name": "Available for CDI - August 2026"}`, ce qui n'est pas une organisation | Retirer `worksFor`, ou le remplacer par `seeks` / `alumniOf` déjà présent |
| MINEUR | index.html | 511-514 | JSON-LD `alumniOf` ne mentionne que l'UTBM | Ajouter l'Université de Lomé, présente dans le parcours |
| MINEUR | index.html | 8 | `<meta name="keywords">` | Balise ignorée par Google, sans effet. Peut rester ou être supprimée |
| MINEUR | index.html | toute la page | Structure de titres : 1 h1, 9 h2, 33 h3. Les sections "Trust signals" (777) et "Certifications" (701, 739) n'ont pas de titre de niveau h2, seulement un paragraphe stylé | Convertir ces intitulés en h2 pour une hiérarchie continue |
| MINEUR | (absent) | - | Pas de `netlify.toml` ni de fichier `_headers` : aucun contrôle sur les en-têtes de cache et de sécurité | Ajouter un `_headers` minimal (CSP, X-Frame-Options, cache long sur `/images/*`) |

---

## 4. Fonctionnel

### 4.1 Formulaire de contact

| Sévérité | Fichier | Ligne | Constat | Correction suggérée |
|---|---|---|---|---|
| IMPORTANT | index.html | 1420 | `action="https://formspree.io/f/mjknokbg"`, méthode POST. L'endpoint existe (réponse 405 sur GET, ce qui correspond à un formulaire actif acceptant uniquement POST). Impossible de garantir la livraison sans envoi réel : sur Formspree, un formulaire non confirmé par email n'envoie rien | Faire un envoi de test réel et vérifier la réception sur kevoamouzou@gmail.com. C'est le seul moyen d'être certain |
| IMPORTANT | index.html | 1420 | Aucune redirection de confirmation : après envoi, le visiteur atterrit sur une page Formspree hors du site | Ajouter `<input type="hidden" name="_next" value="https://.../merci.html">` et créer une page de remerciement |
| MINEUR | index.html | 1420 | Pas de champ anti-spam | Ajouter `<input type="text" name="_gotcha" style="display:none">` |
| MINEUR | index.html | 1436 | Pas d'état de chargement ni de message d'erreur en cas d'échec réseau | Optionnel : envoi en `fetch` avec retour visuel dans la page |

### 4.2 Ancres de navigation

Vérifié en direct : les 5 cibles `#about`, `#skills`, `#projects`, `#experience`, `#contact` existent. Aucune ancre morte, desktop (lignes 566-570) et mobile (583-587).

| Sévérité | Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|---|
| MINEUR | index.html | 592 | La nav fixe fait 80 px de haut et `scroll-behavior: smooth` est actif, mais aucun `scroll-margin-top` n'est défini sur les sections : le titre de la section visée passe partiellement sous la barre | Ajouter `section[id] { scroll-margin-top: 96px; }` |
| MINEUR | index.html | 1677-1683 | Surlignage du lien actif via IntersectionObserver `threshold: 0.38` : les sections plus hautes que le viewport n'atteignent jamais ce seuil, le lien actif peut ne pas se mettre à jour | Utiliser `rootMargin` plutôt qu'un seuil de surface |

### 4.3 IMPORTANT — Mise en page cassée de la section Contact

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 1378-1461 | La grille `lg:grid-cols-[1fr_0.95fr]` contient trois enfants : le visuel (1379), la carte "Me contacter" (1401-1409), et la carte du formulaire (1411-1460). Le troisième enfant passe donc à la ligne suivante. Mesuré en direct : visuel à x=93, carte titre à x=691, formulaire à x=106 sur une nouvelle rangée, laissant une colonne entière vide à sa droite | Fusionner les cartes 1401-1409 et 1411-1460 en un seul bloc, ou fermer la grille après deux enfants. Il s'agit de la section de conversion principale du site |

---

## 5. Cohérence éditoriale

### 5.1 BLOQUANT — Chiffres non sourcés dans le CV

Le CV justifie : +15 tableaux de bord Metabase, réduction de 80 % du temps de saisie, +50 tâches quotidiennes automatisées, 500+ utilisateurs du chatbot, +50 comptes Active Directory sécurisés, ISO 9001 sur SharePoint. Ces chiffres sont solides.

Les chiffres suivants n'apparaissent nulle part ailleurs, ni dans le CV ni dans les dépôts GitHub. Chacun est une question d'entretien potentielle sans réponse préparée.

| Fichier | Ligne | Affirmation | Statut | Correction suggérée |
|---|---|---|---|---|
| index.html | 873, 1221, 1506 | "adoption +300%" | Non sourcé | Fournir la méthode de calcul ou supprimer |
| index.html | 873 | "6h/semaine économisées" | Non sourcé | Idem |
| index.html | 873, 1221, 1508 | "ROI 6 mois" | Non sourcé | Idem |
| index.html | 894 | "ROI <2 mois" | Non sourcé, et contredit "ROI 6 mois" ligne 873 pour des travaux voisins | Supprimer ou harmoniser |
| index.html | 894 | "zéro erreur" | Absolu invérifiable | Reformuler ("suppression des doublons de saisie", formulation du CV) |
| index.html | 903, 915, 1229, 1544 | "95% adoption utilisateurs" | Non sourcé | Idem |
| index.html | 1542 | "formation 100+ users" | Non sourcé ; le CV parle du portail regroupant "100% des outils critiques", pas de 100 personnes formées | Vérifier, sinon supprimer |
| index.html | 1249, 1517 | "<2s latency" sur le chatbot | Non sourcé | Idem |
| index.html | 1524, 1526 | "réduction des risques de 40%" (digital twin) | Résultat de simulation académique présenté comme un résultat obtenu | Préciser "en simulation" |
| index.html | 1551, 1553 | "-25% deadstock" | Non sourcé | Idem |
| index.html | 1533, 1535 | "Traitement millions lignes/jour" et "pytest coverage 85%" | Le CV dit "des **milliers** de lignes de données Vélib'". Contradiction directe, facilement vérifiable puisque le dépôt urban-mobility-analytics est public | Aligner sur "milliers", vérifier la couverture de tests réelle dans le dépôt |
| index.html | 1506 | "portefeuille M€" | Non sourcé, et potentiellement confidentiel BH2M | Supprimer ou obtenir l'accord de BH2M |
| index.html | 618 | "PMI France Chapter · Member" | Absent du CV | Ajouter au CV si l'adhésion est active, sinon supprimer |

### 5.2 IMPORTANT — Ton

| Fichier | Ligne | Problème | Correction suggérée |
|---|---|---|---|
| index.html | 805-844 | Section "Ce que recherchent les entreprises / Ce que je leur apporte" : quatre cartes de promesses génériques ("Je relie chaque action à un résultat mesurable", "Data fiable") sans exemple chiffré | Fusionner avec la section "Cas d'usage" (847) qui, elle, est concrète. En l'état les deux sections se contredisent en niveau de preuve |
| index.html | 967-1009 | Section bibliographie : 6 ouvrages classiques de management | Sans lien avec des réalisations, cette section allonge la page de 1 000 px sans apporter de preuve. À réduire à 3 titres ou à supprimer |
| index.html | 1404 | "Je réponds à chaque message en **24h**" | Engagement chiffré et vérifiable par le recruteur lui-même. À tenir ou à retirer |
| index.html | 1412-1419 | "Recruteurs et partenaires répondent rapidement" avec 3 pastilles "R", "P", "C" simulant des avatars | Faux signal social. Supprimer |
| index.html | 606-613 | Le hero enchaîne 3 titres de métiers (Ingénieur d'Affaires, Data Engineering, Supply Chain Digitale) puis 6 domaines d'expertise | Choisir un positionnement principal et deux secondaires, sinon le message se dilue |
| index.html | 1508, 1517, 1526, 1535, 1544, 1553 | Les badges d'impact des projets mélangent emojis et chiffres non sourcés | Uniformiser en texte sobre |

---

## Ordre d'exécution suggéré pour Kimi

Bloc 1, prérequis technique : fait (section 0). Le dépôt local est synchronisé sur `origin/main`, les corrections peuvent être appliquées directement sur `/Users/kevo/Documents/portfolioo/index.html`.

Bloc 2, bloquants contenu, à traiter ensemble :
2. Passer BH2M au passé partout (1.1), y compris pastille de timeline et JSON-LD.
3. Aligner les intitulés de poste sur le CV (1.2).
4. Corriger "Senior (3-4 ans d'expérience)" (1.3).
5. Trancher polonais et "bilingue" (1.4).
6. Décider du sort des témoignages (1.6).
7. Retirer ou sourcer les chiffres de 5.1, en priorité "millions lignes/jour" qui contredit le CV.

Bloc 3, bloquants techniques :
8. Décider du domaine, puis corriger les 6 références à kevoamouzou.com (2.1).
9. Retirer `loading="lazy"` de l'image du hero (3.2).
10. Incrémenter `CACHE_NAME` dans `sw.js` et passer le HTML en network-first (3.3), sinon les visiteurs déjà venus ne verront aucune correction.

Bloc 4, importants :
11. Réparer la mise en page de la section Contact (4.3).
12. Tester réellement le formulaire Formspree et ajouter la page de confirmation (4.1).
13. Corriger les contrastes inférieurs à 4,5:1 (3.4).
14. Supprimer Tailwind CDN, ajouter `defer`, réduire Phosphor à une variante, alléger le canvas (3.2).
15. Supprimer le code mort typewriter et déplacer GSAP sur `DOMContentLoaded` (3.1).

Bloc 5, mineurs :
16. robots.txt, sitemap.xml, `_headers`, icônes du manifest, favicon, `scroll-margin-top`, suppression de `index.html.bak`, nettoyage de la numérotation des sections.

Enfin, hors du site : régénérer le CV PDF (BH2M au passé, master achevé, titres alignés) et vérifier que le profil LinkedIn dit exactement la même chose que le site sur les trois points sensibles : intitulés de poste, dates, niveau d'anglais.
