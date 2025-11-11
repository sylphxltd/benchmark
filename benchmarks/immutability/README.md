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

- **Last Updated:** November 11, 2025
- **Last Run:** 1:19:08 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.3/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.0/100 | 75.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.2/100 | 42.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.7% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.5% |

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
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

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
🥇 Craft                ████████████████████████████████████████ 218.21K
🥈 Immer                ████████████████████ 111.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 218.21K | ±2.02% | 4.5827ms | 9.3070ms | 109.11K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.35K | ±1.83% | 8.9805ms | 25.4770ms | 55.68K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 967.87K
🥈 Immer                █████ 132.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 967.87K | ±0.16% | 1.0332ms | 1.4430ms | 483.94K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.26K | ±1.41% | 7.5609ms | 14.8070ms | 66.13K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.96K
🥈 Immer                ██████████████ 60.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.96K | ±1.71% | 5.6509ms | 11.5610ms | 88.48K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.57K | ±1.59% | 16.5087ms | 36.5980ms | 30.29K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 743.48K
🥈 Mutative             █████████████████████████ 463.01K
🥉 Immer                ██████████ 177.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 743.48K | ±1.70% | 1.3450ms | 3.0450ms | 371.74K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 463.01K | ±0.65% | 2.1598ms | 2.5950ms | 231.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.66K | ±0.90% | 5.6287ms | 10.4400ms | 88.83K |

**Key Insight:** Craft is **4.18x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 430.02K
🥉 Immer                █████ 159.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.68% | 0.7931ms | 1.1830ms | 630.43K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 430.02K | ±0.43% | 2.3255ms | 2.6950ms | 215.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.97K | ±0.35% | 6.2513ms | 9.1170ms | 79.98K |

**Key Insight:** Craft is **7.88x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 866.61K
🥈 Mutative             █████████████████████ 451.51K
🥉 Immer                ████████ 169.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 866.61K | ±0.40% | 1.1539ms | 1.5030ms | 433.31K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.51K | ±0.42% | 2.2148ms | 2.6050ms | 225.76K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.36K | ±0.34% | 5.9047ms | 10.1080ms | 84.68K |

**Key Insight:** Craft is **5.12x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 867.41K
🥈 Mutative             █████████████████████ 445.86K
🥉 Immer                ████████ 181.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 867.41K | ±0.39% | 1.1529ms | 1.4430ms | 433.71K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.86K | ±0.44% | 2.2429ms | 2.6750ms | 222.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.55K | ±0.36% | 5.5082ms | 8.9270ms | 90.78K |

**Key Insight:** Craft is **4.78x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 186.50K
🥈 Mutative             ████████████████████████████████ 149.93K
🥉 Immer                █████████████████ 78.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 186.50K | ±0.52% | 5.3618ms | 8.1250ms | 93.25K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.93K | ±0.54% | 6.6697ms | 10.0990ms | 74.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.26K | ±0.55% | 12.7786ms | 23.4630ms | 39.13K |

**Key Insight:** Craft is **2.38x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.04K
🥈 Mutative             █████████████ 76.08K
🥉 Immer                ██ 13.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.04K | ±0.50% | 4.4240ms | 5.7510ms | 113.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.08K | ±0.50% | 13.1435ms | 22.8530ms | 38.04K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.54K | ±0.41% | 73.8493ms | 98.5440ms | 6.77K |

**Key Insight:** Craft is **16.69x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.51K
🥈 Immer                █████████████ 71.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.51K | ±0.37% | 4.4941ms | 8.9470ms | 111.26K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.14K | ±0.42% | 14.0569ms | 24.9060ms | 35.57K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.02M
🥈 Immutability Helper  ██████████████████████████████████████ 971.02K
🥉 Mutative             ████████████████████████████████████ 931.65K
   Craft                ██████████████████████████████████ 862.75K
   Immer                █████████████████████████ 642.65K
   Seamless Immutable   █████ 129.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.59M | ±0.10% | 0.0685ms | 0.1000ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.02M | ±0.13% | 0.9776ms | 1.7230ms | 511.46K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 971.02K | ±0.53% | 1.0298ms | 1.2320ms | 485.51K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 931.65K | ±0.91% | 1.0734ms | 1.7030ms | 465.82K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 862.75K | ±3.15% | 1.1591ms | 2.6950ms | 431.37K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 642.65K | ±2.18% | 1.5560ms | 3.2760ms | 321.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.07K | ±0.39% | 7.7479ms | 12.1630ms | 64.53K |

**Key Insight:** Native Spread is **113.07x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 524.73K
🥈 Mutative             ██████████████████████████████ 391.24K
🥉 Craft                ██████████████████████████ 337.89K
   Immutable.js         █████████████████ 221.52K
   Immer                ████████████ 153.71K
   Seamless Immutable   ███ 37.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.51M | ±0.14% | 0.0869ms | 0.1300ms | 5.75M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 524.73K | ±0.59% | 1.9057ms | 2.3350ms | 262.37K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 391.24K | ±0.77% | 2.5560ms | 4.6180ms | 195.63K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 337.89K | ±2.73% | 2.9596ms | 5.5200ms | 168.94K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 221.52K | ±1.85% | 4.5142ms | 7.2330ms | 110.77K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.71K | ±2.06% | 6.5059ms | 12.6730ms | 76.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.75K | ±0.36% | 26.4882ms | 37.0890ms | 18.88K |

