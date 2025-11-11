# Memory Allocation

Large state allocation performance.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **MobX** | 6.15.0 | 17.6 KB | 👑 925 | 925 | Dec 6 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 924 | 924 | Nov 7 |
| 🥉 3 | **Solid Signals** | 1.9.10 | 4.0 KB | 923 | 923 | Dec 6 |
|  4 | **Jotai** | 2.15.1 | 4.3 KB | 917 | 917 | Dec 6 |
|  5 | **Zustand** | 5.0.8 | 👑 1.2 KB | 907 | 907 | Nov 6 |
|  6 | **Preact Signals** | 2.4.0 | 3.0 KB | 904 | 904 | Nov 7 |
|  7 | **Valtio** | 2.2.0 | 3.1 KB | 898 | 898 | Nov 6 |
|  8 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 892 | 892 | Dec 6 |

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

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **MobX** | 924.983 | ±0.62% | 1081.1005ms | 1314.2920ms |  |
| 🥈 | **Zen** | 923.605 | ±0.61% | 1082.7144ms | 1319.2920ms |  |
| 🥉 | **Solid Signals** | 922.99 | ±0.61% | 1083.4349ms | 1309.5830ms |  |
| 4 | **Jotai** | 917.053 | ±0.66% | 1090.4491ms | 1352.5830ms |  |
| 5 | **Zustand** | 907.287 | ±0.91% | 1102.1868ms | 1454.3750ms |  |
| 6 | **Preact Signals** | 904.161 | ±0.99% | 1105.9978ms | 1481.6250ms |  |
| 7 | **Valtio** | 897.765 | ±1.10% | 1113.8775ms | 1465.3750ms |  |
| 8 | **Redux Toolkit** | 891.893 | ±1.32% | 1121.2112ms | 1705.4590ms |  |

**Key Insight:** MobX is 1.04x faster than Redux Toolkit in this category.

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
*Last generated: 2025-11-11T00:33:35.504Z*
