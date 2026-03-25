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
      createExercise('singleChoice', `Choisis le temps correct pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `temps cohérent avec la valeur de ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `temps qui rompt le système temporel de ${focusLabel}`, isCorrect: false },
          { id: 'c', label: 'temps incompatible avec les repères chronologiques', isCorrect: false },
        ],
      }),
      createExercise('multipleChoice', `Sélectionne 2 repères temporels clés pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: 'ordre des actions', isCorrect: true },
          { id: 'b', label: 'valeur du temps', isCorrect: true },
          { id: 'c', label: 'mot voisin seul', isCorrect: false },
          { id: 'd', label: 'ponctuation seule', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Formule la règle d’emploi de ${focusLabel}.`),
      createExercise('textInput', `Corrige une phrase en ajustant le système temporel de ${focusLabel}.`),
      createExercise('ordering', `Ordonne la méthode de choix du temps pour ${focusLabel}.`, {
        expectedOrder: ['repérer le contexte', 'choisir le temps', 'vérifier la cohérence'],
      }),
      createExercise('multipleChoice', `Choisis toutes les formes verbales recevables pour ${focusLabel}.`, {
        options: [
          { id: 'a', label: `forme verbale correcte pour la valeur temporelle de ${focusLabel}`, isCorrect: true },
          { id: 'b', label: `forme qui respecte la concordance exigée par ${focusLabel}`, isCorrect: true },
          { id: 'c', label: 'forme qui crée une rupture de concordance', isCorrect: false },
          { id: 'd', label: 'forme qui mélange deux systèmes de temps incompatibles', isCorrect: false },
        ],
      }),
      createExercise('textInput', `Transforme 2 phrases en respectant ${focusLabel}.`),
      createExercise('textInput', `Justifie ton choix de temps pour ${focusLabel}.`, {
        acceptedAnswers: ['valeur du temps', 'concordance des temps', 'cohérence temporelle'],
      }),
      createExercise('ordering', `Mets dans l’ordre la vigilance de relecture verbale pour ${focusLabel}.`, {
        expectedOrder: ['lire le sujet', 'contrôler le temps', 'corriger'],
      }),
      createExercise('textInput', `Réécriture : réécris 3 phrases en consolidant ${focusLabel}.`),
      createExercise('textInput', 'Transfert : rédige 3 phrases nouvelles en réutilisant la stratégie du jour.'),
      createExercise('textInput', 'Spirale : relie la notion verbale à deux notions déjà travaillées.'),
    ],
  };
}

const LESSON_DEFINITIONS = [
  ['Stabiliser le système imparfait/passé simple', 'Choisir l’alternance pertinente dans un récit complexe.', ['valeurs des temps', 'structure narrative'], 'imparfait/passé simple'],
  ['Maîtriser le plus-que-parfait en récit', 'Exprimer clairement l’antériorité par rapport au récit principal.', ['auxiliaires', 'participe passé'], 'plus-que-parfait'],
  ['Utiliser le conditionnel pour nuancer', 'Exprimer hypothèse, atténuation et postériorité dans un texte.', ['futur', 'modalisation'], 'conditionnel de nuance'],
  ['Concordance des temps en subordination', 'Assurer la cohérence des temps entre principale et subordonnée.', ['subordination', 'valeurs temporelles'], 'concordance des temps'],
  ['Réviser les terminaisons verbales sensibles', 'Éviter les confusions fréquentes de terminaisons.', ['personnes', 'groupes verbaux'], 'terminaisons sensibles'],
  ['Choisir le temps juste dans un dialogue', 'Adapter les temps verbaux au discours direct et indirect simple.', ['verbes de parole', 'ponctuation'], 'temps du dialogue'],
  ['Transformer un récit passé en présent narratif', 'Réécrire un récit en conservant cohérence et dynamique.', ['présent narratif', 'enchaînements'], 'transposition passé-présent'],
  ['Transformer un récit présent en passé', 'Passer du présent narratif au système passé cohérent.', ['imparfait/passé simple', 'repères temporels'], 'transposition présent-passé'],
  ['Employer correctement les auxiliaires', 'Sécuriser le choix de l’auxiliaire selon le verbe et le sens.', ['être/avoir', 'participe passé'], 'choix de l’auxiliaire'],
  ['Repérer les ruptures temporelles en texte', 'Détecter et corriger les incohérences de temps.', ['relecture', 'cohésion textuelle'], 'ruptures temporelles'],
  ['Conjuguer avec sujets complexes', 'Maintenir la forme verbale correcte malgré un sujet éloigné.', ['accord sujet-verbe', 'GN complexes'], 'conjugaison avec sujet complexe'],
  ['Conjuguer dans un paragraphe explicatif', 'Garder la cohérence des temps dans un texte explicatif bref.', ['valeurs des temps', 'enchaînements'], 'temps en explication'],
  ['Conjuguer dans un paragraphe argumentatif', 'Adapter le système verbal à une prise de position argumentée.', ['modalisation', 'connecteurs logiques'], 'temps en argumentation'],
  ['Réécrire un récit à cohérence temporelle forte', 'Améliorer un récit en stabilisant ses temps verbaux.', ['système des temps', 'relecture'], 'cohérence temporelle renforcée'],
  ['Bilan module 3 : choisir et enchaîner les temps', 'Mobiliser les stratégies du module dans une réécriture synthèse.', ['temps du récit', 'concordance', 'vigilance'], 'bilan des temps'],
];

export const module3LessonBlueprints4e = LESSON_DEFINITIONS.map(
  ([title, objective, spiralReview, focusLabel]) =>
    createLesson(title, objective, spiralReview, focusLabel)
);
