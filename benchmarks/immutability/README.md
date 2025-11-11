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
- **Last Run:** 1:05:57 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.7/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.0/100 | 78.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 73.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.5/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.8/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 221.03K
🥈 Immer                ████████████████████ 111.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.03K | ±2.02% | 4.5243ms | 9.0860ms | 110.52K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.49K | ±1.35% | 8.9693ms | 25.2570ms | 55.75K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 991.06K
🥈 Immer                █████ 128.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 991.06K | ±0.17% | 1.0090ms | 1.2730ms | 495.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.53K | ±1.65% | 7.7804ms | 18.0030ms | 64.26K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.43K
🥈 Immer                ██████████████ 60.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.43K | ±1.72% | 5.6678ms | 10.9410ms | 88.22K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.50K | ±1.59% | 16.5283ms | 31.3880ms | 30.25K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 731.39K
🥈 Mutative             ██████████████████████████ 473.04K
🥉 Immer                ██████████ 178.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 731.39K | ±1.63% | 1.3673ms | 3.0050ms | 365.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 473.04K | ±0.67% | 2.1140ms | 2.5450ms | 236.52K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.74K | ±0.90% | 5.5949ms | 9.1680ms | 89.37K |

**Key Insight:** Craft is **4.09x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 425.09K
🥉 Immer                █████ 160.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.22M | ±0.61% | 0.8171ms | 1.3020ms | 611.89K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 425.09K | ±0.37% | 2.3525ms | 3.7470ms | 212.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 160.13K | ±0.32% | 6.2449ms | 12.9640ms | 80.07K |

**Key Insight:** Craft is **7.64x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 857.39K
🥈 Mutative             █████████████████████ 459.99K
🥉 Immer                ████████ 164.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 857.39K | ±0.33% | 1.1663ms | 1.4630ms | 428.70K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 459.99K | ±0.37% | 2.1739ms | 2.5350ms | 230.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 164.98K | ±0.56% | 6.0614ms | 14.0470ms | 82.49K |

**Key Insight:** Craft is **5.20x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 842.49K
🥈 Mutative             █████████████████████ 451.27K
🥉 Immer                ████████ 177.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 842.49K | ±0.35% | 1.1870ms | 1.4820ms | 421.25K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.27K | ±0.39% | 2.2160ms | 2.6050ms | 225.63K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.58K | ±0.31% | 5.6313ms | 9.0770ms | 88.79K |

**Key Insight:** Craft is **4.74x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.35K
🥈 Mutative             █████████████████████████████████ 151.36K
🥉 Immer                █████████████████ 77.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.35K | ±0.51% | 5.3952ms | 8.2750ms | 92.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 151.36K | ±0.50% | 6.6067ms | 10.7900ms | 75.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.36K | ±0.48% | 12.9272ms | 23.9250ms | 38.68K |

**Key Insight:** Craft is **2.40x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.66K
🥈 Mutative             █████████████ 77.43K
🥉 Immer                ██ 13.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 229.66K | ±0.45% | 4.3542ms | 6.1720ms | 114.83K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.43K | ±0.45% | 12.9148ms | 22.4410ms | 38.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.45K | ±0.30% | 74.3298ms | 88.6250ms | 6.73K |

**Key Insight:** Craft is **17.07x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.49K
🥈 Immer                ████████████ 69.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.49K | ±0.60% | 4.4745ms | 8.9360ms | 111.75K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.17K | ±0.32% | 14.4570ms | 25.3870ms | 34.59K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.01M
🥈 Mutative             ████████████████████████████████████████ 1.00M
🥉 Immutability Helper  ██████████████████████████████████████ 962.99K
   Craft                ██████████████████████████████████████ 962.95K
   Immer                ████████████████████████████ 701.11K
   Seamless Immutable   █████ 116.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.50M | ±0.11% | 0.0690ms | 0.1100ms | 7.25M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.01M | ±0.17% | 0.9890ms | 1.6630ms | 505.56K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 1.00M | ±0.15% | 0.9977ms | 1.1320ms | 501.15K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 962.99K | ±0.31% | 1.0384ms | 1.7430ms | 481.50K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 962.95K | ±2.50% | 1.0385ms | 2.6550ms | 481.49K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 701.11K | ±1.67% | 1.4263ms | 3.1760ms | 350.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 116.00K | ±0.29% | 8.6209ms | 16.4300ms | 58.00K |

**Key Insight:** Native Spread is **125.00x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 491.26K
🥈 Mutative             ████████████████████████████████ 396.94K
🥉 Craft                ████████████████████████████ 343.68K
   Immutable.js         ███████████████████ 235.98K
   Immer                █████████████ 157.70K
   Seamless Immutable   ███ 37.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.15% | 0.0850ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 491.26K | ±0.27% | 2.0356ms | 2.2940ms | 245.63K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 396.94K | ±0.38% | 2.5193ms | 4.8390ms | 198.47K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.68K | ±2.70% | 2.9097ms | 5.3700ms | 171.84K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 235.98K | ±0.33% | 4.2376ms | 5.0990ms | 117.99K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.70K | ±1.65% | 6.3411ms | 12.0530ms | 78.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.37K | ±0.52% | 26.7618ms | 45.5450ms | 18.68K |

