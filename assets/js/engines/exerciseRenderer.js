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
  const fallbackFromUnsupported = !SUPPORTED_EXERCISE_TYPES.includes(declaredType);
  const hasStructuredExpectation =
    options.some((option) => option.isCorrect) ||
    (Array.isArray(exercise.expectedOrder) && exercise.expectedOrder.length > 0) ||
    (Array.isArray(exercise.acceptedAnswers) && exercise.acceptedAnswers.length > 0);
  const maxScore = fallbackFromUnsupported && !hasStructuredExpectation ? 0 : 1;

  return {
    id: exercise.slotId ?? `ex-${String(index + 1).padStart(2, '0')}`,
    declaredType,
    runtimeType,
    prompt: exercise.instruction,
    options,
    acceptedAnswers: exercise.acceptedAnswers ?? [],
    expectedOrder: Array.isArray(exercise.expectedOrder) ? exercise.expectedOrder : [],
    fallbackFromUnsupported,
    maxScore,
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
  const hint = exercise.fallbackFromUnsupported && exercise.maxScore === 0
    ? 'Réponse libre (activité enregistrée, non notée).'
    : exercise.fallbackFromUnsupported
      ? 'Réponse libre (évaluation textuelle simplifiée).'
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
    ? `<small>Type "${exercise.declaredType}" rendu temporairement en textInput${exercise.maxScore === 0 ? ' (non noté)' : ''}.</small>`
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
