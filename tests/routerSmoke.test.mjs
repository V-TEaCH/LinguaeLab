import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.window = { location: { hash: '' } };

const { resolveRoute } = await import('../assets/js/router.js');

test('router resolves dashboard, level, module and lesson routes', () => {
  assert.match(resolveRoute('#/'), /LinguaeLab/);
  assert.match(resolveRoute('#/'), /6e est jouable et testée/);
  assert.match(resolveRoute('#/'), /Progression locale/);
  assert.match(resolveRoute('#/level/6e'), /Construire la phrase/);
  assert.match(resolveRoute('#/level/6e'), /Progression locale/);
  assert.match(resolveRoute('#/level/6e'), /tested \(release candidate\)/);
  assert.match(resolveRoute('#/level/5e'), /authored/);
  assert.match(resolveRoute('#/level/3e/module/3e-m5'), /Révisions DNB/);
  assert.match(resolveRoute('#/level/6e/module/6e-m1'), /Statut local/);
  assert.match(
    resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'),
    /Complète|Lis 8 suites de mots/
  );
  assert.match(resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'), /Statut local/);
});

test('router falls back to dashboard on invalid paths', () => {
  assert.match(resolveRoute('#/unknown/path'), /LinguaeLab/);
});
