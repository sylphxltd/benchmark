# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **8 tested libraries** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

### 🏆 Comprehensive Performance Score

Based on geometric mean across all tests (normalized, fastest = 100):

| Rank | Library | Score | Relative | Tests |
|------|---------|-------|----------|-------|
| 🥇 | **Solid Signals** | 98.2/100 | Baseline | 8 |
| 🥈 | **Zen** | 77.8/100 | 79.2% | 8 |
| 🥉 | **Jotai** | 77.5/100 | 78.9% | 8 |
| 4 | **Preact Signals** | 72.1/100 | 73.4% | 8 |
| 5 | **MobX** | 32.0/100 | 32.6% | 8 |
| 6 | **Valtio** | 23.5/100 | 24.0% | 8 |
| 7 | **Redux Toolkit** | 16.3/100 | 16.6% | 8 |
| 8 | **Zustand** | 10.1/100 | 10.3% | 8 |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

### ⚡ Peak Performance

Highest recorded performance by category:

| Rank | Library | Best Category | Peak Performance | Avg Performance |
|------|---------|--------------|------------------|---------------|
| 1 | **Solid Signals** | read | ~31.1M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | read | ~29.5M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Preact Signals** | read | ~27.5M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Zen** | read | ~26.0M ops/sec | ⚡⚡⚡⚡ |
| 5 | **MobX** | read | ~21.6M ops/sec | ⚡⚡⚡⚡ |
| 6 | **Redux Toolkit** | read | ~5.4M ops/sec | ⚡⚡⚡ |
| 7 | **Valtio** | read | ~3.9M ops/sec | ⚡⚡⚡ |
| 8 | **Zustand** | read | ~2.4M ops/sec | ⚡⚡⚡ |

### 🎯 Test Coverage Rankings

Percentage of benchmark tests each library supports:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **Redux Toolkit** | 8/8 | 100% |
| 🥈 | **Zustand** | 8/8 | 100% |
| 🥉 | **Jotai** | 8/8 | 100% |
| 4 | **MobX** | 8/8 | 100% |
| 5 | **Valtio** | 8/8 | 100% |
| 6 | **Preact Signals** | 8/8 | 100% |
| 7 | **Solid Signals** | 8/8 | 100% |
| 8 | **Zen** | 8/8 | 100% |

> 🎯 **Note:** Higher coverage means the library participates in more test categories.

### 📖 Read Operations

[📊 View Detailed Results →](groups/read/)

**Performance Chart:**

```
🥇   Solid Signals      █████████████████████████████    95.8/100
🥈   Jotai              █████████████████████████        83.8/100
🥉   Zen                ███████████████████████          75.9/100
4.   Preact Signals     ███████████████                  48.7/100
5.   MobX               ██████████                       31.7/100
6.   Redux Toolkit      ██                               8.2/100
7.   Valtio             ██                               8.0/100
8.   Zustand            █                                3.2/100
```

| Rank | Library | Score | Relative | Avg Performance |
|------|---------|-------|----------|----------------|
| 🥇 | **Solid Signals** | 95.8/100 | Baseline | ~25.4M ops/sec |
| 🥈 | **Jotai** | 83.8/100 | 87.5% | ~22.7M ops/sec |
| 🥉 | **Zen** | 75.9/100 | 79.2% | ~20.4M ops/sec |
| 4 | **Preact Signals** | 48.7/100 | 50.8% | ~16.6M ops/sec |
| 5 | **MobX** | 31.7/100 | 33.1% | ~12.3M ops/sec |
| 6 | **Redux Toolkit** | 8.2/100 | 8.5% | ~3.1M ops/sec |
| 7 | **Valtio** | 8.0/100 | 8.3% | ~2.5M ops/sec |
| 8 | **Zustand** | 3.2/100 | 3.4% | ~1.4M ops/sec |

### ✏️ Write Operations

[📊 View Detailed Results →](groups/write/)

**Performance Chart:**

