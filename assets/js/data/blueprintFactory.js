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

function createExerciseSlots() {
  return EXERCISE_SEQUENCE.map((slot, index) => ({
    slotId: `ex-${String(index + 1).padStart(2, '0')}`,
    slot,
    status: 'placeholder',
  }));
}

function createLesson(moduleId, moduleTitle, levelId, lessonNumber, focus) {
  const lessonOrdinal = String(lessonNumber).padStart(2, '0');

  return {
    id: `${moduleId}-l${lessonOrdinal}`,
    order: lessonNumber,
    title: `${moduleTitle} — leçon ${lessonOrdinal}`,
    notion: `${focus} · palier ${lessonNumber}`,
    status: 'scaffold',
    exerciseSlots: createExerciseSlots(),
    officialRefs: [`${levelId}:core`],
  };
}

export function createModuleBlueprint({
  levelId,
  moduleNumber,
  title,
  focus,
  officialRefs,
}) {
  const moduleId = `${levelId}-m${moduleNumber}`;

  return {
    id: moduleId,
    levelId,
    order: moduleNumber,
    title,
    focus,
    status: 'scaffold',
    officialRefs,
    lessons: Array.from({ length: 15 }, (_, index) =>
      createLesson(moduleId, title, levelId, index + 1, focus)
    ),
  };
}
