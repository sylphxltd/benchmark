/**
 * 02-write - Redux Toolkit
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { reduxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = reduxActionsV2;

describe('02-write - Redux Toolkit', () => {
  bench(TESTS.SINGLE_UPDATE.name, () => {
    store.increment();
  });

  bench(TESTS.BATCH_UPDATE_X10.name, () => {
    for (let i = 0; i < 10; i++) {
          store.increment();
        }
  });

  bench(TESTS.BATCH_UPDATE_X100.name, () => {
    for (let i = 0; i < 100; i++) {
          store.increment();
        }
  });

  bench(TESTS.BATCH_UPDATE_X1000.name, () => {
    for (let i = 0; i < 1000; i++) {
          store.increment();
        }
  });

  bench(TESTS.BATCH_UPDATE_X10000.name, () => {
    for (let i = 0; i < 10000; i++) {
          store.increment();
        }
  });
});
