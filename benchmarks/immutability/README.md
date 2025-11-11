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
- **Last Run:** 3:30:16 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/SylphxAI/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥉 | **[@sylphx/craft](https://github.com/SylphxAI/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 54.8/100 | 74.6% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.6/100 | 74.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.6% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.4% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/SylphxAI/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/SylphxAI/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/SylphxAI/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/SylphxAI/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

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
🥇 Craft                ████████████████████████████████████████ 214.73K
🥈 Immer                █████████████████████ 112.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 214.73K | ±2.13% | 4.6571ms | 9.1170ms | 107.36K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.93K | ±1.77% | 8.8547ms | 25.6080ms | 56.47K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 964.30K
🥈 Immer                █████ 129.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 964.30K | ±0.19% | 1.0370ms | 1.6430ms | 482.15K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.58K | ±1.76% | 7.7169ms | 15.2780ms | 64.79K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.28K
🥈 Immer                ██████████████ 60.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 175.28K | ±1.64% | 5.7052ms | 11.1210ms | 87.64K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.29K | ±1.71% | 16.5855ms | 30.5770ms | 30.15K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 754.00K
🥈 Mutative             █████████████████████████ 465.14K
🥉 Immer                ██████████ 179.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 754.00K | ±1.58% | 1.3263ms | 2.7950ms | 377.00K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 465.14K | ±0.69% | 2.1499ms | 3.8280ms | 232.57K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.76K | ±0.93% | 5.5628ms | 9.4070ms | 89.88K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 422.88K
🥉 Immer                █████ 155.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.48% | 0.7879ms | 1.1130ms | 634.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 422.88K | ±0.45% | 2.3647ms | 2.8750ms | 211.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.54K | ±0.82% | 6.4293ms | 13.9060ms | 77.77K |

**Key Insight:** Craft is **8.16x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 844.17K
🥈 Mutative             █████████████████████ 450.54K
🥉 Immer                ████████ 167.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 844.17K | ±0.59% | 1.1846ms | 1.6030ms | 422.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.54K | ±0.50% | 2.2196ms | 2.7060ms | 225.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.84K | ±0.39% | 5.9580ms | 8.3760ms | 83.92K |

**Key Insight:** Craft is **5.03x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 830.55K
🥈 Mutative             █████████████████████ 427.47K
🥉 Immer                █████████ 182.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 830.55K | ±0.46% | 1.2040ms | 1.5230ms | 415.28K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.47K | ±0.63% | 2.3393ms | 3.4360ms | 213.74K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.94K | ±0.46% | 5.4664ms | 6.4920ms | 91.48K |

**Key Insight:** Craft is **4.54x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.21K
🥈 Mutative             █████████████████████████████████ 148.13K
🥉 Immer                █████████████████ 78.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 182.21K | ±0.53% | 5.4882ms | 8.7460ms | 91.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.13K | ±0.47% | 6.7510ms | 11.6220ms | 74.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.94K | ±0.80% | 12.6671ms | 23.4440ms | 39.47K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.52K
🥈 Mutative             █████████████ 75.57K
🥉 Immer                ██ 13.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 225.52K | ±0.45% | 4.4343ms | 5.1600ms | 112.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.57K | ±0.49% | 13.2321ms | 24.3160ms | 37.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.63K | ±0.36% | 73.3721ms | 87.9250ms | 6.82K |

**Key Insight:** Craft is **16.55x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.89K
🥈 Immer                █████████████ 71.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.89K | ±0.46% | 4.4074ms | 5.1100ms | 113.44K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.39K | ±0.28% | 14.0077ms | 24.6060ms | 35.70K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  █████████████████████████████████████ 979.55K
🥉 Craft                █████████████████████████████████████ 975.71K
   Immer                ██████████████████████████ 696.91K
   Mutative             ████████████████████ 535.26K
   Seamless Immutable   █████ 128.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.51M | ±0.09% | 0.0689ms | 0.0900ms | 7.26M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.16% | 0.9400ms | 1.1620ms | 531.89K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 979.55K | ±0.53% | 1.0209ms | 1.6530ms | 489.87K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 975.71K | ±2.48% | 1.0249ms | 2.6150ms | 487.86K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 696.91K | ±1.76% | 1.4349ms | 3.1770ms | 348.46K |
| 6 | **[Mutative](https://github.com/unadlib/mutative)** | 535.26K | ±9.13% | 1.8682ms | 3.3360ms | 267.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.93K | ±0.33% | 7.7563ms | 10.2790ms | 64.46K |

**Key Insight:** Native Spread is **112.57x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 499.51K
🥈 Mutative             █████████████████████████████████ 406.14K
🥉 Craft                ███████████████████████████ 341.78K
   Immutable.js         ███████████████████ 239.26K
   Immer                █████████████ 156.34K
   Seamless Immutable   ███ 37.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.67M | ±0.14% | 0.0857ms | 0.1110ms | 5.83M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 499.51K | ±0.32% | 2.0019ms | 2.3550ms | 249.76K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 406.14K | ±0.38% | 2.4622ms | 2.8860ms | 203.07K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 341.78K | ±2.45% | 2.9259ms | 5.3900ms | 170.89K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 239.26K | ±0.18% | 4.1795ms | 4.8690ms | 119.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.34K | ±2.11% | 6.3962ms | 13.3240ms | 78.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.52K | ±0.32% | 26.6491ms | 36.0770ms | 18.76K |

**Key Insight:** Native Spread is **310.94x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.76M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ████████████ 510.22K
   Mutative             ██████████ 431.77K
   Immer                ██████ 281.47K
   Seamless Immutable   █ 61.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.31M | ±1.20% | 0.0884ms | 0.1100ms | 5.66M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.76M | ±0.47% | 0.5691ms | 0.9010ms | 878.54K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.43% | 0.7113ms | 0.7720ms | 702.94K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 510.22K | ±0.53% | 1.9600ms | 2.4140ms | 255.11K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 431.77K | ±0.48% | 2.3161ms | 2.8050ms | 215.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.47K | ±0.56% | 3.5528ms | 4.3090ms | 140.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.41K | ±0.58% | 16.2842ms | 25.5180ms | 30.70K |

**Key Insight:** Native Spread is **184.22x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 759.07K
🥈 Immutability Helper  ██████████████████████████████ 573.88K
🥉 Craft                █████████████████ 318.75K
   Mutative             ███████████ 217.04K
   Immer                ███████ 141.38K
   Seamless Immutable   ███ 60.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.71M | ±0.94% | 0.0787ms | 0.1100ms | 6.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 759.07K | ±1.23% | 1.3174ms | 1.7140ms | 379.62K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 573.88K | ±0.33% | 1.7425ms | 1.9330ms | 286.94K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 318.75K | ±0.86% | 3.1373ms | 3.5770ms | 159.37K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.04K | ±1.03% | 4.6074ms | 5.2200ms | 108.52K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.38K | ±0.78% | 7.0730ms | 12.9950ms | 70.69K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.53K | ±1.23% | 16.5219ms | 25.7690ms | 30.26K |

**Key Insight:** Native Filter is **210.04x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 467.75K
🥈 Mutative             ███████████████████████████████████████ 456.86K
🥉 Immutability Helper  ██████████████████████████████████ 394.61K
   Immer                ████████████████████████ 281.33K
   Immutable.js         ███████████████ 178.27K
   Seamless Immutable   ███ 31.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.02M | ±1.21% | 0.0907ms | 0.1200ms | 5.51M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 467.75K | ±0.70% | 2.1379ms | 2.5240ms | 233.88K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.86K | ±0.61% | 2.1889ms | 2.6050ms | 228.43K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 394.61K | ±0.28% | 2.5341ms | 3.0860ms | 197.31K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.33K | ±0.30% | 3.5546ms | 5.6710ms | 140.66K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 178.27K | ±0.59% | 5.6093ms | 6.2510ms | 89.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.60K | ±0.64% | 31.6474ms | 41.1070ms | 15.80K |

**Key Insight:** Native Map is **348.85x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 304.14K
🥈 Craft                ███████████████████████████████████ 265.71K
🥉 Mutative             ████████████████████████████ 213.29K
   Immutable.js         ██████████████████████ 166.29K
   Immer                █████████████ 97.55K
   Seamless Immutable   ███ 22.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.81M | ±1.07% | 0.1135ms | 0.1600ms | 4.41M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 304.14K | ±0.93% | 3.2880ms | 3.7760ms | 152.07K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 265.71K | ±0.69% | 3.7635ms | 4.3280ms | 132.86K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.29K | ±0.76% | 4.6884ms | 5.5510ms | 106.65K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.29K | ±0.71% | 6.0137ms | 6.9330ms | 83.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.55K | ±0.90% | 10.2512ms | 19.3260ms | 48.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.04K | ±0.86% | 45.3778ms | 80.6920ms | 11.02K |

**Key Insight:** Native Spread is **399.90x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 356.57K
🥈 Immer                ███ 29.69K
🥉 Craft                ██ 21.93K
   Immutability Helper  █ 6.02K
   Immutable.js         █ 665.12
   Seamless Immutable   █ 254.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 356.57K | ±0.65% | 2.8045ms | 5.0190ms | 178.29K |
| 🥈 | **Native Map** | 352.69K | ±0.63% | 2.8354ms | 3.3860ms | 176.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.69K | ±0.48% | 33.6851ms | 44.4130ms | 14.84K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.93K | ±0.44% | 45.6067ms | 57.6780ms | 10.96K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.02K | ±0.70% | 166.0592ms | 297.4380ms | 3.01K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 665.12 | ±1.26% | 1503.4784ms | 2101.9080ms | 333.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.84 | ±0.71% | 3923.9591ms | 4483.4810ms | 128.00 |

**Key Insight:** Mutative is **1399.18x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.87K
🥈 Craft                ███████████████████████████████████████ 264.91K
🥉 Mutative             █████████████████████████████ 200.61K
   Immutable.js         ███████████████████████ 156.57K
   Immer                ███████████████████ 128.07K
   Seamless Immutable   ███ 18.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.73M | ±0.73% | 0.1485ms | 0.2200ms | 3.37M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.87K | ±0.63% | 3.6380ms | 4.3880ms | 137.44K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 264.91K | ±0.80% | 3.7748ms | 4.4980ms | 132.46K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.61K | ±0.59% | 4.9848ms | 5.7910ms | 100.31K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 156.57K | ±0.70% | 6.3871ms | 7.3740ms | 78.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.07K | ±0.64% | 7.8083ms | 14.0670ms | 64.03K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.79K | ±0.57% | 53.2094ms | 65.3530ms | 9.40K |

**Key Insight:** Native Spread is **358.34x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T03:51:21.730Z*
