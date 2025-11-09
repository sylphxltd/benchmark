/**
 * Cache Performance Test Configuration
 * Tests memoization, caching patterns, and computed values
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  accessCount: number;
  computationComplexity: 'light' | 'medium' | 'heavy';
  cacheHitRatio: number;
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
  name: 'Cache Performance',
  description: 'Memoization and caching performance tests',
  requiredMethods: ['getDoubled', 'getNested', 'getUsers'],
  setup: 'initializeCache()',
  teardown: 'clearCache()',
  scales: [
    {
      id: 'light-memo',
      name: 'Light Memoization',
      description: 'Light computation with frequent cache hits',
      accessCount: 1000,
      computationComplexity: 'light',
      cacheHitRatio: 0.8,
      timeout: 5000
    },
    {
      id: 'heavy-computation',
      name: 'Heavy Computation',
      description: 'Heavy computation that benefits from caching',
      accessCount: 500,
      computationComplexity: 'heavy',
      cacheHitRatio: 0.6,
      timeout: 8000
    },
    {
      id: 'burst-access',
      name: 'Burst Access Pattern',
      description: 'Burst access pattern testing cache pressure',
      accessCount: 2000,
      computationComplexity: 'medium',
      cacheHitRatio: 0.9,
      timeout: 6000
    }
  ]
};