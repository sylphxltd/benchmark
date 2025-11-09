# Read Tests

Performance benchmarks for read operations across state management libraries.

No performance data available.

## 🚀 Quick Start

To run only read tests:

```bash
npm run benchmark:read
```

## 🔧 Extending Tests

To add new scales to read:

1. Update `../shared/config.ts` to add new scale definitions
2. Use the test generator:
   ```bash
   node -e "
   const { generateReadTest, WRITE_SCALES } = require('./shared/test-generator.cjs');
   const content = generateReadTest(WRITE_SCALES.find(s => s.name === 'x1000'));
   require('fs').writeFileSync('groups/read/read-x1000.bench.ts', content);
   "
   ```
3. Update package.json with new command:
   ```json
   "scripts": {
     "benchmark:read-x1000": "node scripts/run-group-benchmark.cjs read-x1000 ."
   }
   ```

## 🔗 Related

- [← Back to State Management Benchmarks](../README.md)
- [Overall Performance Rankings](../README.md#-performance-rankings)

---
*Last generated: 2025-11-09T18:46:36.908Z*
