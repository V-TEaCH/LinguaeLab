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
      createExercise('singleChoice', `Choisis la forme verbale correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'forme attendue', isCorrect: true },
          { id: 'b', label: 'forme incorrecte', isCorrect: false },
          { id: 'c', label: 'forme incohérente', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 repères utiles pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'valeur temporelle', isCorrect: true },
          { id: 'b', label: 'intention d’énonciation', isCorrect: true },
          { id: 'c', label: 'hasard', isCorrect: false },
          { id: 'd', label: 'ordre arbitraire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Résume la règle décisive pour ${focusLabel}.`),
      createExercise('textInput', `Corrige un passage en ciblant ${focusLabel}.`),
      createExercise('ordering', `Mets dans l’ordre la démarche de choix pour ${focusLabel}.`, {
        expectedOrder: ['situer', 'choisir', 'vérifier'],
      }),
      createExercise('multipleChoice', `Coche toutes les formulations correctes pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'formulation correcte 1', isCorrect: true },
          { id: 'b', label: 'formulation correcte 2', isCorrect: true },
          { id: 'c', label: 'formulation erronée 1', isCorrect: false },
          { id: 'd', label: 'formulation erronée 2', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases en améliorant ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de temps ou mode pour ${focusLabel}.`, {
        acceptedAnswers: ['temps', 'mode'],
      }),
      createExercise('ordering', `Range les étapes de relecture verbale pour ${focusLabel}.`, {
        expectedOrder: ['relire', 'contrôler', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases pour fiabiliser ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases dans un autre contexte avec la même logique verbale.'),
      createExercise('textInput', 'Spirale : relie le choix verbal du jour à deux notions antérieures en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Choisir entre imparfait et passé simple', 'Employer correctement les deux temps du récit selon leur valeur.', ['temps du récit', 'aspect'], 'imparfait et passé simple'],
  ['Articuler passé composé et plus-que-parfait', 'Exprimer l’antériorité de manière claire dans le récit.', ['chronologie', 'temps composés'], 'passé composé et plus-que-parfait'],
  ['Employer le présent de narration', 'Utiliser le présent de narration de façon pertinente.', ['temps du récit', 'effet de style'], 'le présent de narration'],
  ['Maîtriser le futur dans les textes argumentatifs', 'Mobiliser les valeurs du futur pour argumenter ou projeter.', ['valeur des temps', 'modalisation'], 'les valeurs du futur'],
  ['Maîtriser le conditionnel pour nuancer', 'Employer le conditionnel pour l’hypothèse et l’atténuation.', ['hypothèse', 'modalisation'], 'le conditionnel'],
  ['Utiliser le subjonctif après les expressions de volonté', 'Choisir le subjonctif dans les contextes obligatoires.', ['modes verbaux', 'subordonnée complétive'], 'le subjonctif de volonté'],
  ['Utiliser le subjonctif après l’émotion et le doute', 'Différencier indicatif et subjonctif selon l’attitude énonciative.', ['modalité', 'certitude/incertitude'], 'le subjonctif d’émotion et de doute'],
  ['Distinguer infinitif et participe passé', 'Éviter les confusions fréquentes en fin de groupe verbal.', ['homophones verbaux', 'auxiliaires'], 'infinitif et participe passé'],
  ['Sécuriser les terminaisons en -é / -er / -ait', 'Choisir la terminaison correcte en contexte.', ['homophones', 'valeur des formes verbales'], 'les terminaisons verbales'],
  ['Concordance des temps en discours rapporté', 'Assurer la cohérence des temps lors du passage au discours indirect.', ['discours direct/indirect', 'chronologie'], 'la concordance des temps'],
  ['Réviser les temps dans un paragraphe narratif', 'Corriger les ruptures de temps dans un texte de récit.', ['cohérence temporelle', 'relecture'], 'la cohérence des temps'],
  ['Réviser les modes dans un paragraphe argumentatif', 'Choisir les modes selon la visée argumentative.', ['modalisation', 'nuance'], 'les modes en argumentation'],
  ['Renforcer la précision verbale en réécriture', 'Réécrire un texte en améliorant la pertinence des temps et des modes.', ['réécriture', 'valeur des formes verbales'], 'la précision verbale'],
  ['Automatiser la relecture des verbes', 'Mettre en place une routine de vérification ciblée des verbes.', ['vigilance grammaticale', 'chaîne verbale'], 'la relecture verbale'],
  ['Bilan module 3 : choisir temps et modes', 'Mobiliser les valeurs verbales dans une production réécrite.', ['temps', 'modes', 'cohérence textuelle'], 'le bilan verbal'],
];

export const module3LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
