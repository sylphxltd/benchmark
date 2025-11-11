/**
 * 03-creation - Jotai
 * Optimized per-library test file
 */

import { bench, describe } from 'vitest';
import { jotaiActionsV2, TEST_NAMES, ITERATIONS } from '../../shared/test-config';

// Store initialized outside bench for accurate performance measurement
const store = jotaiActionsV2;

describe('03-creation - Jotai', () => {
  bench(TEST_NAMES.STORE_CREATION, () => {
    // Store creation is handled by setup
  });
});
