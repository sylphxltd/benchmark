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
- **Last Run:** 9:11:09 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 74.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 59.3/100 | 79.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 56.6/100 | 76.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.1/100 | 41.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 25.1/100 | 33.7% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.2/100 | 5.6% |

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
🥇 Craft                ████████████████████████████████████████ 193.24K
🥈 Immer                █████████████████████ 99.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 193.24K | ±2.41% | 5.1750ms | 9.3960ms | 96.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 99.91K | ±2.05% | 10.0095ms | 24.5790ms | 49.95K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 975.41K
🥈 Immer                █████ 118.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 975.41K | ±0.58% | 1.0252ms | 1.7060ms | 487.71K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 118.06K | ±1.68% | 8.4700ms | 14.8010ms | 59.03K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 159.11K
🥈 Immer                ██████████████ 54.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 159.11K | ±1.91% | 6.2851ms | 11.1720ms | 79.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 54.59K | ±1.82% | 18.3195ms | 28.6290ms | 27.29K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 648.84K
🥈 Mutative             ███████████████████████████ 442.73K
🥉 Immer                ██████████ 155.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 648.84K | ±2.19% | 1.5412ms | 2.7000ms | 324.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 442.73K | ±0.88% | 2.2587ms | 3.1060ms | 221.37K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.49K | ±1.30% | 6.4312ms | 10.8600ms | 77.75K |

**Key Insight:** Craft is **4.17x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.06M
🥈 Mutative             ███████████████ 409.39K
🥉 Immer                █████ 141.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.06M | ±0.59% | 0.9415ms | 1.4850ms | 531.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 409.39K | ±0.62% | 2.4427ms | 3.1940ms | 204.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 141.04K | ±0.66% | 7.0904ms | 12.4640ms | 70.52K |

**Key Insight:** Craft is **7.53x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 748.32K
🥈 Mutative             ████████████████████████ 439.67K
🥉 Immer                ████████ 152.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 748.32K | ±0.52% | 1.3363ms | 1.9210ms | 374.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 439.67K | ±0.55% | 2.2744ms | 2.8810ms | 219.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 152.37K | ±0.50% | 6.5628ms | 9.1960ms | 76.19K |

**Key Insight:** Craft is **4.91x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 732.49K
🥈 Mutative             ███████████████████████ 424.92K
🥉 Immer                █████████ 165.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 732.49K | ±0.66% | 1.3652ms | 1.9280ms | 366.25K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.92K | ±0.65% | 2.3534ms | 2.9850ms | 212.46K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.21K | ±0.49% | 6.0528ms | 7.5040ms | 82.61K |

**Key Insight:** Craft is **4.43x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.16K
🥈 Mutative             ████████████████████████████████ 142.00K
🥉 Immer                █████████████████ 72.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.16K | ±0.56% | 5.7089ms | 7.8690ms | 87.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 142.00K | ±0.54% | 7.0422ms | 9.7550ms | 71.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 72.88K | ±0.91% | 13.7212ms | 23.8370ms | 36.44K |

**Key Insight:** Craft is **2.40x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 218.05K
🥈 Mutative             ██████████████ 75.03K
🥉 Immer                ██ 12.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 218.05K | ±0.54% | 4.5862ms | 6.1430ms | 109.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.03K | ±0.59% | 13.3287ms | 22.1520ms | 37.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 12.16K | ±0.43% | 82.2603ms | 97.9520ms | 6.08K |

**Key Insight:** Craft is **17.94x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 209.90K
🥈 Immer                ████████████ 65.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 209.90K | ±0.56% | 4.7641ms | 5.7420ms | 104.95K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 65.58K | ±0.47% | 15.2487ms | 21.8540ms | 32.79K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 925.20K
🥈 Craft                ██████████████████████████████████████ 886.99K
🥉 Immutability Helper  ██████████████████████████████████████ 877.07K
   Mutative             ██████████████████████████████████████ 875.33K
   Immer                █████████████████████████████ 661.83K
   Seamless Immutable   █████ 119.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 16.07M | ±0.09% | 0.0622ms | 0.1960ms | 8.04M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 925.20K | ±0.50% | 1.0808ms | 1.7600ms | 462.60K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 886.99K | ±3.10% | 1.1274ms | 2.3480ms | 443.50K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 877.07K | ±0.62% | 1.1402ms | 1.7520ms | 438.53K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 875.33K | ±0.82% | 1.1424ms | 1.7370ms | 437.66K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 661.83K | ±2.31% | 1.5110ms | 2.9400ms | 330.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 119.48K | ±0.46% | 8.3697ms | 14.9860ms | 59.74K |

**Key Insight:** Native Spread is **134.53x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 444.89K
🥈 Mutative             ████████████████████████████████ 351.41K
🥉 Craft                ████████████████████████████ 316.89K
   Immutable.js         █████████████████ 191.23K
   Immer                █████████████ 146.79K
   Seamless Immutable   ███ 36.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.78M | ±0.30% | 0.0849ms | 0.2720ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 444.89K | ±0.54% | 2.2478ms | 2.9200ms | 222.44K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 351.41K | ±0.75% | 2.8457ms | 6.8570ms | 175.71K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 316.89K | ±2.70% | 3.1557ms | 5.4520ms | 158.44K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.23K | ±2.11% | 5.2293ms | 8.0050ms | 95.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 146.79K | ±2.53% | 6.8123ms | 13.5050ms | 73.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.59K | ±0.40% | 27.3279ms | 34.0050ms | 18.30K |

