/**
 * Jotai Library Metadata
 * Self-describing library information
 */

export const metadata = {
  name: 'Jotai',
  displayName: 'Jotai',
  category: 'atomic',
  tags: ['atomic', 'reactive', 'context-free', 'subscribable'],
  version: '^2.15.1',
  bundleSize: 14000,
  website: 'https://jotai.org',
  description: 'Primitive and flexible state management for React',
  author: 'Daishi Kato',
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
    initCost: 'medium',
    readSpeed: 'fast',
    writeSpeed: 'fast',
    memoryUsage: 'medium'
  }
};