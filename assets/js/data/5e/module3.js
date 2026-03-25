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
      createExercise('singleChoice', `Choisis la forme verbale correcte pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `forme verbale correcte pour ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `forme verbale fautive pour ${focusLabel}`, isCorrect: false },
          { id: 'c', label: `forme verbale incohérente pour ${focusLabel}`, isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 repères temporels utiles pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'moment de l’action', isCorrect: true },
          { id: 'b', label: 'cohérence du récit', isCorrect: true },
          { id: 'c', label: 'mot voisin aléatoire', isCorrect: false },
          { id: 'd', label: 'ponctuation seule', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Énonce la règle-clé pour ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase en ajustant le temps verbal pour ${focusLabel}.`),
      createExercise('ordering', `Range les étapes pour choisir le bon temps dans ${focusLabel}.`, {
        expectedOrder: ['repérer le contexte', 'choisir le temps', 'vérifier la cohérence'],
      }),
      createExercise('multipleChoice', `Repère toutes les formes verbales recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'forme verbale cohérente avec le repère temporel', isCorrect: true },
          { id: 'b', label: 'forme verbale alignée avec la progression du récit', isCorrect: true },
          { id: 'c', label: 'forme verbale incompatible avec la chronologie', isCorrect: false },
          { id: 'd', label: 'forme verbale isolée sans cohérence de système', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Transforme 2 phrases en respectant ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix verbal en 2 lignes pour ${focusLabel}.`, {
        acceptedAnswers: ['temps', 'cohérence'],
      }),
      createExercise('ordering', `Mets dans l’ordre la relecture de vigilance verbale pour ${focusLabel}.`, {
        expectedOrder: ['lire le sujet', 'contrôler le temps', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : réécris 3 phrases en consolidant ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases dans un contexte différent avec le même principe.'),
      createExercise('textInput', 'Spirale : relie le travail verbal du jour à une notion des modules 1 et 2.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Revoir présent et imparfait en narration', 'Distinguer usage du présent et de l’imparfait en contexte narratif.', ['valeurs des temps', 'accord sujet-verbe'], 'présent et imparfait'],
  ['Installer le passé simple des verbes fréquents', 'Conjuguer les formes fréquentes du passé simple en récit.', ['radicaux verbaux', 'personnes'], 'le passé simple fréquent'],
  ['Alternance imparfait / passé simple', 'Choisir le bon temps selon arrière-plan et actions principales.', ['valeurs aspectuelles', 'cohérence narrative'], 'l’alternance imparfait/passé simple'],
  ['Maîtriser le plus-que-parfait en récit', 'Exprimer l’antériorité dans un récit au passé.', ['auxiliaires', 'participe passé'], 'le plus-que-parfait'],
  ['Exprimer la postériorité avec le conditionnel', 'Utiliser le conditionnel pour exprimer une action envisagée.', ['futur', 'repères temporels'], 'le conditionnel de narration'],
  ['Sécuriser la concordance des temps (initiation)', 'Maintenir une cohérence temporelle dans une phrase complexe.', ['subordination', 'temps verbaux'], 'la concordance des temps'],
  ['Réviser les terminaisons verbales sensibles', 'Éviter les confusions de terminaisons en production.', ['groupes verbaux', 'personnes'], 'les terminaisons sensibles'],
  ['Choisir le temps pertinent dans le dialogue', 'Adapter le temps verbal au discours rapporté simple.', ['ponctuation du dialogue', 'verbes de parole'], 'les temps du dialogue'],
  ['Transformer un récit du présent au passé', 'Réécrire un court récit du présent vers un système au passé.', ['présent narratif', 'imparfait/passé simple'], 'la transposition présent/passé'],
  ['Transformer un récit du passé au présent', 'Réécrire un court récit du passé vers le présent narratif.', ['système des temps', 'cohérence'], 'la transposition passé/présent'],
  ['Stabiliser les auxiliaires être/avoir', 'Choisir l’auxiliaire correct selon le verbe et le sens.', ['participe passé', 'verbes pronominaux simples'], 'le choix de l’auxiliaire'],
  ['Repérer les ruptures temporelles dans un texte', 'Identifier et corriger les incohérences de temps.', ['relecture', 'cohésion textuelle'], 'les ruptures temporelles'],
  ['Conjuguer avec sujet complexe en récit', 'Maintenir la forme verbale correcte avec sujet éloigné.', ['accords', 'groupes sujets complexes'], 'la conjugaison avec sujet complexe'],
  ['Réécrire un paragraphe narratif cohérent', 'Renforcer la cohérence des temps dans un paragraphe narratif.', ['enchaînement des actions', 'valeurs des temps'], 'la cohérence des temps en paragraphe'],
  ['Bilan module 3 : choisir le bon temps', 'Mobiliser les temps du récit dans une réécriture de synthèse.', ['temps du récit', 'concordance', 'relecture'], 'le bilan des temps du récit'],
];

export const module3LessonBlueprints5e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
