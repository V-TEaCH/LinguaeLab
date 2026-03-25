import test from 'node:test';
import assert from 'node:assert/strict';

import {
  __resetProgressForTests,
  enqueueDeferredSpiralExercise,
  formatLocalScore,
  formatProgressStatus,
  getDeferredSpiralExercisesForLesson,
  getLessonProgress,
  getModuleProgressSummary,
  getMostRecentLessonProgress,
  markDeferredSpiralExerciseDone,
  upsertLessonProgress,
} from '../assets/js/persistence/localProgress.js';

test('local progress store persists lesson status and score payload', () => {
  __resetProgressForTests();
  assert.equal(getLessonProgress('6e-m1-l01'), null);

  const saved = upsertLessonProgress('6e-m1-l01', {
    status: 'in_progress',
    score: 3,
    maxScore: 8,
    answeredCount: 4,
    exerciseResults: {
      'ex-01': { awarded: 1, max: 1, isCorrect: true, feedback: 'Correct.' },
    },
  });

  assert.equal(saved?.status, 'in_progress');
  const restored = getLessonProgress('6e-m1-l01');
  assert.equal(restored?.status, 'in_progress');
  assert.equal(restored?.score, 3);
  assert.equal(restored?.maxScore, 8);
  assert.equal(restored?.answeredCount, 4);
  assert.equal(restored?.exerciseResults['ex-01']?.awarded, 1);
});

test('local progress stores adaptive mastery status and unlocked paths', () => {
  __resetProgressForTests();

  upsertLessonProgress('5e-m1-l06', {
    status: 'in_progress',
    masteryStatus: 'fragile',
    unlockedPaths: ['standardPath', 'reinforcementPath'],
  });

  const restored = getLessonProgress('5e-m1-l06');
  assert.equal(restored?.masteryStatus, 'fragile');
  assert.deepEqual(restored?.unlockedPaths, ['standardPath', 'reinforcementPath']);
});

test('deferred spiral queue stores pending exercises and marks completion', () => {
  __resetProgressForTests();

  enqueueDeferredSpiralExercise('5e-m4-l03', {
    deferredKey: '5e-m1-l06::5e-m1-l6-ex12',
    sourceLessonId: '5e-m1-l06',
    sourceLessonTitle: 'Coordination ou subordination ?',
    exercise: {
      id: '5e-m1-l6-ex12',
      type: 'textInput',
      instruction: 'Repère la relation logique.',
      acceptedAnswers: ['parce que'],
    },
  });

  const pendingBefore = getDeferredSpiralExercisesForLesson('5e-m4-l03');
  assert.equal(pendingBefore.length, 1);
  assert.equal(pendingBefore[0].sourceLessonId, '5e-m1-l06');

  const marked = markDeferredSpiralExerciseDone('5e-m4-l03', '5e-m1-l06::5e-m1-l6-ex12');
  assert.equal(marked, true);
  const pendingAfter = getDeferredSpiralExercisesForLesson('5e-m4-l03');
  assert.equal(pendingAfter.length, 0);
});

test('module progress summary aggregates statuses and completion rate', () => {
  __resetProgressForTests();
  upsertLessonProgress('6e-m1-l01', { status: 'completed' });
  upsertLessonProgress('6e-m1-l02', { status: 'in_progress' });

  const summary = getModuleProgressSummary({
    lessons: [{ id: '6e-m1-l01' }, { id: '6e-m1-l02' }, { id: '6e-m1-l03' }],
  });

  assert.deepEqual(summary, {
    notStarted: 1,
    inProgress: 1,
    completed: 1,
    completionRate: 33,
  });
  assert.equal(formatProgressStatus('not_started'), 'non commencée');
  assert.equal(formatProgressStatus('in_progress'), 'en cours');
  assert.equal(formatProgressStatus('completed'), 'terminée');
});

test('most recent lesson progress helps resume session in module view', async () => {
  __resetProgressForTests();

  upsertLessonProgress('6e-m1-l01', { status: 'in_progress' });
  await new Promise((resolve) => setTimeout(resolve, 2));
  upsertLessonProgress('6e-m1-l02', { status: 'completed' });

  const mostRecent = getMostRecentLessonProgress([
    { id: '6e-m1-l01' },
    { id: '6e-m1-l02' },
    { id: '6e-m1-l03' },
  ]);

  assert.equal(mostRecent?.lessonId, '6e-m1-l02');
  assert.equal(mostRecent?.progress.status, 'completed');
});

test('formatLocalScore keeps score display readable', () => {
  assert.equal(formatLocalScore(2.5, 4), 'score 2.5/4');
  assert.equal(formatLocalScore(0, 0), 'score non noté');
});