**Key Insight:** Native Spread is **314.70x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.69M
🥈 Immutability Helper  █████████████████████████████████ 1.37M
🥉 Craft                ████████████ 499.34K
   Mutative             ██████████ 431.51K
   Immer                ███████ 280.09K
   Seamless Immutable   █ 60.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.07M | ±0.81% | 0.0829ms | 0.1100ms | 6.03M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.69M | ±4.49% | 0.5933ms | 0.9620ms | 842.68K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.15% | 0.7276ms | 0.8020ms | 687.16K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 499.34K | ±0.34% | 2.0027ms | 2.2840ms | 249.67K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 431.51K | ±0.37% | 2.3174ms | 2.6350ms | 215.76K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 280.09K | ±0.36% | 3.5702ms | 7.8340ms | 140.05K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.77K | ±0.24% | 16.4561ms | 25.9380ms | 30.38K |

**Key Insight:** Native Spread is **198.62x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 790.03K
🥈 Immutability Helper  █████████████████████████████ 566.48K
🥉 Craft                ████████████████ 319.20K
   Mutative             ███████████ 220.59K
   Immer                ███████ 144.68K
   Seamless Immutable   ███ 59.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.47M | ±1.01% | 0.0802ms | 0.1100ms | 6.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 790.03K | ±0.58% | 1.2658ms | 1.6130ms | 395.01K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 566.48K | ±0.17% | 1.7653ms | 1.8730ms | 283.24K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.20K | ±0.22% | 3.1328ms | 3.5160ms | 159.60K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.59K | ±0.39% | 4.5334ms | 7.7550ms | 110.29K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.68K | ±0.32% | 6.9116ms | 9.1970ms | 72.34K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.87K | ±0.33% | 16.7038ms | 26.2490ms | 29.93K |

**Key Insight:** Native Filter is **208.33x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 496.98K
🥈 Mutative             █████████████████████████████████████ 460.11K
🥉 Immutability Helper  ████████████████████████████████ 395.72K
   Immer                ███████████████████████ 290.12K
   Immutable.js         ███████████████ 191.26K
   Seamless Immutable   ███ 31.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.45M | ±0.98% | 0.0874ms | 0.1210ms | 5.72M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 496.98K | ±0.51% | 2.0121ms | 2.3850ms | 248.49K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 460.11K | ±0.63% | 2.1734ms | 2.5740ms | 230.06K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.72K | ±0.25% | 2.5270ms | 2.9860ms | 197.86K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 290.12K | ±0.27% | 3.4469ms | 4.3880ms | 145.06K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.26K | ±0.55% | 5.2284ms | 8.3460ms | 95.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.66K | ±0.52% | 31.5809ms | 41.6480ms | 15.83K |

**Key Insight:** Native Map is **361.54x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.29K
🥈 Craft                ███████████████████████████████████ 271.49K
🥉 Mutative             ████████████████████████████ 218.54K
   Immutable.js         ███████████████████████ 176.42K
   Immer                █████████████ 99.06K
   Seamless Immutable   ███ 22.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.15M | ±0.63% | 0.1093ms | 0.1710ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.29K | ±0.37% | 3.2543ms | 3.5470ms | 153.64K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.49K | ±0.44% | 3.6833ms | 4.2680ms | 135.75K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.54K | ±0.41% | 4.5758ms | 5.5300ms | 109.27K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.42K | ±0.25% | 5.6682ms | 6.8630ms | 88.21K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.06K | ±0.36% | 10.0954ms | 19.4960ms | 49.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.21K | ±0.36% | 45.0184ms | 71.6040ms | 11.11K |

**Key Insight:** Native Spread is **412.01x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 366.32K
🥈 Immer                ████ 34.42K
🥉 Craft                ██ 22.07K
   Immutability Helper  █ 6.43K
   Immutable.js         █ 720.37
   Seamless Immutable   █ 252.09
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 366.32K | ±0.78% | 2.7298ms | 3.4270ms | 183.16K |
| 🥈 | **Native Map** | 342.00K | ±0.63% | 2.9240ms | 3.6870ms | 171.00K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 34.42K | ±0.44% | 29.0544ms | 39.3730ms | 17.21K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.07K | ±0.29% | 45.3099ms | 54.6310ms | 11.04K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.43K | ±0.35% | 155.4300ms | 181.8490ms | 3.22K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 720.37 | ±1.06% | 1388.1772ms | 1895.2930ms | 361.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.09 | ±0.49% | 3966.8082ms | 4405.2990ms | 127.00 |

**Key Insight:** Mutative is **1453.13x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 273.97K
🥈 Craft                ███████████████████████████████████████ 264.08K
🥉 Mutative             █████████████████████████████ 199.95K
   Immutable.js         ████████████████████████ 161.87K
   Immer                ███████████████████ 127.09K
   Seamless Immutable   ███ 18.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.29M | ±0.99% | 0.1589ms | 0.1800ms | 3.15M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 273.97K | ±0.45% | 3.6500ms | 4.0480ms | 136.99K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.08K | ±0.48% | 3.7868ms | 5.8410ms | 132.04K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.95K | ±0.53% | 5.0012ms | 8.3160ms | 99.98K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.87K | ±0.60% | 6.1777ms | 8.0950ms | 80.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.09K | ±0.42% | 7.8685ms | 14.4670ms | 63.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.72K | ±0.42% | 53.4233ms | 75.6410ms | 9.36K |

**Key Insight:** Native Spread is **336.11x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:10:36.740Z*
