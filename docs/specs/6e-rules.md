# RULEBOOK — ATRIUM-Français

## Objet

Ce dépôt contient une application d’apprentissage spiralaire du français au collège.

Le but n’est pas de produire une simple banque d’exercices, mais une progression annuelle cohérente, cumulative et exploitable en classe, en autonomie et en révision.

## Sources de vérité

Pour toute génération ou modification de contenu, utiliser en priorité :

- `README.md`
- `AGENTS.md`
- `docs/specs/6e-blueprint-complet.md`
- `docs/specs/6e-rules.md`
- les fichiers déjà présents dans `assets/js/data/`

Ne pas inventer de structure parallèle si une structure existe déjà dans le dépôt.

## Architecture pédagogique non négociable

### 6e, 5e, 4e
- 4 modules par année
- 15 leçons par module
- 12 exercices par leçon

### 3e
- 4 modules annuels
- 1 module spécifique de révisions DNB
- 15 leçons par module
- 12 exercices par leçon

## Axes fixes

Les modules s’organisent toujours autour de ces 4 axes :

1. construire la phrase  
2. accorder et orthographier  
3. conjuguer et choisir  
4. reformuler et styliser  

En 3e s’ajoute :

5. révisions DNB

Ne pas renommer ces axes sans raison majeure.

## Règles de progression

Chaque leçon doit respecter les principes suivants :

- une seule notion centrale nouvelle par leçon ;
- au moins une reprise d’une notion déjà étudiée ;
- au moins un exercice de transfert ;
- montée progressive du repérage vers la manipulation, puis vers la justification et le réemploi ;
- difficulté croissante à l’intérieur d’un module ;
- cohérence annuelle entre les modules.

Un module ne doit jamais fonctionner comme un silo fermé. La spirale est obligatoire.

## Structure canonique d’une leçon

Chaque leçon contient exactement 12 exercices.

Ordre recommandé :

1. rappel flash  
2. repérage  
3. repérage  
4. manipulation  
5. manipulation  
6. discrimination fine  
7. correction d’erreur  
8. justification courte  
9. vigilance orthographique ou ponctuation  
10. réécriture  
11. transfert contextualisé  
12. reprise spiralaire

Cet ordre peut être légèrement ajusté si nécessaire, mais les exercices 10, 11 et 12 doivent rester des exercices de réécriture, de transfert ou de reprise.

## Exigences de consigne

Chaque exercice doit comporter une consigne :

- claire ;
- brève ;
- directement exécutable ;
- adaptée à un élève de collège ;
- sans flou terminologique inutile ;
- sans ambiguïté sur l’action attendue.

Éviter :

- les consignes vagues ;
- les formulations abstraites ;
- les exercices redondants déguisés ;
- les effets de manche pédagogiques.

Une bonne consigne dit exactement ce que l’élève doit faire.

## Exigences de contenu

Les exercices doivent :

- viser une compétence identifiable ;
- être compatibles avec la notion de la leçon ;
- réactiver, quand c’est pertinent, des acquis antérieurs ;
- éviter la répétition mécanique ;
- varier les opérations mentales ;
- rester faisables sans surcharge cognitive inutile.

Ne pas remplir une leçon avec 12 variantes mineures du même exercice.

## Types d’exercices autorisés

Privilégier les types déjà compatibles avec le dépôt :

- `singleChoice`
- `multipleChoice`
- `matching`
- `ordering`
- `textInput`

Ne pas introduire un nouveau type d’exercice sans nécessité réelle et sans mise à jour du moteur.

## Exigences de correction

Le moteur de correction doit rester :

- robuste ;
- lisible ;
- compatible avec l’architecture existante.

Quand un exercice appelle plusieurs formulations recevables :

- utiliser `acceptedAnswers` ;
- prévoir les variantes réellement utiles ;
- éviter les listes absurdes ou infinies ;
- ne pas pénaliser une variation mineure sans enjeu pédagogique.

En revanche, ne pas assouplir à l’excès les réponses sur la compétence visée.

## Contraintes techniques

Tout ajout ou modification doit rester compatible avec :

- le registre de leçons ;
- le routeur ;
- le scoring ;
- les vues ;
- les tests ;
- la structure des données existante.

Ne pas casser l’architecture pour intégrer un contenu.

Préférer des changements minimaux, ciblés et explicitables.

## Contraintes de style éditorial

Le dépôt doit rester :

- cohérent ;
- sobre ;
- lisible ;
- stable ;
- testable.

Éviter :

- les commentaires inutiles ;
- les placeholders vagues ;
- les TODO non justifiés ;
- les renommages gratuits ;
- les restructurations massives non demandées.

## Référentiel

Pour la 6e, le référentiel fondamental est le programme de français du cycle 3.

Les contenus doivent rester compatibles avec les attendus officiels annoncés dans les documents de spécification du dépôt.

Ne pas introduire prématurément des notions d’un niveau supérieur si elles n’ont pas été prévues dans la progression.

## Workflow attendu

Avant toute génération massive :

1. lire les documents de cadrage ;
2. auditer la structure existante ;
3. vérifier les fichiers de données concernés ;
4. produire les modifications minimales nécessaires ;
5. exécuter les tests ;
6. résumer précisément les fichiers modifiés.

## Ce qu’il ne faut pas faire

- inventer une nouvelle architecture sans demande explicite ;
- changer le nombre de modules, de leçons ou d’exercices ;
- dissoudre la logique spiralaire ;
- produire des consignes floues ;
- écrire des exercices décoratifs ;
- casser le dépôt pour aller plus vite ;
- modifier en bloc des fichiers non concernés.

## Priorité absolue

Toujours privilégier, dans cet ordre :

1. conformité à la structure du dépôt ;
2. clarté pédagogique ;
3. progression spiralaire ;
4. robustesse technique ;
5. exhaustivité du contenu.
