/**
 * Complexity Tests
 * Tests performance with complex nested state structures
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('Deep Nested Updates', () => {
  bench('10-Level Nested Update - Redux Toolkit', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Zustand', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Jotai', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - MobX', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Valtio', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Preact Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Solid Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    actions.updateNestedState();
  });

  bench('10-Level Nested Update - Zen', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    actions.updateNestedState();
  });
});

describe('Deep Read Access', () => {
  bench('Deep Read Access - Redux Toolkit', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Zustand', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Jotai', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - MobX', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Valtio', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Preact Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Solid Signals', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Solid Signals')!.actions;
    actions.readNestedState();
  });

  bench('Deep Read Access - Zen', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    actions.readNestedState();
  });
});