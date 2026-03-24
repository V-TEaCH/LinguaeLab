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

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort();
}

function isCompleted(value) {
  return normalizeText(value).length > 0;
}

function clampAwarded(rawAwarded, maxScore) {
  const bounded = Math.min(Math.max(rawAwarded, 0), maxScore);
  return Math.round(bounded * 100) / 100;
}

function makeResult(isCorrect, awarded, max, feedback) {
  return {
    isCorrect,
    awarded: clampAwarded(awarded, max),
    max,
    feedback,
  };
}

function evaluateSingleChoice(exercise, userAnswer) {
  const selected = userAnswer.selected ?? '';
  const correctOptions = exercise.options.filter((option) => option.isCorrect).map((option) => option.id);

  if (correctOptions.length === 0) {
    const ok = isCompleted(selected);
    return makeResult(ok, ok ? 1 : 0, exercise.maxScore, ok ? 'Réponse enregistrée.' : 'Choisis une réponse.');
  }

  const ok = correctOptions.includes(selected);
  return makeResult(ok, ok ? 1 : 0, exercise.maxScore, ok ? 'Correct.' : 'Incorrect, réessaie.');
}

function evaluateMultipleChoice(exercise, userAnswer) {
  const selected = Array.isArray(userAnswer.selected) ? uniqueSorted(userAnswer.selected) : [];
  const correct = uniqueSorted(exercise.options
    .filter((option) => option.isCorrect)
    .map((option) => option.id));

  if (correct.length === 0) {
    const ok = selected.length > 0;
    return makeResult(
      ok,
      ok ? 1 : 0,
      exercise.maxScore,
      ok ? 'Réponse enregistrée.' : 'Sélectionne au moins une réponse.'
    );
  }

  if (selected.length === 0) {
    return makeResult(false, 0, exercise.maxScore, 'Sélectionne au moins une réponse.');
  }

  const selectedSet = new Set(selected);
  const correctSet = new Set(correct);
  const truePositives = selected.filter((id) => correctSet.has(id)).length;
  const falsePositives = selected.filter((id) => !correctSet.has(id)).length;
  const missed = correct.filter((id) => !selectedSet.has(id)).length;

  if (falsePositives > 0) {
    return makeResult(false, 0, exercise.maxScore, 'Tu as coché une option incorrecte. Retire-la et réessaie.');
  }

  if (truePositives === 0) {
    return makeResult(false, 0, exercise.maxScore, 'Aucune bonne option repérée pour l’instant.');
  }

  if (missed === 0) {
    return makeResult(true, 1, exercise.maxScore, 'Correct.');
  }

  const awarded = truePositives / correct.length;
  return makeResult(
    false,
    awarded,
    exercise.maxScore,
    'Réponse partielle correcte : il manque au moins une bonne option.'
  );
}

function evaluateTextInput(exercise, userAnswer) {
  const value = userAnswer.text ?? '';
  const normalized = normalizeText(value);
  const expected = exercise.acceptedAnswers.map(normalizeText).filter(Boolean);
  const normalizedLoose = normalizeLooseText(value);
  const expectedLoose = exercise.acceptedAnswers.map(normalizeLooseText).filter(Boolean);

  if (!normalized) {
    if (exercise.fallbackFromUnsupported && exercise.maxScore === 0) {
      return makeResult(false, 0, exercise.maxScore, 'Saisis une réponse pour enregistrer l’activité.');
    }

    return makeResult(false, 0, exercise.maxScore, 'Saisis une réponse.');
  }

  if (exercise.fallbackFromUnsupported && exercise.maxScore === 0) {
    return makeResult(true, 0, exercise.maxScore, 'Réponse enregistrée (activité non notée).');
  }

  if (expected.length === 0) {
    return makeResult(true, 1, exercise.maxScore, 'Réponse enregistrée.');
  }

  const responseKeywords = extractKeywords(normalizedLoose);
  const hasLooseMatch =
    expectedLoose.includes(normalizedLoose) ||
    expectedLoose.some((candidate) => {
      const keywords = extractKeywords(candidate);
      if (keywords.length === 0) {
        return false;
      }

      const matched = keywords.filter((keyword) => responseKeywords.includes(keyword)).length;
      const threshold = keywords.length <= 2 ? keywords.length : Math.ceil(keywords.length * 0.75);
      return matched >= threshold;
    });
  const ok = expected.includes(normalized) || hasLooseMatch;
  return makeResult(
    ok,
    ok ? 1 : 0,
    exercise.maxScore,
    ok ? 'Correct.' : 'Réponse non validée, reformule avec les mots-clés attendus.'
  );
}

function parseOrderingInput(value) {
  return String(value ?? '')
    .split(/\s*(?:,|;|>|\n|\r\n)+\s*/)
    .map(normalizeLooseText)
    .filter(Boolean);
}

function evaluateOrdering(exercise, userAnswer) {
  const parts = parseOrderingInput(userAnswer.text ?? '');
  const expected = exercise.expectedOrder.map(normalizeLooseText).filter(Boolean);

  if (expected.length === 0) {
    const ok = parts.length > 0;
    return makeResult(ok, ok ? 1 : 0, exercise.maxScore, ok ? 'Ordre enregistré.' : 'Saisis un ordre.');
  }

  if (parts.length === 0) {
    return makeResult(false, 0, exercise.maxScore, 'Saisis un ordre.');
  }

  const sameLength = parts.length === expected.length;
  const correctPositions = expected.reduce(
    (count, expectedPart, index) => (parts[index] === expectedPart ? count + 1 : count),
    0
  );
  const fullyCorrect = sameLength && correctPositions === expected.length;

  if (fullyCorrect) {
    return makeResult(true, 1, exercise.maxScore, 'Ordre correct.');
  }

  const partialAward = correctPositions / expected.length;
  if (partialAward > 0) {
    return makeResult(
      false,
      partialAward,
      exercise.maxScore,
      'Ordre partiellement correct : vérifie les éléments mal placés.'
    );
  }

  return makeResult(false, 0, exercise.maxScore, 'Ordre incorrect.');
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
