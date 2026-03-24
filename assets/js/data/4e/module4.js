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
      createExercise('singleChoice', `Choisis la reformulation la plus efficace pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'reformulation efficace', isCorrect: true },
          { id: 'b', label: 'reformulation confuse', isCorrect: false },
          { id: 'c', label: 'reformulation hors-sujet', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 critères de qualité pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'clarté argumentative', isCorrect: true },
          { id: 'b', label: 'cohésion textuelle', isCorrect: true },
          { id: 'c', label: 'ornement gratuit', isCorrect: false },
          { id: 'd', label: 'longueur aléatoire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Énonce la règle principale pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Réécris une phrase en ciblant ${focusLabel}.`),
      createExercise('ordering', `Ordonne les étapes de révision de ${focusLabel}.`, {
        expectedOrder: ['repérer', 'reformuler', 'valider'],
      }),
      createExercise('multipleChoice', `Repère toutes les reformulations recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'version recevable 1', isCorrect: true },
          { id: 'b', label: 'version recevable 2', isCorrect: true },
          { id: 'c', label: 'version ambiguë', isCorrect: false },
          { id: 'd', label: 'version contradictoire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Corrige 2 formulations faibles en améliorant ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de reformulation pour ${focusLabel}.`, {
        acceptedAnswers: ['clarté', 'cohésion'],
      }),
      createExercise('ordering', `Mets dans l’ordre la vigilance de relecture pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'ajuster', 'vérifier'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases pour renforcer ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases inédites en appliquant la stratégie du jour.'),
      createExercise('textInput', 'Spirale : relie la notion du jour à deux notions antérieures en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Nuancer une affirmation', 'Atténuer ou renforcer une affirmation selon l’intention.', ['modalisation', 'connecteurs'], 'la nuance argumentative'],
  ['Structurer une justification claire', 'Construire une justification explicite et lisible.', ['cause/conséquence', 'phrase complexe'], 'la justification structurée'],
  ['Hiérarchiser les arguments', 'Organiser les arguments du plus fort au plus secondaire.', ['organisation du paragraphe', 'connecteurs logiques'], 'la hiérarchisation argumentative'],
  ['Reformuler pour éviter les répétitions', 'Alléger le texte en conservant précision et cohérence.', ['reprises pronominales', 'lexique'], 'la reformulation anti-répétition'],
  ['Améliorer la cohésion entre phrases', 'Renforcer les liens entre phrases d’un même paragraphe.', ['progression thématique', 'connecteurs'], 'la cohésion interphrastique'],
  ['Rendre une phrase complexe plus lisible', 'Simplifier une structure sans perdre l’information essentielle.', ['subordination', 'ponctuation'], 'la lisibilité syntaxique'],
  ['Préciser un point de vue', 'Exprimer un point de vue nuancé et assumé.', ['modalisation', 'temps verbaux'], 'la précision du point de vue'],
  ['Réviser un paragraphe descriptif complexe', 'Améliorer clarté et cohésion d’une description enrichie.', ['expansions', 'accords'], 'la révision descriptive complexe'],
  ['Réviser un paragraphe narratif complexe', 'Fluidifier un récit bref avec enchaînements cohérents.', ['temps du récit', 'articulations'], 'la révision narrative complexe'],
  ['Réviser un paragraphe argumentatif bref', 'Rendre une argumentation courte plus structurée.', ['arguments', 'connecteurs'], 'la révision argumentative'],
  ['Adapter le registre à la situation', 'Choisir un registre pertinent selon destinataire et intention.', ['registre courant/soutenu', 'précision lexicale'], 'l’adaptation du registre'],
  ['Passer de l’implicite à l’explicite', 'Rendre un raisonnement lisible sans sous-entendus flous.', ['justification', 'enchaînement logique'], 'l’explicitation du raisonnement'],
  ['Composer une mini-synthèse cohérente', 'Assembler plusieurs idées en un texte bref cohérent.', ['organisation', 'cohésion'], 'la mini-synthèse'],
  ['Réécrire avec contraintes formelles', 'Réécrire un texte en respectant des contraintes explicites.', ['critères de qualité', 'relecture'], 'la réécriture sous contraintes'],
  ['Bilan module 4 : cohésion et reformulation', 'Mobiliser les stratégies du module dans une réécriture de synthèse.', ['nuance', 'cohésion', 'transfert'], 'le bilan de reformulation'],
];

export const module4LessonBlueprints4e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
