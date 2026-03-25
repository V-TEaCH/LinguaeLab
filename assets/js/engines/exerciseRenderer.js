export const SUPPORTED_EXERCISE_TYPES = [
  'singleChoice',
  'multipleChoice',
  'textInput',
  'ordering',
];

const DECLARED_TYPE_TO_RUNTIME_TYPE = {
  // 6e historical authored types specialized as text input workflows
  'rappel-flash': 'textInput',
  'rappel-global': 'textInput',
  'repérage': 'textInput',
  'repérage-en-contexte': 'textInput',
  'segmentation': 'textInput',
  'tri': 'textInput',
  'ponctuation-finale': 'textInput',
  'analyse': 'textInput',
  'manipulation': 'textInput',
  'discrimination': 'textInput',
  'correction': 'textInput',
  'justification': 'textInput',
  'vigilance': 'textInput',
  'réécriture': 'textInput',
  'réécriture-guidée': 'textInput',
  'transfert': 'textInput',
  'spirale': 'textInput',
  'spirale-finale': 'textInput',
};

const DEFAULT_UNLOCK_RULES = {
  reinforcementMaxStandardRate: 0.74,
  masteryMinStandardRate: 0.75,
};
const ADAPTIVE_PHASES = new Set([
  'standardPath',
  'reinforcementPath',
  'masteryPath',
  'deferredSpiralPath',
]);

function normalizeOptions(options = []) {
  return Array.isArray(options)
    ? options.map((option, index) => ({
        id: option.id ?? `opt-${index + 1}`,
        label: option.label ?? String(option),
        isCorrect: Boolean(option.isCorrect),
      }))
    : [];
}

function resolveRuntimeType(declaredType) {
  if (SUPPORTED_EXERCISE_TYPES.includes(declaredType)) {
    return declaredType;
  }

  return DECLARED_TYPE_TO_RUNTIME_TYPE[declaredType] ?? null;
}

function resolvePedagogicalMeta(exercise, index) {
  const explicitPhase = ADAPTIVE_PHASES.has(exercise.phase) ? exercise.phase : null;
  const explicitRole = exercise.pedagogicalRole ?? null;
  const explicitVisible = typeof exercise.visibleByDefault === 'boolean'
    ? exercise.visibleByDefault
    : null;

  if (explicitPhase && explicitRole && explicitVisible !== null) {
    return {
      phase: explicitPhase,
      pedagogicalRole: explicitRole,
      visibleByDefault: explicitVisible,
    };
  }

  if (index <= 5) {
    return {
      phase: 'standardPath',
      pedagogicalRole: 'core',
      visibleByDefault: true,
    };
  }

  if (index <= 8) {
    return {
      phase: 'reinforcementPath',
      pedagogicalRole: 'reinforcement',
      visibleByDefault: false,
    };
  }

  if (index <= 10) {
    return {
      phase: 'masteryPath',
      pedagogicalRole: 'mastery',
      visibleByDefault: false,
    };
  }

  return {
    phase: 'deferredSpiralPath',
    pedagogicalRole: 'spiral',
    visibleByDefault: false,
  };
}

export function buildRuntimeExercise(exercise, index) {
  const declaredType = exercise.type ?? 'textInput';
  const resolvedRuntimeType = resolveRuntimeType(declaredType);
  const runtimeType = resolvedRuntimeType ?? 'textInput';
  const options = normalizeOptions(exercise.options);
  const fallbackFromUnsupported = resolvedRuntimeType === null;
  const hasStructuredExpectation =
    options.some((option) => option.isCorrect) ||
    (Array.isArray(exercise.expectedOrder) && exercise.expectedOrder.length > 0) ||
    (Array.isArray(exercise.acceptedAnswers) && exercise.acceptedAnswers.length > 0);
  const maxScore = fallbackFromUnsupported && !hasStructuredExpectation ? 0 : 1;
  const pedagogicalMeta = resolvePedagogicalMeta(exercise, index);

  return {
    id: exercise.slotId ?? `ex-${String(index + 1).padStart(2, '0')}`,
    declaredType,
    runtimeType,
    prompt: exercise.prompt ?? exercise.instruction,
    options,
    acceptedAnswers: exercise.acceptedAnswers ?? [],
    expectedOrder: Array.isArray(exercise.expectedOrder) ? exercise.expectedOrder : [],
    fallbackFromUnsupported,
    maxScore,
    deliveryModel: exercise.deliveryModel ?? 'adaptive_12_to_6',
    phase: pedagogicalMeta.phase,
    pedagogicalRole: pedagogicalMeta.pedagogicalRole,
    visibleByDefault: pedagogicalMeta.visibleByDefault,
    deferredTo: exercise.deferredTo ?? null,
    unlockRules: {
      ...DEFAULT_UNLOCK_RULES,
      ...(exercise.unlockRules ?? {}),
    },
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

export function createRuntimeExercises(exerciseSlots = [], lessonDeliveryModel = null) {
  return exerciseSlots.map((exercise, index) =>
    buildRuntimeExercise(
      {
        ...exercise,
        deliveryModel: exercise.deliveryModel ?? lessonDeliveryModel ?? 'adaptive_12_to_6',
      },
      index
    )
  );
}
