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
- **Last Run:** 9:16:09 PM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 77.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 73.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.7/100 | 44.5% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 219.52K
🥈 Immer                ████████████████████ 110.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.52K | ±1.91% | 4.5555ms | 9.1170ms | 109.76K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.38K | ±1.64% | 9.0593ms | 26.2490ms | 55.19K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 987.87K
🥈 Immer                █████ 126.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 987.87K | ±0.45% | 1.0123ms | 1.2920ms | 493.94K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 126.77K | ±1.62% | 7.8885ms | 16.7210ms | 63.38K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.50K
🥈 Immer                ██████████████ 59.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.50K | ±1.62% | 5.6979ms | 11.1210ms | 87.75K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.53K | ±1.62% | 16.7995ms | 36.4480ms | 29.76K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 726.21K
🥈 Mutative             ██████████████████████████ 478.72K
🥉 Immer                ██████████ 172.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 726.21K | ±1.78% | 1.3770ms | 2.9460ms | 363.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 478.72K | ±0.47% | 2.0889ms | 2.6450ms | 239.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 172.99K | ±1.18% | 5.7808ms | 12.5440ms | 86.49K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 427.66K
🥉 Immer                █████ 156.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.22M | ±0.64% | 0.8202ms | 1.2420ms | 609.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.66K | ±0.55% | 2.3383ms | 2.9050ms | 213.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.65K | ±0.37% | 6.3836ms | 10.9910ms | 78.33K |

**Key Insight:** Craft is **7.78x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 843.05K
🥈 Mutative             █████████████████████ 443.97K
🥉 Immer                ████████ 163.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 843.05K | ±0.56% | 1.1862ms | 1.7530ms | 421.53K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.97K | ±0.53% | 2.2524ms | 2.8450ms | 221.99K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.72K | ±0.74% | 6.1081ms | 11.3310ms | 81.86K |

**Key Insight:** Craft is **5.15x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 828.28K
🥈 Mutative             █████████████████████ 443.60K
🥉 Immer                █████████ 177.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 828.28K | ±0.53% | 1.2073ms | 1.8040ms | 414.14K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.60K | ±0.54% | 2.2543ms | 2.8260ms | 221.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.21K | ±0.52% | 5.6430ms | 10.1290ms | 88.61K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.59K
🥈 Mutative             █████████████████████████████████ 147.03K
🥉 Immer                █████████████████ 77.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.59K | ±0.56% | 5.5375ms | 8.8470ms | 90.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.03K | ±0.58% | 6.8011ms | 11.9020ms | 73.52K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.28K | ±0.59% | 12.9402ms | 24.0640ms | 38.64K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.93K
🥈 Mutative             ██████████████ 75.75K
🥉 Immer                ██ 13.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.93K | ±0.57% | 4.4858ms | 6.8030ms | 111.46K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.75K | ±0.59% | 13.2021ms | 23.2530ms | 37.87K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.46K | ±0.42% | 74.2688ms | 99.9970ms | 6.73K |

**Key Insight:** Craft is **16.56x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.18K
🥈 Immer                ████████████ 69.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.18K | ±0.59% | 4.4408ms | 5.3900ms | 112.59K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.67K | ±0.37% | 14.3529ms | 27.1910ms | 34.84K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Craft                █████████████████████████████████████ 977.93K
🥉 Immutability Helper  █████████████████████████████████████ 966.71K
   Mutative             ████████████████████████████████████ 958.00K
   Immer                ███████████████████████████ 708.09K
   Seamless Immutable   █████ 126.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.23M | ±0.18% | 0.0703ms | 0.1100ms | 7.11M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.15% | 0.9509ms | 1.5920ms | 525.84K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 977.93K | ±2.50% | 1.0226ms | 2.5750ms | 488.96K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 966.71K | ±0.36% | 1.0344ms | 1.8930ms | 483.36K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 958.00K | ±0.47% | 1.0438ms | 1.3830ms | 479.00K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 708.09K | ±1.67% | 1.4123ms | 3.1760ms | 354.04K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.42K | ±0.33% | 7.9103ms | 15.0680ms | 63.21K |

**Key Insight:** Native Spread is **112.55x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 492.86K
🥈 Mutative             ████████████████████████████████ 395.03K
🥉 Craft                ████████████████████████████ 343.50K
   Immutable.js         ███████████████████ 234.07K
   Immer                ████████████ 152.31K
   Seamless Immutable   ███ 36.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.47M | ±0.15% | 0.0872ms | 0.1300ms | 5.73M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 492.86K | ±0.82% | 2.0290ms | 2.3650ms | 246.43K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 395.03K | ±0.72% | 2.5314ms | 3.0160ms | 197.52K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.50K | ±3.15% | 2.9112ms | 4.9590ms | 171.75K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 234.07K | ±0.84% | 4.2722ms | 5.6100ms | 117.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 152.31K | ±2.11% | 6.5654ms | 15.3480ms | 76.16K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.45K | ±0.91% | 27.4314ms | 49.1830ms | 18.23K |

