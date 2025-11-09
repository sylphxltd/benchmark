/**
 * Comprehensive Vitest Benchmark Suite for State Management Libraries
 * Tests all fundamental operations and patterns
 */

import { bench, describe } from 'vitest';
import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions,
  zenActions
} from './stores';

// ============================================================================
// CREATION TESTS
// ============================================================================
describe('Store Creation', () => {
  bench('Redux Toolkit', () => {
    reduxActions.createStore();
  });

  bench('Zustand', () => {
    zustandActions.createStore();
  });

  bench('Jotai', () => {
    jotaiActions.createStore();
  });

  bench('MobX', () => {
    mobxActions.createStore();
  });

  bench('Valtio', () => {
    valtioActions.createStore();
  });

  bench('Preact Signals', () => {
    preactActions.createStore();
  });

  bench('Solid Signals', () => {
    solidActions.createStore();
  });

  bench('Zen', () => {
    zenActions.createStore();
  });
});

// ============================================================================
// READ TESTS
// ============================================================================
describe('Read (1000x)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.readBatch();
  });

  bench('Zustand', () => {
    zustandActions.readBatch();
  });

  bench('Jotai', () => {
    jotaiActions.readBatch();
  });

  bench('MobX', () => {
    mobxActions.readBatch();
  });

  bench('Valtio', () => {
    valtioActions.readBatch();
  });

  bench('Preact Signals', () => {
    preactActions.readBatch();
  });

  bench('Solid Signals', () => {
    solidActions.readBatch();
  });

  bench('Zen', () => {
    zenActions.readBatch();
  });
});

// ============================================================================
// WRITE TESTS (NO LISTENERS)
// ============================================================================
describe('Write (no listeners)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.writeNoListeners();
  });

  bench('Zustand', () => {
    zustandActions.writeNoListeners();
  });

  bench('Jotai', () => {
    jotaiActions.writeNoListeners();
  });

  bench('MobX', () => {
    mobxActions.writeNoListeners();
  });

  bench('Valtio', () => {
    valtioActions.writeNoListeners();
  });

  bench('Preact Signals', () => {
    preactActions.writeNoListeners();
  });

  bench('Solid Signals', () => {
    solidActions.writeNoListeners();
  });

  bench('Zen', () => {
    zenActions.writeNoListeners();
  });
});

// ============================================================================
// WRITE TESTS (1 SUBSCRIBER)
// ============================================================================
describe('Write (1 subscriber)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.writeWithSubscribers(1);
  });

  bench('Zustand', () => {
    zustandActions.writeWithSubscribers(1);
  });

  bench('Jotai', () => {
    jotaiActions.writeWithSubscribers(1);
  });

  bench('MobX', () => {
    mobxActions.writeWithSubscribers(1);
  });

  bench('Valtio', () => {
    valtioActions.writeWithSubscribers(1);
  });

  bench('Preact Signals', () => {
    preactActions.writeWithSubscribers(1);
  });

  bench('Solid Signals', () => {
    solidActions.writeWithSubscribers(1);
  });

  bench('Zen', () => {
    zenActions.writeWithSubscribers(1);
  });
});

// ============================================================================
// WRITE TESTS (5 SUBSCRIBERS)
// ============================================================================
describe('Write (5 subscribers)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.writeWithSubscribers(5);
  });

  bench('Zustand', () => {
    zustandActions.writeWithSubscribers(5);
  });

  bench('Jotai', () => {
    jotaiActions.writeWithSubscribers(5);
  });

  bench('MobX', () => {
    mobxActions.writeWithSubscribers(5);
  });

  bench('Valtio', () => {
    valtioActions.writeWithSubscribers(5);
  });

  bench('Preact Signals', () => {
    preactActions.writeWithSubscribers(5);
  });

  bench('Solid Signals', () => {
    solidActions.writeWithSubscribers(5);
  });

  bench('Zen', () => {
    zenActions.writeWithSubscribers(5);
  });
});

// ============================================================================
// COMPUTED - CACHED READ
// ============================================================================
describe('Computed - Cached Read', () => {
  bench('Redux Toolkit', () => {
    reduxActions.readComputedCached();
  });

  bench('Zustand', () => {
    zustandActions.readComputedCached();
  });

  bench('Jotai', () => {
    jotaiActions.readComputedCached();
  });

  bench('MobX', () => {
    mobxActions.readComputedCached();
  });

  bench('Valtio', () => {
    valtioActions.readComputedCached();
  });

  bench('Preact Signals', () => {
    preactActions.readComputedCached();
  });

  bench('Solid Signals', () => {
    solidActions.readComputedCached();
  });

  bench('Zen', () => {
    zenActions.readComputedCached();
  });
});

// ============================================================================
// COMPUTED - UPDATE
// ============================================================================
describe('Computed - Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.updateComputed();
  });

  bench('Zustand', () => {
    zustandActions.updateComputed();
  });

  bench('Jotai', () => {
    jotaiActions.updateComputed();
  });

  bench('MobX', () => {
    mobxActions.updateComputed();
  });

  bench('Valtio', () => {
    valtioActions.updateComputed();
  });

  bench('Preact Signals', () => {
    preactActions.updateComputed();
  });

  bench('Solid Signals', () => {
    solidActions.updateComputed();
  });

  bench('Zen', () => {
    zenActions.updateComputed();
  });
});

// ============================================================================
// CHAINED COMPUTED (3 LEVELS)
// ============================================================================
describe('Chained Computed (3 levels)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.readChainedComputed();
  });

  bench('Zustand', () => {
    zustandActions.readChainedComputed();
  });

  bench('Jotai', () => {
    jotaiActions.readChainedComputed();
  });

  bench('MobX', () => {
    mobxActions.readChainedComputed();
  });

  bench('Valtio', () => {
    valtioActions.readChainedComputed();
  });

  bench('Preact Signals', () => {
    preactActions.readChainedComputed();
  });

  bench('Solid Signals', () => {
    solidActions.readChainedComputed();
  });

  bench('Zen', () => {
    zenActions.readChainedComputed();
  });
});

// ============================================================================
// BATCHING (100 UPDATES)
// ============================================================================
describe('Batching (100 updates)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.batch100Updates();
  });

  bench('Zustand', () => {
    zustandActions.batch100Updates();
  });

  bench('Jotai', () => {
    jotaiActions.batch100Updates();
  });

  bench('MobX', () => {
    mobxActions.batch100Updates();
  });

  bench('Valtio', () => {
    valtioActions.batch100Updates();
  });

  bench('Preact Signals', () => {
    preactActions.batch100Updates();
  });

  bench('Solid Signals', () => {
    solidActions.batch100Updates();
  });

  bench('Zen', () => {
    zenActions.batch100Updates();
  });
});

// ============================================================================
// SUBSCRIBE/UNSUBSCRIBE
// ============================================================================
describe('Subscribe/Unsubscribe', () => {
  bench('Redux Toolkit', () => {
    reduxActions.subscribeUnsubscribe();
  });

  bench('Zustand', () => {
    zustandActions.subscribeUnsubscribe();
  });

  bench('Jotai', () => {
    jotaiActions.subscribeUnsubscribe();
  });

  bench('MobX', () => {
    mobxActions.subscribeUnsubscribe();
  });

  bench('Valtio', () => {
    valtioActions.subscribeUnsubscribe();
  });

  bench('Preact Signals', () => {
    preactActions.subscribeUnsubscribe();
  });

  bench('Solid Signals', () => {
    solidActions.subscribeUnsubscribe();
  });

  bench('Zen', () => {
    zenActions.subscribeUnsubscribe();
  });
});
