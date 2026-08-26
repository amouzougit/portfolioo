# Kevo Amouzou · Portfolio

Ingénieur Digitalisation Industrielle et SI. Site statique publié sur Netlify.

Production : https://kevo-amouzou.pages.dev/

## Profil

Double formation UTBM, Informatique et Systèmes d'Information puis Affaires Industrielles
Internationales, certifié Oracle ERP et IA. Je digitalise les opérations là où les processus
manuels freinent la performance : connexion ERP et dashboards, automatisation VBA et SQL,
digitalisation QHSE ISO 9001.

Disponible immédiatement en CDI. Belfort, France, permis B, mobilité France entière,
télétravail hybride possible.

## Parcours

| Période | Poste | Structure |
|---|---|---|
| Fév. 2026 - Juil. 2026 | Assistant Chef de Projet Digitalisation Industrielle et SI | BH2M, ingénierie hydroélectrique, Belfort |
| Oct. 2025 - Jan. 2026 | Ingénieur R&D, Intelligence Artificielle | Client international, remote |

Formation : Master 2 Affaires Industrielles Internationales, UTBM, 2025-2026.
Master Informatique et Systèmes d'Information, UTBM, 2022-2024.
Licence Génie Logiciel, Université de Lomé.

Certifications Oracle : Cloud Infrastructure 2024 Generative AI Certified Professional,
ERP Foundations Associate Fusion Cloud Applications, AI Vector Search Certified Professional.

Langues : français langue maternelle, anglais professionnel B2, espagnol élémentaire A2.

## Compétences

Digitalisation et SI industriels : ERP Dolibarr, Loxya, Oracle Fusion Cloud, SharePoint, GED,
MES, Active Directory, KeePass, ISO 9001 / 14001 / 45001.

Data, BI et développement : SQL, PostgreSQL, Metabase, Power BI, VBA, Python, Airflow, dbt,
Docker, Flask, API REST.

Méthodes et conduite de projet : Lean, amélioration continue, PDCA, A3, 5S, gestion des risques,
Agile et Scrum, PERT et GANTT, MS Project, conduite du changement.

## Projets présentés

1. Pilotage BI temps réel sur ERP Dolibarr. Metabase, SQL, Dolibarr.
   Déployé en production chez BH2M, code propriétaire.
2. Chatbot GenAI en production, architecture RAG. Flask, API REST, Pinecone.
   Mission internationale en remote, base de connaissances propriétaire.
3. Pipeline de données industriel. Airflow, dbt, PostgreSQL, Docker.
   Code ouvert : https://github.com/amouzougit/urban-mobility-analytics

## Technique

Site statique, sans build ni dépendance à installer.

```
index.html                      HTML, CSS et JS inline, contenu des projets en statique
sw.js                           service worker, HTML en network-first, statique en cache-first
manifest.json                   PWA
robots.txt, sitemap.xml         indexation
images/kevo.jpeg                portrait, seule image de la page
CV_Kevo_Amouzou_Industriel.pdf  CV lié depuis le site
```

Chargé par CDN : Fontshare pour les polices, Phosphor Icons. Formulaire de contact : Formspree.
Aucun framework JavaScript, aucune bibliothèque d'animation.

Aperçu local :

```bash
python3 -m http.server 8899 --bind 127.0.0.1
```

Déploiement : pousser sur `main` déclenche Netlify. Après toute modification de `index.html`,
incrémenter `CACHE_VERSION` dans `sw.js`.

Les règles de contenu et le journal des sessions sont dans `CLAUDE.md` et `SESSIONS.md`.

## Contact

LinkedIn : https://www.linkedin.com/in/kevo-amouzou
GitHub : https://github.com/amouzougit
Email : kevoamouzou@gmail.com
