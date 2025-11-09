/**
 * Write Operations Test Configuration
 * Defines test parameters and scales for write performance tests
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  iterations: number;
  timeout?: number;
  warmup?: number;
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
  name: 'Write Operations',
  description: 'State write/update performance tests',
  requiredMethods: ['increment', 'setCount', 'count'],
  setup: 'initializeStore()',
  teardown: 'cleanupStore()',
  scales: [
    {
      id: 'single',
      name: 'Single Write',
      description: 'Single state mutation operation',
      iterations: 1,
      timeout: 1000
    },
    {
      id: 'burst',
      name: 'Burst Write',
      description: 'Quick burst of 10 writes',
      iterations: 10,
      timeout: 2000
    },
    {
      id: 'batch',
      name: 'Batch Operations',
      description: 'Batch write operations (100 ops)',
      iterations: 100,
      timeout: 5000
    },
    {
      id: 'heavy',
      name: 'Heavy Write Load',
      description: 'Heavy write operations (1000 ops)',
      iterations: 1000,
      timeout: 15000,
      warmup: 100
    }
  ]
};