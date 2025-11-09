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

- **Last Updated:** November 9, 2025
- **Last Run:** 9:20:28 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 9, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.3/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.6/100 | 73.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 44.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.6% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.4% |

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
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |

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
🥇 Craft                ████████████████████████████████████████ 215.70K
🥈 Immer                █████████████████████ 112.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 215.70K | ±1.90% | 4.6362ms | 9.1670ms | 107.85K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.63K | ±1.53% | 8.8784ms | 18.7950ms | 56.32K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 968.39K
🥈 Immer                █████ 130.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 968.39K | ±0.16% | 1.0326ms | 1.6330ms | 484.20K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.05K | ±1.38% | 7.6893ms | 15.0190ms | 65.03K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.04K
🥈 Immer                ██████████████ 60.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.04K | ±1.67% | 5.7459ms | 10.9810ms | 87.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.07K | ±1.52% | 16.6473ms | 29.6250ms | 30.04K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 732.43K
🥈 Mutative             ██████████████████████████ 475.46K
🥉 Immer                ██████████ 175.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 732.43K | ±1.63% | 1.3653ms | 3.0250ms | 366.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 475.46K | ±0.63% | 2.1032ms | 2.5950ms | 237.73K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.08K | ±1.00% | 5.7118ms | 10.4990ms | 87.54K |

**Key Insight:** Craft is **4.18x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 427.55K
🥉 Immer                █████ 158.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.62% | 0.7998ms | 1.2420ms | 625.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.55K | ±0.39% | 2.3389ms | 2.7650ms | 213.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.83K | ±0.40% | 6.2961ms | 12.4930ms | 79.42K |

**Key Insight:** Craft is **7.87x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 863.84K
🥈 Mutative             █████████████████████ 458.86K
🥉 Immer                ████████ 168.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 863.84K | ±0.35% | 1.1576ms | 1.4530ms | 431.92K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 458.86K | ±0.37% | 2.1793ms | 2.5250ms | 229.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.95K | ±0.56% | 5.9190ms | 11.3110ms | 84.47K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 853.55K
🥈 Mutative             █████████████████████ 449.59K
🥉 Immer                █████████ 185.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 853.55K | ±0.36% | 1.1716ms | 1.4230ms | 426.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.59K | ±0.36% | 2.2242ms | 2.5950ms | 224.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.53K | ±0.28% | 5.3899ms | 6.4730ms | 92.77K |

**Key Insight:** Craft is **4.60x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.92K
🥈 Mutative             █████████████████████████████████ 150.62K
🥉 Immer                █████████████████ 77.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.92K | ±0.50% | 5.4371ms | 7.0130ms | 91.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.62K | ±0.49% | 6.6393ms | 10.2990ms | 75.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.93K | ±0.50% | 12.8318ms | 23.1740ms | 38.97K |

**Key Insight:** Craft is **2.36x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.39K
🥈 Mutative             █████████████ 74.61K
🥉 Immer                ██ 13.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.39K | ±0.43% | 4.3784ms | 5.2390ms | 114.20K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.61K | ±0.61% | 13.4036ms | 24.9760ms | 37.30K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.98K | ±0.34% | 71.5240ms | 88.9350ms | 6.99K |

**Key Insight:** Craft is **16.34x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.21K
🥈 Immer                █████████████ 72.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.21K | ±0.37% | 4.4402ms | 5.1600ms | 112.61K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.07K | ±0.33% | 13.8759ms | 24.4150ms | 36.03K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 986.08K
🥉 Immutability Helper  █████████████████████████████████████ 981.68K
   Craft                ████████████████████████████████████ 970.09K
   Immer                ██████████████████████████ 687.94K
   Seamless Immutable   █████ 128.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.56M | ±0.10% | 0.0687ms | 0.1100ms | 7.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.10% | 0.9356ms | 1.2630ms | 534.41K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 986.08K | ±0.16% | 1.0141ms | 1.1020ms | 493.04K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 981.68K | ±0.34% | 1.0187ms | 1.7930ms | 490.91K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 970.09K | ±2.44% | 1.0308ms | 2.6450ms | 485.05K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 687.94K | ±1.85% | 1.4536ms | 3.2160ms | 343.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.67K | ±0.24% | 7.7721ms | 16.0000ms | 64.33K |

**Key Insight:** Native Spread is **113.20x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 537.38K
🥈 Mutative             █████████████████████████████ 389.15K
🥉 Craft                ██████████████████████████ 348.16K
   Immutable.js         ██████████████████ 240.04K
   Immer                ████████████ 157.18K
   Seamless Immutable   ███ 37.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.80M | ±0.14% | 0.0848ms | 0.1100ms | 5.90M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 537.38K | ±0.30% | 1.8609ms | 2.1540ms | 268.69K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 389.15K | ±4.48% | 2.5697ms | 4.6790ms | 194.57K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 348.16K | ±2.40% | 2.8723ms | 5.2000ms | 174.08K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 240.04K | ±0.62% | 4.1659ms | 6.6820ms | 120.02K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.18K | ±1.63% | 6.3623ms | 11.4110ms | 78.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.67K | ±0.23% | 26.5439ms | 36.1770ms | 18.84K |

