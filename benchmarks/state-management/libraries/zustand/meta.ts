/**
 * Zustand Library Metadata
 * Self-describing library information
 */

export const metadata = {
  name: 'Zustand',
  displayName: 'Zustand',
  category: 'traditional',
  tags: ['simple', 'hooks', 'lightweight', 'no-boilerplate'],
  version: '^5.0.0',
  bundleSize: 2300,
  website: 'https://github.com/pmndrs/zustand',
  description: 'A small, fast and scalable bearbones state-management solution',
  author: 'Paul Henschel',
  license: 'MIT',
  supports: {
    'read': true,
    'write': true,
    'form': true,
    'cache': true,
    'async': true,
    'memory': true
  },
  performance: {
    initCost: 'low',
    readSpeed: 'fast',
    writeSpeed: 'fast',
    memoryUsage: 'low'
  }
};