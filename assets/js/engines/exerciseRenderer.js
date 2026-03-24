export const SUPPORTED_EXERCISE_TYPES = [
  'singleChoice',
  'multipleChoice',
  'textInput',
  'ordering',
];

function normalizeOptions(options = []) {
  return Array.isArray(options)
    ? options.map((option, index) => ({
        id: option.id ?? `opt-${index + 1}`,
        label: option.label ?? String(option),
        isCorrect: Boolean(option.isCorrect),
      }))
    : [];
}

export function buildRuntimeExercise(exercise, index) {
  const declaredType = exercise.type ?? 'textInput';
  const runtimeType = SUPPORTED_EXERCISE_TYPES.includes(declaredType)
    ? declaredType
    : 'textInput';
  const options = normalizeOptions(exercise.options);

  return {
    id: exercise.slotId ?? `ex-${String(index + 1).padStart(2, '0')}`,
    declaredType,
    runtimeType,
    prompt: exercise.instruction,
    options,
    acceptedAnswers: exercise.acceptedAnswers ?? [],
    expectedOrder: Array.isArray(exercise.expectedOrder) ? exercise.expectedOrder : [],
    fallbackFromUnsupported: !SUPPORTED_EXERCISE_TYPES.includes(declaredType),
    maxScore: 1,
  };
}

function renderSingleChoice(exercise) {
  return exercise.options
    .map(
      (option) => `
        <label>
          <input type="radio" name="${exercise.id}" value="${option.id}" />
          ${option.label}
        </label>`
    )
    .join('');
}

function renderMultipleChoice(exercise) {
  return exercise.options
    .map(
      (option) => `
        <label>
          <input type="checkbox" name="${exercise.id}" value="${option.id}" />
          ${option.label}
        </label>`
    )
    .join('');
}

function renderTextInput(exercise) {
  const hint = exercise.fallbackFromUnsupported
    ? 'Réponse libre (validation minimale sur complétude).'
    : 'Réponse courte.';

  return `
    <input type="text" name="${exercise.id}" autocomplete="off" />
    <small>${hint}</small>`;
}

function renderOrdering(exercise) {
  return `
    <input type="text" name="${exercise.id}" autocomplete="off" placeholder="élément 1, élément 2, ..." />
    <small>Saisis l’ordre attendu séparé par des virgules.</small>`;
}

function renderAnswerInput(exercise) {
  if (exercise.runtimeType === 'singleChoice') {
    return renderSingleChoice(exercise);
  }

  if (exercise.runtimeType === 'multipleChoice') {
    return renderMultipleChoice(exercise);
  }

  if (exercise.runtimeType === 'ordering') {
    return renderOrdering(exercise);
  }

  return renderTextInput(exercise);
}

export function renderLessonExercise(exercise, index) {
  const unsupportedNote = exercise.fallbackFromUnsupported
    ? `<small>Type "${exercise.declaredType}" rendu temporairement en textInput.</small>`
    : '';

  return `
    <li>
      <strong>${exercise.id}</strong>
      <span>${exercise.runtimeType}</span>
      <p>${exercise.prompt}</p>
      ${unsupportedNote}
      <form data-exercise-form data-exercise-id="${exercise.id}" data-runtime-type="${exercise.runtimeType}">
        <div class="exercise-inputs">${renderAnswerInput(exercise)}</div>
        <button type="submit">Valider</button>
      </form>
      <p data-feedback-for="${exercise.id}"></p>
    </li>`;
}

export function createRuntimeExercises(exerciseSlots = []) {
  return exerciseSlots.map(buildRuntimeExercise);
}
