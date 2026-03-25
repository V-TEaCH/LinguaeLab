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
      createExercise('singleChoice', `Choisis la forme correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `graphie correcte dans un cas de ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `graphie fautive dans la chaîne d’accord de ${focusLabel}`, isCorrect: false },
          { id: 'c', label: `forme incompatible avec la règle de ${focusLabel}`, isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 critères d’accord pertinents pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'genre', isCorrect: true },
          { id: 'b', label: 'nombre', isCorrect: true },
          { id: 'c', label: 'ordre arbitraire', isCorrect: false },
          { id: 'd', label: 'mot isolé', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Écris la règle centrale pour ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase en justifiant l’accord pour ${focusLabel}.`),
      createExercise('ordering', `Ordonne les étapes de contrôle de ${focusLabel}.`, {
        expectedOrder: ['repérer', 'accorder', 'vérifier'],
      }),
      createExercise('multipleChoice', `Repère toutes les formes recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `accord conforme à la règle de ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `homophone correctement tranché pour ${focusLabel}`, isCorrect: true },
          { id: 'c', label: 'accord piloté par le mot voisin au lieu du noyau', isCorrect: false },
          { id: 'd', label: 'homophone choisi sans vérification de la fonction', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases en sécurisant ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de correction pour ${focusLabel}.`, {
        acceptedAnswers: ['accord grammatical', 'nature et fonction', 'chaîne d’accord'],
      }),
      createExercise('ordering', `Mets en ordre la vigilance de relecture liée à ${focusLabel}.`, {
        expectedOrder: ['lire', 'contrôler', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases pour fiabiliser ${focusLabel}.`),
      createExercise('textInput', 'Transfert : applique la stratégie du jour dans 3 phrases nouvelles.'),
      createExercise('textInput', 'Spirale : relie la notion à deux acquis antérieurs en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Accorder sujet et verbe dans les cas complexes', 'Accorder correctement avec sujets éloignés ou coordonnés.', ['sujet-verbe', 'propositions'], 'l’accord sujet-verbe complexe'],
  ['Accorder avec sujets collectifs', 'Gérer les accords avec noms collectifs selon le sens.', ['genre/nombre', 'valeur sémantique'], 'les sujets collectifs'],
  ['Accorder avec sujets juxtaposés', 'Accorder le verbe avec des sujets multiples juxtaposés.', ['coordination', 'ponctuation'], 'les sujets juxtaposés'],
  ['Distinguer leurs/leur au sein des chaînes d’accord', 'Choisir la bonne graphie selon fonction et nombre.', ['déterminants', 'pronoms'], 'leurs/leur'],
  ['Distinguer tout/tous/toute/toutes', 'Employer les formes de tout selon leur usage.', ['genre', 'nombre'], 'tout/tous/toute/toutes'],
  ['Distinguer quel(s)/quelle(s)/qu’elle(s)', 'Sécuriser un homophone fréquent en contexte complexe.', ['homophones', 'nature/fonction'], 'quel(s)/quelle(s)/qu’elle(s)'],
  ['Accorder l’adjectif dans des GN complexes', 'Maintenir l’accord malgré expansions et inversions.', ['GN étendu', 'adjectifs'], 'l’accord adjectival complexe'],
  ['Accorder l’attribut avec sujets composés', 'Accorder l’attribut du sujet dans des structures composées.', ['verbes d’état', 'accord de l’adjectif'], 'l’attribut avec sujet composé'],
  ['Accorder le participe passé avec être (cas étendus)', 'Étendre la maîtrise de l’accord du participe avec être.', ['auxiliaires', 'participe passé'], 'participe passé avec être'],
  ['Accorder le participe passé avec avoir (cas sélectionnés)', 'Appliquer les cas utiles d’accord avec avoir.', ['COD', 'ordre des groupes'], 'participe passé avec avoir'],
  ['Repérer les chaînes d’accord défaillantes en paragraphe', 'Identifier et corriger les ruptures d’accord en texte.', ['relecture', 'cohésion'], 'la chaîne d’accord en paragraphe'],
  ['Orthographier les accords en contexte argumentatif', 'Maintenir la correction grammaticale dans un texte argumentatif bref.', ['connecteurs', 'phrases complexes'], 'les accords en argumentation'],
  ['Réviser les homophones grammaticaux avancés', 'Consolider des couples homophoniques en contexte.', ['homophones', 'accords'], 'les homophones avancés'],
  ['Réécrire pour supprimer les erreurs récurrentes', 'Corriger un texte bref en ciblant les erreurs d’accord fréquentes.', ['réécriture', 'vigilance'], 'la correction ciblée'],
  ['Bilan module 2 : fiabiliser l’orthographe grammaticale', 'Mobiliser l’ensemble des règles étudiées dans une réécriture synthèse.', ['accords', 'homophones', 'relecture'], 'le bilan d’orthographe grammaticale'],
];

export const module2LessonBlueprints4e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
