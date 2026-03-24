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
  session.exerciseScores.set(exerciseId, result);
}

export function getLessonScore(session) {
  const score = Array.from(session.exerciseScores.values()).reduce(
    (sum, result) => sum + result.awarded,
    0
  );

  return {
    score,
    maxScore: session.maxScore,
  };
}
