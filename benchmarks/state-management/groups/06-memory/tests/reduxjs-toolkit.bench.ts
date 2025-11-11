/**
 * 06-memory - Redux Toolkit
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { reduxActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = reduxActionsV2;

describe('06-memory - Redux Toolkit', () => {
  bench(TEST_NAMES.LARGE_STATE_READ, () => {
    return store.getCount();
  });

  bench(TEST_NAMES.LARGE_STATE_UPDATE, () => {
    store.increment();
  });
});
