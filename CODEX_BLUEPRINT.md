# CODEX_BLUEPRINT.md

Ce fichier sert de plan d’exécution pour Codex.

## Objectif global

Transformer ce scaffold en application exploitable pour l’ensemble du collège sous l’identité LinguaeLab, en conservant l’héritage d’ATRIUM : progression explicite, scoring contractuel, correction robuste, interface simple, déploiement statique.

## Répartition

- 6e : 4 modules
- 5e : 4 modules
- 4e : 4 modules
- 3e : 4 modules + 1 module Révisions DNB

## Utilisation avec Codex

Ouvrir ce dépôt dans Codex, lire `AGENTS.md`, puis traiter les tâches de façon séquencée.

### Tâche 1 — Auditer le scaffold collège

> Analyse ce dépôt comme base d’une application web statique multi-niveaux. Vérifie la cohérence des imports, la lisibilité de l’arborescence, la séparation données / vues / logique métier, la cohérence du registre multi-années et des routes. Propose puis applique les corrections minimales à haut niveau de confiance.

### Tâche 2 — Stabiliser le shell multi-niveaux

> Rends le shell pleinement cohérent pour 6e, 5e, 4e et 3e : dashboard par niveau, ouverture d’un module, ouverture d’une leçon, affichage correct des métadonnées, navigation retour. Ne refonds pas le dépôt et ne change pas les IDs existants.

### Tâche 3 — Rédiger la 6e complète

> Rédige intégralement les 4 modules de 6e. Chaque module doit contenir 15 leçons et chaque leçon 12 exercices réellement exploitables. Respecte le blueprint existant, les `officialRefs`, la progressivité spiralaire et la variété des types d’exercices. Garde un moteur de correction robuste et tolérant quand nécessaire.

### Tâche 4 — Brancher les types d’exercices réellement utilisés

> Implémente ou consolide le moteur de correction pour les types d’exercices effectivement employés dans les modules rédigés : singleChoice, multiChoice, textInput, reorder, rewrite, shortJustification. Sépare nettement normalisation, validation stricte, validation souple et feedback.

### Tâche 5 — Ajouter les tests de cohérence étendus

> Ajoute des tests de validation de données pour tous les niveaux : score maximal, nombre d’exercices, présence des `officialRefs`, cohérence des IDs, absence d’exercices vides, homogénéité des types, navigation minimale.

### Tâche 6 — Déployer vers les niveaux suivants

> Après stabilisation de la 6e, applique le même pipeline à la 5e, puis à la 4e, puis à la 3e, sans casser la structure commune. Le module DNB de 3e doit être traité comme un module distinct, orienté entraînement à l’épreuve.

## Règles à rappeler à Codex

- Ne pas refondre la structure sans raison forte.
- Ne pas introduire de framework lourd.
- Ne pas transformer l’app en LMS complexe.
- Préserver GitHub Pages comme cible de déploiement naturelle.
- Rester fidèle à la grammaire du projet : niveaux, modules, leçons, scoring, spirale, références officielles.
