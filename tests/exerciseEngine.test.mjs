import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildRuntimeExercise,
  renderLessonExercise,
} from '../assets/js/engines/exerciseRenderer.js';
import { checkAnswer } from '../assets/js/engines/answerChecker.js';
import {
  applyExerciseResult,
  createLessonScoring,
  getLessonScore,
} from '../assets/js/engines/scoring.js';

globalThis.window = { location: { hash: '' } };

const { resolveRoute } = await import('../assets/js/router.js');

test('renderer outputs a singleChoice form', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-01',
      type: 'singleChoice',
      instruction: 'Choisis la bonne réponse.',
      options: [
        { id: 'a', label: 'A', isCorrect: true },
        { id: 'b', label: 'B', isCorrect: false },
      ],
    },
    0
  );

  const html = renderLessonExercise(runtimeExercise, 0);
  assert.match(html, /type="radio"/);
  assert.match(html, /Choisis la bonne réponse/);
});

test('renderer outputs a textInput form', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-02',
      type: 'textInput',
      instruction: 'Écris ta réponse.',
      acceptedAnswers: ['bonjour'],
    },
    1
  );

  const html = renderLessonExercise(runtimeExercise, 1);
  assert.match(html, /type="text"/);
  assert.match(html, /Écris ta réponse/);
});

test('scoring aggregates basic results', () => {
  const runtimeExercises = [
    buildRuntimeExercise(
      {
        slotId: 'ex-01',
        type: 'singleChoice',
        instruction: 'Choisis la bonne réponse.',
        options: [
          { id: 'a', label: 'A', isCorrect: true },
          { id: 'b', label: 'B', isCorrect: false },
        ],
      },
      0
    ),
    buildRuntimeExercise(
      {
        slotId: 'ex-02',
        type: 'textInput',
        instruction: 'Écris ta réponse.',
        acceptedAnswers: ['bonjour'],
      },
      1
    ),
  ];

  const scoringSession = createLessonScoring(runtimeExercises);

  const result1 = checkAnswer(runtimeExercises[0], { selected: 'a' });
  const result2 = checkAnswer(runtimeExercises[1], { text: 'bonjour' });

  applyExerciseResult(scoringSession, runtimeExercises[0].id, result1);
  applyExerciseResult(scoringSession, runtimeExercises[1].id, result2);

  assert.deepEqual(getLessonScore(scoringSession), { score: 2, maxScore: 2 });
});

test('unsupported free-text fallback is non-noted to avoid artificial scoring', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-03',
      type: 'rappel-flash',
      instruction: 'Réponds librement.',
    },
    2
  );

  assert.equal(runtimeExercise.runtimeType, 'textInput');
  assert.equal(runtimeExercise.maxScore, 0);

  const result = checkAnswer(runtimeExercise, { text: 'réponse élève' });
  assert.equal(result.awarded, 0);
  assert.match(result.feedback, /non notée/i);

  const scoringSession = createLessonScoring([runtimeExercise]);
  applyExerciseResult(scoringSession, runtimeExercise.id, result);
  assert.deepEqual(getLessonScore(scoringSession), { score: 0, maxScore: 0 });
});

test('text input acceptedAnswers remains tolerant to punctuation and casing variants', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-04',
      type: 'textInput',
      instruction: 'Écris la notion.',
      acceptedAnswers: ['a/à ; et/est'],
    },
    3
  );

  const result = checkAnswer(runtimeExercise, { text: 'A/À et ET/EST' });
  assert.equal(result.isCorrect, true);
  assert.equal(result.awarded, 1);
});

test('router non-regression on lesson route', () => {
  assert.match(resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'), /Score/);
});
