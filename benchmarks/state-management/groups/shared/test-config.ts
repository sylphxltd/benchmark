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