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
      createExercise(
        'singleChoice',
        `Choisis la formulation correcte pour ${focusLabel}.`,
        {
          options: [
            { id: 'a', label: 'Formulation correcte', isCorrect: true },
            { id: 'b', label: 'Formulation maladroite', isCorrect: false },
            { id: 'c', label: 'Formulation incohérente', isCorrect: false },
          ],
        }
      ),
      createExercise(
        'multipleChoice',
        `Sélectionne 2 indices fiables à vérifier pour ${focusLabel}.`,
        {
          options: [
            { id: 'a', label: 'cohérence grammaticale', isCorrect: true },
            { id: 'b', label: 'ponctuation adaptée', isCorrect: true },
            { id: 'c', label: 'mot pris au hasard', isCorrect: false },
            { id: 'd', label: 'ordre arbitraire', isCorrect: false },
          ],
        }
      ),
      createExercise(
        'textInput',
        `Rédige une règle brève (1 phrase) pour sécuriser ${focusLabel}.`
      ),
      createExercise(
        'textInput',
        `Repère une erreur fréquente et propose une correction simple pour ${focusLabel}.`
      ),
      createExercise(
        'ordering',
        `Range les étapes de vérification de ${focusLabel} dans l’ordre logique.`,
        {
          expectedOrder: ['repérer', 'vérifier', 'corriger'],
        }
      ),
      createExercise(
        'multipleChoice',
        `Sélectionne toutes les reformulations acceptables pour ${focusLabel}.`,
        {
          options: [
            { id: 'a', label: 'version précise', isCorrect: true },
            { id: 'b', label: 'version ambiguë', isCorrect: false },
            { id: 'c', label: 'version claire', isCorrect: true },
            { id: 'd', label: 'version contradictoire', isCorrect: false },
          ],
        }
      ),
      createExercise(
        'textInput',
        `Corrige 2 micro-phrases fautives en expliquant ton choix pour ${focusLabel}.`
      ),
      createExercise(
        'textInput',
        `Justifie en 2 lignes pourquoi ta correction améliore ${focusLabel}.`,
        {
          acceptedAnswers: ['cohérence', 'précision'],
        }
      ),
      createExercise(
        'ordering',
        `Ordonne ces actions pour la relecture de vigilance liée à ${focusLabel}.`,
        {
          expectedOrder: ['lire', 'contrôler', 'ajuster'],
        }
      ),
      createExercise(
        'textInput',
        `Réécris 3 phrases pour améliorer ${focusLabel} sans changer le sens.`
      ),
      createExercise(
        'textInput',
        `Transfère la stratégie du jour dans 3 phrases inédites sur un autre thème.`
      ),
      createExercise(
        'textInput',
        `Spirale : relie la notion du jour à une notion antérieure en 2 exemples.`
      ),
    ],
  };
}

const LESSON_DEFINITIONS = [
  {
    title: 'Étendre le groupe nominal sans le déséquilibrer',
    objective: 'Enrichir le groupe nominal avec une expansion utile et lisible.',
    spiralReview: ['noyau du GN', 'accord déterminant-nom'],
    focusLabel: 'l’extension du groupe nominal',
  },
  {
    title: 'Distinguer compléments essentiels et compléments mobiles',
    objective: 'Identifier les compléments qui structurent le verbe et ceux qui déplacent l’information.',
    spiralReview: ['sujet-verbe', 'complément circonstanciel'],
    focusLabel: 'la distinction des compléments',
  },
  {
    title: 'Ajouter un complément du nom précis',
    objective: 'Préciser un nom avec un complément du nom pertinent.',
    spiralReview: ['groupe prépositionnel', 'accords dans le GN'],
    focusLabel: 'l’usage du complément du nom',
  },
  {
    title: 'Utiliser l’adjectif épithète avec précision',
    objective: 'Choisir et accorder un adjectif épithète qui affine le sens.',
    spiralReview: ['genre et nombre', 'place de l’adjectif'],
    focusLabel: 'l’adjectif épithète',
  },
  {
    title: 'Employer l’attribut du sujet dans la description',
    objective: 'Construire des phrases avec verbe d’état et attribut du sujet.',
    spiralReview: ['verbes d’état', 'accord de l’adjectif'],
    focusLabel: 'l’attribut du sujet',
  },
  {
    title: 'Étendre la phrase avec des compléments circonstanciels',
    objective: 'Ajouter lieu, temps et manière sans nuire à la clarté.',
    spiralReview: ['ponctuation', 'déplacement des groupes'],
    focusLabel: 'les compléments circonstanciels',
  },
  {
    title: 'Gérer l’ordre des groupes dans la phrase',
    objective: 'Réorganiser une phrase en conservant correction et lisibilité.',
    spiralReview: ['sujet', 'groupe verbal'],
    focusLabel: 'l’ordre des groupes',
  },
  {
    title: 'Éviter les phrases surchargées',
    objective: 'Alléger une phrase trop longue en gardant l’information essentielle.',
    spiralReview: ['phrase simple et complexe', 'ponctuation'],
    focusLabel: 'l’allègement de phrase',
  },
  {
    title: 'Construire une phrase complexe par coordination',
    objective: 'Relier deux propositions par coordination avec cohérence logique.',
    spiralReview: ['proposition', 'conjonctions de coordination'],
    focusLabel: 'la coordination',
  },
  {
    title: 'Construire une phrase complexe par subordination',
    objective: 'Introduire une proposition subordonnée simple au bon endroit.',
    spiralReview: ['proposition principale', 'subordonnant'],
    focusLabel: 'la subordination',
  },
  {
    title: 'Choisir le bon connecteur logique',
    objective: 'Sélectionner un connecteur adapté au lien de sens visé.',
    spiralReview: ['coordination', 'subordination'],
    focusLabel: 'le connecteur logique',
  },
  {
    title: 'Renforcer la cohésion avec les reprises',
    objective: 'Éviter les répétitions en assurant des reprises claires.',
    spiralReview: ['pronoms', 'antécédents'],
    focusLabel: 'la cohésion par reprises',
  },
  {
    title: 'Intégrer des expansions dans un paragraphe',
    objective: 'Rédiger un paragraphe court avec des expansions variées et contrôlées.',
    spiralReview: ['groupe nominal enrichi', 'ponctuation de phrase'],
    focusLabel: 'les expansions en paragraphe',
  },
  {
    title: 'Réviser l’extension de phrase en contexte narratif',
    objective: 'Réinvestir l’extension de phrase dans un mini-récit cohérent.',
    spiralReview: ['temps du récit', 'connecteurs'],
    focusLabel: 'l’extension dans le récit',
  },
  {
    title: 'Bilan module 1 : étendre, organiser, clarifier',
    objective: 'Mobiliser les acquis du module dans une réécriture structurée.',
    spiralReview: ['expansions', 'coordination/subordination', 'cohésion'],
    focusLabel: 'la synthèse du module',
  },
];

export const module1LessonBlueprints5e = LESSON_DEFINITIONS.map((lessonDefinition) =>
  createLesson(
    lessonDefinition.title,
    lessonDefinition.objective,
    lessonDefinition.spiralReview,
    lessonDefinition.focusLabel
  )
);
