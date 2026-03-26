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
      createExercise('singleChoice', `Choisis la réponse la plus pertinente pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `réponse précise et justifiée pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `réponse incomplète pour ${focusLabel}`, isCorrect: false },
          { id: 'c', label: `réponse hors-critères de ${focusLabel}`, isCorrect: false },
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
          { id: 'a', label: `justification claire conforme aux critères de ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `réponse rédigée avec citation ou indice pertinent pour ${focusLabel}`, isCorrect: true },
          { id: 'c', label: 'réponse vague sans élément de preuve', isCorrect: false },
          { id: 'd', label: 'réponse contradictoire avec la consigne', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 réponses brèves pour améliorer ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix avec les critères de ${focusLabel}.`, {
        acceptedAnswers: ['critères de réussite', 'justification précise', 'preuve textuelle'],
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
  {
    title: 'Méthode DNB : lire la consigne efficacement',
    objective: 'Installer une routine de lecture et de repérage des attendus.',
    spiralReview: ['consigne', 'mots-clés'],
    focusLabel: 'la lecture de consigne DNB',
    exercises: [
      createExercise('singleChoice', 'Quel élément doit être repéré en premier dans la consigne ?', {
        prompt: '« En 3 lignes, explique pourquoi le narrateur hésite et cite un indice du texte. »',
        options: [
          { id: 'a', label: 'Le verbe d’action attendu (explique)', isCorrect: true },
          { id: 'b', label: 'Le prénom de l’élève', isCorrect: false },
          { id: 'c', label: 'La longueur du texte source', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', 'Coche les contraintes explicites de cette consigne.', {
        prompt: '« Justifie ta réponse par deux éléments précis du passage. »',
        options: [
          { id: 'a', label: 'Il faut justifier', isCorrect: true },
          { id: 'b', label: 'Deux éléments précis sont exigés', isCorrect: true },
          { id: 'c', label: 'Une réponse en un seul mot suffit', isCorrect: false },
          { id: 'd', label: 'La citation est interdite', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Écris en 8 mots maximum ce que la consigne te demande de faire.', {
        prompt: '« Relève un procédé de comparaison et explique son effet. »',
        acceptedAnswers: [
          'relever une comparaison puis expliquer son effet',
          'identifier la comparaison et expliquer son effet',
        ],
      }),
      createExercise('textInput', 'Corrige cette reformulation de consigne trop floue.', {
        prompt: '« Faut parler du texte un peu. »',
        acceptedAnswers: [
          'il faut répondre précisément à la question posée',
          'il faut relever un élément précis du texte et le justifier',
        ],
      }),
      createExercise('ordering', 'Mets dans l’ordre la méthode de traitement de consigne.', {
        expectedOrder: ['lire le verbe de consigne', 'repérer les contraintes', 'préparer une réponse ciblée'],
      }),
      createExercise('multipleChoice', 'Quelles reformulations respectent la consigne ?', {
        prompt: 'Consigne : « Justifie ta réponse par un indice précis du texte. »',
        options: [
          { id: 'a', label: 'Je donne ma réponse puis je cite un indice précis.', isCorrect: true },
          { id: 'b', label: 'Je donne ma réponse et je la justifie par un élément du passage.', isCorrect: true },
          { id: 'c', label: 'Je donne mon avis sans appui textuel.', isCorrect: false },
          { id: 'd', label: 'Je recopie tout le paragraphe.', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Réécris la consigne avec tes mots sans perdre les contraintes.', {
        prompt: '« En une phrase, explique l’attitude du personnage et appuie-toi sur un indice. »',
      }),
      createExercise('textInput', 'Justifie en une phrase pourquoi ta reformulation est fidèle.', {
        acceptedAnswers: ['j ai conservé les contraintes', 'j ai gardé le verbe de consigne', 'indice précis conservé'],
      }),
      createExercise('ordering', 'Range les vérifications finales avant de rédiger.', {
        expectedOrder: ['ai-je identifié l’action demandée', 'ai-je repéré le nombre d’éléments attendus', 'ma réponse répond-elle exactement'],
      }),
      createExercise('textInput', 'Réécriture : transforme une réponse vague en réponse ciblée.', {
        prompt: 'Réponse vague : « C’est triste. »',
      }),
      createExercise('textInput', 'Transfert : écris une mini-réponse à une consigne nouvelle en respectant 2 contraintes.', {
        prompt: 'Consigne : « Donne une interprétation et appuie-la sur un mot du texte. »',
      }),
      createExercise('textInput', 'Spirale : relie lecture de consigne et justification par indice sur un exemple personnel.'),
    ],
  },
  {
    title: 'Méthode DNB : analyser un court extrait',
    objective: 'Identifier rapidement informations explicites et implicites utiles.',
    spiralReview: ['repérage', 'inférences'],
    focusLabel: 'l’analyse d’extrait court',
    exercises: [
      createExercise('singleChoice', 'Quel indice explicite montre la peur du personnage ?', {
        prompt: 'Extrait : « Il recula d’un pas, les mains tremblantes. »',
        options: [
          { id: 'a', label: '« les mains tremblantes »', isCorrect: true },
          { id: 'b', label: '« d’un pas »', isCorrect: false },
          { id: 'c', label: '« Il »', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', 'Coche les informations explicites de l’extrait.', {
        prompt: 'Extrait : « Elle referma la porte et murmura qu’elle reviendrait. »',
        options: [
          { id: 'a', label: 'Elle ferme la porte', isCorrect: true },
          { id: 'b', label: 'Elle parle à voix basse', isCorrect: true },
          { id: 'c', label: 'Elle est joyeuse', isCorrect: false },
          { id: 'd', label: 'Elle part à l’étranger', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Formule en une phrase une inférence plausible à partir de l’extrait.', {
        prompt: 'Extrait : « Il évita son regard et rangea vite la lettre. »',
        acceptedAnswers: [
          'il cache quelque chose',
          'il semble gêné',
        ],
      }),
      createExercise('textInput', 'Corrige cette interprétation trop générale.', {
        prompt: 'Interprétation faible : « Le personnage est bizarre. »',
      }),
      createExercise('ordering', 'Mets dans l’ordre la méthode d’analyse d’un extrait.', {
        expectedOrder: ['repérer ce qui est écrit', 'proposer une interprétation', 'justifier par un indice'],
      }),
      createExercise('multipleChoice', 'Quelles réponses mobilisent un indice précis ?', {
        prompt: 'Question : « Que révèle l’extrait sur le narrateur ? »',
        options: [
          { id: 'a', label: 'Le narrateur est inquiet, comme le montre « mains tremblantes ».', isCorrect: true },
          { id: 'b', label: 'Il est sûrement inquiet car il recule et tremble.', isCorrect: true },
          { id: 'c', label: 'Il est bizarre, c’est évident.', isCorrect: false },
          { id: 'd', label: 'Je pense qu’il est inquiet sans preuve.', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Réponds en 2 phrases : 1 idée + 1 indice textuel.', {
        prompt: 'Extrait : « Elle serra son sac et hâta le pas. »',
      }),
      createExercise('textInput', 'Justifie ton choix d’indice en une phrase brève.', {
        acceptedAnswers: ['cet indice montre', 'ce mot prouve', 'cela suggère'],
      }),
      createExercise('ordering', 'Range la relecture finale de réponse d’analyse.', {
        expectedOrder: ['ai-je répondu à la question', 'ai-je donné un indice du texte', 'ma formulation est-elle claire'],
      }),
      createExercise('textInput', 'Réécriture : améliore une réponse d’analyse trop floue.', {
        prompt: 'Réponse faible : « Le personnage est triste je crois. »',
      }),
      createExercise('textInput', 'Transfert : applique la même méthode à un extrait narratif nouveau.'),
      createExercise('textInput', 'Spirale : relie analyse d’extrait et lecture de consigne sur un exemple commun.'),
    ],
  },
  {
    title: 'Répondre à une question de compréhension',
    objective: 'Formuler une réponse brève, précise et justifiée.',
    spiralReview: ['phrase complète', 'justification'],
    focusLabel: 'la réponse courte justifiée',
    exercises: [
      createExercise('singleChoice', 'Quelle réponse est la plus adaptée à une question de compréhension ?', {
        prompt: 'Question : « Pourquoi le personnage s’arrête-t-il ? »',
        options: [
          { id: 'a', label: 'Il s’arrête car il entend un bruit derrière lui.', isCorrect: true },
          { id: 'b', label: 'Parce que.', isCorrect: false },
          { id: 'c', label: 'Je ne sais pas trop.', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', 'Quelles qualités doit avoir une réponse courte ?', {
        options: [
          { id: 'a', label: 'Répondre directement à la question', isCorrect: true },
          { id: 'b', label: 'S’appuyer sur un indice précis', isCorrect: true },
          { id: 'c', label: 'Multiplier les digressions', isCorrect: false },
          { id: 'd', label: 'Rester dans l’opinion gratuite', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Rédige une réponse d’une phrase complète à la question.', {
        prompt: 'Question : « Que ressent le narrateur ? »',
      }),
      createExercise('textInput', 'Corrige cette réponse insuffisante.', {
        prompt: 'Réponse insuffisante : « Il est mal. »',
      }),
      createExercise('ordering', 'Ordonne les étapes pour construire une réponse courte.', {
        expectedOrder: ['identifier l’idée attendue', 'rédiger une phrase claire', 'ajouter un appui précis'],
      }),
      createExercise('multipleChoice', 'Quelles réponses sont recevables ?', {
        prompt: 'Question : « Comment sait-on que le personnage hésite ? »',
        options: [
          { id: 'a', label: 'On le sait car il « recule d’un pas ».', isCorrect: true },
          { id: 'b', label: 'Le texte montre son hésitation avec « recule d’un pas ».', isCorrect: true },
          { id: 'c', label: 'Je pense qu’il hésite, point.', isCorrect: false },
          { id: 'd', label: 'Il hésite parce que j’imagine cela.', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Rédige une réponse en 2 lignes maximum avec un indice textuel.'),
      createExercise('textInput', 'Justifie en 1 phrase pourquoi ton indice est pertinent.', {
        acceptedAnswers: ['indice pertinent', 'preuve dans le texte', 'mot du texte'],
      }),
      createExercise('ordering', 'Range les points de contrôle avant de rendre la réponse.', {
        expectedOrder: ['réponse complète', 'indice présent', 'formulation correcte'],
      }),
      createExercise('textInput', 'Réécriture : transforme une réponse trop longue en réponse courte efficace.'),
      createExercise('textInput', 'Transfert : réponds à une autre question de compréhension avec la même méthode.'),
      createExercise('textInput', 'Spirale : relie réponse courte et analyse d’extrait à partir d’un même exemple.'),
    ],
  },
  {
    title: 'Justifier avec une citation courte',
    objective: 'Intégrer une citation pertinente sans paraphrase excessive.',
    spiralReview: ['guillemets', 'reformulation'],
    focusLabel: 'la justification par citation courte',
    exercises: [
      createExercise('singleChoice', 'Quelle citation est la plus pertinente pour justifier la peur ?', {
        prompt: 'Extrait : « Ses mains tremblaient, il recula en silence. »',
        options: [
          { id: 'a', label: '« mains tremblaient »', isCorrect: true },
          { id: 'b', label: '« en silence »', isCorrect: false },
          { id: 'c', label: '« il »', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', 'Que faut-il respecter quand on cite ?', {
        options: [
          { id: 'a', label: 'Garder les guillemets', isCorrect: true },
          { id: 'b', label: 'Choisir un segment court et utile', isCorrect: true },
          { id: 'c', label: 'Recopier tout le paragraphe', isCorrect: false },
          { id: 'd', label: 'Ajouter des mots non signalés', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Propose une citation courte (2 à 5 mots) pour appuyer cette idée.', {
        prompt: 'Idée : « Le narrateur est inquiet. » / Extrait : « Il recula, les mains tremblantes. »',
        acceptedAnswers: ['mains tremblantes', 'il recula'],
      }),
      createExercise('textInput', 'Corrige cette justification mal citée.', {
        prompt: '« Il est inquiet parce que mains tremblantes »',
      }),
      createExercise('ordering', 'Ordonne la méthode de justification par citation.', {
        expectedOrder: ['choisir l’idée à justifier', 'prélever la citation courte', 'relier citation et explication'],
      }),
      createExercise('multipleChoice', 'Quelles justifications sont recevables ?', {
        options: [
          { id: 'a', label: 'Le personnage est inquiet, comme le montre « mains tremblantes ».', isCorrect: true },
          { id: 'b', label: 'La peur apparaît avec « recula en silence ».', isCorrect: true },
          { id: 'c', label: 'Le personnage est inquiet, c’est évident.', isCorrect: false },
          { id: 'd', label: 'Il est inquiet car je le ressens.', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Rédige une phrase de justification : idée + citation courte.'),
      createExercise('textInput', 'Explique en 1 phrase pourquoi ta citation est suffisante.', {
        acceptedAnswers: ['citation pertinente', 'preuve textuelle', 'indice précis'],
      }),
      createExercise('ordering', 'Range les vérifications avant de valider la réponse.', {
        expectedOrder: ['citation entre guillemets', 'citation reliée à l’idée', 'réponse concise'],
      }),
      createExercise('textInput', 'Réécriture : allège une justification trop longue en gardant la preuve essentielle.'),
      createExercise('textInput', 'Transfert : justifie une autre idée par une citation courte dans un nouvel extrait.'),
      createExercise('textInput', 'Spirale : relie citation courte et réponse courte justifiée sur un cas unique.'),
    ],
  },
  {
    title: 'Réécrire sans faute une phrase ciblée',
    objective: 'Corriger syntaxe et accords dans une phrase type examen.',
    spiralReview: ['accords', 'ponctuation'],
    focusLabel: 'la réécriture ciblée DNB',
    exercises: [
      createExercise('singleChoice', 'Choisis la réécriture correcte.', {
        prompt: 'Phrase : « Les enfant arrive et regarde le ciel. »',
        options: [
          { id: 'a', label: 'Les enfants arrivent et regardent le ciel.', isCorrect: true },
          { id: 'b', label: 'Les enfant arrivent et regardes le ciel.', isCorrect: false },
          { id: 'c', label: 'Les enfants arrive et regarde le ciel.', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', 'Quelles erreurs dois-tu corriger en priorité ?', {
        options: [
          { id: 'a', label: 'Accord sujet-verbe', isCorrect: true },
          { id: 'b', label: 'Orthographe grammaticale', isCorrect: true },
          { id: 'c', label: 'Changer tout le vocabulaire', isCorrect: false },
          { id: 'd', label: 'Allonger la phrase inutilement', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Réécris la phrase en corrigeant uniquement les erreurs nécessaires.', {
        prompt: '« Elles a retrouvé leur cahier oublier. »',
        acceptedAnswers: ['elles ont retrouvé leur cahier oublié'],
      }),
      createExercise('textInput', 'Corrige cette phrase et garde le sens initial.', {
        prompt: '« Il faut qu ils viens rapidement »',
      }),
      createExercise('ordering', 'Mets dans l’ordre la routine de réécriture DNB.', {
        expectedOrder: ['repérer les erreurs', 'corriger sans changer le sens', 'relire les accords'],
      }),
      createExercise('multipleChoice', 'Quelles versions respectent la consigne de réécriture ?', {
        options: [
          { id: 'a', label: 'Je corrige uniquement les erreurs ciblées.', isCorrect: true },
          { id: 'b', label: 'Je conserve le sens de la phrase.', isCorrect: true },
          { id: 'c', label: 'Je réécris librement un autre message.', isCorrect: false },
          { id: 'd', label: 'Je supprime des informations essentielles.', isCorrect: false },
        ],
      }),
      createExercise('textInput', 'Réécris une phrase avec accord complexe sans faute.'),
      createExercise('textInput', 'Justifie brièvement une correction effectuée.', {
        acceptedAnswers: ['accord sujet verbe', 'accord du participe', 'correction grammaticale'],
      }),
      createExercise('ordering', 'Range les points de contrôle de fin de réécriture.', {
        expectedOrder: ['sens conservé', 'accords vérifiés', 'ponctuation vérifiée'],
      }),
      createExercise('textInput', 'Réécriture : corrige 3 micro-phrases en gardant exactement le sens.'),
      createExercise('textInput', 'Transfert : applique la même méthode à une phrase d’un autre domaine (argumentatif ou explicatif).'),
      createExercise('textInput', 'Spirale : relie réécriture ciblée, citation courte et réponse justifiée dans une mini-synthèse.'),
    ],
  },
  {
    title: 'Choisir le bon temps dans une réponse',
    objective: 'Sécuriser les temps verbaux selon l’intention de la question.',
    spiralReview: ['temps du récit', 'modes'],
    focusLabel: 'le choix verbal en réponse',
  },
  {
    title: 'Repérer et corriger les homophones sensibles',
    objective: 'Fiabiliser les homophones fréquents en contexte DNB.',
    spiralReview: ['homophones grammaticaux', 'chaîne d’accord'],
    focusLabel: 'les homophones sensibles',
  },
  {
    title: 'Organiser une réponse développée courte',
    objective: 'Structurer une réponse en 2 à 3 phrases cohérentes.',
    spiralReview: ['idée principale', 'connecteurs'],
    focusLabel: 'la réponse développée',
  },
  {
    title: 'Améliorer la cohésion d’un paragraphe bref',
    objective: 'Renforcer reprises et enchaînements dans un mini-paragraphe.',
    spiralReview: ['substituts', 'connecteurs logiques'],
    focusLabel: 'la cohésion de paragraphe',
  },
  {
    title: 'Traiter une consigne de réécriture mixte',
    objective: 'Appliquer plusieurs contraintes de langue dans un même item.',
    spiralReview: ['syntaxe', 'orthographe grammaticale'],
    focusLabel: 'la réécriture mixte',
  },
  {
    title: 'S’entraîner sur mini-série 1 (français)',
    objective: 'Enchaîner plusieurs items variés dans un format entraînement.',
    spiralReview: ['gestion du temps', 'méthode'],
    focusLabel: 'la mini-série 1',
  },
  {
    title: 'S’entraîner sur mini-série 2 (français)',
    objective: 'Stabiliser les automatismes sur une deuxième série variée.',
    spiralReview: ['vigilance', 'correction'],
    focusLabel: 'la mini-série 2',
  },
  {
    title: 'Diagnostiquer ses erreurs récurrentes',
    objective: 'Identifier ses erreurs fréquentes et choisir une action corrective.',
    spiralReview: ['auto-évaluation', 'relecture'],
    focusLabel: 'le diagnostic d’erreurs',
  },
  {
    title: 'Consolider une stratégie personnelle de révision',
    objective: 'Construire une routine réaliste de préparation finale.',
    spiralReview: ['priorisation', 'réemploi'],
    focusLabel: 'la stratégie personnelle',
  },
  {
    title: 'Bilan module 5 : entraînement DNB guidé',
    objective: 'Mobiliser les stratégies vues sur un entraînement global guidé (non simulation complète).',
    spiralReview: ['compréhension', 'langue', 'réécriture'],
    focusLabel: 'le bilan DNB guidé',
  },
];

export const module5LessonBlueprints3e = LESSON_DEFINITIONS.map((lessonDefinition) =>
  createLesson(
    lessonDefinition.title,
    lessonDefinition.objective,
    lessonDefinition.spiralReview,
    lessonDefinition.focusLabel,
    { exercises: lessonDefinition.exercises }
  )
);
