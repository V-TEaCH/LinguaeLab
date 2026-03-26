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
      createExercise('singleChoice', `Choisis la reformulation la plus efficace pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `reformulation précise et cohérente pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `reformulation floue qui affaiblit ${focusLabel}`, isCorrect: false },
          { id: 'c', label: `reformulation qui détourne le sens visé par ${focusLabel}`, isCorrect: false },
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
          { id: 'a', label: `reprise cohérente des idées pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `enchaînement argumentatif lisible dans ${focusLabel}`, isCorrect: true },
          { id: 'c', label: 'reformulation ambiguë sans progression claire', isCorrect: false },
          { id: 'd', label: 'réécriture contradictoire avec l’idée initiale', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de reformulation pour ${focusLabel}.`, {
        acceptedAnswers: ['cohésion textuelle', 'précision lexicale', 'progression logique'],
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
  [
    'Passer du discours direct au discours indirect',
    'Transformer une parole rapportée sans perdre le sens ni la correction de la phrase.',
    [
      'Repérer les paroles rapportées',
      'Observer les verbes introducteurs',
      'Vérifier la cohérence des temps',
    ],
    'le passage du discours direct au discours indirect',
    {
      primarySkill: 'discours_direct_indirect',
      secondarySpiralSkills: [
        'ponctuation_du_dialogue',
        'temps_du_verbe',
        'subordination',
      ],
      officialRefs: ['bo-cycle4-2026', 'cycle4_2026_paroles_rapportees'],
      deliveryModel: {
        authoredExerciseCount: 12,
        defaultVisibleCount: 6,
        deferredSpiralExerciseIds: ['3e-m4-l9-ex12'],
      },
      exercises: [
        {
          slotId: '3e-m4-l9-ex01',
          type: 'singleChoice',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'rappel_flash',
          instruction: 'Cette phrase est-elle au discours direct ou indirect ?',
          prompt: 'Il dit qu\'il reviendra demain.',
          options: [
            { id: 'a', label: 'direct', isCorrect: false },
            { id: 'b', label: 'indirect', isCorrect: true },
          ],
          maxScore: 1,
          unlockRules: {
            reinforcementMaxStandardRate: 0.69,
            masteryMinStandardRate: 0.8,
          },
        },
        {
          slotId: '3e-m4-l9-ex02',
          type: 'textInput',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'repérage',
          instruction: 'Recopie seulement le verbe introducteur.',
          prompt: 'Le témoin affirme : « Je n\'ai rien vu. »',
          acceptedAnswers: ['affirme'],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex03',
          type: 'singleChoice',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'discrimination',
          instruction: 'Choisis la bonne transformation au discours indirect.',
          prompt: 'Elle dit : « Je pars. »',
          options: [
            { id: 'a', label: 'Elle dit qu\'elle part.', isCorrect: true },
            { id: 'b', label: 'Elle dit qu\'elle pars.', isCorrect: false },
            { id: 'c', label: 'Elle dit : elle part.', isCorrect: false },
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex04',
          type: 'multipleChoice',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'tri',
          instruction: 'Coche tous les éléments qui changent souvent lors du passage au discours indirect.',
          options: [
            { id: 'a', label: 'les guillemets', isCorrect: true },
            { id: 'b', label: 'certains pronoms', isCorrect: true },
            { id: 'c', label: 'toujours tous les noms', isCorrect: false },
            { id: 'd', label: 'parfois les temps', isCorrect: true },
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex05',
          type: 'textInput',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'manipulation',
          instruction: 'Transforme cette phrase au discours indirect.',
          prompt: 'Le professeur annonce : « Vous rendrez le devoir demain. »',
          acceptedAnswers: [
            'Le professeur annonce que nous rendrons le devoir demain.',
            'Le professeur annonce que vous rendrez le devoir demain.',
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex06',
          type: 'multipleChoice',
          phase: 'standardPath',
          visibleByDefault: true,
          pedagogicalRole: 'mini_validation',
          instruction: 'Coche toutes les transformations correctes.',
          options: [
            { id: 'a', label: 'Il affirme : « Je viendrai. » → Il affirme qu\'il viendra.', isCorrect: true },
            { id: 'b', label: 'Elle dit : « Nous partons. » → Elle dit que nous partons.', isCorrect: true },
            { id: 'c', label: 'Il demande : « Où vas-tu ? » → Il demande où vas-tu.', isCorrect: false },
            { id: 'd', label: 'Elle répond : « Je suis prête. » → Elle répond qu\'elle est prête.', isCorrect: true },
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex07',
          type: 'textInput',
          phase: 'reinforcementPath',
          visibleByDefault: false,
          pedagogicalRole: 'correction',
          instruction: 'Corrige la transformation fautive.',
          prompt: 'Il dit qu\'il viens demain.',
          acceptedAnswers: [
            'Il dit qu\'il vient demain.',
            'il dit qu\'il vient demain',
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex08',
          type: 'singleChoice',
          phase: 'reinforcementPath',
          visibleByDefault: false,
          pedagogicalRole: 'justification_guidée',
          instruction: 'Pourquoi faut-il introduire une subordonnée ici ?',
          prompt: 'Elle dit : « Je suis prête. »',
          options: [
            {
              id: 'a',
              label: 'Parce qu\'au discours indirect, la parole est intégrée à la phrase du narrateur.',
              isCorrect: true,
            },
            { id: 'b', label: 'Parce qu\'il faut toujours ajouter un adjectif.', isCorrect: false },
          ],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex09',
          type: 'textInput',
          phase: 'reinforcementPath',
          visibleByDefault: false,
          pedagogicalRole: 'vigilance',
          instruction: 'Recopie la conjonction ou le mot interrogatif qui introduit la proposition rapportée.',
          prompt: 'Il demande où nous allons.',
          acceptedAnswers: ['où'],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex10',
          type: 'textInput',
          phase: 'masteryPath',
          visibleByDefault: false,
          pedagogicalRole: 'réécriture',
          instruction: 'Réécris ce court dialogue au discours indirect, en gardant le sens et la correction.',
          prompt: 'Paul dit : « Je n\'ai pas fini. » Sa sœur répond : « Tu exagères. »',
          acceptedAnswers: [],
          maxScore: 1,
        },
        {
          slotId: '3e-m4-l9-ex11',
          type: 'textInput',
          phase: 'masteryPath',
          visibleByDefault: false,
          pedagogicalRole: 'transfert',
          instruction: 'Rédige un court passage narratif de trois phrases incluant une parole rapportée au discours indirect.',
          prompt: 'Contexte : un témoin raconte une scène.',
          acceptedAnswers: [],
          maxScore: 0,
        },
        {
          slotId: '3e-m4-l9-ex12',
          type: 'textInput',
          phase: 'deferredSpiralPath',
          visibleByDefault: false,
          pedagogicalRole: 'spirale',
          instruction: 'Dans un paragraphe argumentatif bref, repère une parole rapportée puis vérifie la cohérence des temps.',
          prompt: 'L\'auteur explique qu\'il voulait convaincre, puis il affirme : « J\'avais raison. »',
          acceptedAnswers: [],
          maxScore: 0,
          deferredTo: {
            targetLessonId: '3e-m3-l11',
            reason: 'réactivation croisée temps + parole rapportée',
          },
        },
      ],
    },
  ],
  ['Structurer un paragraphe argumentatif court', 'Organiser thèse, argument et exemple avec cohérence.', ['argumentation', 'connecteurs'], 'la structure argumentative'],
  ['Structurer un paragraphe narratif court', 'Assurer la cohérence des actions et des repères temporels.', ['chronologie', 'temps verbaux'], 'la structure narrative'],
  ['Réviser la cohésion d’un texte bref', 'Vérifier enchaînements et reprises à l’échelle du texte.', ['cohésion textuelle', 'références pronominales'], 'la cohésion du texte'],
  ['Réécrire avec contrainte de style', 'Adapter la formulation à une consigne de style donnée.', ['intention', 'effet produit'], 'la réécriture sous contrainte'],
  ['Préparer une version finale relue', 'Finaliser un texte en appliquant une relecture méthodique.', ['vigilance', 'auto-correction'], 'la finalisation du texte'],
  ['Bilan module 4 : réécrire avec efficacité', 'Mobiliser les stratégies de réécriture dans une production complète.', ['cohésion', 'précision', 'organisation'], 'le bilan de réécriture'],
];

export const module4LessonBlueprints3e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel, options = {}]) =>
    createLesson(title, objective, spiralReview, focusLabel, options)
);
