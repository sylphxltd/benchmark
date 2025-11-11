# Store Creation

Instance creation overhead.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/03-creation/store-creation.bench.ts > Store Creation](#groups03-creationstore-creationbenchts-store-creation)
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
| 🥇 1 | [**Preact Signals**](https://github.com/preactjs/signals) | 👑 33.4M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 32.2M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 32.1M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 10.9M |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.3M |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 235K |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 173K |
|  8 | [**MobX**](https://github.com/mobxjs/mobx) | 278 |

---

## Detailed Results

### groups/03-creation/store-creation.bench.ts > Store Creation

**Performance Comparison:**

```
🥇   Preact Signals     ████████████████████████████████████████     33.4M ops/sec
🥈   Zen                ███████████████████████████████████████      32.2M ops/sec
🥉   Solid Signals      ███████████████████████████████████████      32.1M ops/sec
4.   Zustand            █████████████                                10.9M ops/sec
5.   Jotai              ███                                           2.3M ops/sec
6.   Valtio                                                           235K ops/sec
7.   Redux Toolkit                                                    173K ops/sec
8.   MobX                                                              278 ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 33,384,299 | ±0.77% | 0.0300ms | 0.0420ms | 0 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 32,150,344 | ±1.88% | 0.0311ms | 0.0830ms | 0 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 32,134,156 | ±0.07% | 0.0311ms | 0.0420ms | 0 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 10,875,729 | ±0.35% | 0.0919ms | 0.1670ms | 0 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,312,931 | ±1.77% | 0.4324ms | 1.0420ms | 0 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 235,481 | ±116.34% | 4.2466ms | 2.5420ms | 0 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 173,331 | ±1.03% | 5.7693ms | 22.4580ms | 0 |
| 8 | [**MobX**](https://github.com/mobxjs/mobx) | 278 | ±11.12% | 3603.0229ms | 10863.3750ms | 0 |

**Key Insight:** Preact Signals is 120284.40x faster than MobX in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:creation

# Or run specific test file
npx vitest bench groups/03-creation/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.373Z*
