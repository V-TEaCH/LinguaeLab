const SOURCE_SPEC = 'docs/specs/rulebook.md';

function createExercise(type, instruction, options = {}) {
  return {
    type,
    instruction,
    ...options,
  };
}

function createLesson(title, objective, spiralReview, focusLabel) {
  return {
    title,
    objective,
    spiralReview,
    officialRefs: ['bo-cycle4-2026'],
    sourceSpec: SOURCE_SPEC,
    exercises: [
      createExercise('singleChoice', `Choisis la forme correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'forme correcte', isCorrect: true },
          { id: 'b', label: 'forme fautive', isCorrect: false },
          { id: 'c', label: 'forme imprécise', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 indices d’accord fiables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'genre', isCorrect: true },
          { id: 'b', label: 'nombre', isCorrect: true },
          { id: 'c', label: 'ordre visuel', isCorrect: false },
          { id: 'd', label: 'intuition seule', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Énonce la règle centrale pour ${focusLabel}.`),
      createExercise('textInput', `Corrige un énoncé en appliquant ${focusLabel}.`),
      createExercise('ordering', `Ordonne le protocole d’accord pour ${focusLabel}.`, {
        expectedOrder: ['repérer', 'accorder', 'vérifier'],
      }),
      createExercise('multipleChoice', `Choisis toutes les graphies correctes pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'graphie correcte 1', isCorrect: true },
          { id: 'b', label: 'graphie correcte 2', isCorrect: true },
          { id: 'c', label: 'graphie fautive 1', isCorrect: false },
          { id: 'd', label: 'graphie fautive 2', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases pour fiabiliser ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix avec la règle mobilisée pour ${focusLabel}.`, {
        acceptedAnswers: ['accord', 'règle'],
      }),
      createExercise('ordering', `Range les étapes de vigilance pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'contrôler', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : corrige 3 phrases pour sécuriser ${focusLabel}.`),
      createExercise('textInput', 'Transfert : produis 3 phrases dans un contexte nouveau avec la même règle.'),
      createExercise('textInput', 'Spirale : relie la règle du jour à deux acquis précédents en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Accorder sujet et verbe avec sujets éloignés', 'Maintenir un accord correct malgré des expansions intercalées.', ['sujet noyau', 'groupe verbal'], 'l’accord sujet-verbe complexe'],
  ['Accorder avec sujets coordonnés', 'Choisir la marque verbale correcte avec plusieurs sujets.', ['coordination', 'nombre grammatical'], 'l’accord avec sujets coordonnés'],
  ['Traiter les sujets collectifs fréquents', 'Accorder le verbe selon le sens et la structure du sujet collectif.', ['nom collectif', 'singulier/pluriel'], 'les sujets collectifs'],
  ['Distinguer participe présent et adjectif verbal', 'Choisir la forme correcte selon la fonction dans la phrase.', ['nature/fonction', 'accord de l’adjectif'], 'participe présent et adjectif verbal'],
  ['Accorder le participe passé avec être', 'Appliquer systématiquement l’accord avec l’auxiliaire être.', ['auxiliaires', 'genre/nombre'], 'le participe passé avec être'],
  ['Accorder le participe passé avec avoir', 'Repérer le COD et décider l’accord avec avoir.', ['COD', 'chaîne d’accord'], 'le participe passé avec avoir'],
  ['Accorder le participe passé des verbes pronominaux', 'Traiter les cas usuels de l’accord avec les pronominaux.', ['pronominal', 'fonction du pronom'], 'les verbes pronominaux'],
  ['Sécuriser quel(s) que et quelque(s)', 'Choisir la graphie correcte dans des contextes variés.', ['homophones grammaticaux', 'accord'], 'quelque(s) / quel(s) que'],
  ['Sécuriser tout, même, leur', 'Accorder correctement des mots fréquents à valeur variable.', ['déterminant/adverbe', 'accords en contexte'], 'tout, même, leur'],
  ['Fiabiliser les chaînes d’accord longues', 'Contrôler les accords dans des phrases à plusieurs noyaux.', ['groupe nominal étendu', 'relecture'], 'la chaîne d’accord longue'],
  ['Corriger un paragraphe à erreurs d’accord', 'Repérer puis corriger des erreurs d’accord dans un texte court.', ['diagnostic d’erreurs', 'réécriture'], 'la correction d’accords'],
  ['Automatiser la relecture grammaticale', 'Mettre en place une méthode de relecture efficace.', ['vigilance', 'priorisation des erreurs'], 'la relecture grammaticale'],
  ['Consolider les homophones grammaticaux', 'Réinvestir les homophones dans des phrases complexes.', ['homophones', 'analyse syntaxique'], 'les homophones grammaticaux'],
  ['Réécrire pour stabiliser l’orthographe grammaticale', 'Améliorer un texte bref en sécurisant les accords.', ['réécriture', 'accords complexes'], 'la stabilisation grammaticale'],
  ['Bilan module 2 : sécuriser les accords complexes', 'Mobiliser l’ensemble des règles d’accord du module.', ['accords', 'homophones', 'relecture'], 'le bilan des accords'],
];

export const module2LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
