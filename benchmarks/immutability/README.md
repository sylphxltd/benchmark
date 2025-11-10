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
- **Last Run:** 2:37:01 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.1/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.4/100 | 77.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.1/100 | 75.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.6% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 216.66K
🥈 Immer                ████████████████████ 109.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.66K | ±2.08% | 4.6155ms | 9.0270ms | 108.33K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 109.43K | ±1.79% | 9.1381ms | 25.2370ms | 54.72K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.02M
🥈 Immer                █████ 129.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.02M | ±0.17% | 0.9766ms | 1.2020ms | 511.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.90K | ±1.60% | 7.6984ms | 16.8810ms | 64.95K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.77K
🥈 Immer                ██████████████ 60.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.77K | ±1.73% | 5.7217ms | 12.0120ms | 87.39K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.47K | ±1.61% | 16.5374ms | 32.4710ms | 30.23K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 748.33K
🥈 Mutative             █████████████████████████ 470.84K
🥉 Immer                █████████ 176.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 748.33K | ±1.64% | 1.3363ms | 2.9760ms | 374.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 470.84K | ±0.70% | 2.1239ms | 2.6550ms | 235.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.31K | ±1.05% | 5.6719ms | 9.5270ms | 88.16K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 425.98K
🥉 Immer                █████ 154.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.52% | 0.7902ms | 1.1620ms | 632.79K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 425.98K | ±0.52% | 2.3475ms | 3.1150ms | 212.99K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.67K | ±0.39% | 6.4654ms | 12.1930ms | 77.33K |

**Key Insight:** Craft is **8.18x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 872.76K
🥈 Mutative             █████████████████████ 457.78K
🥉 Immer                ████████ 170.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 872.76K | ±0.43% | 1.1458ms | 1.5430ms | 436.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.78K | ±0.44% | 2.1845ms | 2.6340ms | 228.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 170.59K | ±0.40% | 5.8622ms | 7.1940ms | 85.29K |

**Key Insight:** Craft is **5.12x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 837.72K
🥈 Mutative             █████████████████████ 447.03K
🥉 Immer                █████████ 183.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 837.72K | ±0.65% | 1.1937ms | 1.5730ms | 418.86K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 447.03K | ±0.57% | 2.2370ms | 2.7250ms | 223.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.34K | ±0.40% | 5.4544ms | 6.3720ms | 91.67K |

**Key Insight:** Craft is **4.57x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.72K
🥈 Mutative             ████████████████████████████████ 147.10K
🥉 Immer                █████████████████ 78.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.72K | ±0.50% | 5.5029ms | 8.3060ms | 90.86K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.10K | ±0.48% | 6.7981ms | 14.0260ms | 73.56K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.81K | ±0.68% | 12.6883ms | 25.6770ms | 39.41K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.88K
🥈 Mutative             ██████████████ 76.79K
🥉 Immer                ██ 13.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.88K | ±0.60% | 4.4469ms | 5.6310ms | 112.44K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.79K | ±0.52% | 13.0225ms | 22.5420ms | 38.40K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.57K | ±0.57% | 73.6819ms | 157.2320ms | 6.79K |

**Key Insight:** Craft is **16.57x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.77K
🥈 Immer                █████████████ 71.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.77K | ±0.46% | 4.4098ms | 5.9010ms | 113.38K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.93K | ±0.29% | 13.9033ms | 23.8040ms | 35.96K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  █████████████████████████████████████ 990.02K
🥉 Mutative             ████████████████████████████████████ 978.45K
   Craft                ███████████████████████████████████ 954.46K
   Immer                ██████████████████████████ 690.58K
   Seamless Immutable   █████ 129.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.42M | ±0.11% | 0.0694ms | 0.1100ms | 7.21M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.09% | 0.9287ms | 1.1620ms | 538.37K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 990.02K | ±0.50% | 1.0101ms | 1.2620ms | 495.01K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 978.45K | ±0.48% | 1.0220ms | 1.3430ms | 489.22K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 954.46K | ±2.64% | 1.0477ms | 2.6850ms | 477.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 690.58K | ±2.13% | 1.4480ms | 3.1860ms | 345.29K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.98K | ±0.40% | 7.6937ms | 11.9220ms | 64.99K |

**Key Insight:** Native Spread is **110.92x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 520.94K
🥈 Mutative             ██████████████████████████████ 394.01K
🥉 Craft                █████████████████████████ 321.70K
   Immutable.js         ████████████████ 214.69K
   Immer                ███████████ 149.26K
   Seamless Immutable   ███ 38.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.71M | ±0.11% | 0.0854ms | 0.1200ms | 5.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 520.94K | ±0.32% | 1.9196ms | 2.2740ms | 260.47K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 394.01K | ±0.43% | 2.5380ms | 4.9890ms | 197.00K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 321.70K | ±2.72% | 3.1085ms | 5.8710ms | 160.85K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 214.69K | ±1.61% | 4.6580ms | 8.8860ms | 107.34K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 149.26K | ±2.42% | 6.6997ms | 15.9700ms | 74.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.01K | ±0.36% | 26.3072ms | 36.5480ms | 19.01K |