**Key Insight:** Native Spread is **314.63x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.67M
🥈 Immutability Helper  █████████████████████████████████ 1.37M
🥉 Craft                ████████████ 494.62K
   Mutative             ██████████ 422.02K
   Immer                ███████ 274.11K
   Seamless Immutable   █ 60.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.42M | ±22.98% | 0.0960ms | 0.1200ms | 5.21M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.67M | ±0.83% | 0.5976ms | 0.9820ms | 836.64K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±1.21% | 0.7313ms | 0.8220ms | 683.73K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 494.62K | ±1.39% | 2.0218ms | 3.3760ms | 247.31K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.02K | ±1.37% | 2.3695ms | 2.9150ms | 211.01K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 274.11K | ±1.22% | 3.6482ms | 7.8550ms | 137.05K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.13K | ±1.29% | 16.6297ms | 25.9090ms | 30.07K |

**Key Insight:** Native Spread is **173.30x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 815.79K
🥈 Immutability Helper  ████████████████████████████ 565.25K
🥉 Craft                ████████████████ 323.13K
   Mutative             ███████████ 216.99K
   Immer                ███████ 143.74K
   Seamless Immutable   ███ 60.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.30M | ±1.13% | 0.0813ms | 0.1200ms | 6.15M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 815.79K | ±0.57% | 1.2258ms | 1.6030ms | 407.89K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 565.25K | ±0.21% | 1.7691ms | 2.1640ms | 282.63K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 323.13K | ±0.45% | 3.0947ms | 3.7470ms | 161.57K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.99K | ±0.55% | 4.6085ms | 7.5940ms | 108.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.74K | ±0.51% | 6.9570ms | 10.4700ms | 71.87K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.93K | ±0.57% | 16.4131ms | 25.9480ms | 30.46K |

**Key Insight:** Native Filter is **201.92x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 491.30K
🥈 Mutative             █████████████████████████████████████ 451.21K
🥉 Immutability Helper  ████████████████████████████████ 396.25K
   Immer                ███████████████████████ 279.93K
   Immutable.js         ████████████████ 191.44K
   Seamless Immutable   ███ 31.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.57M | ±0.73% | 0.0864ms | 0.1300ms | 5.79M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 491.30K | ±0.73% | 2.0354ms | 2.4640ms | 245.65K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 451.21K | ±0.72% | 2.2163ms | 2.6850ms | 225.61K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 396.25K | ±0.31% | 2.5237ms | 4.5290ms | 198.13K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.93K | ±0.39% | 3.5723ms | 4.4090ms | 139.97K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.44K | ±0.76% | 5.2236ms | 11.3210ms | 95.72K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.73K | ±0.85% | 31.5160ms | 41.5780ms | 15.87K |

**Key Insight:** Native Map is **364.71x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.51K
🥈 Craft                ██████████████████████████████████ 263.43K
🥉 Mutative             ███████████████████████████ 211.96K
   Immutable.js         ███████████████████████ 176.75K
   Immer                █████████████ 98.89K
   Seamless Immutable   ███ 22.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.14M | ±0.69% | 0.1094ms | 0.1810ms | 4.57M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.51K | ±0.54% | 3.2309ms | 3.7270ms | 154.76K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 263.43K | ±0.64% | 3.7961ms | 4.9500ms | 131.72K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.96K | ±0.65% | 4.7179ms | 8.9570ms | 105.98K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.75K | ±0.31% | 5.6578ms | 6.8530ms | 88.37K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.89K | ±0.62% | 10.1120ms | 19.4560ms | 49.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.28K | ±0.59% | 44.8933ms | 59.6610ms | 11.14K |

**Key Insight:** Native Spread is **410.20x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 358.04K
🥈 Immer                ███ 29.63K
🥉 Craft                ██ 22.06K
   Immutability Helper  █ 6.26K
   Immutable.js         █ 732.86
   Seamless Immutable   █ 255.32
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 358.04K | ±0.84% | 2.7930ms | 4.3780ms | 179.02K |
| 🥈 | **Native Map** | 353.69K | ±0.70% | 2.8274ms | 3.8270ms | 176.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.63K | ±0.68% | 33.7536ms | 45.3650ms | 14.81K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.06K | ±0.56% | 45.3360ms | 54.0310ms | 11.03K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.26K | ±0.57% | 159.7818ms | 181.1990ms | 3.13K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 732.86 | ±1.14% | 1364.5177ms | 1908.2080ms | 367.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.32 | ±0.73% | 3916.6915ms | 4505.2230ms | 128.00 |

**Key Insight:** Mutative is **1402.32x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.85K
🥈 Craft                ████████████████████████████████████████ 271.96K
🥉 Mutative             ████████████████████████████ 194.54K
   Immutable.js         ████████████████████████ 164.20K
   Immer                ███████████████████ 128.04K
   Seamless Immutable   ███ 19.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.41M | ±1.06% | 0.1561ms | 0.1800ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.85K | ±0.54% | 3.6383ms | 4.1880ms | 137.43K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.96K | ±0.52% | 3.6770ms | 4.2580ms | 135.98K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 194.54K | ±0.50% | 5.1405ms | 8.9270ms | 97.27K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 164.20K | ±0.62% | 6.0902ms | 7.8840ms | 82.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.04K | ±0.60% | 7.8102ms | 15.5600ms | 64.02K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.04K | ±0.49% | 52.5250ms | 67.4160ms | 9.52K |

**Key Insight:** Native Spread is **336.55x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T21:19:07.450Z*
