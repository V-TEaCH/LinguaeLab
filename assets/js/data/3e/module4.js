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
          { id: 'a', label: 'reformulation pertinente', isCorrect: true },
          { id: 'b', label: 'reformulation confuse', isCorrect: false },
          { id: 'c', label: 'reformulation inadaptée', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 critères de réussite pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'clarté', isCorrect: true },
          { id: 'b', label: 'cohérence', isCorrect: true },
          { id: 'c', label: 'longueur maximale', isCorrect: false },
          { id: 'd', label: 'ordre arbitraire', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Rédige une consigne de révision utile pour ${focusLabel}.`),
      createExercise('textInput', `Corrige un extrait en améliorant ${focusLabel}.`),
      createExercise('ordering', `Ordonne la démarche de réécriture pour ${focusLabel}.`, {
        expectedOrder: ['diagnostiquer', 'réécrire', 'vérifier'],
      }),
      createExercise('multipleChoice', `Coche toutes les améliorations recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'amélioration recevable 1', isCorrect: true },
          { id: 'b', label: 'amélioration recevable 2', isCorrect: true },
          { id: 'c', label: 'amélioration fragile', isCorrect: false },
          { id: 'd', label: 'amélioration incorrecte', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de reformulation pour ${focusLabel}.`, {
        acceptedAnswers: ['cohérence', 'précision'],
      }),
      createExercise('ordering', `Range les étapes de relecture finale pour ${focusLabel}.`, {
        expectedOrder: ['relire', 'contrôler', 'finaliser'],
      }),
      createExercise('textInput', `Réécriture : améliore un paragraphe court pour renforcer ${focusLabel}.`),
      createExercise('textInput', 'Transfert : applique la stratégie à un autre type de texte en 3 phrases.'),
      createExercise('textInput', 'Spirale : relie la stratégie du jour à deux notions déjà vues en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Clarifier l’idée principale d’un paragraphe', 'Faire ressortir l’idée directrice sans ambiguïté.', ['thème/propos', 'phrase noyau'], 'la clarté de l’idée principale'],
  ['Supprimer les répétitions inutiles', 'Réduire les redondances sans appauvrir le sens.', ['reprises nominales', 'cohésion'], 'la suppression des répétitions'],
  ['Utiliser les substituts nominaux', 'Varier les reprises pour éviter les répétitions lourdes.', ['GN', 'chaînes de référence'], 'les substituts nominaux'],
  ['Utiliser les connecteurs logiques pertinents', 'Choisir des connecteurs adaptés à la relation logique visée.', ['cause/conséquence', 'opposition'], 'les connecteurs logiques'],
  ['Hiérarchiser l’information dans la phrase', 'Organiser les informations selon leur importance.', ['ordre de la phrase', 'mise en relief'], 'la hiérarchisation de l’information'],
  ['Renforcer la précision lexicale', 'Choisir des mots précis pour éviter le flou.', ['champ lexical', 'nuance'], 'la précision lexicale'],
  ['Passer du registre familier au registre attendu', 'Adapter la formulation au contexte scolaire.', ['registre de langue', 'destinataire'], 'l’adaptation du registre'],
  ['Rendre une phrase plus concise', 'Condenser une formulation sans perdre l’essentiel.', ['réduction', 'syntaxe'], 'la concision'],
  ['Développer une phrase trop minimale', 'Enrichir une phrase pour gagner en précision.', ['expansion', 'compléments'], 'l’enrichissement de phrase'],
  ['Structurer un paragraphe argumentatif court', 'Organiser thèse, argument et exemple avec cohérence.', ['argumentation', 'connecteurs'], 'la structure argumentative'],
  ['Structurer un paragraphe narratif court', 'Assurer la cohérence des actions et des repères temporels.', ['chronologie', 'temps verbaux'], 'la structure narrative'],
  ['Réviser la cohésion d’un texte bref', 'Vérifier enchaînements et reprises à l’échelle du texte.', ['cohésion textuelle', 'références pronominales'], 'la cohésion du texte'],
  ['Réécrire avec contrainte de style', 'Adapter la formulation à une consigne de style donnée.', ['intention', 'effet produit'], 'la réécriture sous contrainte'],
  ['Préparer une version finale relue', 'Finaliser un texte en appliquant une relecture méthodique.', ['vigilance', 'auto-correction'], 'la finalisation du texte'],
  ['Bilan module 4 : réécrire avec efficacité', 'Mobiliser les stratégies de réécriture dans une production complète.', ['cohésion', 'précision', 'organisation'], 'le bilan de réécriture'],
];

export const module4LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
