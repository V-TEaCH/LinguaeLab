# AGENTS.md

## Mission

Construire ATRIUM-Français comme une application web statique, sans framework lourd, fidèle à l’ergonomie et à la logique d’ATRIUM, mais centrée sur l’apprentissage spiralaire du français au collège.

## Périmètre du dépôt

Le dépôt couvre toute la structure du collège :
- 6e : 4 modules
- 5e : 4 modules
- 4e : 4 modules
- 3e : 4 modules + 1 module Révisions DNB

Chaque module comporte 15 leçons.
Chaque leçon doit viser 12 exercices.

## Contraintes non négociables

- Garder une architecture no-build ou build-minimal.
- Préserver un fonctionnement simple sur GitHub Pages.
- Ne pas introduire React, Vue, Svelte ou autre framework lourd.
- Une leçon n’introduit qu’une notion centrale nouvelle.
- Les exercices 10, 11 et 12 servent toujours au réemploi, au transfert ou à la spirale.
- Les réponses ouvertes doivent accepter plusieurs formulations recevables quand la compétence visée n’est pas la restitution mot à mot.
- Le feedback doit être explicite et bref.
- Ne jamais casser les identifiants existants de modules et de leçons sans motif fort.
- Préserver les `officialRefs` et leur traçabilité.

## Priorités éditoriales

1. Robustesse pédagogique
2. Fidélité aux référentiels
3. Lisibilité UI
4. Cohérence des données
5. Souplesse de correction
6. Facilité d’extension et de maintenance

## Source de vérité éditoriale

Pour toute génération ou modification des contenus 6e, utiliser en priorité :
- docs/specs/6e-blueprint-complet.md
- docs/specs/6e-rules.md

Ne pas inventer de structure alternative.
Ne pas changer le nombre de modules, de leçons ou d’exercices.
Respecter strictement la logique spiralaire et la clarté des consignes.
Toute génération doit rester compatible avec le registre de leçons, le routeur, le scoring et les tests existants.

## Style de code

- JavaScript modulaire ES modules.
- Fonctions courtes et lisibles.
- Pas de logique métier enfouie dans les vues.
- Les règles de scoring et de validation restent centralisées.
- Les références officielles restent traçables via `officialRefs`.
- Tout nouveau moteur de correction doit être testé.

## Workflow recommandé

- D’abord stabiliser structure et registre.
- Ensuite rédiger un module complet.
- Puis brancher la correction correspondant aux types d’exercices réellement utilisés.
- Enfin enrichir les vues résultats, analytics et UX.

## Définition du “done”

Un module n’est réellement “fait” que si :
- ses 15 leçons existent ;
- ses 12 exercices par leçon sont rédigés ;
- ses types d’exercices sont supportés par le moteur ;
- les tests de cohérence passent ;
- la navigation et le rendu de ses leçons sont opérationnels.
