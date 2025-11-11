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

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.4.0 | 3.0 KB | 👑 33.4M | 33.4M | Nov 7 |
| 🥈 2 | [**Zen**](https://github.com/sylphxltd/zen) | 1.2.1 | 5.3 KB | 32.2M | 32.2M | Nov 7 |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.9.10 | 4.0 KB | 32.1M | 32.1M | Dec 6 |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 5.0.8 | 👑 1.2 KB | 10.9M | 10.9M | Nov 6 |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.15.1 | 4.3 KB | 2.3M | 2.3M | Dec 6 |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.2.0 | 3.1 KB | 235K | 235K | Nov 6 |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.10.1 | 13.8 KB | 173K | 173K | Dec 6 |
|  8 | [**MobX**](https://github.com/mobxjs/mobx) | 6.15.0 | 17.6 KB | 278 | 278 | Dec 6 |

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

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 33,384,299.33 | ±0.77% | 0.0300ms | 0.0420ms |  |
| 🥈 | [**Zen**](https://github.com/sylphxltd/zen) | 32,150,344.264 | ±1.88% | 0.0311ms | 0.0830ms |  |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 32,134,155.751 | ±0.07% | 0.0311ms | 0.0420ms |  |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 10,875,729.217 | ±0.35% | 0.0919ms | 0.1670ms |  |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,312,931.425 | ±1.77% | 0.4324ms | 1.0420ms |  |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 235,480.747 | ±116.34% | 4.2466ms | 2.5420ms |  |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 173,331.308 | ±1.03% | 5.7693ms | 22.4580ms |  |
| 8 | [**MobX**](https://github.com/mobxjs/mobx) | 277.545 | ±11.12% | 3603.0229ms | 10863.3750ms |  |

**Key Insight:** Preact Signals is 120284.40x faster than MobX in this category.

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
*Last generated: 2025-11-11T01:29:44.811Z*
