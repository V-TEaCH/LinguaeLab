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
      createExercise('singleChoice', `Choisis la reformulation la plus pertinente pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'version pertinente', isCorrect: true },
          { id: 'b', label: 'version maladroite', isCorrect: false },
          { id: 'c', label: 'version hors-sujet', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 critères de qualité pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'clarté', isCorrect: true },
          { id: 'b', label: 'cohésion', isCorrect: true },
          { id: 'c', label: 'longueur aléatoire', isCorrect: false },
          { id: 'd', label: 'mot rare isolé', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Donne une règle courte pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Réécris une phrase pour renforcer ${focusLabel}.`),
      createExercise('ordering', `Ordonne les étapes de révision utiles à ${focusLabel}.`, {
        expectedOrder: ['repérer', 'reformuler', 'relire'],
      }),
      createExercise('multipleChoice', `Coche toutes les versions recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'version claire et fidèle au sens initial', isCorrect: true },
          { id: 'b', label: 'version précise avec enchaînement cohérent', isCorrect: true },
          { id: 'c', label: 'version floue', isCorrect: false },
          { id: 'd', label: 'version contradictoire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Corrige 2 formulations faibles en ciblant ${focusLabel}.`),
      createExercise('textInput', `Justifie en 2 lignes ton choix de reformulation pour ${focusLabel}.`, {
        acceptedAnswers: ['clarté', 'cohésion'],
      }),
      createExercise('ordering', `Mets en ordre la vigilance de relecture liée à ${focusLabel}.`, {
        expectedOrder: ['lire', 'ajuster', 'valider'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases en travaillant ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases dans une situation nouvelle avec la stratégie du jour.'),
      createExercise('textInput', 'Spirale : réactive une notion antérieure dans une reformulation brève.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Nuancer une information par expansion contrôlée', 'Apporter une nuance sans alourdir la phrase.', ['expansions', 'ponctuation'], 'la nuance informative'],
  ['Éviter les répétitions dans un paragraphe', 'Alléger les reprises en conservant la précision.', ['pronoms', 'cohésion textuelle'], 'la gestion des répétitions'],
  ['Choisir un connecteur logique précis', 'Renforcer la logique du texte par le bon connecteur.', ['coordination', 'subordination'], 'le connecteur précis'],
  ['Varier les constructions de phrase', 'Diversifier les structures pour améliorer la fluidité.', ['phrase simple/complexe', 'ordre des groupes'], 'la variation de phrase'],
  ['Renforcer la cohérence des enchaînements', 'Assurer des transitions nettes entre phrases.', ['progression thématique', 'connecteurs'], 'la cohérence d’enchaînement'],
  ['Réduire les ambiguïtés référentielles', 'Clarifier les reprises pronominales ambiguës.', ['antécédents', 'accords'], 'la clarté référentielle'],
  ['Reformuler pour préciser le point de vue', 'Exprimer un point de vue nuancé et cohérent.', ['modalisation simple', 'vocabulaire précis'], 'la précision du point de vue'],
  ['Hiérarchiser les informations dans une phrase', 'Mettre en avant l’information essentielle.', ['compléments', 'ponctuation forte/faible'], 'la hiérarchisation des informations'],
  ['Réviser un paragraphe descriptif', 'Améliorer clarté et cohésion d’une description courte.', ['GN enrichi', 'attribut du sujet'], 'la révision descriptive'],
  ['Réviser un paragraphe narratif', 'Fluidifier un récit bref par reformulation contrôlée.', ['temps du récit', 'enchaînements'], 'la révision narrative'],
  ['Choisir le bon registre de reformulation', 'Adapter la formulation à la situation de communication.', ['registre courant', 'précision lexicale'], 'l’adaptation du registre'],
  ['Rendre une justification plus explicite', 'Passer d’une justification implicite à une justification claire.', ['connecteurs logiques', 'phrases complexes'], 'la justification explicite'],
  ['Composer une mini-synthèse cohérente', 'Assembler plusieurs informations en texte bref cohérent.', ['organisation du paragraphe', 'cohésion'], 'la mini-synthèse'],
  ['Réécrire un texte avec contraintes', 'Réécrire un texte court en respectant des contraintes précises.', ['relecture', 'critères de qualité'], 'la réécriture sous contraintes'],
  ['Bilan module 4 : nuancer et reformuler', 'Mobiliser toutes les stratégies de reformulation du module.', ['cohésion', 'nuance', 'transfert'], 'le bilan de reformulation'],
];

export const module4LessonBlueprints5e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
