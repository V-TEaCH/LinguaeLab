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

test('renderer outputs multipleChoice and ordering inputs', () => {
  const mcExercise = buildRuntimeExercise(
    {
      slotId: 'ex-mc',
      type: 'multipleChoice',
      instruction: 'Choisis les bonnes réponses.',
      options: [
        { id: 'a', label: 'A', isCorrect: true },
        { id: 'b', label: 'B', isCorrect: false },
      ],
    },
    0
  );
  const orderingExercise = buildRuntimeExercise(
    {
      slotId: 'ex-order',
      type: 'ordering',
      instruction: 'Range les éléments.',
      expectedOrder: ['a', 'b', 'c'],
    },
    1
  );

  assert.match(renderLessonExercise(mcExercise, 0), /type="checkbox"/);
  assert.match(renderLessonExercise(orderingExercise, 1), /placeholder="élément 1, élément 2, ..."/);
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

test('singleChoice validates correct and rejects incorrect answers', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-sc',
      type: 'singleChoice',
      instruction: 'Choisis.',
      options: [
        { id: 'a', label: 'A', isCorrect: true },
        { id: 'b', label: 'B', isCorrect: false },
      ],
    },
    0
  );

  const okResult = checkAnswer(runtimeExercise, { selected: 'a' });
  const koResult = checkAnswer(runtimeExercise, { selected: 'b' });
  const emptyResult = checkAnswer(runtimeExercise, { selected: '' });

  assert.equal(okResult.isCorrect, true);
  assert.equal(okResult.awarded, 1);
  assert.equal(koResult.isCorrect, false);
  assert.equal(koResult.awarded, 0);
  assert.equal(emptyResult.isCorrect, false);
});

test('multipleChoice validates exact set only (order-insensitive)', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-mc',
      type: 'multipleChoice',
      instruction: 'Choisis les réponses justes.',
      options: [
        { id: 'a', label: 'A', isCorrect: true },
        { id: 'b', label: 'B', isCorrect: true },
        { id: 'c', label: 'C', isCorrect: false },
      ],
    },
    0
  );

  const okResult = checkAnswer(runtimeExercise, { selected: ['b', 'a'] });
  const missingResult = checkAnswer(runtimeExercise, { selected: ['a'] });
  const extraResult = checkAnswer(runtimeExercise, { selected: ['a', 'b', 'c'] });
  const duplicateResult = checkAnswer(runtimeExercise, { selected: ['a', 'a', 'b'] });

  assert.equal(okResult.isCorrect, true);
  assert.equal(missingResult.isCorrect, false);
  assert.equal(extraResult.isCorrect, false);
  assert.equal(duplicateResult.isCorrect, true);
});

test('textInput validates exact answers and variants but rejects unrelated responses', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-tx',
      type: 'textInput',
      instruction: 'Donne la notion.',
      acceptedAnswers: ['a/à ; et/est'],
    },
    0
  );

  const variantResult = checkAnswer(runtimeExercise, { text: 'A/À et ET/EST' });
  const unrelatedResult = checkAnswer(runtimeExercise, { text: 'réponse hors sujet' });

  assert.equal(variantResult.isCorrect, true);
  assert.equal(unrelatedResult.isCorrect, false);
});

test('ordering validates correct sequence and rejects wrong order', () => {
  const runtimeExercise = buildRuntimeExercise(
    {
      slotId: 'ex-order',
      type: 'ordering',
      instruction: 'Ordonne.',
      expectedOrder: ['sujet', 'verbe', 'complément'],
    },
    0
  );

  const okResult = checkAnswer(runtimeExercise, { text: 'sujet, verbe, complément' });
  const koResult = checkAnswer(runtimeExercise, { text: 'verbe, sujet, complément' });

  assert.equal(okResult.isCorrect, true);
  assert.equal(koResult.isCorrect, false);
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

test('scoring aggregates mixed runtime types deterministically', () => {
  const runtimeExercises = [
    buildRuntimeExercise(
      {
        slotId: 'ex-01',
        type: 'singleChoice',
        instruction: 'Choisis.',
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
        type: 'multipleChoice',
        instruction: 'Choisis deux réponses.',
        options: [
          { id: 'a', label: 'A', isCorrect: true },
          { id: 'b', label: 'B', isCorrect: true },
          { id: 'c', label: 'C', isCorrect: false },
        ],
      },
      1
    ),
    buildRuntimeExercise(
      {
        slotId: 'ex-03',
        type: 'ordering',
        instruction: 'Range.',
        expectedOrder: ['a', 'b'],
      },
      2
    ),
  ];

  const scoringSession = createLessonScoring(runtimeExercises);
  applyExerciseResult(scoringSession, 'ex-01', checkAnswer(runtimeExercises[0], { selected: 'a' }));
  applyExerciseResult(scoringSession, 'ex-02', checkAnswer(runtimeExercises[1], { selected: ['a'] }));
  applyExerciseResult(scoringSession, 'ex-03', checkAnswer(runtimeExercises[2], { text: 'a, b' }));

  assert.deepEqual(getLessonScore(scoringSession), { score: 2, maxScore: 3 });
});

test('router non-regression on lesson route', () => {
  assert.match(resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'), /Score/);
});
