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
      createExercise('singleChoice', `Choisis la structure correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `structure syntaxique correcte pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `enchaînement ambigu pour ${focusLabel}`, isCorrect: false },
          { id: 'c', label: `construction fautive pour ${focusLabel}`, isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 repères fiables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'relation logique', isCorrect: true },
          { id: 'b', label: 'ponctuation structurante', isCorrect: true },
          { id: 'c', label: 'mot isolé', isCorrect: false },
          { id: 'd', label: 'ordre arbitraire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Énonce en une phrase la règle clé pour ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase fautive en ciblant ${focusLabel}.`),
      createExercise('ordering', `Range la méthode d’analyse de ${focusLabel}.`, {
        expectedOrder: ['repérer', 'analyser', 'corriger'],
      }),
      createExercise('multipleChoice', `Choisis toutes les formulations recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `articulation claire entre propositions pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `ponctuation cohérente avec le lien logique de ${focusLabel}`, isCorrect: true },
          { id: 'c', label: 'juxtaposition sans relation logique explicite', isCorrect: false },
          { id: 'd', label: 'subordination contredite par le connecteur choisi', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Transforme 2 phrases pour renforcer ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix d’organisation pour ${focusLabel}.`, {
        acceptedAnswers: ['cohérence syntaxique', 'lien logique', 'ponctuation pertinente'],
      }),
      createExercise('ordering', `Mets dans l’ordre la relecture de vigilance pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'vérifier', 'ajuster'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases pour consolider ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases dans un contexte nouveau avec le même principe.'),
      createExercise('textInput', 'Spirale : relie la notion du jour à deux notions antérieures en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Identifier la proposition principale', 'Distinguer clairement la proposition principale dans une phrase complexe.', ['phrase simple/complexe', 'verbe noyau'], 'la proposition principale'],
  ['Repérer les propositions subordonnées', 'Identifier la subordonnée et son lien avec la principale.', ['subordination', 'connecteurs'], 'la proposition subordonnée'],
  ['Utiliser correctement les relatives', 'Employer une relative pour préciser un nom sans rupture.', ['pronoms relatifs simples', 'expansions'], 'la proposition relative'],
  ['Distinguer complétives et circonstancielles', 'Différencier deux fonctions de subordonnées selon le sens.', ['subordonnants', 'fonction des groupes'], 'complétive et circonstancielle'],
  ['Maîtriser les subordonnées circonstancielles de temps', 'Exprimer les relations temporelles avec précision.', ['temps verbaux', 'connecteurs temporels'], 'la subordonnée de temps'],
  ['Maîtriser les subordonnées circonstancielles de cause', 'Exprimer clairement la cause dans la phrase complexe.', ['connecteurs logiques', 'ponctuation'], 'la subordonnée de cause'],
  ['Maîtriser les subordonnées circonstancielles de conséquence', 'Exprimer la conséquence sans ambiguïté.', ['cause/conséquence', 'enchaînement logique'], 'la subordonnée de conséquence'],
  ['Coordonner des propositions avec précision', 'Relier des propositions coordonnées en gardant la logique.', ['coordination', 'valeur des connecteurs'], 'la coordination précise'],
  ['Juxtaposer sans casser la cohérence', 'Utiliser la juxtaposition avec ponctuation adaptée.', ['ponctuation forte/faible', 'enchaînements'], 'la juxtaposition cohérente'],
  ['Varier coordination, subordination et juxtaposition', 'Choisir l’articulation la plus efficace selon l’effet visé.', ['types de liens', 'clarté syntaxique'], 'la variation des articulations'],
  ['Réduire les lourdeurs de phrase complexe', 'Alléger des structures trop chargées sans perte de sens.', ['reformulation', 'hiérarchisation de l’information'], 'l’allègement syntaxique'],
  ['Réorganiser une phrase complexe', 'Déplacer des segments tout en conservant la correction.', ['ordre des groupes', 'ponctuation'], 'la réorganisation syntaxique'],
  ['Fiabiliser la ponctuation de la phrase complexe', 'Utiliser virgule, point-virgule et deux-points de manière pertinente.', ['liaisons logiques', 'structure de phrase'], 'la ponctuation complexe'],
  ['Réviser un paragraphe à syntaxe complexe', 'Améliorer la cohérence d’un paragraphe contenant plusieurs phrases complexes.', ['cohésion textuelle', 'temps verbaux'], 'la syntaxe en paragraphe'],
  ['Bilan module 1 : structurer la phrase complexe', 'Mobiliser toutes les stratégies du module dans une réécriture guidée.', ['propositions', 'liens logiques', 'ponctuation'], 'le bilan de structure complexe'],
];

export const module1LessonBlueprints4e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
