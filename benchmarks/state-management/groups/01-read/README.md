# Read Operations

Simple read and high-frequency read patterns.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 28.3M | 39.9M | Dec 6 |
| 🥈 2 | **Jotai** | 2.15.1 | 4.3 KB | 24.6M | 36.3M | Dec 6 |
| 🥉 3 | **Zen** | 1.2.1 | 5.3 KB | 22.6M | 32.2M | Nov 7 |
|  4 | **Preact Signals** | 2.4.0 | 3.0 KB | 14.7M | 34.3M | Nov 7 |
|  5 | **MobX** | 6.15.0 | 17.6 KB | 9.8M | 25.2M | Dec 6 |
|  6 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 2.5M | 6.6M | Dec 6 |
|  7 | **Valtio** | 2.2.0 | 3.1 KB | 2.5M | 4.9M | Nov 6 |
|  8 | **Zustand** | 5.0.8 | 👑 1.2 KB | 993K | 2.7M | Nov 6 |

---

## Detailed Results

### groups/01-read/read-x1.bench.ts > Read Operations - x1

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     39.9M ops/sec
🥈   Jotai              ████████████████████████████████████         36.3M ops/sec
🥉   Preact Signals     ██████████████████████████████████           34.3M ops/sec
4.   Zen                ████████████████████████████████             32.2M ops/sec
5.   MobX               █████████████████████████                    25.2M ops/sec
6.   Solid Signals      ████████████████████                         20.1M ops/sec
7.   Jotai              █████████████████                            16.6M ops/sec
8.   Zen                ████████████████                             15.9M ops/sec
9.   Redux Toolkit      ███████                                       6.6M ops/sec
10.  Preact Signals     ██████                                        6.3M ops/sec
11.  Valtio             █████                                         4.9M ops/sec
12.  MobX               ████                                          3.8M ops/sec
13.  Zustand            ███                                           2.7M ops/sec
14.  Valtio             █                                             1.3M ops/sec
15.  Redux Toolkit      █                                             960K ops/sec
16.  Zustand                                                          363K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Solid Signals** | 39,913,249.366 | ±0.04% | 0.0251ms | 0.0420ms |  |
| 🥈 | **Jotai** | 36,293,502.403 | ±1.42% | 0.0276ms | 0.0420ms |  |
| 🥉 | **Preact Signals** | 34,347,738.626 | ±0.04% | 0.0291ms | 0.0420ms |  |
| 4 | **Zen** | 32,186,171.807 | ±0.16% | 0.0311ms | 0.0420ms |  |
| 5 | **MobX** | 25,151,160.692 | ±0.10% | 0.0398ms | 0.0840ms |  |
| 6 | **Solid Signals** | 20,090,065.719 | ±0.55% | 0.0498ms | 0.1250ms |  |
| 7 | **Jotai** | 16,623,015.878 | ±0.42% | 0.0602ms | 0.1250ms |  |
| 8 | **Zen** | 15,863,964.921 | ±0.45% | 0.0630ms | 0.1250ms |  |
| 9 | **Redux Toolkit** | 6,578,053.737 | ±0.08% | 0.1520ms | 0.2080ms |  |
| 10 | **Preact Signals** | 6,274,223.423 | ±0.43% | 0.1594ms | 0.3340ms |  |
| 11 | **Valtio** | 4,920,751.715 | ±0.38% | 0.2032ms | 0.2500ms |  |
| 12 | **MobX** | 3,831,724.429 | ±0.35% | 0.2610ms | 0.3340ms |  |
| 13 | **Zustand** | 2,716,212.713 | ±0.61% | 0.3682ms | 0.7920ms |  |
| 14 | **Valtio** | 1,255,349.016 | ±0.02% | 0.7966ms | 0.9580ms |  |
| 15 | **Redux Toolkit** | 960,311.983 | ±0.21% | 1.0413ms | 1.3330ms |  |
| 16 | **Zustand** | 363,178.25 | ±1.18% | 2.7535ms | 3.5000ms |  |

**Key Insight:** Solid Signals is 109.90x faster than Zustand in this category.

### groups/01-read/read-x1000.bench.ts > Read - 1000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Read (1 iterations)                                                  0 ops/sec
🥈   Simple Read (1 iterations)                                                  0 ops/sec
🥉   Simple Read (1 iterations)                                                  0 ops/sec
4.   Simple Read (1 iterations)                                                  0 ops/sec
5.   Simple Read (1 iterations)                                                  0 ops/sec
6.   Simple Read (1 iterations)                                                  0 ops/sec
7.   Simple Read (1 iterations)                                                  0 ops/sec
8.   Simple Read (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Read (1 iterations) is 0.00x faster than Simple Read (1 iterations) in this category.

### groups/01-read/read-x10000.bench.ts > Read - 10000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Read (1 iterations)                                                  0 ops/sec
🥈   Simple Read (1 iterations)                                                  0 ops/sec
🥉   Simple Read (1 iterations)                                                  0 ops/sec
4.   Simple Read (1 iterations)                                                  0 ops/sec
5.   Simple Read (1 iterations)                                                  0 ops/sec
6.   Simple Read (1 iterations)                                                  0 ops/sec
7.   Simple Read (1 iterations)                                                  0 ops/sec
8.   Simple Read (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Read (1 iterations) is 0.00x faster than Simple Read (1 iterations) in this category.

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
*Last generated: 2025-11-11T00:33:35.325Z*
