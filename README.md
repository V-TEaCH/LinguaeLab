# LinguaeLab

Application web statique d’apprentissage spiralaire du français au collège.

LinguaeLab s’appuie sur l’héritage pédagogique et ergonomique d’ATRIUM pour l’étude du français : grammaire, orthographe grammaticale, conjugaison, syntaxe, cohésion textuelle, reformulation et réécriture.

## Vision produit

LinguaeLab n’est pas une banque de QCM. L’application est conçue comme un parcours pédagogique structuré : l’élève progresse niveau par niveau, module par module, leçon par leçon, avec une alternance entre repérage, manipulation, justification et réemploi.

L’objectif n’est pas seulement de “faire des exercices”, mais d’installer des automatismes de lecture, d’analyse, de révision et de production écrite, dans une logique spiralaire compatible avec les attendus du collège.

## Référentiels

- 6e : programme de français du cycle 3 publié au BO du 17 avril 2025.
- 5e / 4e / 3e : programme de français du cycle 4 publié au BO du 5 mars 2026, avec entrée progressive selon le niveau.
- 3e : ajout d’un module spécifique de révisions DNB.

## Contrat pédagogique cible

- 6e : 4 modules × 15 leçons × 12 exercices-cadres
- 5e : 4 modules × 15 leçons × 12 exercices-cadres
- 4e : 4 modules × 15 leçons × 12 exercices-cadres
- 3e : 5 modules × 15 leçons × 12 exercices-cadres

Total prévu sur le collège :
- 17 modules
- 255 leçons
- 3060 emplacements d’exercices

## Structure actuelle du dépôt

```text
LinguaeLab/
  index.html
  manifest.json
  service-worker.js
  README.md
  AGENTS.md
  CODEX_BLUEPRINT.md
  CODEX_PROMPT.md
  package.json
  assets/
    css/
      styles.css
    js/
      app.js
      router.js
      lessonRegistry.js
      data/
        curriculumBlueprint.js
        blueprintFactory.js
        refs/
          officialRefs.js
        6e/
          blueprint.js
        5e/
          blueprint.js
        4e/
          blueprint.js
        3e/
          blueprint.js
      views/
        dashboardView.js
        levelView.js
        moduleView.js
        lessonView.js
  docs/
    architecture.md
    lesson-registry.md
  tests/
    routerSmoke.test.mjs
    validateBlueprints.test.mjs
```

## État du scaffold

Ce dépôt est maintenant un scaffold statique cohérent pour tout le collège :

- l’arborescence multi-niveaux est présente ;
- le registre central indexe 4 niveaux, 17 modules et 255 leçons ;
- chaque leçon expose 12 `exerciseSlots` servant de cadre éditorial ;
- les routes hash-based restent compatibles avec GitHub Pages ;
- les contenus authored restent partiels : le dépôt fournit surtout un cadre stable,
  avec rédaction progressive module par module ;
- chaque module expose désormais un `contentStatus` explicite
  (`scaffold`, `authored`, `tested`, `released`) pour suivre l’avancement réel ;
- l’expérience complète d’exercices interactifs n’est pas encore généralisée
  à l’ensemble du collège.

## Démarrage rapide

```bash
npm test
```

Puis ouvrir `index.html` dans un navigateur ou déployer sur GitHub Pages.
