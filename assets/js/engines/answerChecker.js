function normalizeText(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function isCompleted(value) {
  return normalizeText(value).length > 0;
}

function evaluateSingleChoice(exercise, userAnswer) {
  const selected = userAnswer.selected ?? '';
  const correctOptions = exercise.options.filter((option) => option.isCorrect).map((option) => option.id);

  if (correctOptions.length === 0) {
    const ok = isCompleted(selected);
    return {
      isCorrect: ok,
      awarded: ok ? 1 : 0,
      max: exercise.maxScore,
      feedback: ok ? 'Réponse enregistrée.' : 'Choisis une réponse.',
    };
  }

  const ok = correctOptions.length === 1 && selected === correctOptions[0];
  return {
    isCorrect: ok,
    awarded: ok ? 1 : 0,
    max: exercise.maxScore,
    feedback: ok ? 'Correct.' : 'Incorrect, réessaie.',
  };
}

function evaluateMultipleChoice(exercise, userAnswer) {
  const selected = Array.isArray(userAnswer.selected) ? userAnswer.selected.slice().sort() : [];
  const correct = exercise.options
    .filter((option) => option.isCorrect)
    .map((option) => option.id)
    .sort();

  if (correct.length === 0) {
    const ok = selected.length > 0;
    return {
      isCorrect: ok,
      awarded: ok ? 1 : 0,
      max: exercise.maxScore,
      feedback: ok ? 'Réponse enregistrée.' : 'Sélectionne au moins une réponse.',
    };
  }

  const ok = JSON.stringify(selected) === JSON.stringify(correct);
  return {
    isCorrect: ok,
    awarded: ok ? 1 : 0,
    max: exercise.maxScore,
    feedback: ok ? 'Correct.' : 'Incorrect, vérifie la sélection.',
  };
}

function evaluateTextInput(exercise, userAnswer) {
  const value = userAnswer.text ?? '';
  const normalized = normalizeText(value);
  const expected = exercise.acceptedAnswers.map(normalizeText).filter(Boolean);

  if (expected.length === 0) {
    const ok = normalized.length > 0;
    return {
      isCorrect: ok,
      awarded: ok ? 1 : 0,
      max: exercise.maxScore,
      feedback: ok ? 'Réponse enregistrée.' : 'Saisis une réponse.',
    };
  }

  const ok = expected.includes(normalized);
  return {
    isCorrect: ok,
    awarded: ok ? 1 : 0,
    max: exercise.maxScore,
    feedback: ok ? 'Correct.' : 'Réponse non validée.',
  };
}

function evaluateOrdering(exercise, userAnswer) {
  const value = userAnswer.text ?? '';
  const parts = value
    .split(',')
    .map(normalizeText)
    .filter(Boolean);
  const expected = exercise.expectedOrder.map(normalizeText).filter(Boolean);

  if (expected.length === 0) {
    const ok = parts.length > 0;
    return {
      isCorrect: ok,
      awarded: ok ? 1 : 0,
      max: exercise.maxScore,
      feedback: ok ? 'Ordre enregistré.' : 'Saisis un ordre.',
    };
  }

  const ok = JSON.stringify(parts) === JSON.stringify(expected);
  return {
    isCorrect: ok,
    awarded: ok ? 1 : 0,
    max: exercise.maxScore,
    feedback: ok ? 'Ordre correct.' : 'Ordre incorrect.',
  };
}

export function checkAnswer(exercise, userAnswer) {
  if (exercise.runtimeType === 'singleChoice') {
    return evaluateSingleChoice(exercise, userAnswer);
  }

  if (exercise.runtimeType === 'multipleChoice') {
    return evaluateMultipleChoice(exercise, userAnswer);
  }

  if (exercise.runtimeType === 'ordering') {
    return evaluateOrdering(exercise, userAnswer);
  }

  return evaluateTextInput(exercise, userAnswer);
}