**Key Insight:** Native Spread is **308.19x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  █████████████████████████████████ 1.44M
🥉 Craft                ████████████ 509.09K
   Mutative             ██████████ 421.48K
   Immer                ██████ 282.44K
   Seamless Immutable   █ 61.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.38M | ±1.31% | 0.0879ms | 0.1200ms | 5.69M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.49% | 0.5735ms | 0.9120ms | 871.87K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.16% | 0.6929ms | 0.7620ms | 721.65K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 509.09K | ±0.59% | 1.9643ms | 2.5250ms | 254.55K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 421.48K | ±0.68% | 2.3726ms | 2.9960ms | 210.74K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.44K | ±0.71% | 3.5406ms | 6.5020ms | 141.22K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.35K | ±0.70% | 16.2989ms | 26.1690ms | 30.68K |

**Key Insight:** Native Spread is **185.51x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 786.69K
🥈 Immutability Helper  ██████████████████████████████ 581.83K
🥉 Craft                ████████████████ 310.81K
   Mutative             ███████████ 219.72K
   Immer                ███████ 141.51K
   Seamless Immutable   ███ 60.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.78M | ±0.71% | 0.0783ms | 0.1100ms | 6.39M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 786.69K | ±1.12% | 1.2711ms | 1.8730ms | 393.42K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 581.83K | ±0.37% | 1.7187ms | 1.8740ms | 290.92K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 310.81K | ±0.86% | 3.2174ms | 6.2510ms | 155.41K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.72K | ±0.64% | 4.5512ms | 5.2100ms | 109.86K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.51K | ±0.73% | 7.0668ms | 12.4740ms | 70.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.45K | ±0.69% | 16.5429ms | 25.6480ms | 30.23K |

**Key Insight:** Native Filter is **211.40x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 492.09K
🥈 Mutative             ████████████████████████████████████ 445.09K
🥉 Immutability Helper  ████████████████████████████████ 398.35K
   Immer                ███████████████████████ 284.64K
   Immutable.js         ███████████████ 187.55K
   Seamless Immutable   ███ 31.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.98M | ±1.46% | 0.0911ms | 0.1200ms | 5.49M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 492.09K | ±0.88% | 2.0322ms | 2.7560ms | 246.04K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 445.09K | ±1.02% | 2.2468ms | 2.8350ms | 222.54K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.35K | ±0.31% | 2.5104ms | 3.1060ms | 199.18K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.64K | ±0.40% | 3.5132ms | 4.2580ms | 142.32K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.55K | ±0.95% | 5.3318ms | 6.2110ms | 93.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.48K | ±0.72% | 31.7640ms | 42.5890ms | 15.74K |

**Key Insight:** Native Map is **348.76x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.11K
🥈 Craft                ███████████████████████████████████ 273.45K
🥉 Mutative             ███████████████████████████ 210.44K
   Immutable.js         ██████████████████████ 171.44K
   Immer                █████████████ 98.13K
   Seamless Immutable   ███ 22.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.88M | ±1.15% | 0.1126ms | 0.1500ms | 4.44M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.11K | ±0.87% | 3.2351ms | 3.7170ms | 154.56K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.45K | ±0.75% | 3.6570ms | 4.2480ms | 136.72K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 210.44K | ±0.65% | 4.7520ms | 6.3020ms | 105.22K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.44K | ±0.34% | 5.8331ms | 7.4640ms | 85.72K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.13K | ±0.90% | 10.1904ms | 19.3770ms | 49.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.46K | ±0.81% | 44.5249ms | 55.1130ms | 11.23K |

**Key Insight:** Native Spread is **395.28x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 343.71K
🥈 Immer                ███ 29.80K
🥉 Craft                ███ 21.92K
   Immutability Helper  █ 6.37K
   Immutable.js         █ 728.99
   Seamless Immutable   █ 256.81
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 351.67K | ±0.67% | 2.8435ms | 3.4370ms | 175.84K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 343.71K | ±0.72% | 2.9094ms | 5.0200ms | 171.85K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.80K | ±0.51% | 33.5602ms | 43.9610ms | 14.90K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.92K | ±0.47% | 45.6190ms | 62.8470ms | 10.96K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.37K | ±0.49% | 157.0450ms | 184.6540ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 728.99 | ±1.11% | 1371.7582ms | 1957.6690ms | 365.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.81 | ±0.66% | 3893.8755ms | 4442.9580ms | 129.00 |

**Key Insight:** Native Map is **1369.37x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.13K
🥈 Craft                ████████████████████████████████████████ 276.91K
🥉 Mutative             ████████████████████████████ 197.48K
   Immutable.js         ███████████████████████ 161.76K
   Immer                ██████████████████ 127.62K
   Seamless Immutable   ███ 19.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.54M | ±0.62% | 0.1529ms | 0.1810ms | 3.27M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.13K | ±0.36% | 3.5955ms | 4.0180ms | 139.06K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 276.91K | ±0.56% | 3.6113ms | 4.3980ms | 138.46K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.48K | ±0.58% | 5.0638ms | 6.0010ms | 98.74K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.76K | ±0.69% | 6.1819ms | 8.3160ms | 80.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.62K | ±0.57% | 7.8359ms | 14.4670ms | 63.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.24K | ±0.54% | 51.9761ms | 61.7950ms | 9.62K |

**Key Insight:** Native Spread is **340.03x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T14:42:06.251Z*
