const EXERCISE_SEQUENCE = [
  'rappel-flash',
  'reperage-1',
  'reperage-2',
  'manipulation-1',
  'manipulation-2',
  'discrimination-fine',
  'correction-erreur',
  'justification-courte',
  'vigilance-orthographique',
  'reecriture',
  'transfert-contextualise',
  'spirale',
];

function createScaffoldExercise(slot, index) {
  return {
    slotId: `ex-${String(index + 1).padStart(2, '0')}`,
    slot,
    type: slot,
    instruction: `Complète un exercice de type ${slot} en gardant la notion de la leçon visible.`,
    acceptedAnswers: [],
    status: 'placeholder',
  };
}

function createExercise(exercise, index) {
  return {
    slotId: exercise.slotId ?? `ex-${String(index + 1).padStart(2, '0')}`,
    slot: exercise.slot ?? EXERCISE_SEQUENCE[index] ?? `exercice-${index + 1}`,
    type: exercise.type ?? exercise.slot ?? EXERCISE_SEQUENCE[index] ?? 'exercice',
    instruction: exercise.instruction,
    acceptedAnswers: exercise.acceptedAnswers ?? [],
    status: exercise.status ?? 'ready',
  };
}

function createExerciseSlots() {
  return EXERCISE_SEQUENCE.map(createScaffoldExercise);
}

function createScaffoldLesson(moduleId, moduleTitle, levelId, lessonNumber, focus) {
  const lessonOrdinal = String(lessonNumber).padStart(2, '0');

  return {
    id: `${moduleId}-l${lessonOrdinal}`,
    order: lessonNumber,
    title: `${moduleTitle} — leçon ${lessonOrdinal}`,
    notion: `${focus} · palier ${lessonNumber}`,
    objective: `${focus} · palier ${lessonNumber}`,
    spiralReview: [`${levelId}:core`],
    status: 'scaffold',
    exerciseSlots: createExerciseSlots(),
    officialRefs: [`${levelId}:core`],
  };
}

function createLessonFromBlueprint(moduleId, levelId, lessonNumber, lessonBlueprint, officialRefs) {
  const lessonOrdinal = String(lessonNumber).padStart(2, '0');

  return {
    id: `${moduleId}-l${lessonOrdinal}`,
    order: lessonNumber,
    title: lessonBlueprint.title,
    notion: lessonBlueprint.objective,
    objective: lessonBlueprint.objective,
    spiralReview: lessonBlueprint.spiralReview,
    status: lessonBlueprint.status ?? 'ready',
    exerciseSlots: lessonBlueprint.exercises.map(createExercise),
    officialRefs: lessonBlueprint.officialRefs ?? officialRefs,
    sourceSpec: lessonBlueprint.sourceSpec ?? null,
  };
}

export function createModuleBlueprint({
  levelId,
  moduleNumber,
  title,
  focus,
  officialRefs,
  lessonBlueprints = null,
  sourceSpec = null,
}) {
  const moduleId = `${levelId}-m${moduleNumber}`;

  return {
    id: moduleId,
    levelId,
    order: moduleNumber,
    title,
    focus,
    status: lessonBlueprints ? 'ready' : 'scaffold',
    officialRefs,
    sourceSpec,
    lessons: lessonBlueprints
      ? lessonBlueprints.map((lessonBlueprint, index) =>
          createLessonFromBlueprint(moduleId, levelId, index + 1, lessonBlueprint, officialRefs)
        )
      : Array.from({ length: 15 }, (_, index) =>
          createScaffoldLesson(moduleId, title, levelId, index + 1, focus)
        ),
  };
}
