/**
 * 06-memory - Preact Signals
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { preactActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = preactActionsV2;

describe('06-memory - Preact Signals', () => {
  bench(TESTS.LARGE_STATE_READ.name, () => {
    return store.getCount();
  });

  bench(TESTS.LARGE_STATE_UPDATE.name, () => {
    store.increment();
  });
});
