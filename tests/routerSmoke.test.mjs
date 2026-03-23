import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.window = { location: { hash: '' } };

const { resolveRoute } = await import('../assets/js/router.js');

test('router resolves dashboard, level, module and lesson routes', () => {
  assert.match(resolveRoute('#/'), /ATRIUM-Français/);
  assert.match(resolveRoute('#/level/6e'), /Construire la phrase/);
  assert.match(resolveRoute('#/level/3e/module/3e-m5'), /Révisions DNB/);
  assert.match(resolveRoute('#/level/6e/module/6e-m1/lesson/6e-m1-l01'), /Complète|Lis 8 suites de mots/);
});

test('router falls back to dashboard on invalid paths', () => {
  assert.match(resolveRoute('#/unknown/path'), /ATRIUM-Français/);
});
