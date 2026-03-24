import test from 'node:test';
import assert from 'node:assert/strict';

import {
  __resetProgressForTests,
  formatProgressStatus,
  getLessonProgress,
  getModuleProgressSummary,
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

test('module progress summary aggregates not_started / in_progress / completed', () => {
  __resetProgressForTests();
  upsertLessonProgress('6e-m1-l01', { status: 'completed' });
  upsertLessonProgress('6e-m1-l02', { status: 'in_progress' });

  const summary = getModuleProgressSummary({
    lessons: [{ id: '6e-m1-l01' }, { id: '6e-m1-l02' }, { id: '6e-m1-l03' }],
  });

  assert.deepEqual(summary, { notStarted: 1, inProgress: 1, completed: 1 });
  assert.equal(formatProgressStatus('not_started'), 'non commencée');
  assert.equal(formatProgressStatus('in_progress'), 'en cours');
  assert.equal(formatProgressStatus('completed'), 'terminée');
});
