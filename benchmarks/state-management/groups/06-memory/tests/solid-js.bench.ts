/**
 * 06-memory - Solid Signals
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { solidActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = solidActionsV2;

describe('06-memory - Solid Signals', () => {
  bench(TEST_NAMES.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
