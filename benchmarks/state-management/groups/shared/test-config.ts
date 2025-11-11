/**
 * Shared test configuration and utilities
 */

import {
  reduxActionsV2,
  zustandActionsV2,
  jotaiActionsV2,
  mobxActionsV2,
  valtioActionsV2,
  preactActionsV2,
  solidActionsV2,
  zenActionsV2
} from '../../src/stores';

export interface LibraryActions {
  name: string;
  actions: any;
}

export const LIBRARIES: LibraryActions[] = [
  { name: 'Redux Toolkit', actions: reduxActionsV2 },
  { name: 'Zustand', actions: zustandActionsV2 },
  { name: 'Jotai', actions: jotaiActionsV2 },
  { name: 'MobX', actions: mobxActionsV2 },
  { name: 'Valtio', actions: valtioActionsV2 },
  { name: 'Preact Signals', actions: preactActionsV2 },
  { name: 'Solid Signals', actions: solidActionsV2 },
  { name: 'Zen', actions: zenActionsV2 },
];

// Direct exports for per-library tests (no lookup overhead)
export {
  reduxActionsV2,
  zustandActionsV2,
  jotaiActionsV2,
  mobxActionsV2,
  valtioActionsV2,
  preactActionsV2,
  solidActionsV2,
  zenActionsV2
};

// Test name constants (single source of truth)
export const TEST_NAMES = {
  // Read operations
  SIMPLE_READ: 'Simple Read',
  HIGH_FREQ_READ: 'High Frequency Read',

  // Write operations
  SINGLE_UPDATE: 'Single Update',
  BATCH_UPDATE: 'Batch Update',

  // Creation operations
  STORE_CREATION: 'Store Creation',

  // Memory operations
  LARGE_STATE_READ: 'Large State Read',
  LARGE_STATE_UPDATE: 'Large State Update',

  // Batching
  BATCHED_UPDATES: 'Batched Updates',
  UNBATCHED_UPDATES: 'Unbatched Updates',
  LARGE_BATCH: 'Large Batch',
  BATCHED_WITH_OBSERVERS: 'Batched with Observers',
};

// Iteration counts for different test scales
export const ITERATIONS = {
  X1: 1,
  X10: 10,
  X100: 100,
  X1000: 1000,
  X10000: 10000,
};

export interface TestScale {
  name: string;
  multiplier: number;
  iterations: number;
}

export const READ_SCALES: TestScale[] = [
  { name: 'x1', multiplier: 1, iterations: 1000 },
  { name: 'x10', multiplier: 10, iterations: 100 },
  { name: 'x50', multiplier: 50, iterations: 20 },
  { name: 'x100', multiplier: 100, iterations: 10 },
];

export const WRITE_SCALES: TestScale[] = [
  { name: 'x1', multiplier: 1, iterations: 1000 },
  { name: 'x10', multiplier: 10, iterations: 100 },
  { name: 'x50', multiplier: 50, iterations: 20 },
  { name: 'x100', multiplier: 100, iterations: 10 },
];

export const COMPLEXITY_SCALES: TestScale[] = [
  { name: 'small', multiplier: 1, iterations: 1000 },
  { name: 'medium', multiplier: 10, iterations: 100 },
  { name: 'large', multiplier: 100, iterations: 10 },
];