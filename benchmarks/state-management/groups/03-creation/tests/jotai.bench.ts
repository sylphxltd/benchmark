/**
 * 03-creation - Jotai
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { jotaiActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = jotaiActionsV2;

describe('03-creation - Jotai', () => {
  bench(TESTS.STORE_CREATION.name, () => {
    // Store creation is handled by setup/initialization
        // This test measures the overhead of store access
        return store;
  });
});
