# Complexity

Deep nested state.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/04-complexity/nested-state.bench.ts > Deep Nested Updates](#groups04-complexitynested-statebenchts-deep-nested-updates)
  - [groups/04-complexity/nested-state.bench.ts > Deep Read Access](#groups04-complexitynested-statebenchts-deep-read-access)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.10.1 | 13.8 KB | 👑 0 | 0 | Dec 6 |
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 5.0.8 | 👑 1.2 KB | 👑 0 | 0 | Nov 6 |
| 🥉 3 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.15.1 | 4.3 KB | 👑 0 | 0 | Dec 6 |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 6.15.0 | 17.6 KB | 👑 0 | 0 | Dec 6 |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.2.0 | 3.1 KB | 👑 0 | 0 | Nov 6 |
|  6 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.4.0 | 3.0 KB | 👑 0 | 0 | Nov 7 |
|  7 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.9.10 | 4.0 KB | 👑 0 | 0 | Dec 6 |
|  8 | [**Zen**](https://github.com/sylphxltd/zen) | 1.2.1 | 5.3 KB | 👑 0 | 0 | Nov 7 |

---

## Detailed Results

### groups/04-complexity/nested-state.bench.ts > Deep Nested Updates

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

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | N/A | N/A | N/A | N/A |  |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | N/A | N/A | N/A | N/A |  |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | N/A | N/A | N/A | N/A |  |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | N/A | N/A | N/A | N/A |  |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | N/A | N/A | N/A | N/A |  |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | N/A | N/A | N/A | N/A |  |
| 7 | [**Solid Signals**](https://github.com/solidjs/solid) | N/A | N/A | N/A | N/A |  |
| 8 | [**Zen**](https://github.com/sylphxltd/zen) | N/A | N/A | N/A | N/A |  |

**Key Insight:** Redux Toolkit is 0.00x faster than Zen in this category.

### groups/04-complexity/nested-state.bench.ts > Deep Read Access

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

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | N/A | N/A | N/A | N/A |  |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | N/A | N/A | N/A | N/A |  |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | N/A | N/A | N/A | N/A |  |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | N/A | N/A | N/A | N/A |  |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | N/A | N/A | N/A | N/A |  |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | N/A | N/A | N/A | N/A |  |
| 7 | [**Solid Signals**](https://github.com/solidjs/solid) | N/A | N/A | N/A | N/A |  |
| 8 | [**Zen**](https://github.com/sylphxltd/zen) | N/A | N/A | N/A | N/A |  |

**Key Insight:** Redux Toolkit is 0.00x faster than Zen in this category.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:complexity

# Or run specific test file
npx vitest bench groups/04-complexity/*.bench.ts
```

---
*Last generated: 2025-11-11T01:29:44.849Z*