**Key Insight:** Native Spread is **304.76x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.70M
🥈 Immutability Helper  ████████████████████████████████ 1.37M
🥉 Craft                ████████████ 511.33K
   Mutative             ██████████ 405.37K
   Immer                ███████ 277.07K
   Seamless Immutable   █ 61.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.41M | ±1.26% | 0.0876ms | 0.1200ms | 5.70M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.70M | ±0.48% | 0.5893ms | 0.8820ms | 848.45K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.80% | 0.7312ms | 0.7810ms | 683.83K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 511.33K | ±0.63% | 1.9557ms | 3.4070ms | 255.67K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 405.37K | ±0.66% | 2.4669ms | 2.9850ms | 202.69K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 277.07K | ±0.67% | 3.6092ms | 4.4580ms | 138.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.83K | ±0.76% | 16.1733ms | 25.5680ms | 30.92K |

**Key Insight:** Native Spread is **184.53x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 764.32K
🥈 Immutability Helper  ██████████████████████████████ 568.27K
🥉 Craft                █████████████████ 315.63K
   Mutative             ███████████ 213.77K
   Immer                ███████ 138.77K
   Seamless Immutable   ███ 59.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.37M | ±3.22% | 0.0809ms | 0.1200ms | 6.18M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 764.32K | ±0.90% | 1.3083ms | 1.6530ms | 382.16K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 568.27K | ±0.37% | 1.7597ms | 1.9140ms | 284.14K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.63K | ±0.80% | 3.1683ms | 3.8670ms | 157.82K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 213.77K | ±0.93% | 4.6779ms | 5.7110ms | 106.89K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 138.77K | ±0.90% | 7.2063ms | 15.1680ms | 69.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.45K | ±1.15% | 16.8221ms | 29.9250ms | 29.72K |

**Key Insight:** Native Filter is **208.05x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 475.28K
🥈 Mutative             ██████████████████████████████████████ 453.01K
🥉 Immutability Helper  █████████████████████████████████ 394.96K
   Immer                ████████████████████████ 285.33K
   Immutable.js         ███████████████ 175.56K
   Seamless Immutable   ███ 31.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.84M | ±1.33% | 0.0923ms | 0.1300ms | 5.42M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 475.28K | ±0.75% | 2.1040ms | 4.4090ms | 237.64K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 453.01K | ±0.66% | 2.2075ms | 2.8160ms | 226.51K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 394.96K | ±0.26% | 2.5319ms | 3.0050ms | 197.48K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 285.33K | ±0.33% | 3.5048ms | 5.0790ms | 142.66K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 175.56K | ±0.64% | 5.6960ms | 7.2530ms | 87.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.40K | ±0.70% | 31.8478ms | 43.9820ms | 15.70K |

**Key Insight:** Native Map is **345.18x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 304.32K
🥈 Craft                ██████████████████████████████████ 261.81K
🥉 Mutative             ████████████████████████████ 209.54K
   Immutable.js         ██████████████████████ 163.60K
   Immer                █████████████ 97.87K
   Seamless Immutable   ███ 22.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.43M | ±11.39% | 0.1186ms | 0.1510ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 304.32K | ±1.08% | 3.2860ms | 3.8070ms | 152.16K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 261.81K | ±0.86% | 3.8195ms | 4.3480ms | 130.91K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 209.54K | ±0.76% | 4.7725ms | 6.1520ms | 104.77K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.60K | ±0.91% | 6.1125ms | 10.3000ms | 81.80K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.87K | ±0.94% | 10.2181ms | 19.4260ms | 48.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.01K | ±0.87% | 45.4334ms | 62.8570ms | 11.01K |

**Key Insight:** Native Spread is **383.21x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 356.71K
🥈 Immer                ████ 34.33K
🥉 Craft                ██ 21.94K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 668.91
   Seamless Immutable   █ 254.25
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 356.71K | ±0.68% | 2.8034ms | 3.4760ms | 178.36K |
| 🥈 | **Native Map** | 350.94K | ±0.57% | 2.8495ms | 3.4970ms | 175.48K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 34.33K | ±0.56% | 29.1272ms | 40.3560ms | 17.17K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.94K | ±0.50% | 45.5727ms | 57.3370ms | 10.97K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.52% | 157.1615ms | 183.5810ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 668.91 | ±1.22% | 1494.9648ms | 2089.2190ms | 335.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.25 | ±0.70% | 3933.0639ms | 4576.6300ms | 128.00 |

**Key Insight:** Mutative is **1402.98x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.04K
🥈 Craft                ███████████████████████████████████████ 270.84K
🥉 Mutative             ████████████████████████████ 197.21K
   Immutable.js         ███████████████████████ 157.25K
   Immer                ██████████████████ 126.04K
   Seamless Immutable   ███ 19.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.55M | ±0.56% | 0.1527ms | 0.2110ms | 3.28M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.04K | ±0.52% | 3.5966ms | 4.0970ms | 139.02K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.84K | ±0.62% | 3.6922ms | 4.2480ms | 135.42K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.21K | ±0.53% | 5.0707ms | 5.7910ms | 98.61K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.25K | ±0.63% | 6.3593ms | 11.5210ms | 78.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.04K | ±0.63% | 7.9340ms | 14.4870ms | 63.02K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.04K | ±0.57% | 52.5289ms | 67.8960ms | 9.52K |

**Key Insight:** Native Spread is **344.09x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:24:02.363Z*
