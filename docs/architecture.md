# Architecture du scaffold LinguaeLab

## Objectif

Ce dépôt fournit un scaffold statique multi-niveaux prêt pour GitHub Pages.
Il sépare trois couches simples :

- `assets/js/data/` : blueprints et références officielles ;
- `assets/js/lessonRegistry.js` : registre central indexé ;
- `assets/js/views/` + `assets/js/router.js` : rendu et navigation hash-based.

LinguaeLab conserve un héritage structurel historique d’ATRIUM,
mais l’identité produit et le scaffold courant restent alignés sur LinguaeLab.

## Principes retenus

- pas de framework ;
- ES modules uniquement ;
- routes via `location.hash` pour rester compatibles avec un hébergement statique ;
- coexistence de modules authored et tested avec fallback scaffold pour les surfaces non rédigées ;
- `officialRefs` conservées au niveau des niveaux, modules et leçons.

## Arborescence utile

```text
assets/
  css/styles.css
  js/
    app.js
    router.js
    lessonRegistry.js
    data/
      curriculumBlueprint.js
      blueprintFactory.js
      refs/officialRefs.js
      6e/blueprint.js
      5e/blueprint.js
      4e/blueprint.js
      3e/blueprint.js
    views/
      dashboardView.js
      levelView.js
      moduleView.js
      lessonView.js
```

## Contrat de données

- 4 niveaux (`6e`, `5e`, `4e`, `3e`) ;
- 17 modules au total ;
- 15 leçons par module ;
- 12 `exerciseSlots` par leçon ;
- 3e module 5 réservé aux révisions DNB.

## État de maturité (référentiel courant)

- 6e : modules `tested` (release candidate) ;
- 5e : `5e-m1` à `5e-m3` en `tested`, `5e-m4` en `authored` ;
- 4e : modules `authored` ;
- 3e : modules `authored` (dont `3e-m5` DNB en entraînement guidé).

## Tests de cohérence

Les tests Node contrôlent :

- les imports des blueprints ;
- l’unicité des IDs de niveaux, modules et leçons ;
- les cardinalités attendues ;
- la présence des `officialRefs` ;
- la cohérence du registre ;
- la résolution minimale des routes hash-based.
