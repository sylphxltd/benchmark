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

**Methodology**:
- Each library's raw performance (ops/sec) is measured for each test in this group
- The group score is calculated using geometric mean of all test results
- Formula: `Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)`
- Geometric mean gives balanced weight to all tests regardless of their magnitude

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 30.8M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 7.0M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 5.1M |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 702K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 109K |

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

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,515,286 | ±0.24% | 0.0260ms | 0.0830ms | 0 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 22,373,840 | ±0.71% | 0.0447ms | 0.0840ms | 0 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 22,057,345 | ±0.18% | 0.0453ms | 0.0840ms | 0 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 4,049,759 | ±0.22% | 0.2469ms | 0.4170ms | 0 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 639,976 | ±3.96% | 1.5626ms | 2.9160ms | 0 |

**Key Insight:** Solid Signals is 60.18x faster than Jotai in this test.

### groups/09-computed-native/computed-native.bench.ts > Chained Computed

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     37.9M ops/sec
🥈   Zen                ███████████████████████████████████          33.6M ops/sec
🥉   Preact Signals     █████████████                                12.1M ops/sec
4.   MobX               ██                                            2.2M ops/sec
5.   Jotai                                                            394K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 37,902,422 | ±0.04% | 0.0264ms | 0.0830ms | 0 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 33,622,058 | ±0.13% | 0.0297ms | 0.0830ms | 0 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 12,069,179 | ±0.07% | 0.0829ms | 0.1670ms | 0 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 2,153,432 | ±0.56% | 0.4644ms | 0.8750ms | 0 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 394,078 | ±4.55% | 2.5376ms | 3.5840ms | 0 |

**Key Insight:** Solid Signals is 96.18x faster than Jotai in this test.

### groups/09-computed-native/computed-native.bench.ts > Computed Update Performance

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     19.9M ops/sec
🥈   Preact Signals     █                                             486K ops/sec
🥉   Zen                █                                             454K ops/sec
4.   MobX                                                              40K ops/sec
5.   Jotai                                                              5K ops/sec
```

| Rank | Library | Ops/sec | Avg Variance | Avg Mean | Max p99 | Total Samples |
|:----:|---------|---------|--------------|----------|---------|---------------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 19,921,868 | ±0.03% | 0.0502ms | 0.0840ms | 0 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 485,569 | ±0.12% | 2.0594ms | 3.3330ms | 0 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 454,471 | ±0.33% | 2.2004ms | 3.7080ms | 0 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 39,628 | ±0.34% | 25.2348ms | 46.9580ms | 0 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 5,175 | ±10.46% | 193.2380ms | 492.5830ms | 0 |

**Key Insight:** Solid Signals is 3849.66x faster than Jotai in this test.

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
*Last generated: 2025-11-11T04:05:19.601Z*
