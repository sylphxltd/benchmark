/**
 * Vitest Benchmark Suite for State Management Libraries
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

const testUser = { id: 1, name: 'Test User' };

describe('Simple Increment', () => {
  bench('Redux Toolkit', () => {
    reduxActions.increment();
  });

  bench('Zustand', () => {
    zustandActions.increment();
  });

  bench('Jotai', () => {
    jotaiActions.increment();
  });

  bench('MobX', () => {
    mobxActions.increment();
  });

  bench('Valtio', () => {
    valtioActions.increment();
  });

  bench('Preact Signals', () => {
    preactActions.increment();
  });

  bench('Solid Signals', () => {
    solidActions.increment();
  });

  bench('Zen', () => {
    zenActions.increment();
  });
});

describe('Computed Access', () => {
  bench('Redux Toolkit', () => {
    reduxActions.getDoubled();
  });

  bench('Zustand', () => {
    zustandActions.getDoubled();
  });

  bench('Jotai', () => {
    jotaiActions.getDoubled();
  });

  bench('MobX', () => {
    mobxActions.getDoubled();
  });

  bench('Valtio', () => {
    valtioActions.getDoubled();
  });

  bench('Preact Signals', () => {
    preactActions.getDoubled();
  });

  bench('Solid Signals', () => {
    solidActions.getDoubled();
  });

  bench('Zen', () => {
    zenActions.getDoubled();
  });
});

describe('Nested Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setNested(Math.random());
  });

  bench('Zustand', () => {
    zustandActions.setNested(Math.random());
  });

  bench('Jotai', () => {
    jotaiActions.setNested(Math.random());
  });

  bench('MobX', () => {
    mobxActions.setNested(Math.random());
  });

  bench('Valtio', () => {
    valtioActions.setNested(Math.random());
  });

  bench('Preact Signals', () => {
    preactActions.setNested(Math.random());
  });

  bench('Solid Signals', () => {
    solidActions.setNested(Math.random());
  });

  bench('Zen', () => {
    zenActions.setNested(Math.random());
  });
});

describe('Array Push', () => {
  bench('Redux Toolkit', () => {
    reduxActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Zustand', () => {
    zustandActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Jotai', () => {
    jotaiActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('MobX', () => {
    mobxActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Valtio', () => {
    valtioActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Preact Signals', () => {
    preactActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Solid Signals', () => {
    solidActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Zen', () => {
    zenActions.addUser({ ...testUser, id: Math.random() });
  });
});

describe('Async Operations', () => {
  bench('Redux Toolkit - Async Fetch', async () => {
    await reduxActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Zustand - Async Fetch', async () => {
    await zustandActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Jotai - Async Fetch', async () => {
    await jotaiActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('MobX - Async Fetch', async () => {
    await mobxActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Valtio - Async Fetch', async () => {
    await valtioActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Preact Signals - Async Fetch', async () => {
    await preactActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Solid Signals - Async Fetch', async () => {
    await solidActions.fetchData({ id: Math.random(), data: 'test' });
  });

  bench('Zen - Async Fetch', async () => {
    await zenActions.fetchData({ id: Math.random(), data: 'test' });
  });
});

describe('Loading State Toggle', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setLoading(Math.random() > 0.5);
  });

  bench('Zustand', () => {
    zustandActions.setLoading(Math.random() > 0.5);
  });

  bench('Jotai', () => {
    jotaiActions.setLoading(Math.random() > 0.5);
  });

  bench('MobX', () => {
    mobxActions.setLoading(Math.random() > 0.5);
  });

  bench('Valtio', () => {
    valtioActions.setLoading(Math.random() > 0.5);
  });

  bench('Preact Signals', () => {
    preactActions.setLoading(Math.random() > 0.5);
  });

  bench('Solid Signals', () => {
    solidActions.setLoading(Math.random() > 0.5);
  });

  bench('Zen', () => {
    zenActions.setLoading(Math.random() > 0.5);
  });
});