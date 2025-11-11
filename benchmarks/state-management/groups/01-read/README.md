# Read Operations

Simple read and high-frequency read patterns.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/01-read/read-x1.bench.ts > Read Operations - x1](#groups01-readread-x1benchts-read-operations---x1)
  - [groups/01-read/read-x1000.bench.ts > Read - 1000x operations (experimental)](#groups01-readread-x1000benchts-read---1000x-operations-experimental)
  - [groups/01-read/read-x10000.bench.ts > Read - 10000x operations (experimental)](#groups01-readread-x10000benchts-read---10000x-operations-experimental)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 28.3M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 24.6M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 22.6M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 14.7M |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 9.8M |
|  6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.5M |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.5M |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 993K |

---

## Detailed Results

### groups/01-read/read-x1.bench.ts > Read Operations - x1

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     28.3M ops/sec
🥈   Jotai              ███████████████████████████████████          24.6M ops/sec
🥉   Zen                ████████████████████████████████             22.6M ops/sec
4.   Preact Signals     █████████████████████                        14.7M ops/sec
5.   MobX               ██████████████                                9.8M ops/sec
6.   Redux Toolkit      ████                                          2.5M ops/sec
7.   Valtio             ████                                          2.5M ops/sec
8.   Zustand            █                                             993K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,317,129 | ±0.30% | 0.0374ms | 0.1250ms | 0 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 24,562,318 | ±0.92% | 0.0439ms | 0.1250ms | 0 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 22,596,467 | ±0.30% | 0.0471ms | 0.1250ms | 0 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 14,680,102 | ±0.24% | 0.0942ms | 0.3340ms | 0 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 9,816,940 | ±0.23% | 0.1504ms | 0.3340ms | 0 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2,513,361 | ±0.14% | 0.5967ms | 1.3330ms | 0 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,485,410 | ±0.20% | 0.4999ms | 0.9580ms | 0 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 993,212 | ±0.90% | 1.5608ms | 3.5000ms | 0 |

**Key Insight:** Solid Signals is 28.51x faster than Zustand in this test.

### groups/01-read/read-x1000.bench.ts > Read - 1000x operations (experimental)

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

### groups/01-read/read-x10000.bench.ts > Read - 10000x operations (experimental)

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
npm run benchmark:read

# Or run specific test file
npx vitest bench groups/01-read/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.296Z*
