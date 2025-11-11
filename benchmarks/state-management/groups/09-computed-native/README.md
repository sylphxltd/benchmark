# Computed Native

Native computed values.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/09-computed-native/computed-native.bench.ts > Simple Computed](#groups09-computed-nativecomputed-nativebenchts-simple-computed)
  - [groups/09-computed-native/computed-native.bench.ts > Chained Computed](#groups09-computed-nativecomputed-nativebenchts-chained-computed)
  - [groups/09-computed-native/computed-native.bench.ts > Computed Update Performance](#groups09-computed-nativecomputed-nativebenchts-computed-update-performance)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.9.10 | 4.0 KB | 👑 30.8M | 38.5M | Dec 6 |
| 🥈 2 | [**Zen**](https://github.com/sylphxltd/zen) | 1.2.1 | 5.3 KB | 7.0M | 33.6M | Nov 7 |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.4.0 | 👑 3.0 KB | 5.1M | 22.1M | Nov 7 |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 6.15.0 | 17.6 KB | 702K | 4.0M | Dec 6 |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.15.1 | 4.3 KB | 109K | 640K | Dec 6 |

---

## Detailed Results

### groups/09-computed-native/computed-native.bench.ts > Simple Computed

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     38.5M ops/sec
🥈   Zen                ███████████████████████                      22.4M ops/sec
🥉   Preact Signals     ███████████████████████                      22.1M ops/sec
4.   MobX               ████                                          4.0M ops/sec
5.   Jotai              █                                             640K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,515,286.151 | ±0.24% | 0.0260ms | 0.0830ms |  |
| 🥈 | [**Zen**](https://github.com/sylphxltd/zen) | 22,373,839.687 | ±0.71% | 0.0447ms | 0.0840ms |  |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 22,057,344.5 | ±0.18% | 0.0453ms | 0.0840ms |  |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 4,049,759.085 | ±0.22% | 0.2469ms | 0.4170ms |  |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 639,976.367 | ±3.96% | 1.5626ms | 2.9160ms |  |

**Key Insight:** Solid Signals is 60.18x faster than Jotai in this category.

### groups/09-computed-native/computed-native.bench.ts > Chained Computed

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     37.9M ops/sec
🥈   Zen                ███████████████████████████████████          33.6M ops/sec
🥉   Preact Signals     █████████████                                12.1M ops/sec
4.   MobX               ██                                            2.2M ops/sec
5.   Jotai                                                            394K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 37,902,421.773 | ±0.04% | 0.0264ms | 0.0830ms |  |
| 🥈 | [**Zen**](https://github.com/sylphxltd/zen) | 33,622,057.865 | ±0.13% | 0.0297ms | 0.0830ms |  |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 12,069,178.624 | ±0.07% | 0.0829ms | 0.1670ms |  |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 2,153,431.915 | ±0.56% | 0.4644ms | 0.8750ms |  |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 394,077.889 | ±4.55% | 2.5376ms | 3.5840ms |  |

**Key Insight:** Solid Signals is 96.18x faster than Jotai in this category.

### groups/09-computed-native/computed-native.bench.ts > Computed Update Performance

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     19.9M ops/sec
🥈   Preact Signals     █                                             486K ops/sec
🥉   Zen                █                                             454K ops/sec
4.   MobX                                                              40K ops/sec
5.   Jotai                                                              5K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 19,921,867.928 | ±0.03% | 0.0502ms | 0.0840ms |  |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 485,568.906 | ±0.12% | 2.0594ms | 3.3330ms |  |
| 🥉 | [**Zen**](https://github.com/sylphxltd/zen) | 454,470.735 | ±0.33% | 2.2004ms | 3.7080ms |  |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 39,627.784 | ±0.34% | 25.2348ms | 46.9580ms |  |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 5,174.965 | ±10.46% | 193.2380ms | 492.5830ms |  |

**Key Insight:** Solid Signals is 3849.66x faster than Jotai in this category.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:computed-native

# Or run specific test file
npx vitest bench groups/09-computed-native/*.bench.ts
```

---
*Last generated: 2025-11-11T01:29:45.027Z*
