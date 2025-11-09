/**
 * Redux Toolkit Library Metadata
 * Self-describing library information
 */

export const metadata = {
  name: 'Redux Toolkit',
  displayName: 'Redux Toolkit',
  category: 'traditional',
  tags: ['redux', 'devtools', 'middleware', 'boilerplate'],
  version: '^2.0.0',
  bundleSize: 47000,
  website: 'https://redux-toolkit.js.org',
  description: 'Official Redux toolkit with batteries included',
  author: 'Redux Team',
  license: 'MIT',
  // 標記支持的測試類型
  supports: {
    'read': true,
    'write': true,
    'form': true,
    'cache': false,
    'async': true,
    'memory': true
  },
  // 性能特徵
  performance: {
    initCost: 'medium',
    readSpeed: 'medium',
    writeSpeed: 'medium',
    memoryUsage: 'medium'
  }
};