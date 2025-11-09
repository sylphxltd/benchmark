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
- **Last Run:** 5:53:06 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.1/100 | 33.2% |
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
🥇 Craft                ████████████████████████████████████████ 219.61K
🥈 Immer                ████████████████████ 111.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.61K | ±2.07% | 4.5535ms | 9.3270ms | 109.81K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.81K | ±1.79% | 8.9438ms | 25.6080ms | 55.91K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 956.20K
🥈 Immer                █████ 128.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 956.20K | ±0.47% | 1.0458ms | 1.4330ms | 478.10K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.85K | ±1.63% | 7.7610ms | 15.4490ms | 64.42K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.02K
🥈 Immer                ██████████████ 59.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.02K | ±1.61% | 5.7135ms | 10.9200ms | 87.51K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.18K | ±1.80% | 16.8983ms | 34.5150ms | 29.59K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 738.16K
🥈 Mutative             ██████████████████████████ 476.69K
🥉 Immer                ██████████ 178.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 738.16K | ±1.72% | 1.3547ms | 2.8860ms | 369.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 476.69K | ±0.41% | 2.0978ms | 2.5350ms | 238.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.11K | ±0.92% | 5.6145ms | 9.9390ms | 89.06K |

**Key Insight:** Craft is **4.14x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 424.31K
🥉 Immer                █████ 157.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.63% | 0.7961ms | 1.1520ms | 628.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.31K | ±0.46% | 2.3568ms | 3.0760ms | 212.15K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.32K | ±0.33% | 6.3566ms | 14.6970ms | 78.66K |

**Key Insight:** Craft is **7.98x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 851.82K
🥈 Mutative             █████████████████████ 454.58K
🥉 Immer                ████████ 166.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 851.82K | ±0.67% | 1.1740ms | 1.6230ms | 425.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.58K | ±0.43% | 2.1998ms | 2.7550ms | 227.29K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.86K | ±0.32% | 5.9932ms | 7.3440ms | 83.43K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 834.37K
🥈 Mutative             █████████████████████ 445.37K
🥉 Immer                █████████ 177.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 834.37K | ±0.57% | 1.1985ms | 1.6430ms | 417.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.37K | ±0.39% | 2.2453ms | 2.8250ms | 222.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.70K | ±0.32% | 5.6274ms | 10.6000ms | 88.85K |

**Key Insight:** Craft is **4.70x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.78K
🥈 Mutative             ████████████████████████████████ 144.35K
🥉 Immer                █████████████████ 77.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.78K | ±0.50% | 5.5315ms | 9.0570ms | 90.39K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 144.35K | ±0.66% | 6.9277ms | 13.7060ms | 72.17K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.72K | ±0.46% | 12.8666ms | 23.6740ms | 38.86K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.83K
🥈 Mutative             ██████████████ 77.83K
🥉 Immer                ██ 13.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 229.83K | ±0.45% | 4.3510ms | 5.4810ms | 114.92K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.83K | ±0.45% | 12.8488ms | 22.6220ms | 38.91K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.33K | ±0.31% | 75.0312ms | 97.9330ms | 6.66K |

**Key Insight:** Craft is **17.24x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.84K
🥈 Immer                ████████████ 69.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.84K | ±0.39% | 4.4675ms | 5.3100ms | 111.92K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.50K | ±0.61% | 14.3894ms | 25.3470ms | 34.75K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.04M
🥈 Immutability Helper  ██████████████████████████████████████ 987.01K
🥉 Mutative             ████████████████████████████████████ 931.70K
   Craft                ███████████████████████████████████ 908.36K
   Immer                █████████████████████████ 645.84K
   Seamless Immutable   █████ 129.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.46M | ±0.10% | 0.0691ms | 0.1110ms | 7.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.04M | ±0.10% | 0.9613ms | 1.1520ms | 520.12K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 987.01K | ±0.35% | 1.0132ms | 1.2120ms | 493.50K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 931.70K | ±0.65% | 1.0733ms | 2.2540ms | 465.85K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 908.36K | ±2.76% | 1.1009ms | 2.6850ms | 454.18K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 645.84K | ±1.97% | 1.5484ms | 3.2760ms | 322.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.24K | ±0.34% | 7.7378ms | 13.6850ms | 64.62K |

**Key Insight:** Native Spread is **111.92x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 509.51K
🥈 Mutative             ███████████████████████████████ 393.20K
🥉 Craft                ███████████████████████████ 343.06K
   Immutable.js         ██████████████████ 227.54K
   Immer                ████████████ 154.45K
   Seamless Immutable   ███ 37.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.81M | ±0.12% | 0.0847ms | 0.1200ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 509.51K | ±0.34% | 1.9627ms | 3.3560ms | 254.75K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 393.20K | ±0.73% | 2.5433ms | 4.7590ms | 196.60K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.06K | ±2.54% | 2.9150ms | 5.4700ms | 171.53K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 227.54K | ±0.50% | 4.3949ms | 6.4520ms | 113.77K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.45K | ±1.96% | 6.4748ms | 11.5820ms | 77.22K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.42K | ±0.29% | 26.7255ms | 37.1190ms | 18.71K |

