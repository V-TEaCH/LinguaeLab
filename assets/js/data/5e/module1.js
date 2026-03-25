const SOURCE_SPEC = 'docs/specs/rulebook.md';

function createExercise(type, instruction, options = {}) {
  return {
    type,
    instruction,
    ...options,
  };
}

function createLesson(title, objective, spiralReview, focusLabel, options = {}) {
  if (Array.isArray(options.exercises)) {
    return {
      title,
      objective,
      spiralReview,
      officialRefs: options.officialRefs ?? ['bo-cycle4-2026'],
      sourceSpec: SOURCE_SPEC,
      ...options,
      exercises: options.exercises,
    };
  }

  return {
    title,
    objective,
    spiralReview,
    officialRefs: options.officialRefs ?? ['bo-cycle4-2026'],
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
    title: 'Coordination ou subordination ?',
    objective: 'Distinguer deux manières de relier des propositions.',
    primarySkill: 'coordination_subordination',
    secondarySpiralSkills: [
      'repérer_verbe_conjugué',
      'compter_les_propositions',
      'ponctuation_phrase_complexe',
    ],
    spiralReview: [
      'Repérer les verbes conjugués',
      'Compter les propositions',
      'Observer les mots de liaison',
    ],
    focusLabel: 'la coordination et la subordination',
    officialRefs: ['bo-cycle4-2026', 'cycle4_2026_phrase_complexe'],
    deliveryModel: {
      authoredExerciseCount: 12,
      defaultVisibleCount: 6,
      deferredSpiralExerciseIds: ['5e-m1-l6-ex12'],
    },
    exercises: [
      {
        slotId: '5e-m1-l6-ex01',
        type: 'singleChoice',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'rappel_flash',
        instruction: 'Combien de verbes conjugués y a-t-il dans cette phrase ?',
        prompt: 'Je rentre et je ferme la porte.',
        options: [
          { id: 'a', label: '1', isCorrect: false },
          { id: 'b', label: '2', isCorrect: true },
          { id: 'c', label: '3', isCorrect: false },
        ],
        maxScore: 1,
        unlockRules: {
          reinforcementMaxStandardRate: 0.69,
          masteryMinStandardRate: 0.8,
        },
      },
      {
        slotId: '5e-m1-l6-ex02',
        type: 'singleChoice',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'repérage',
        instruction: 'Choisis le mot qui relie les deux propositions.',
        prompt: 'Je pars parce qu\'il pleut.',
        options: [
          { id: 'a', label: 'parce que', isCorrect: true },
          { id: 'b', label: 'pars', isCorrect: false },
          { id: 'c', label: 'pleut', isCorrect: false },
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex03',
        type: 'singleChoice',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'discrimination',
        instruction: 'Cette phrase relève-t-elle de la coordination ou de la subordination ?',
        prompt: 'Il avance mais il hésite.',
        options: [
          { id: 'a', label: 'coordination', isCorrect: true },
          { id: 'b', label: 'subordination', isCorrect: false },
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex04',
        type: 'multipleChoice',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'tri',
        instruction: 'Coche toutes les conjonctions de coordination.',
        options: [
          { id: 'a', label: 'mais', isCorrect: true },
          { id: 'b', label: 'parce que', isCorrect: false },
          { id: 'c', label: 'ou', isCorrect: true },
          { id: 'd', label: 'quand', isCorrect: false },
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex05',
        type: 'ordering',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'manipulation',
        instruction: 'Remets les groupes dans l’ordre pour former une phrase subordonnée correcte.',
        expectedOrder: [
          'Je reste à l\'intérieur',
          'parce qu\'',
          'il pleut',
        ],
        options: [
          'il pleut',
          'Je reste à l\'intérieur',
          'parce qu\'',
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex06',
        type: 'multipleChoice',
        phase: 'standardPath',
        visibleByDefault: true,
        pedagogicalRole: 'mini_validation',
        instruction: 'Coche toutes les phrases relevant de la subordination.',
        options: [
          { id: 'a', label: 'Je viens quand tu m\'appelles.', isCorrect: true },
          { id: 'b', label: 'Je viens et tu pars.', isCorrect: false },
          { id: 'c', label: 'Il rit parce qu\'il a gagné.', isCorrect: true },
          { id: 'd', label: 'Il rit mais il tousse.', isCorrect: false },
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex07',
        type: 'textInput',
        phase: 'reinforcementPath',
        visibleByDefault: false,
        pedagogicalRole: 'correction',
        instruction: 'Corrige cette phrase pour qu’elle devienne une vraie phrase de subordination.',
        prompt: 'Je pars, mais il pleut beaucoup, parce.',
        acceptedAnswers: [
          'Je pars parce qu\'il pleut beaucoup.',
          'je pars parce qu\'il pleut beaucoup',
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex08',
        type: 'singleChoice',
        phase: 'reinforcementPath',
        visibleByDefault: false,
        pedagogicalRole: 'justification_guidée',
        instruction: 'Pourquoi la phrase est-elle subordonnée ?',
        prompt: 'Je rentre quand la nuit tombe.',
        options: [
          { id: 'a', label: 'Parce qu\'un mot subordonnant relie deux propositions.', isCorrect: true },
          { id: 'b', label: 'Parce qu\'elle est plus longue.', isCorrect: false },
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex09',
        type: 'textInput',
        phase: 'reinforcementPath',
        visibleByDefault: false,
        pedagogicalRole: 'vigilance',
        instruction: 'Recopie seulement le mot ou groupe de mots qui marque la subordination.',
        prompt: 'Nous partons lorsque la pluie cesse.',
        acceptedAnswers: ['lorsque'],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex10',
        type: 'textInput',
        phase: 'masteryPath',
        visibleByDefault: false,
        pedagogicalRole: 'réécriture',
        instruction: 'Transforme cette coordination en subordination.',
        prompt: 'Il s\'arrête, car il est fatigué.',
        acceptedAnswers: [
          'Il s\'arrête parce qu\'il est fatigué.',
          'il s\'arrête parce qu\'il est fatigué',
        ],
        maxScore: 1,
      },
      {
        slotId: '5e-m1-l6-ex11',
        type: 'textInput',
        phase: 'masteryPath',
        visibleByDefault: false,
        pedagogicalRole: 'transfert',
        instruction: 'Écris une phrase avec coordination et une phrase avec subordination sur le même thème.',
        prompt: 'Thème : le départ en voyage.',
        acceptedAnswers: [],
        maxScore: 0,
      },
      {
        slotId: '5e-m1-l6-ex12',
        type: 'textInput',
        phase: 'deferredSpiralPath',
        visibleByDefault: false,
        pedagogicalRole: 'spirale',
        instruction: 'Dans ce court texte, repère la relation logique puis vérifie la ponctuation.',
        prompt: 'Il hésite parce qu\'il a peur, mais il avance',
        acceptedAnswers: [],
        maxScore: 0,
        deferredTo: {
          targetLessonId: '5e-m4-l3',
          reason: 'réactivation croisée liaison logique + reformulation',
        },
      },
    ],
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
    lessonDefinition.focusLabel,
    {
      officialRefs: lessonDefinition.officialRefs,
      primarySkill: lessonDefinition.primarySkill,
      secondarySpiralSkills: lessonDefinition.secondarySpiralSkills,
      deliveryModel: lessonDefinition.deliveryModel,
      exercises: lessonDefinition.exercises,
    }
  )
);
