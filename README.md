# FlixBrew

> Work in progress - mod TizenBrew pour une experience TV "Netflix-like" (UI sombre, navigation telecommande, focus states renforces).

## Etat du projet

Ce repo est publie en **WIP**: la base fonctionne, mais il reste des ajustements UI/UX, du nettoyage et de la stabilisation.

## Objectif

FlixBrew applique une couche de personnalisation front sur un site cible pour un usage TV:

- theme et hierarchie visuelle TV-first
- navigation spatiale / telecommande
- injection locale pour iterer rapidement
- build de bundles compatibles TizenBrew

## Structure

```text
FlixBrew/
|- mods/                  # Source principale du front modifie
|- service/               # Service TizenBrew
|- dev/                   # Outils d'injection locale
|- dist/                  # Bundles de sortie (generes)
|- base/                  # Base d'inspiration / references locales
|- original-website/      # Snapshots de reference (non necessaires pour le runtime)
|- package.json
`- script.ps1
```

## Scripts utiles

Depuis la racine:

- `npm run build` : build complet (`mods` + `service`)
- `npm run build:mods` : build uniquement du front
- `npm run build:service` : build uniquement du service
- `npm run dev:mods` : watch rollup pour le front
- `npm run dev:inject` : serveur d'injection locale (`http://localhost:8787`)

## Workflow dev rapide

1. `npm run dev:mods`
2. `npm run dev:inject`
3. injecter `http://localhost:8787/loader.js` sur la page cible
4. modifier le code dans `mods/`
5. lancer `npm run build` avant publication

## Publication GitHub (recommande)

### A publier

- `mods/`, `service/`, `dev/`, `dist/`
- `package.json`, `README.md`, `.gitignore`, `script.ps1`

### A eviter de publier (ou a rendre optionnel)

- `original-website/` et `base/` si ces dossiers contiennent du contenu tiers, captures ou HTML non redistribuable
- tout fichier local de debug / export / secrets

Si tu veux garder le contexte sans exposer les snapshots, tu peux:

- conserver seulement une version minimale anonymisee
- ou deplacer les references privees hors du repo public

## Notes

- Cible principale: TV Samsung (Tizen), donc priorite a la lisibilite et au focus clavier/telecommande.
- `dist/` est genere depuis `mods/` et `service/`.
- Projet en evolution: l'API interne et le style peuvent encore changer.
