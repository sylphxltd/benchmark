# Memory Allocation

Large state allocation performance.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/06-memory/memory-allocation.bench.ts > Memory Allocation](#groups06-memorymemory-allocationbenchts-memory-allocation)
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
| 🥇 1 | [**MobX**](https://github.com/mobxjs/mobx) | 👑 925 |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 924 |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 923 |
|  4 | [**Jotai**](https://github.com/pmndrs/jotai) | 917 |
|  5 | [**Zustand**](https://github.com/pmndrs/zustand) | 907 |
|  6 | [**Preact Signals**](https://github.com/preactjs/signals) | 904 |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 898 |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 892 |

---

## Detailed Results

### groups/06-memory/memory-allocation.bench.ts > Memory Allocation

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████       925 ops/sec
🥈   Zen                ████████████████████████████████████████       924 ops/sec
🥉   Solid Signals      ████████████████████████████████████████       923 ops/sec
4.   Jotai              ████████████████████████████████████████       917 ops/sec
5.   Zustand            ███████████████████████████████████████        907 ops/sec
6.   Preact Signals     ███████████████████████████████████████        904 ops/sec
7.   Valtio             ███████████████████████████████████████        898 ops/sec
8.   Redux Toolkit      ███████████████████████████████████████        892 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 925 | ±0.62% | 1081.1005ms | 1314.2920ms | 0 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 924 | ±0.61% | 1082.7144ms | 1319.2920ms | 0 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 923 | ±0.61% | 1083.4349ms | 1309.5830ms | 0 |
| 4 | [**Jotai**](https://github.com/pmndrs/jotai) | 917 | ±0.66% | 1090.4491ms | 1352.5830ms | 0 |
| 5 | [**Zustand**](https://github.com/pmndrs/zustand) | 907 | ±0.91% | 1102.1868ms | 1454.3750ms | 0 |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | 904 | ±0.99% | 1105.9978ms | 1481.6250ms | 0 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 898 | ±1.10% | 1113.8775ms | 1465.3750ms | 0 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 892 | ±1.32% | 1121.2112ms | 1705.4590ms | 0 |

**Key Insight:** MobX is 1.04x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:memory

# Or run specific test file
npx vitest bench groups/06-memory/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.487Z*
