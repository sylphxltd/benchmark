# Write Operations

Simple increments and burst updates.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 31.2M | 33.1M | Dec 6 |
| 🥈 2 | **Jotai** | 2.15.1 | 4.3 KB | 20.3M | 33.9M | Dec 6 |
| 🥉 3 | **Preact Signals** | 2.4.0 | 3.0 KB | 18.4M | 28.2M | Nov 7 |
|  4 | **Zen** | 1.2.1 | 5.3 KB | 16.8M | 28.2M | Nov 7 |
|  5 | **Valtio** | 2.2.0 | 3.1 KB | 1.5M | 4.2M | Nov 6 |
|  6 | **MobX** | 6.15.0 | 17.6 KB | 1.1M | 3.0M | Dec 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 242K | 784K | Dec 6 |
|  8 | **Zustand** | 5.0.8 | 👑 1.2 KB | 105K | 351K | Nov 6 |

---

## Detailed Results

### groups/02-write/write-x1.bench.ts > Write Operations - x1

**Performance Comparison:**

```
🥇   Jotai              ████████████████████████████████████████     33.9M ops/sec
🥈   Solid Signals      ███████████████████████████████████████      33.1M ops/sec
🥉   Solid Signals      ███████████████████████████████████          29.3M ops/sec
4.   Zen                █████████████████████████████████            28.2M ops/sec
5.   Preact Signals     █████████████████████████████████            28.2M ops/sec
6.   Jotai              ██████████████                               12.2M ops/sec
7.   Preact Signals     ██████████████                               12.1M ops/sec
8.   Zen                ████████████                                  9.9M ops/sec
9.   Valtio             █████                                         4.2M ops/sec
10.  MobX               ████                                          3.0M ops/sec
11.  Redux Toolkit      █                                             784K ops/sec
12.  Valtio             █                                             557K ops/sec
13.  MobX                                                             381K ops/sec
14.  Zustand                                                          351K ops/sec
15.  Redux Toolkit                                                     75K ops/sec
16.  Zustand                                                           31K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Jotai** | 33,919,541.254 | ±0.35% | 0.0295ms | 0.0830ms |  |
| 🥈 | **Solid Signals** | 33,108,765.669 | ±0.10% | 0.0302ms | 0.0420ms |  |
| 🥉 | **Solid Signals** | 29,346,240.943 | ±0.11% | 0.0341ms | 0.0830ms |  |
| 4 | **Zen** | 28,233,961.21 | ±0.16% | 0.0354ms | 0.0840ms |  |
| 5 | **Preact Signals** | 28,203,918.646 | ±1.41% | 0.0355ms | 0.0840ms |  |
| 6 | **Jotai** | 12,197,574.439 | ±0.08% | 0.0820ms | 0.1250ms |  |
| 7 | **Preact Signals** | 12,063,278.794 | ±2.66% | 0.0829ms | 0.1250ms |  |
| 8 | **Zen** | 9,949,298.249 | ±0.11% | 0.1005ms | 0.1670ms |  |
| 9 | **Valtio** | 4,240,840.27 | ±0.33% | 0.2358ms | 0.4160ms |  |
| 10 | **MobX** | 3,045,725.257 | ±0.49% | 0.3283ms | 0.7090ms |  |
| 11 | **Redux Toolkit** | 784,474.613 | ±0.49% | 1.2747ms | 3.1250ms |  |
| 12 | **Valtio** | 556,643.368 | ±0.53% | 1.7965ms | 2.5830ms |  |
| 13 | **MobX** | 381,372.832 | ±0.43% | 2.6221ms | 3.9160ms |  |
| 14 | **Zustand** | 350,821.763 | ±0.64% | 2.8505ms | 4.1250ms |  |
| 15 | **Redux Toolkit** | 74,951.41 | ±2.06% | 13.3420ms | 26.4580ms |  |
| 16 | **Zustand** | 31,179.13 | ±0.60% | 32.0727ms | 70.7500ms |  |

**Key Insight:** Jotai is 1087.89x faster than Zustand in this category.

### groups/02-write/write-x1000.bench.ts > Write - 1000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Increment (1 iterations)                                                  0 ops/sec
🥈   Simple Increment (1 iterations)                                                  0 ops/sec
🥉   Simple Increment (1 iterations)                                                  0 ops/sec
4.   Simple Increment (1 iterations)                                                  0 ops/sec
5.   Simple Increment (1 iterations)                                                  0 ops/sec
6.   Simple Increment (1 iterations)                                                  0 ops/sec
7.   Simple Increment (1 iterations)                                                  0 ops/sec
8.   Simple Increment (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Increment (1 iterations) is 0.00x faster than Simple Increment (1 iterations) in this category.

### groups/02-write/write-x10000.bench.ts > Write - 10000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Increment (1 iterations)                                                  0 ops/sec
🥈   Simple Increment (1 iterations)                                                  0 ops/sec
🥉   Simple Increment (1 iterations)                                                  0 ops/sec
4.   Simple Increment (1 iterations)                                                  0 ops/sec
5.   Simple Increment (1 iterations)                                                  0 ops/sec
6.   Simple Increment (1 iterations)                                                  0 ops/sec
7.   Simple Increment (1 iterations)                                                  0 ops/sec
8.   Simple Increment (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Increment (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Increment (1 iterations) is 0.00x faster than Simple Increment (1 iterations) in this category.

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
*Last generated: 2025-11-11T00:33:35.364Z*
