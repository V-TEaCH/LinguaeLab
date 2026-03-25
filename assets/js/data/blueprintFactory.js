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

export const CONTENT_STATUSES = ['scaffold', 'authored', 'tested', 'released'];

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
  const {
    slotId,
    slot,
    type,
    instruction,
    acceptedAnswers,
    status,
    ...extraExerciseFields
  } = exercise;

  return {
    slotId: slotId ?? `ex-${String(index + 1).padStart(2, '0')}`,
    slot: slot ?? EXERCISE_SEQUENCE[index] ?? `exercice-${index + 1}`,
    type:
      type ??
      slot ??
      EXERCISE_SEQUENCE[index] ??
      'exercice',
    instruction,
    acceptedAnswers: acceptedAnswers ?? [],
    status: status ?? 'ready',
    ...extraExerciseFields,
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

function createLessonFromBlueprint(
  moduleId,
  levelId,
  lessonNumber,
  lessonBlueprint,
  officialRefs
) {
  const lessonOrdinal = String(lessonNumber).padStart(2, '0');
  const {
    title,
    objective,
    spiralReview,
    status,
    exercises,
    sourceSpec,
    officialRefs: lessonOfficialRefs,
    ...extraLessonFields
  } = lessonBlueprint;

  return {
    id: `${moduleId}-l${lessonOrdinal}`,
    order: lessonNumber,
    title,
    notion: objective,
    objective,
    spiralReview,
    status: status ?? 'ready',
    exerciseSlots: exercises.map(createExercise),
    officialRefs: lessonOfficialRefs ?? officialRefs,
    sourceSpec: sourceSpec ?? null,
    ...extraLessonFields,
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
  contentStatus = null,
}) {
  const moduleId = `${levelId}-m${moduleNumber}`;
  const resolvedContentStatus = contentStatus ?? (lessonBlueprints ? 'authored' : 'scaffold');

  if (!CONTENT_STATUSES.includes(resolvedContentStatus)) {
    throw new Error(`Invalid contentStatus "${resolvedContentStatus}" for module ${moduleId}`);
  }

  return {
    id: moduleId,
    levelId,
    order: moduleNumber,
    title,
    focus,
    status: lessonBlueprints ? 'ready' : 'scaffold',
    contentStatus: resolvedContentStatus,
    officialRefs,
    sourceSpec,
    lessons: lessonBlueprints
      ? lessonBlueprints.map((lessonBlueprint, index) =>
          createLessonFromBlueprint(
            moduleId,
            levelId,
            index + 1,
            lessonBlueprint,
            officialRefs
          )
        )
      : Array.from({ length: 15 }, (_, index) =>
          createScaffoldLesson(moduleId, title, levelId, index + 1, focus)
        ),
  };
}
