function normalizeText(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function normalizeLooseText(value) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9'\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractKeywords(value) {
  return normalizeLooseText(value)
    .split(' ')
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
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
  const normalizedLoose = normalizeLooseText(value);
  const expectedLoose = exercise.acceptedAnswers.map(normalizeLooseText).filter(Boolean);

  if (exercise.fallbackFromUnsupported && exercise.maxScore === 0) {
    const completed = normalized.length > 0;
    return {
      isCorrect: completed,
      awarded: 0,
      max: exercise.maxScore,
      feedback: completed
        ? 'Réponse enregistrée (activité non notée).'
        : 'Saisis une réponse pour enregistrer l’activité.',
    };
  }

  if (expected.length === 0) {
    const ok = normalized.length > 0;
    return {
      isCorrect: ok,
      awarded: ok ? 1 : 0,
      max: exercise.maxScore,
      feedback: ok ? 'Réponse enregistrée.' : 'Saisis une réponse.',
    };
  }

  const hasLooseMatch =
    expectedLoose.includes(normalizedLoose) ||
    expectedLoose.some((candidate) => normalizedLoose.includes(candidate)) ||
    expectedLoose.some((candidate) => {
      const keywords = extractKeywords(candidate);
      return keywords.length > 0 && keywords.every((keyword) => normalizedLoose.includes(keyword));
    });
  const ok = expected.includes(normalized) || hasLooseMatch;
  return {
    isCorrect: ok,
    awarded: ok ? 1 : 0,
    max: exercise.maxScore,
    feedback: ok ? 'Correct.' : 'Réponse non validée, reformule avec les mots-clés attendus.',
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
