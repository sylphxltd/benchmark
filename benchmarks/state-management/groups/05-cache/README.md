# Cache Performance

Repeated access patterns.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/05-cache/cache-performance.bench.ts > Cache Performance - Caching patterns and memoization](#groups05-cachecache-performancebenchts-cache-performance---caching-patterns-and-memoization)
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
| 🥇 1 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 👑 0 |
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 👑 0 |
| 🥉 3 | [**Jotai**](https://github.com/pmndrs/jotai) | 👑 0 |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 👑 0 |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 0 |
|  6 | [**Preact Signals**](https://github.com/preactjs/signals) | 👑 0 |
|  7 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 0 |
|  8 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 0 |

---

## Detailed Results

### groups/05-cache/cache-performance.bench.ts > Cache Performance - Caching patterns and memoization

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
npm run benchmark:cache

# Or run specific test file
npx vitest bench groups/05-cache/*.bench.ts
```

---
*Last generated: 2025-11-11T04:05:19.448Z*
