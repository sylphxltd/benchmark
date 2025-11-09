/**
 * Async Operations Test Configuration
 * Tests async state management, promises, and data fetching patterns
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  promiseCount: number;
  concurrency: number;
  delayRange: [number, number]; // [min, max] ms
  timeout?: number;
}

export interface TestConfig {
  name: string;
  description: string;
  scales: TestScale[];
  requiredMethods: string[];
  setup?: string;
  teardown?: string;
}

export const config: TestConfig = {
  name: 'Async Operations',
  description: 'Async state management and data fetching performance',
  requiredMethods: ['setLoading', 'setAsyncData', 'getLoading', 'getAsyncData'],
  setup: 'setupAsyncTest()',
  teardown: 'cleanupAsyncTest()',
  scales: [
    {
      id: 'sequential-async',
      name: 'Sequential Async',
      description: 'Sequential async operations',
      promiseCount: 10,
      concurrency: 1,
      delayRange: [10, 50],
      timeout: 10000
    },
    {
      id: 'concurrent-async',
      name: 'Concurrent Async',
      description: 'Concurrent async operations',
      promiseCount: 20,
      concurrency: 5,
      delayRange: [20, 100],
      timeout: 15000
    },
    {
      id: 'heavy-async',
      name: 'Heavy Async Load',
      description: 'Heavy async operations with many concurrent promises',
      promiseCount: 50,
      concurrency: 10,
      delayRange: [50, 200],
      timeout: 25000
    }
  ]
};