**Key Insight:** Native Spread is **313.19x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.86M
🥈 Immutability Helper  ██████████████████████████████ 1.39M
🥉 Craft                ███████████ 496.13K
   Mutative             █████████ 422.01K
   Immer                ██████ 285.76K
   Seamless Immutable   █ 61.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.50M | ±1.15% | 0.0869ms | 0.1200ms | 5.75M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.86M | ±0.43% | 0.5371ms | 0.7420ms | 930.90K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.40% | 0.7187ms | 0.8210ms | 695.70K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 496.13K | ±0.33% | 2.0156ms | 4.2680ms | 248.06K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.01K | ±0.42% | 2.3696ms | 2.7560ms | 211.00K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.76K | ±0.34% | 3.4994ms | 6.7720ms | 142.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.93K | ±0.33% | 16.1475ms | 25.5170ms | 30.96K |

**Key Insight:** Native Spread is **185.77x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 797.84K
🥈 Immutability Helper  █████████████████████████████ 572.28K
🥉 Craft                ████████████████ 315.86K
   Mutative             ███████████ 215.17K
   Immer                ███████ 141.90K
   Seamless Immutable   ███ 62.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.83M | ±0.64% | 0.0779ms | 0.1100ms | 6.42M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 797.84K | ±0.80% | 1.2534ms | 1.5330ms | 398.92K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 572.28K | ±0.20% | 1.7474ms | 3.2060ms | 286.14K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.86K | ±0.41% | 3.1660ms | 3.6270ms | 157.93K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.17K | ±0.36% | 4.6475ms | 5.3900ms | 107.58K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.90K | ±0.37% | 7.0471ms | 15.6390ms | 70.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.17K | ±0.44% | 16.0855ms | 25.3870ms | 31.08K |

**Key Insight:** Native Filter is **206.36x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 489.51K
🥈 Mutative             ██████████████████████████████████████ 459.24K
🥉 Immutability Helper  ████████████████████████████████ 395.55K
   Immer                ████████████████████████ 290.38K
   Immutable.js         ███████████████ 189.32K
   Seamless Immutable   ███ 31.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.41M | ±0.95% | 0.0876ms | 0.1110ms | 5.71M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 489.51K | ±0.57% | 2.0429ms | 2.4750ms | 244.76K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 459.24K | ±0.57% | 2.1775ms | 2.6250ms | 229.62K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.55K | ±0.21% | 2.5281ms | 2.8960ms | 197.78K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 290.38K | ±0.18% | 3.4438ms | 3.8970ms | 145.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.32K | ±0.44% | 5.2819ms | 5.9610ms | 94.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.84K | ±0.35% | 31.4094ms | 41.2970ms | 15.92K |

**Key Insight:** Native Map is **358.49x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.16K
🥈 Craft                ██████████████████████████████████ 264.44K
🥉 Mutative             ████████████████████████████ 215.25K
   Immutable.js         ██████████████████████ 169.80K
   Immer                █████████████ 99.67K
   Seamless Immutable   ███ 22.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.62M | ±0.98% | 0.1161ms | 0.1500ms | 4.31M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.16K | ±0.65% | 3.2556ms | 3.5970ms | 153.58K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.44K | ±0.60% | 3.7815ms | 4.5380ms | 132.22K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.25K | ±0.60% | 4.6458ms | 5.5810ms | 107.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.80K | ±0.63% | 5.8892ms | 7.0730ms | 84.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.67K | ±0.48% | 10.0333ms | 19.1960ms | 49.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.46K | ±0.54% | 44.5244ms | 57.1270ms | 11.23K |

**Key Insight:** Native Spread is **383.63x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 374.89K
🥈 Immer                ███ 29.05K
🥉 Craft                ██ 22.10K
   Immutability Helper  █ 6.46K
   Immutable.js         █ 750.78
   Seamless Immutable   █ 258.76
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 374.89K | ±0.66% | 2.6674ms | 3.7970ms | 187.45K |
| 🥈 | **Native Map** | 362.83K | ±0.51% | 2.7561ms | 3.2060ms | 181.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.05K | ±0.32% | 34.4195ms | 45.5450ms | 14.53K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.10K | ±0.28% | 45.2413ms | 56.1440ms | 11.05K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.46K | ±0.27% | 154.8925ms | 175.2170ms | 3.23K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 750.78 | ±1.28% | 1331.9524ms | 1896.5900ms | 376.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 258.76 | ±0.47% | 3864.5997ms | 4355.4240ms | 130.00 |

**Key Insight:** Mutative is **1448.82x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.52K
🥈 Craft                ███████████████████████████████████████ 275.55K
🥉 Mutative             █████████████████████████████ 200.53K
   Immutable.js         ████████████████████████ 166.51K
   Immer                ██████████████████ 128.55K
   Seamless Immutable   ███ 19.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.72M | ±0.70% | 0.1489ms | 0.1710ms | 3.36M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.52K | ±0.34% | 3.5776ms | 3.9870ms | 139.76K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 275.55K | ±0.38% | 3.6291ms | 4.3590ms | 137.78K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.53K | ±0.39% | 4.9869ms | 5.8210ms | 100.26K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.51K | ±0.44% | 6.0058ms | 8.8870ms | 83.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.55K | ±0.33% | 7.7790ms | 15.7690ms | 64.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.31K | ±0.30% | 51.7746ms | 62.2060ms | 9.66K |

**Key Insight:** Native Spread is **347.67x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T21:38:33.596Z*
