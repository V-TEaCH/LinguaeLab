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
      createExercise('singleChoice', `Choisis la reformulation correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'reformulation valide', isCorrect: true },
          { id: 'b', label: 'reformulation fautive', isCorrect: false },
          { id: 'c', label: 'reformulation incohérente', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 repères fiables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'fonction syntaxique', isCorrect: true },
          { id: 'b', label: 'ponctuation', isCorrect: true },
          { id: 'c', label: 'position aléatoire', isCorrect: false },
          { id: 'd', label: 'mot isolé', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Écris la règle essentielle à retenir pour ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase en ciblant ${focusLabel}.`),
      createExercise('ordering', `Ordonne la méthode de vérification de ${focusLabel}.`, {
        expectedOrder: ['repérer', 'analyser', 'corriger'],
      }),
      createExercise('multipleChoice', `Coche toutes les formulations recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'formulation recevable 1', isCorrect: true },
          { id: 'b', label: 'formulation recevable 2', isCorrect: true },
          { id: 'c', label: 'formulation fragile', isCorrect: false },
          { id: 'd', label: 'formulation erronée', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases pour sécuriser ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix avec la notion utile pour ${focusLabel}.`, {
        acceptedAnswers: ['syntaxe', 'ponctuation'],
      }),
      createExercise('ordering', `Range les étapes de relecture pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'contrôler', 'ajuster'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases afin de renforcer ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases inédites en réutilisant la stratégie du jour.'),
      createExercise('textInput', 'Spirale : relie la notion à deux acquis antérieurs en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Distinguer phrase simple et phrase complexe', 'Identifier sans hésiter la structure globale d’une phrase.', ['classe grammaticale', 'verbe noyau'], 'la structure de phrase'],
  ['Repérer la proposition principale', 'Isoler correctement la proposition principale dans une phrase complexe.', ['groupe verbal', 'fonction'], 'la proposition principale'],
  ['Identifier la subordonnée relative', 'Repérer la relative et son rôle de précision du nom.', ['pronoms relatifs', 'expansion du nom'], 'la proposition relative'],
  ['Identifier la subordonnée complétive', 'Reconnaître la complétive et sa dépendance au verbe principal.', ['conjonctions', 'fonction COD'], 'la proposition complétive'],
  ['Identifier les circonstancielles de temps', 'Distinguer les subordonnées exprimant la temporalité.', ['connecteurs temporels', 'valeur des temps'], 'la circonstancielle de temps'],
  ['Identifier les circonstancielles de cause', 'Repérer et employer correctement les liens de cause.', ['connecteurs logiques', 'ponctuation'], 'la circonstancielle de cause'],
  ['Identifier les circonstancielles de conséquence', 'Formuler une conséquence claire et non ambiguë.', ['cause/conséquence', 'enchaînement'], 'la circonstancielle de conséquence'],
  ['Coordonner sans rupture de sens', 'Choisir la coordination qui conserve la logique de la phrase.', ['coordination', 'sens des connecteurs'], 'la coordination précise'],
  ['Juxtaposer avec une ponctuation fiable', 'Utiliser la juxtaposition avec ponctuation adaptée.', ['virgule', 'point-virgule'], 'la juxtaposition'],
  ['Varier les liens entre propositions', 'Choisir entre coordination, juxtaposition et subordination selon l’effet.', ['type de relation', 'intention d’écriture'], 'la variation des liens'],
  ['Alléger une phrase trop chargée', 'Réduire les lourdeurs syntaxiques sans perte de sens.', ['réécriture', 'hiérarchisation'], 'l’allègement de phrase'],
  ['Déplacer des segments sans faute', 'Réorganiser l’ordre des groupes en conservant la correction.', ['ordre des mots', 'ponctuation'], 'la réorganisation syntaxique'],
  ['Ponctuer la phrase complexe', 'Choisir la ponctuation qui rend la lecture claire.', ['liaisons logiques', 'syntaxe'], 'la ponctuation complexe'],
  ['Réviser un paragraphe complexe', 'Améliorer la cohérence syntaxique d’un paragraphe court.', ['cohésion', 'enchaînement des phrases'], 'la révision de paragraphe'],
  ['Bilan module 1 : consolider la phrase', 'Mobiliser les acquis syntaxiques dans une réécriture guidée.', ['proposition', 'ponctuation', 'cohésion'], 'le bilan syntaxique'],
];

export const module1LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