```
🥇   Solid Signals      ██████████████████████████████   100.0/100
🥈   Jotai              ███████████████████              62.7/100
🥉   Preact Signals     █████████████████                56.5/100
4.   Zen                ███████████████                  48.6/100
5.   Valtio             █                                3.9/100
6.   MobX               █                                3.4/100
7.   Redux Toolkit                                       0.9/100
8.   Zustand                                             0.3/100
```

| Rank | Library | Score | Relative | Avg Performance |
|------|---------|-------|----------|----------------|
| 🥇 | **Solid Signals** | 100.0/100 | Baseline | ~27.0M ops/sec |
| 🥈 | **Jotai** | 62.7/100 | 62.7% | ~19.0M ops/sec |
| 🥉 | **Preact Signals** | 56.5/100 | 56.5% | ~17.1M ops/sec |
| 4 | **Zen** | 48.6/100 | 48.6% | ~15.6M ops/sec |
| 5 | **Valtio** | 3.9/100 | 3.9% | ~1.8M ops/sec |
| 6 | **MobX** | 3.4/100 | 3.4% | ~1.5M ops/sec |
| 7 | **Redux Toolkit** | 0.9/100 | 0.9% | ~420K ops/sec |
| 8 | **Zustand** | 0.3/100 | 0.3% | ~155K ops/sec |

### 🏗️ Store Creation

[📊 View Detailed Results →](groups/creation/)

| Rank | Library | Score | Performance |
|------|---------|-------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:creation`

### ⚡ Reactive Async

[📊 View Detailed Results →](groups/async/)

**Performance Chart:**

```
🥇   Zen                ██████████████████████████████   99.7/100
🥈   Valtio             ██████████████████████████████   99.2/100
🥉   Zustand            ██████████████████████████████   99.1/100
4.   Preact Signals     ██████████████████████████████   99.0/100
5.   MobX               ██████████████████████████████   99.0/100
6.   Redux Toolkit      ██████████████████████████████   98.8/100
7.   Solid Signals      ██████████████████████████████   98.6/100
8.   Jotai              █████████████████████████        82.8/100
```

| Rank | Library | Score | Relative | Avg Performance |
|------|---------|-------|----------|----------------|
| 🥇 | **Zen** | 99.7/100 | Baseline | ~881 ops/sec |
| 🥈 | **Valtio** | 99.2/100 | 99.5% | ~877 ops/sec |
| 🥉 | **Zustand** | 99.1/100 | 99.5% | ~877 ops/sec |
| 4 | **Preact Signals** | 99.0/100 | 99.3% | ~875 ops/sec |
| 5 | **MobX** | 99.0/100 | 99.3% | ~875 ops/sec |
| 6 | **Redux Toolkit** | 98.8/100 | 99.1% | ~873 ops/sec |
| 7 | **Solid Signals** | 98.6/100 | 98.9% | ~872 ops/sec |
| 8 | **Jotai** | 82.8/100 | 83.0% | ~761 ops/sec |

### 🔧 Complex Operations

[📊 View Detailed Results →](groups/complexity/)

| Rank | Library | Score | Performance |
|------|---------|-------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:complexity`

### 💾 Memory Operations

[📊 View Detailed Results →](groups/memory/)

| Rank | Library | Score | Performance |
|------|---------|-------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:memory`

---

## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [📖 Read Operations](groups/read/) | Performance of state reading operations across different scales | ✅ Results Available |
| [✏️ Write Operations](groups/write/) | Performance of state writing and update operations | ✅ Results Available |
| [🏗️ Store Creation](groups/creation/) | Performance of creating new stores and instances | ⏳ Pending |
| [⚡ Reactive Async](groups/async/) | Reactive async state operations with automatic dependency tracking | ✅ Results Available |
| [🔧 Complex Operations](groups/complexity/) | Performance with complex nested state structures | ⏳ Pending |
| [💾 Memory Operations](groups/memory/) | Memory efficiency and large state operations | ⏳ Pending |

> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run all benchmarks
npm run benchmark

# Run specific category
npm run benchmark:write
npm run benchmark:read

# Generate reports
npm run extract-results
```

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
*Last updated: 2025-11-10T19:07:28.349Z*
