# Rulebook — LinguaeLab

## Objet

Ce dépôt contient une application d’apprentissage spiralaire du français au collège.
Il doit rester compatible avec un scaffold web statique simple, lisible et stable.

## Structure non négociable

### 6e, 5e, 4e

- 4 modules par année ;
- 15 leçons par module ;
- 12 exercices par leçon.

### 3e

- 5 modules au total, dont 1 module Révisions DNB ;
- 15 leçons par module ;
- 12 exercices par leçon.

## Règles pédagogiques obligatoires

- une leçon introduit une seule notion centrale nouvelle ;
- chaque leçon comporte une reprise spiralaire explicite ;
- les consignes doivent rester claires, brèves et directement exécutables ;
- les exercices 10, 11 et 12 sont réservés au réemploi par réécriture,
  transfert ou spirale.

## Contraintes techniques obligatoires

- ne pas casser le registre des leçons ;
- ne pas casser le routeur hash-based ;
- ne pas casser les tests existants ;
- rester strictement compatible avec GitHub Pages ;
- ne pas modifier l’architecture applicative sans demande explicite.

## Discipline de modification

- privilégier des changements minimaux, sûrs et explicitables ;
- ne pas changer le nombre de niveaux, modules, leçons ou exercices ;
- ne pas rédiger de nouveaux contenus pédagogiques hors tâche explicitement demandée ;
- ne pas introduire de moteur d’exercices nouveau à cette étape.
