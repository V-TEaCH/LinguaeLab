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
      createExercise('singleChoice', `Choisis la réponse la plus pertinente pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'réponse attendue', isCorrect: true },
          { id: 'b', label: 'réponse partielle', isCorrect: false },
          { id: 'c', label: 'réponse hors-critère', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 critères de réussite pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'précision', isCorrect: true },
          { id: 'b', label: 'justification', isCorrect: true },
          { id: 'c', label: 'vitesse seule', isCorrect: false },
          { id: 'd', label: 'intuition seule', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Rédige une méthode courte pour réussir ${focusLabel}.`),
      createExercise('textInput', `Corrige un item-type DNB en ciblant ${focusLabel}.`),
      createExercise('ordering', `Ordonne la procédure de traitement pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'repérer', 'répondre'],
      }),
      createExercise('multipleChoice', `Coche toutes les formulations recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'formulation recevable 1', isCorrect: true },
          { id: 'b', label: 'formulation recevable 2', isCorrect: true },
          { id: 'c', label: 'formulation faible', isCorrect: false },
          { id: 'd', label: 'formulation erronée', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 réponses brèves pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix avec les critères de ${focusLabel}.`, {
        acceptedAnswers: ['critère', 'justification'],
      }),
      createExercise('ordering', `Range les étapes de relecture rapide pour ${focusLabel}.`, {
        expectedOrder: ['contrôler', 'ajuster', 'valider'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 réponses pour consolider ${focusLabel}.`),
      createExercise('textInput', 'Transfert : applique la stratégie à 3 items d’un autre thème.'),
      createExercise('textInput', 'Spirale : relie la stratégie du jour à deux notions travaillées auparavant.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Méthode DNB : lire la consigne efficacement', 'Installer une routine de lecture et de repérage des attendus.', ['consigne', 'mots-clés'], 'la lecture de consigne'],
  ['Méthode DNB : analyser un court extrait', 'Identifier rapidement informations explicites et implicites utiles.', ['repérage', 'inférences'], 'l’analyse d’extrait'],
  ['Répondre à une question de compréhension', 'Formuler une réponse brève, précise et justifiée.', ['phrase complète', 'justification'], 'la réponse de compréhension'],
  ['Justifier avec une citation courte', 'Intégrer une citation pertinente sans paraphrase excessive.', ['guillemets', 'reformulation'], 'la justification par citation'],
  ['Réécrire sans faute une phrase ciblée', 'Corriger syntaxe et accords dans une phrase type examen.', ['accords', 'ponctuation'], 'la réécriture ciblée'],
  ['Choisir le bon temps dans une réponse', 'Sécuriser les temps verbaux selon l’intention de la question.', ['temps du récit', 'modes'], 'le choix verbal en réponse'],
  ['Repérer et corriger les homophones sensibles', 'Fiabiliser les homophones fréquents en contexte DNB.', ['homophones grammaticaux', 'chaîne d’accord'], 'les homophones sensibles'],
  ['Organiser une réponse développée courte', 'Structurer une réponse en 2 à 3 phrases cohérentes.', ['idée principale', 'connecteurs'], 'la réponse développée'],
  ['Améliorer la cohésion d’un paragraphe bref', 'Renforcer reprises et enchaînements dans un mini-paragraphe.', ['substituts', 'connecteurs logiques'], 'la cohésion de paragraphe'],
  ['Traiter une consigne de réécriture mixte', 'Appliquer plusieurs contraintes de langue dans un même item.', ['syntaxe', 'orthographe grammaticale'], 'la réécriture mixte'],
  ['S’entraîner sur mini-série 1 (français)', 'Enchaîner plusieurs items variés dans un format entraînement.', ['gestion du temps', 'méthode'], 'la mini-série 1'],
  ['S’entraîner sur mini-série 2 (français)', 'Stabiliser les automatismes sur une deuxième série variée.', ['vigilance', 'correction'], 'la mini-série 2'],
  ['Diagnostiquer ses erreurs récurrentes', 'Identifier ses erreurs fréquentes et choisir une action corrective.', ['auto-évaluation', 'relecture'], 'le diagnostic d’erreurs'],
  ['Consolider une stratégie personnelle de révision', 'Construire une routine réaliste de préparation finale.', ['priorisation', 'réemploi'], 'la stratégie personnelle'],
  ['Bilan module 5 : entraînement DNB guidé', 'Mobiliser les stratégies vues sur un entraînement global guidé (non simulation complète).', ['compréhension', 'langue', 'réécriture'], 'le bilan DNB guidé'],
];

export const module5LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
