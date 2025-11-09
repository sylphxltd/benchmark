# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries with **organized test groups**.

## 📑 Test Groups

This benchmark suite is organized into focused test groups for better maintainability and clarity:

| Group | Status | Best Performing Library | Details |
|-------|--------|------------------------|---------|
| 📖 [Read Operations](groups/read/) | ✅ Complete | N/A | Best: N/A (0.00M ops/sec) |
| ✏️ [Write Operations](groups/write/) | ⚪ Not Run | N/A | No results available |
| 🏗️ [Store Creation](groups/creation/) | ⚪ Not Run | N/A | No results available |
| ⚡ [Async Operations](groups/async/) | ⚪ Not Run | N/A | No results available |
| 🔧 [Complex Operations](groups/complexity/) | ⚪ Not Run | N/A | No results available |
| 💾 [Memory Operations](groups/memory/) | ⚪ Not Run | N/A | No results available |

## 🚀 Quick Start

**Run all groups:**
```bash
npm run benchmark:all-groups
``

**Run specific group:**
```bash
npm run benchmark:read    # Read operations
npm run benchmark:write   # Write operations
npm run benchmark:creation # Store creation
npm run benchmark:async    # Async operations
npm run benchmark:complexity # Complex operations
npm run benchmark:memory   # Memory operations
``

## 📊 Library Coverage

This benchmark tests the following state management libraries:

- 🔄 **Redux Toolkit** - Predictable state container
- 🎯 **Zustand** - Small, fast and scalable state management
- ⚛️ **Jotai** - Primitive and flexible state management
- 🌀 **MobX** - Simple, scalable state management
- 💨 **Valtio** - Valtio is a proxy state management library
- ⚡ **Preact Signals** - Signal-based state management
- 🔥 **Solid Signals** - Solid.js signal library
- 🧘 **Zen** - Minimal state management library

## 📁 Project Structure

```
benchmarks/state-management/
├── groups/                    # Test group directories
│   ├── read/                 # Read operation tests
│   ├── write/                # Write operation tests
│   ├── creation/             # Store creation tests
│   ├── async/                # Async operation tests
│   ├── complexity/           # Complex operation tests
│   └── memory/               # Memory operation tests
├── src/                      # Shared source code
│   ├── stores/              # Library implementations
│   └── benchmark.bench.ts   # Legacy benchmark (deprecated)
├── results/                  # Aggregated results
└── README.md                 # This file
```

## 🧪 Adding New Tests

To add a new test group:

1. Create a new directory in `groups/`
2. Add benchmark files with the pattern `*.bench.ts`
3. Use the shared test configuration from `../shared/test-config.ts`
4. Update the main scripts in `package.json`

Example new test file:
```typescript
import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('My New Test', () => {
  LIBRARIES.forEach(library => {
    bench(`My Test - ${library.name}`, () => {
      // Your test logic here
      library.actions.someMethod();
    });
  });
});
```

## 🔗 Navigation

- [Read Operations](groups/read/) - Read performance tests
- [Write Operations](groups/write/) - Write performance tests
- [Store Creation](groups/creation/) - Store creation tests
- [Async Operations](groups/async/) - Async operation tests
- [Complex Operations](groups/complexity/) - Complex state tests
- [Memory Operations](groups/memory/) - Memory efficiency tests

## ℹ️ About

This benchmark suite provides comprehensive performance analysis across multiple dimensions of state management. Each test group focuses on specific aspects to provide clear, actionable insights for library selection and optimization.

The modular structure makes it easy to:
- Add new test scenarios
- Maintain existing tests
- Compare specific aspects of performance
- Extend to new libraries

---
*Last updated: 2025-11-09T18:39:00.852Z*
