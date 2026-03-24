import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.window = { location: { hash: '' } };

const { resolveRoute } = await import('../assets/js/router.js');
const { __resetProgressForTests, upsertLessonProgress } = await import('../assets/js/persistence/localProgress.js');

test('router resolves dashboard, level, module and lesson routes', () => {
  __resetProgressForTests();

  assert.match(resolveRoute('#/'), /LinguaeLab/);
  assert.match(resolveRoute('#/'), /6e est testée \(release candidate\)/);
  assert.match(resolveRoute('#/'), /5e, 4e et 3e sont authored/);
  assert.match(resolveRoute('#/level/6e'), /Construire la phrase/);
  assert.match(resolveRoute('#/level/6e'), /Progression locale/);
  assert.match(resolveRoute('#/level/6e'), /non commencées/);
  assert.match(resolveRoute('#/level/6e'), /tested \(release candidate\)/);
  assert.match(resolveRoute('#/level/5e'), /authored/);
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
  __resetProgressForTests();
  upsertLessonProgress('6e-m1-l02', { status: 'in_progress' });

  assert.match(resolveRoute('#/level/6e/module/6e-m1'), /Reprendre la dernière leçon active/);
});

test('router falls back to dashboard on invalid paths', () => {
  assert.match(resolveRoute('#/unknown/path'), /LinguaeLab/);
});
