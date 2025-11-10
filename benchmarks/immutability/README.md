# Immutability Benchmark 🔄

Comprehensive performance testing of JavaScript immutability libraries and patterns.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 10, 2025
- **Last Run:** 11:23:44 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 10, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.0/100 | 78.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.6/100 | 74.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.8/100 | 33.7% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items)
- [Set - Large (100 items)](#set-large-100-items)
- [Undo/Redo - Inverse Patches](#undoredo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large Array Update (1000 items)](#large-array-update-1000-items)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes)

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.99K
🥈 Immer                █████████████████████ 113.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.99K | ±1.87% | 4.5874ms | 9.1370ms | 108.99K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.21K | ±1.49% | 8.8333ms | 24.7060ms | 56.60K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 959.73K
🥈 Immer                ██████ 132.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 959.73K | ±0.44% | 1.0420ms | 1.6330ms | 479.86K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.12K | ±1.52% | 7.5690ms | 15.0580ms | 66.06K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.70K
🥈 Immer                ██████████████ 61.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.70K | ±1.60% | 5.7241ms | 11.3210ms | 87.35K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.31K | ±1.45% | 16.3102ms | 30.7270ms | 30.66K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 721.64K
🥈 Mutative             ███████████████████████████ 479.71K
🥉 Immer                ██████████ 176.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 721.64K | ±1.56% | 1.3857ms | 3.0150ms | 360.82K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.71K | ±0.40% | 2.0846ms | 2.8750ms | 239.85K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.40K | ±0.86% | 5.6690ms | 9.5180ms | 88.20K |

**Key Insight:** Craft is **4.09x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.19M
🥈 Mutative             ██████████████ 430.14K
🥉 Immer                █████ 158.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.19M | ±0.39% | 0.8426ms | 1.1720ms | 593.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 430.14K | ±0.39% | 2.3248ms | 2.9760ms | 215.07K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.47K | ±0.49% | 6.3103ms | 13.5750ms | 79.24K |

**Key Insight:** Craft is **7.49x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 832.00K
🥈 Mutative             ██████████████████████ 457.72K
🥉 Immer                ████████ 165.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 832.00K | ±0.38% | 1.2019ms | 1.5330ms | 416.00K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.72K | ±0.39% | 2.1848ms | 2.5750ms | 228.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.62K | ±0.36% | 6.0379ms | 13.9260ms | 82.81K |

**Key Insight:** Craft is **5.02x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 803.97K
🥈 Mutative             ██████████████████████ 450.75K
🥉 Immer                █████████ 181.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 803.97K | ±0.52% | 1.2438ms | 1.7030ms | 401.99K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.75K | ±0.43% | 2.2185ms | 2.5950ms | 225.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.99K | ±0.41% | 5.4947ms | 7.5140ms | 91.00K |

**Key Insight:** Craft is **4.42x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.02K
🥈 Mutative             █████████████████████████████████ 149.84K
🥉 Immer                ██████████████████ 79.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.02K | ±0.48% | 5.5242ms | 8.1550ms | 90.51K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.84K | ±0.48% | 6.6736ms | 10.8900ms | 74.92K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.44K | ±0.71% | 12.5883ms | 24.0150ms | 39.72K |

**Key Insight:** Craft is **2.28x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.92K
🥈 Mutative             ██████████████ 76.64K
🥉 Immer                ██ 13.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.92K | ±0.46% | 4.4264ms | 5.4700ms | 112.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.64K | ±0.44% | 13.0474ms | 22.5920ms | 38.32K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.70K | ±0.63% | 72.9790ms | 97.8920ms | 6.85K |

**Key Insight:** Craft is **16.49x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.80K
🥈 Immer                █████████████ 72.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.80K | ±0.38% | 4.4286ms | 5.1000ms | 112.90K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.31K | ±0.26% | 13.8296ms | 24.6460ms | 36.16K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 989.69K
🥉 Immutability Helper  █████████████████████████████████████ 977.00K
   Craft                ████████████████████████████████████ 965.26K
   Immer                ██████████████████████████ 706.34K
   Seamless Immutable   █████ 127.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.62M | ±0.09% | 0.0684ms | 0.1100ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.15% | 0.9375ms | 1.4930ms | 533.33K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 989.69K | ±0.37% | 1.0104ms | 1.2720ms | 494.85K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 977.00K | ±0.31% | 1.0235ms | 1.9140ms | 488.50K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 965.26K | ±2.48% | 1.0360ms | 2.6850ms | 482.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 706.34K | ±1.79% | 1.4157ms | 3.1750ms | 353.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.63K | ±0.26% | 7.8352ms | 15.9800ms | 63.81K |

**Key Insight:** Native Spread is **114.54x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 518.06K
🥈 Mutative             ██████████████████████████████ 392.27K
🥉 Craft                ███████████████████████████ 346.80K
   Immutable.js         ███████████████████ 242.56K
   Immer                ████████████ 153.46K
   Seamless Immutable   ███ 37.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.15% | 0.0848ms | 0.1310ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 518.06K | ±0.31% | 1.9303ms | 2.2040ms | 259.03K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.27K | ±5.15% | 2.5493ms | 3.9070ms | 196.13K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 346.80K | ±2.59% | 2.8835ms | 5.3400ms | 173.40K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 242.56K | ±0.35% | 4.1227ms | 4.7390ms | 121.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.46K | ±1.86% | 6.5165ms | 12.1730ms | 76.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.25K | ±0.48% | 26.8482ms | 38.4210ms | 18.62K |

**Key Insight:** Native Spread is **316.57x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  █████████████████████████████████ 1.41M
🥉 Craft                ████████████ 515.03K
   Mutative             ██████████ 434.24K
   Immer                ██████ 280.07K
   Seamless Immutable   █ 62.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.13M | ±0.78% | 0.0824ms | 0.1100ms | 6.07M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±1.67% | 0.5762ms | 0.9220ms | 867.69K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.27% | 0.7072ms | 0.7520ms | 707.06K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 515.03K | ±0.38% | 1.9416ms | 2.3640ms | 257.52K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 434.24K | ±0.41% | 2.3029ms | 2.6550ms | 217.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.07K | ±0.52% | 3.5705ms | 6.9930ms | 140.03K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.14K | ±0.29% | 16.0923ms | 25.4370ms | 31.07K |

**Key Insight:** Native Spread is **195.26x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 800.71K
🥈 Immutability Helper  ████████████████████████████ 569.29K
🥉 Craft                ████████████████ 315.71K
   Mutative             ███████████ 218.81K
   Immer                ███████ 142.08K
   Seamless Immutable   ███ 59.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.46M | ±1.10% | 0.0803ms | 0.1010ms | 6.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 800.71K | ±0.59% | 1.2489ms | 2.0640ms | 400.36K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 569.29K | ±0.26% | 1.7566ms | 1.8640ms | 284.64K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.71K | ±0.46% | 3.1674ms | 3.6360ms | 157.86K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.81K | ±0.45% | 4.5702ms | 5.2800ms | 109.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.08K | ±0.50% | 7.0382ms | 9.9680ms | 71.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.95K | ±0.43% | 16.6810ms | 25.8680ms | 29.98K |

**Key Insight:** Native Filter is **207.76x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 482.19K
🥈 Mutative             ██████████████████████████████████████ 461.05K
🥉 Immutability Helper  ████████████████████████████████ 391.24K
   Immer                ███████████████████████ 282.13K
   Immutable.js         ███████████████ 177.91K
   Seamless Immutable   ███ 31.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.49M | ±0.95% | 0.0871ms | 0.1300ms | 5.74M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 482.19K | ±0.99% | 2.0739ms | 3.4260ms | 241.09K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 461.05K | ±0.77% | 2.1689ms | 2.6350ms | 230.53K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 391.24K | ±0.64% | 2.5560ms | 3.1460ms | 195.62K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.13K | ±0.32% | 3.5444ms | 4.2480ms | 141.07K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 177.91K | ±1.71% | 5.6209ms | 9.6780ms | 88.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.73K | ±0.42% | 31.5162ms | 41.4070ms | 15.87K |

**Key Insight:** Native Map is **362.01x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.32K
🥈 Craft                ████████████████████████████████████ 274.73K
🥉 Mutative             ████████████████████████████ 216.86K
   Immutable.js         ███████████████████████ 176.06K
   Immer                █████████████ 96.42K
   Seamless Immutable   ███ 22.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.11M | ±0.62% | 0.1097ms | 0.1400ms | 4.56M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.32K | ±0.40% | 3.2434ms | 3.6560ms | 154.16K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 274.73K | ±0.45% | 3.6399ms | 4.7490ms | 137.37K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.86K | ±0.47% | 4.6112ms | 5.7200ms | 108.43K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.06K | ±0.27% | 5.6800ms | 7.1440ms | 88.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.42K | ±0.50% | 10.3708ms | 19.4570ms | 48.21K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.36K | ±0.40% | 44.7290ms | 80.5390ms | 11.18K |

**Key Insight:** Native Spread is **407.64x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 353.96K
🥈 Immer                ███ 30.03K
🥉 Craft                ███ 22.14K
   Immutability Helper  █ 6.47K
   Immutable.js         █ 739.77
   Seamless Immutable   █ 254.82
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 355.51K | ±0.66% | 2.8129ms | 3.3270ms | 177.75K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 353.96K | ±0.78% | 2.8252ms | 5.4200ms | 176.98K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.03K | ±0.39% | 33.3005ms | 44.5030ms | 15.02K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.14K | ±0.30% | 45.1668ms | 54.4110ms | 11.07K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.47K | ±0.46% | 154.6495ms | 178.3010ms | 3.23K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 739.77 | ±1.20% | 1351.7663ms | 1828.2350ms | 370.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.82 | ±0.60% | 3924.2893ms | 4463.9620ms | 128.00 |

**Key Insight:** Native Map is **1395.11x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.37K
🥈 Craft                ████████████████████████████████████████ 273.09K
🥉 Mutative             █████████████████████████████ 198.89K
   Immutable.js         ███████████████████████ 160.26K
   Immer                ██████████████████ 125.02K
   Seamless Immutable   ███ 18.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.49M | ±1.02% | 0.1541ms | 0.1800ms | 3.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.37K | ±0.40% | 3.6447ms | 4.0470ms | 137.19K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.09K | ±0.48% | 3.6619ms | 4.0780ms | 136.54K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.89K | ±0.50% | 5.0279ms | 6.4310ms | 99.45K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.26K | ±0.58% | 6.2399ms | 8.3860ms | 80.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.02K | ±0.43% | 7.9988ms | 14.2760ms | 62.51K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.80K | ±0.36% | 53.2039ms | 63.1170ms | 9.40K |

**Key Insight:** Native Spread is **345.32x faster** than Seamless Immutable in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-10T23:33:28.323Z*
