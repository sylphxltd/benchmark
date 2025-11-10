/**
 * Selector Pattern - Feature Test
 *
 * Tests libraries that use manual selector functions for derived state.
 * This pattern requires explicit selector functions rather than automatic computed values.
 *
 * Participating libraries:
 * - Redux Toolkit (createSelector with memoization)
 * - Zustand (plain selector functions)
 * - Valtio (getter functions on proxy)
 */

import { bench, describe } from 'vitest';
import {
  reduxStore,
  reduxSlice,
  reduxDoubledSelector,
  reduxLevel1Selector,
  reduxLevel2Selector,
  reduxLevel3Selector
} from '../../src/stores/redux-store.js';
import {
  zustandStore,
  zustandDoubledSelector,
  zustandLevel1Selector,
  zustandLevel2Selector,
  zustandLevel3Selector
} from '../../src/stores/zustand-store.js';
import { valtioStore } from '../../src/stores/valtio-store.js';

// ============================================================================
// BENCHMARKS
// ============================================================================

describe('Simple Selector', () => {
  bench('Selector - Redux Toolkit', () => {
    reduxStore.dispatch(reduxSlice.actions.increment());
    reduxDoubledSelector(reduxStore.getState());
  });

  bench('Selector - Zustand', () => {
    zustandStore.getState().increment();
    zustandDoubledSelector(zustandStore.getState());
  });

  bench('Selector - Valtio', () => {
    valtioStore.increment();
    valtioStore.doubled;
  });
});

describe('Chained Selectors', () => {
  bench('Chained Selectors - Redux Toolkit', () => {
    reduxStore.dispatch(reduxSlice.actions.increment());
    reduxLevel3Selector(reduxStore.getState());
  });

  bench('Chained Selectors - Zustand', () => {
    zustandStore.getState().increment();
    zustandLevel3Selector(zustandStore.getState());
  });

  bench('Chained Selectors - Valtio', () => {
    valtioStore.increment();
    valtioStore.level3Computed;
  });
});

describe('Selector Repeated Access', () => {
  bench('Repeated Selector Access - Redux Toolkit', () => {
    for (let i = 0; i < 100; i++) {
      reduxDoubledSelector(reduxStore.getState());
    }
  });

  bench('Repeated Selector Access - Zustand', () => {
    for (let i = 0; i < 100; i++) {
      zustandDoubledSelector(zustandStore.getState());
    }
  });

  bench('Repeated Selector Access - Valtio', () => {
    for (let i = 0; i < 100; i++) {
      valtioStore.doubled;
    }
  });
});

describe('Selector with Updates', () => {
  bench('Selector Updates - Redux Toolkit', () => {
    for (let i = 0; i < 100; i++) {
      reduxStore.dispatch(reduxSlice.actions.increment());
      reduxDoubledSelector(reduxStore.getState());
    }
  });

  bench('Selector Updates - Zustand', () => {
    for (let i = 0; i < 100; i++) {
      zustandStore.getState().increment();
      zustandDoubledSelector(zustandStore.getState());
    }
  });

  bench('Selector Updates - Valtio', () => {
    for (let i = 0; i < 100; i++) {
      valtioStore.increment();
      valtioStore.doubled;
    }
  });
});