**Key Insight:** Native Spread is **321.93x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.53M
🥈 Immutability Helper  ██████████████████████████████████ 1.31M
🥉 Craft                ████████████ 446.28K
   Mutative             ██████████ 391.16K
   Immer                ███████ 255.15K
   Seamless Immutable   ██ 59.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.56M | ±0.90% | 0.0865ms | 0.2830ms | 5.78M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.53M | ±0.44% | 0.6554ms | 1.1120ms | 762.86K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.31M | ±0.55% | 0.7660ms | 1.1810ms | 652.76K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 446.28K | ±0.40% | 2.2407ms | 3.2290ms | 223.14K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 391.16K | ±0.46% | 2.5565ms | 3.1330ms | 195.58K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 255.15K | ±0.91% | 3.9193ms | 6.8680ms | 127.57K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.88K | ±0.46% | 16.7004ms | 22.7670ms | 29.94K |

**Key Insight:** Native Spread is **193.14x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 733.34K
🥈 Immutability Helper  █████████████████████████████ 537.17K
🥉 Craft                ███████████████ 280.34K
   Mutative             ███████████ 198.61K
   Immer                ███████ 132.98K
   Seamless Immutable   ███ 60.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.97M | ±1.02% | 0.0771ms | 0.2490ms | 6.49M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 733.34K | ±0.52% | 1.3636ms | 1.9960ms | 366.67K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 537.17K | ±0.18% | 1.8616ms | 2.4820ms | 268.59K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 280.34K | ±0.37% | 3.5671ms | 6.1700ms | 140.17K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 198.61K | ±0.64% | 5.0349ms | 5.8990ms | 99.31K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 132.98K | ±0.51% | 7.5199ms | 12.6480ms | 66.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.68K | ±0.46% | 16.4788ms | 22.5580ms | 30.34K |

**Key Insight:** Native Filter is **213.74x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 454.78K
🥈 Mutative             █████████████████████████████████████ 423.12K
🥉 Immutability Helper  ████████████████████████████████ 367.76K
   Immer                ████████████████████████ 269.12K
   Immutable.js         ███████████████ 168.06K
   Seamless Immutable   ███ 31.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.95M | ±1.36% | 0.0913ms | 0.2560ms | 5.48M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 454.78K | ±0.76% | 2.1989ms | 2.8280ms | 227.39K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 423.12K | ±0.88% | 2.3634ms | 3.0650ms | 211.56K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 367.76K | ±0.40% | 2.7191ms | 3.4890ms | 183.88K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 269.12K | ±0.31% | 3.7158ms | 4.7430ms | 134.56K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.06K | ±0.81% | 5.9501ms | 8.3880ms | 84.03K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.13K | ±0.68% | 32.1215ms | 38.7590ms | 15.57K |

**Key Insight:** Native Map is **351.81x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.57K
🥈 Craft                ████████████████████████████████████ 246.46K
🥉 Mutative             █████████████████████████████ 201.54K
   Immutable.js         █████████████████████ 146.59K
   Immer                █████████████ 93.26K
   Seamless Immutable   ███ 22.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.76M | ±1.22% | 0.1142ms | 0.3000ms | 4.38M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.57K | ±1.23% | 3.6157ms | 4.3640ms | 138.29K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 246.46K | ±1.19% | 4.0574ms | 4.9260ms | 123.23K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.54K | ±1.26% | 4.9617ms | 5.9990ms | 100.77K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 146.59K | ±1.22% | 6.8216ms | 10.2880ms | 73.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 93.26K | ±1.03% | 10.7233ms | 16.7080ms | 46.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.26K | ±0.80% | 44.9220ms | 56.9330ms | 11.13K |

**Key Insight:** Native Spread is **393.51x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 317.21K
🥈 Immer                ████ 31.15K
🥉 Craft                ███ 22.79K
   Immutability Helper  █ 7.19K
   Immutable.js         █ 593.20
   Seamless Immutable   █ 244.34
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 328.03K | ±0.76% | 3.0485ms | 3.9080ms | 164.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 317.21K | ±0.74% | 3.1525ms | 4.0900ms | 158.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 31.15K | ±0.55% | 32.1009ms | 39.5460ms | 15.58K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.79K | ±0.49% | 43.8720ms | 67.7350ms | 11.40K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.19K | ±0.62% | 139.0946ms | 238.4150ms | 3.60K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 593.20 | ±1.37% | 1685.7657ms | 2372.9980ms | 297.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 244.34 | ±0.71% | 4092.7110ms | 4694.7270ms | 123.00 |

**Key Insight:** Native Map is **1342.54x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 258.77K
🥈 Immutability Helper  ███████████████████████████████████████ 250.56K
🥉 Mutative             ██████████████████████████████ 195.37K
   Immutable.js         ██████████████████████ 144.58K
   Immer                ███████████████████ 123.56K
   Seamless Immutable   ███ 18.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.60M | ±1.16% | 0.1514ms | 0.3270ms | 3.30M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 258.77K | ±0.76% | 3.8644ms | 4.9890ms | 129.39K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 250.56K | ±0.62% | 3.9910ms | 5.0960ms | 125.28K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.37K | ±0.60% | 5.1185ms | 6.2290ms | 97.69K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 144.58K | ±0.75% | 6.9165ms | 9.3590ms | 72.29K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 123.56K | ±0.53% | 8.0931ms | 10.6980ms | 61.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.73K | ±0.56% | 53.3888ms | 66.2130ms | 9.37K |

**Key Insight:** Native Spread is **352.53x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T21:16:09.046Z*
