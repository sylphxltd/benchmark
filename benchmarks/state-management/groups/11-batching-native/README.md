# Batching Native

Built-in batching.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/11-batching-native/batching-native.bench.ts > Batched Updates (3 fields)](#groups11-batching-nativebatching-nativebenchts-batched-updates-3-fields)
  - [groups/11-batching-native/batching-native.bench.ts > Unbatched Updates (3 fields)](#groups11-batching-nativebatching-nativebenchts-unbatched-updates-3-fields)
  - [groups/11-batching-native/batching-native.bench.ts > Large Batch (100 updates)](#groups11-batching-nativebatching-nativebenchts-large-batch-100-updates)
  - [groups/11-batching-native/batching-native.bench.ts > Batch with Subscriptions](#groups11-batching-nativebatching-nativebenchts-batch-with-subscriptions)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.9.10 | 4.0 KB | 👑 37.3M | 42.5M | Dec 6 |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.2.0 | 👑 3.1 KB | 1.7M | 4.8M | Nov 6 |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 6.15.0 | 17.6 KB | 1.6M | 3.8M | Dec 6 |

---

## Detailed Results

### groups/11-batching-native/batching-native.bench.ts > Batched Updates (3 fields)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     39.8M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,849,314.008 | ±1.32% | 0.0251ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,819,574.535 | ±0.11% | 0.2075ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,262,647.674 | ±0.21% | 0.3065ms | 0.3750ms |  |

**Key Insight:** Solid Signals is 12.21x faster than MobX in this category.

### groups/11-batching-native/batching-native.bench.ts > Unbatched Updates (3 fields)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     42.5M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ████                                          3.8M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 42,490,501.196 | ±0.06% | 0.0235ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,849,005.874 | ±0.27% | 0.2062ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,799,625.992 | ±0.03% | 0.2632ms | 0.3330ms |  |

**Key Insight:** Solid Signals is 11.18x faster than MobX in this category.

### groups/11-batching-native/batching-native.bench.ts > Large Batch (100 updates)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     27.9M ops/sec
🥈   MobX                                                             146K ops/sec
🥉   Valtio                                                            68K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 27,945,211.82 | ±0.08% | 0.0358ms | 0.0420ms |  |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 146,456.844 | ±0.03% | 6.8279ms | 8.3750ms |  |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 67,668.432 | ±0.28% | 14.7779ms | 17.2920ms |  |

**Key Insight:** Solid Signals is 412.97x faster than Valtio in this category.

### groups/11-batching-native/batching-native.bench.ts > Batch with Subscriptions

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     41.1M ops/sec
🥈   Valtio             █████                                         4.7M ops/sec
🥉   MobX               ███                                           3.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,108,355.835 | ±0.11% | 0.0243ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,713,770.906 | ±3.79% | 0.2121ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,205,211.917 | ±0.55% | 0.3120ms | 0.3750ms |  |

**Key Insight:** Solid Signals is 12.83x faster than MobX in this category.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:batching-native

# Or run specific test file
npx vitest bench groups/11-batching-native/*.bench.ts
```

---
*Last generated: 2025-11-11T01:29:45.166Z*