**Key Insight:** Native Spread is **315.67x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ████████████████████████████████ 1.42M
🥉 Craft                ███████████ 497.74K
   Mutative             ██████████ 424.08K
   Immer                ██████ 275.90K
   Seamless Immutable   █ 62.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.51M | ±1.19% | 0.0869ms | 0.1110ms | 5.76M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.44% | 0.5707ms | 0.8210ms | 876.15K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.42M | ±0.44% | 0.7047ms | 0.7610ms | 709.54K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 497.74K | ±0.51% | 2.0091ms | 2.7650ms | 248.87K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.08K | ±0.47% | 2.3581ms | 2.8550ms | 212.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 275.90K | ±0.44% | 3.6244ms | 5.9710ms | 137.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.36K | ±0.44% | 16.0369ms | 25.5990ms | 31.18K |

**Key Insight:** Native Spread is **184.59x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 817.32K
🥈 Immutability Helper  ████████████████████████████ 579.17K
🥉 Craft                ███████████████ 315.82K
   Mutative             ██████████ 214.53K
   Immer                ███████ 140.54K
   Seamless Immutable   ███ 60.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.76M | ±0.71% | 0.0784ms | 0.1100ms | 6.38M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 817.32K | ±0.80% | 1.2235ms | 1.5630ms | 408.66K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 579.17K | ±0.33% | 1.7266ms | 1.8740ms | 289.59K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.82K | ±0.49% | 3.1664ms | 3.6560ms | 157.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.53K | ±0.81% | 4.6613ms | 5.7010ms | 107.27K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.54K | ±0.56% | 7.1152ms | 15.5190ms | 70.27K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.82K | ±0.69% | 16.4406ms | 26.0990ms | 30.41K |

**Key Insight:** Native Filter is **209.72x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 499.41K
🥈 Mutative             ████████████████████████████████████ 454.08K
🥉 Immutability Helper  ███████████████████████████████ 393.25K
   Immer                ███████████████████████ 282.95K
   Immutable.js         ███████████████ 189.28K
   Seamless Immutable   ███ 31.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.25M | ±1.15% | 0.0889ms | 0.1200ms | 5.62M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 499.41K | ±0.47% | 2.0024ms | 3.2860ms | 249.71K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 454.08K | ±0.52% | 2.2022ms | 2.5950ms | 227.04K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 393.25K | ±0.19% | 2.5429ms | 2.8950ms | 196.62K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.95K | ±0.21% | 3.5342ms | 6.1710ms | 141.47K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.28K | ±0.51% | 5.2833ms | 6.1620ms | 94.64K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.60K | ±0.43% | 31.6439ms | 43.4210ms | 15.80K |

**Key Insight:** Native Map is **355.93x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.28K
🥈 Craft                ██████████████████████████████████ 265.31K
🥉 Mutative             ████████████████████████████ 213.85K
   Immutable.js         ██████████████████████ 171.86K
   Immer                █████████████ 97.36K
   Seamless Immutable   ███ 22.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.36M | ±11.45% | 0.1196ms | 0.1600ms | 4.44M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.28K | ±0.59% | 3.2438ms | 3.6070ms | 154.14K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.31K | ±0.70% | 3.7691ms | 4.4380ms | 132.66K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.85K | ±0.63% | 4.6761ms | 6.0510ms | 106.93K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.86K | ±0.66% | 5.8186ms | 8.6760ms | 85.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.36K | ±0.53% | 10.2714ms | 19.6470ms | 48.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.43K | ±0.74% | 44.5888ms | 54.1910ms | 11.21K |

**Key Insight:** Native Spread is **372.69x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 364.95K
🥈 Immer                ███ 29.82K
🥉 Craft                ██ 22.09K
   Immutability Helper  █ 6.29K
   Immutable.js         █ 724.56
   Seamless Immutable   █ 252.80
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 364.95K | ±0.63% | 2.7401ms | 3.4870ms | 182.48K |
| 🥈 | **Native Map** | 357.24K | ±0.52% | 2.7992ms | 3.4360ms | 178.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.82K | ±0.38% | 33.5390ms | 55.9550ms | 14.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.09K | ±0.40% | 45.2729ms | 54.4510ms | 11.04K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.29K | ±0.52% | 158.9970ms | 209.3910ms | 3.15K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 724.56 | ±0.95% | 1380.1440ms | 1848.5370ms | 363.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.80 | ±0.60% | 3955.6662ms | 4459.4100ms | 127.00 |

**Key Insight:** Mutative is **1443.64x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.39K
🥈 Craft                █████████████████████████████████████ 254.01K
🥉 Mutative             █████████████████████████████ 197.96K
   Immutable.js         ███████████████████████ 161.14K
   Immer                ██████████████████ 125.18K
   Seamless Immutable   ███ 19.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.61M | ±0.53% | 0.1513ms | 0.1810ms | 3.30M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.39K | ±0.35% | 3.6312ms | 6.3320ms | 137.72K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 254.01K | ±0.51% | 3.9368ms | 4.6080ms | 127.01K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.96K | ±0.33% | 5.0515ms | 9.0680ms | 98.98K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.14K | ±0.50% | 6.2057ms | 12.5830ms | 80.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.18K | ±0.45% | 7.9887ms | 15.2290ms | 62.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.06K | ±0.34% | 52.4618ms | 62.2570ms | 9.53K |

**Key Insight:** Native Spread is **346.76x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T18:43:04.115Z*
