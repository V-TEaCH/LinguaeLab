import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.window = { location: { hash: '' } };

const { resolveRoute } = await import('../assets/js/router.js');
const { __resetProgressForTests, upsertLessonProgress } = await import('../assets/js/persistence/localProgress.js');
const { __resetLessonSessionsForTests } = await import('../assets/js/views/lessonView.js');

function resetRouteState() {
  __resetProgressForTests();
  __resetLessonSessionsForTests();
}

function buildStandardResults(awardedByExerciseId) {
  return Object.fromEntries(
    Object.entries(awardedByExerciseId).map(([exerciseId, awarded]) => [
      exerciseId,
      {
        isCorrect: awarded >= 1,
        awarded,
        max: 1,
        feedback: 'ok',
      },
    ])
  );
}

test('router resolves dashboard, level, module and lesson routes', () => {
  resetRouteState();

  assert.match(resolveRoute('#/'), /LinguaeLab/);
  assert.match(resolveRoute('#/'), /6e est testée \(release candidate\)/);
  assert.match(resolveRoute('#/'), /5e-m1 et 5e-m2 sont testés, 5e-m3 à m4 restent authored/);
  assert.match(resolveRoute('#/level/6e'), /Construire la phrase/);
  assert.match(resolveRoute('#/level/6e'), /Progression locale/);
  assert.match(resolveRoute('#/level/6e'), /non commencées/);
  assert.match(resolveRoute('#/level/6e'), /tested \(release candidate\)/);
  assert.match(resolveRoute('#/level/5e'), /tested \(release candidate\)/);
  assert.match(resolveRoute('#/level/5e/module/5e-m1'), /tested \(release candidate\)/);
  assert.match(resolveRoute('#/level/4e'), /authored/);
  assert.match(resolveRoute('#/level/3e'), /authored/);
  assert.match(resolveRoute('#/level/3e/module/3e-m5'), /Révisions DNB/);
  assert.match(resolveRoute('#/level/3e/module/3e-m5'), /authored/);
  assert.match(resolveRoute('#/level/6e/module/6e-m1'), /Statut local/);
  assert.match(resolveRoute('#/level/6e/module/6e-m1'), /Commencer la première leçon/);
  assert.match(
    resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'),
    /Complète|Lis 8 suites de mots/
  );
  assert.match(resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'), /Statut local/);
});

test('module route exposes resume CTA when local progression exists', () => {
  resetRouteState();
  upsertLessonProgress('6e-m1-l02', { status: 'in_progress' });

  assert.match(resolveRoute('#/level/6e/module/6e-m1'), /Reprendre la dernière leçon active/);
});

test('lesson route uses adaptive delivery: only standardPath visible by default', () => {
  resetRouteState();
  const html = resolveRoute('#/level/5e/module/5e-m1/lesson/5e-m1-l01');

  assert.match(html, /Parcours actif :<\/strong> parcours standard/);
  assert.match(html, /<strong>ex-01<\/strong>/);
  assert.equal(/<strong>ex-07<\/strong>/.test(html), false);
  assert.equal(/<strong>ex-10<\/strong>/.test(html), false);
});

test('lesson route unlocks reinforcementPath when standardPath is fragile', () => {
  resetRouteState();
  upsertLessonProgress('5e-m1-l01', {
    status: 'in_progress',
    score: 3,
    maxScore: 12,
    answeredCount: 6,
    exerciseResults: buildStandardResults({
      'ex-01': 1,
      'ex-02': 1,
      'ex-03': 1,
      'ex-04': 0,
      'ex-05': 0,
      'ex-06': 0,
    }),
  });

  const html = resolveRoute('#/level/5e/module/5e-m1/lesson/5e-m1-l01');
  assert.match(html, /fragile/);
  assert.match(html, /parcours standard \+ renforcement/);
  assert.match(html, /<strong>ex-07<\/strong>/);
  assert.equal(/<strong>ex-10<\/strong>/.test(html), false);
});

test('lesson route unlocks masteryPath when standardPath is successful', () => {
  resetRouteState();
  upsertLessonProgress('5e-m1-l01', {
    status: 'in_progress',
    score: 6,
    maxScore: 12,
    answeredCount: 6,
    exerciseResults: buildStandardResults({
      'ex-01': 1,
      'ex-02': 1,
      'ex-03': 1,
      'ex-04': 1,
      'ex-05': 1,
      'ex-06': 1,
    }),
  });

  const html = resolveRoute('#/level/5e/module/5e-m1/lesson/5e-m1-l01');
  assert.match(html, /très_bien_maîtrisé/);
  assert.match(html, /parcours standard \+ maîtrise/);
  assert.match(html, /<strong>ex-10<\/strong>/);
  assert.equal(/<strong>ex-07<\/strong>/.test(html), false);
});

test('adaptive lesson keeps deferredSpiralPath hidden while retaining standard visibility', () => {
  resetRouteState();
  const html = resolveRoute('#/level/5e/module/5e-m1/lesson/5e-m1-l06');

  assert.match(html, /Spirale différée : 1 exercice\(s\) conservé\(s\) hors affichage/);
  assert.match(html, /<strong>5e-m1-l6-ex01<\/strong>/);
  assert.equal(/<strong>5e-m1-l6-ex12<\/strong>/.test(html), false);
});

test('3e authored adaptive lesson starts on 6 standard exercises only', () => {
  resetRouteState();
  const html = resolveRoute('#/level/3e/module/3e-m4/lesson/3e-m4-l09');

  assert.match(html, /Parcours actif :<\/strong> parcours standard/);
  assert.match(html, /<strong>3e-m4-l9-ex01<\/strong>/);
  assert.equal(/<strong>3e-m4-l9-ex07<\/strong>/.test(html), false);
});

test('router falls back to dashboard on invalid paths', () => {
  assert.match(resolveRoute('#/unknown/path'), /LinguaeLab/);
});
