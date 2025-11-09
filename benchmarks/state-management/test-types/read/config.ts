/**
 * Read Operations Test Configuration
 * Defines test parameters and scales for read performance tests
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
  name: 'Read Operations',
  description: 'State read performance tests across different access patterns',
  requiredMethods: ['count', 'getCount'],
  setup: 'initializeStore()',
  teardown: 'cleanupStore()',
  scales: [
    {
      id: 'single',
      name: 'Single Read',
      description: 'Single state access operation',
      iterations: 1,
      timeout: 1000
    },
    {
      id: 'burst',
      name: 'Burst Read',
      description: 'Quick burst of 10 reads',
      iterations: 10,
      timeout: 2000
    },
    {
      id: 'moderate',
      name: 'Moderate Load',
      description: 'Moderate read load (100 operations)',
      iterations: 100,
      timeout: 5000
    },
    {
      id: 'high-frequency',
      name: 'High Frequency',
      description: 'High frequency read operations (1000 ops)',
      iterations: 1000,
      timeout: 10000,
      warmup: 100
    },
    {
      id: 'extreme',
      name: 'Extreme Load',
      description: 'Extreme read load (10000 ops)',
      iterations: 10000,
      timeout: 30000,
      warmup: 1000
    }
  ]
};