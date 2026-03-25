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
          { id: 'a', label: 'forme correcte', isCorrect: true },
          { id: 'b', label: 'forme fautive', isCorrect: false },
          { id: 'c', label: 'forme ambiguë', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 indices d’accord utiles pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'genre', isCorrect: true },
          { id: 'b', label: 'nombre', isCorrect: true },
          { id: 'c', label: 'ordre visuel', isCorrect: false },
          { id: 'd', label: 'mot isolé', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Écris une règle courte pour réussir ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase fautive et explique le point d’accord pour ${focusLabel}.`),
      createExercise('ordering', `Ordonne la méthode de contrôle de ${focusLabel}.`, {
        expectedOrder: ['repérer', 'accorder', 'vérifier'],
      }),
      createExercise('multipleChoice', `Coche toutes les propositions correctes pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'proposition correcte 1', isCorrect: true },
          { id: 'b', label: 'proposition correcte 2', isCorrect: true },
          { id: 'c', label: 'proposition fautive 1', isCorrect: false },
          { id: 'd', label: 'proposition fautive 2', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Réécris 2 phrases pour sécuriser ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix en citant la règle mobilisée pour ${focusLabel}.`, {
        acceptedAnswers: ['accord', 'règle'],
      }),
      createExercise('ordering', `Mets dans l’ordre les étapes de relecture de vigilance pour ${focusLabel}.`, {
        expectedOrder: ['lire', 'contrôler', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : améliore 3 phrases pour rendre ${focusLabel} fiable.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases inédites en réutilisant la stratégie du jour.'),
      createExercise('textInput', 'Spirale : relie la notion du jour à une notion antérieure en 2 exemples.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Accorder sujet et verbe dans les cas simples', 'Sécuriser l’accord sujet-verbe avec un sujet clairement identifié.', ['sujet', 'verbe conjugué'], 'l’accord sujet-verbe simple'],
  ['Accorder sujet et verbe avec sujet inversé', 'Maintenir l’accord quand le sujet est placé après le verbe.', ['ponctuation', 'ordre des groupes'], 'l’accord avec sujet inversé'],
  ['Accorder avec sujet complexe', 'Accorder le verbe avec un sujet enrichi ou éloigné.', ['groupe nominal', 'expansions'], 'l’accord avec sujet complexe'],
  ['Distinguer leur/leurs et son/sont', 'Choisir la graphie correcte selon la fonction et le sens.', ['chaînes d’accord', 'nature/fonction'], 'leur/leurs et son/sont'],
  ['Distinguer ce/se et ces/ses', 'Sécuriser les homophones grammaticaux fréquents.', ['déterminants', 'pronoms'], 'ce/se et ces/ses'],
  ['Distinguer on/ont et a/à', 'Employer correctement les homophones verbaux et grammaticaux.', ['présent des verbes usuels', 'prépositions'], 'on/ont et a/à'],
  ['Accorder dans le groupe nominal étendu', 'Contrôler les accords dans un groupe nominal avec expansions.', ['nom noyau', 'adjectifs'], 'les accords du GN étendu'],
  ['Accorder l’adjectif attribut', 'Accorder correctement l’attribut avec le sujet.', ['verbes d’état', 'adjectifs'], 'l’accord de l’attribut'],
  ['Accorder le participe passé avec être', 'Appliquer la règle d’accord du participe passé avec être.', ['auxiliaires', 'genre et nombre'], 'le participe passé avec être'],
  ['Accorder le participe passé avec avoir (initiation)', 'Repérer les cas simples d’accord du participe passé avec avoir.', ['COD', 'auxiliaire avoir'], 'le participe passé avec avoir'],
  ['Repérer les ruptures d’accord dans un texte', 'Identifier et corriger des chaînes d’accord défaillantes.', ['relecture', 'vigilance grammaticale'], 'la chaîne d’accord'],
  ['Sécuriser l’accord en contexte narratif', 'Maintenir des accords stables dans un paragraphe narratif.', ['temps du récit', 'cohésion'], 'les accords en récit'],
  ['Réviser les homophones grammaticaux ciblés', 'Consolider les homophones vus dans le module.', ['homophones', 'accords'], 'les homophones grammaticaux'],
  ['Réécrire pour améliorer la correction grammaticale', 'Réviser un texte bref pour fiabiliser l’orthographe grammaticale.', ['réécriture', 'chaînes d’accord'], 'la correction grammaticale'],
  ['Bilan module 2 : fiabiliser les accords', 'Mobiliser toutes les règles du module dans une réécriture guidée.', ['accords', 'homophones', 'relecture'], 'le bilan des accords'],
];

export const module2LessonBlueprints5e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
