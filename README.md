# ATRIUM-Français

Application web statique d’apprentissage spiralaire de la langue française au collège.

ATRIUM-Français transpose l’architecture pédagogique d’ATRIUM à l’étude du français : grammaire, orthographe grammaticale, conjugaison, syntaxe, cohésion textuelle, reformulation et réécriture.

## Vision produit

ATRIUM-Français n’est pas une banque de QCM. L’application est conçue comme un parcours pédagogique structuré : l’élève progresse niveau par niveau, module par module, leçon par leçon, avec une alternance entre repérage, manipulation, justification et réemploi.

L’objectif n’est pas seulement de “faire des exercices”, mais d’installer des automatismes de lecture, d’analyse, de révision et de production écrite, dans une logique spiralaire compatible avec les attendus du collège.

## Référentiels

- 6e : programme de français du cycle 3 publié au BO du 17 avril 2025.
- 5e / 4e / 3e : programme de français du cycle 4 publié au BO du 5 mars 2026, avec entrée progressive selon le niveau.
- 3e : ajout d’un module spécifique de révisions DNB.

## Contrat pédagogique cible

- 6e : 4 modules × 15 leçons × 12 exercices
- 5e : 4 modules × 15 leçons × 12 exercices
- 4e : 4 modules × 15 leçons × 12 exercices
- 3e : 5 modules × 15 leçons × 12 exercices

Total prévu sur le collège :
- 17 modules
- 255 leçons
- 3060 emplacements d’exercices

## Axes

- Axe 1 : construire la phrase
- Axe 2 : accorder et orthographier
- Axe 3 : conjuguer et choisir
- Axe 4 : reformuler et styliser
- 3e seulement : module 5 “Révisions DNB”

## Structure canonique d’une leçon

1. rappel flash
2. repérage 1
3. repérage 2
4. manipulation 1
5. manipulation 2
6. discrimination fine
7. correction d’erreur
8. justification courte
9. vigilance orthographique / ponctuation
10. réécriture
11. transfert contextualisé
12. reprise spiralaire d’une notion antérieure

## Structure du repository

```text
ATRIUM-francais/
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
      storage.js
      scoring.js
      normalize.js
      answerChecker.js
      trainingEngine.js
      productionEngine.js
      lessonRegistry.js
      ui.js
      data/
        curriculumBlueprint.json
        refs/
          eduscol6e.js
          eduscolCycle4.js
          dnb2026.js
        6e/
          blueprint.json
          module1.js
          module2.js
          module3.js
          module4.js
        5e/
          blueprint.json
          module1.js
          module2.js
          module3.js
          module4.js
        4e/
          blueprint.json
          module1.js
          module2.js
          module3.js
          module4.js
        3e/
          blueprint.json
          module1.js
          module2.js
          module3.js
          module4.js
          module5.js
      components/
        moduleCard.js
        lessonCard.js
        progressBar.js
        feedbackBox.js
        headerTabs.js
      views/
        dashboardView.js
        moduleView.js
        lessonView.js
        resultsView.js
        settingsView.js
  docs/
    architecture.md
    roadmap.md
  tests/
    validateBlueprints.test.mjs
```

## État de ce scaffold

Ce dépôt est un squelette de production étendu à tout le collège :
- l’architecture multi-niveaux est posée ;
- les blueprints 6e / 5e / 4e / 3e sont présents ;
- le module DNB de 3e est prévu ;
- le shell applicatif gère désormais les niveaux ;
- les contenus réels d’exercices restent à rédiger module par module.

## Démarrage rapide

```bash
npm test
```

Puis ouvrir `index.html` dans un navigateur ou déployer sur GitHub Pages.
