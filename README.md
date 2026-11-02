# Kevo Amouzou · Portfolio

Portfolio professionnel de Kevo Amouzou, orienté digitalisation industrielle, outils métier et pilotage par la donnée.

Production existante : https://kevo-amouzou.pages.dev/

## Contenu

- Missions BH2M : tableaux de bord SQL/Metabase sur Dolibarr, automatisation VBA/SQL et processus SharePoint/Loxya.
- Compétences et outils : données, SI métier, développement applicatif et conduite de projet.
- Parcours : expériences professionnelles et formations informatique/SI et A2I.
- Certifications Oracle, langues et liens LinkedIn/GitHub/e-mail.

Les projets personnels confidentiels et les projets que Kevo ne souhaite plus présenter sont exclus de la version publiée. Le CV historique reste dans le dépôt, mais est exclu de `dist/` tant qu’il contient un projet confidentiel.

## Technique

Site statique en HTML, CSS et JavaScript, sans framework ni dépendance à installer. Typographie système ; aucune police distante. `script.js` gère la copie de l’e-mail et l’enregistrement du service worker. `styles.css` contient les règles adaptatives et de réduction des animations.

```sh
./build.sh
python3 -m http.server 8898 --bind 127.0.0.1 --directory dist
```

`build.sh` publie seulement une liste explicite de fichiers. Ne pas y ajouter les documents internes ni le CV historique. Les anciens liens `/projets` sont redirigés vers `/#realisations`.

Un push sur `main` déclenche Cloudflare Pages. Un commit local ne publie rien. Après modification d’une ressource précachée, incrémenter `CACHE_VERSION` dans `sw.js`.

## Contact

- LinkedIn : https://www.linkedin.com/in/kevo-amouzou
- GitHub : https://github.com/amouzougit
- E-mail : kevoamouzou@gmail.com
