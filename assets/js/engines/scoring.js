function roundScore(value) {
  return Math.round(Number(value) * 100) / 100;
}

function sanitizeResult(result = {}, maxScore) {
  const rawMax = Number.isFinite(result.max) ? result.max : maxScore;
  const resolvedMax = Math.max(0, rawMax);
  const rawAwarded = Number.isFinite(result.awarded) ? result.awarded : 0;
  const awarded = Math.min(Math.max(rawAwarded, 0), resolvedMax);

  return {
    ...result,
    max: resolvedMax,
    awarded: roundScore(awarded),
  };
}

export function createLessonScoring(runtimeExercises) {
  const exerciseScores = new Map();
  const maxScore = runtimeExercises.reduce((sum, exercise) => sum + exercise.maxScore, 0);

  return {
    runtimeExercises,
    exerciseScores,
    maxScore,
  };
}

export function applyExerciseResult(session, exerciseId, result) {
  const runtimeExercise = session.runtimeExercises.find((exercise) => exercise.id === exerciseId);
  const fallbackMax = runtimeExercise?.maxScore ?? 0;
  session.exerciseScores.set(exerciseId, sanitizeResult(result, fallbackMax));
}

export function getLessonScore(session) {
  const score = Array.from(session.exerciseScores.values()).reduce(
    (sum, result) => sum + result.awarded,
    0
  );

  return {
    score: roundScore(score),
    maxScore: roundScore(session.maxScore),
  };
}
