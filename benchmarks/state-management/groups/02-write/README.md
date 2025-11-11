# Write Operations

Simple increments and burst updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/02-write/write-x1.bench.ts > Write Operations - x1](#groups02-writewrite-x1benchts-write-operations---x1)
  - [groups/02-write/write-x1000.bench.ts > Write - 1000x operations (experimental)](#groups02-writewrite-x1000benchts-write---1000x-operations-experimental)
  - [groups/02-write/write-x10000.bench.ts > Write - 10000x operations (experimental)](#groups02-writewrite-x10000benchts-write---10000x-operations-experimental)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**:
- Each library's raw performance (ops/sec) is measured for each test in this group
- The group score is calculated using geometric mean of all test results
- Formula: `Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)`
- Geometric mean gives balanced weight to all tests regardless of their magnitude

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 31.2M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 20.3M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 18.4M |
|  4 | [**Zen**](https://github.com/SylphxAI/zen) | 16.8M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.5M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.1M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 242K |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 105K |

---

## Detailed Results

### groups/02-write/write-x1.bench.ts > Write Operations - x1

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     31.2M ops/sec
🥈   Jotai              ██████████████████████████                   20.3M ops/sec
🥉   Preact Signals     ████████████████████████                     18.4M ops/sec
4.   Zen                ██████████████████████                       16.8M ops/sec
5.   Valtio             ██                                            1.5M ops/sec
6.   MobX               █                                             1.1M ops/sec
7.   Redux Toolkit                                                    242K ops/sec
8.   Zustand                                                          105K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 31,170,785 | ±0.11% | 0.0321ms | 0.0830ms | 0 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 20,340,505 | ±0.21% | 0.0557ms | 0.1250ms | 0 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 18,445,372 | ±2.04% | 0.0592ms | 0.1250ms | 0 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 16,760,313 | ±0.14% | 0.0680ms | 0.1670ms | 0 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,536,436 | ±0.43% | 1.0161ms | 2.5830ms | 0 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 1,077,755 | ±0.46% | 1.4752ms | 3.9160ms | 0 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 242,482 | ±1.28% | 7.3084ms | 26.4580ms | 0 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 104,586 | ±0.62% | 17.4616ms | 70.7500ms | 0 |

**Key Insight:** Solid Signals is 298.04x faster than Zustand in this test.

### groups/02-write/write-x1000.bench.ts > Write - 1000x operations (experimental)

**Performance Comparison:**

```
🥇   Redux Toolkit                                                       0 ops/sec
🥈   Zustand                                                             0 ops/sec
🥉   Jotai                                                               0 ops/sec
4.   MobX                                                                0 ops/sec
5.   Valtio                                                              0 ops/sec
6.   Preact Signals                                                      0 ops/sec
7.   Solid Signals                                                       0 ops/sec
8.   Zen                                                                 0 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | N/A | N/A | N/A | N/A | N/A |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | N/A | N/A | N/A | N/A | N/A |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | N/A | N/A | N/A | N/A | N/A |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | N/A | N/A | N/A | N/A | N/A |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | N/A | N/A | N/A | N/A | N/A |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | N/A | N/A | N/A | N/A | N/A |
| 7 | [**Solid Signals**](https://github.com/solidjs/solid) | N/A | N/A | N/A | N/A | N/A |
| 8 | [**Zen**](https://github.com/SylphxAI/zen) | N/A | N/A | N/A | N/A | N/A |

**Key Insight:** Redux Toolkit is 0.00x faster than Zen in this test.

### groups/02-write/write-x10000.bench.ts > Write - 10000x operations (experimental)

**Performance Comparison:**

```
🥇   Redux Toolkit                                                       0 ops/sec
🥈   Zustand                                                             0 ops/sec
🥉   Jotai                                                               0 ops/sec
4.   MobX                                                                0 ops/sec
5.   Valtio                                                              0 ops/sec
6.   Preact Signals                                                      0 ops/sec
7.   Solid Signals                                                       0 ops/sec
8.   Zen                                                                 0 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | N/A | N/A | N/A | N/A | N/A |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | N/A | N/A | N/A | N/A | N/A |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | N/A | N/A | N/A | N/A | N/A |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | N/A | N/A | N/A | N/A | N/A |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | N/A | N/A | N/A | N/A | N/A |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | N/A | N/A | N/A | N/A | N/A |
| 7 | [**Solid Signals**](https://github.com/solidjs/solid) | N/A | N/A | N/A | N/A | N/A |
| 8 | [**Zen**](https://github.com/SylphxAI/zen) | N/A | N/A | N/A | N/A | N/A |

**Key Insight:** Redux Toolkit is 0.00x faster than Zen in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:write

# Or run specific test file
npx vitest bench groups/02-write/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.335Z*
