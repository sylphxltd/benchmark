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
- **Last Run:** 10:39:11 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.4/100 | 79.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.4/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 25.7/100 | 34.8% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.1/100 | 5.5% |

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
🥇 Craft                ████████████████████████████████████████ 201.38K
🥈 Immer                █████████████████████ 107.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 201.38K | ±2.30% | 4.9656ms | 8.6520ms | 100.69K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 107.75K | ±1.96% | 9.2803ms | 20.7650ms | 53.88K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 938.13K
🥈 Immer                █████ 126.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 938.13K | ±0.16% | 1.0660ms | 1.6390ms | 469.06K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 126.41K | ±1.78% | 7.9106ms | 13.8140ms | 63.21K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 162.81K
🥈 Immer                ███████████████ 59.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 162.81K | ±1.95% | 6.1421ms | 11.7280ms | 81.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.48K | ±1.72% | 16.8124ms | 26.7280ms | 29.74K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 678.16K
🥈 Mutative             ███████████████████████████ 454.30K
🥉 Immer                ██████████ 169.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 678.16K | ±1.69% | 1.4746ms | 2.5780ms | 339.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.30K | ±0.74% | 2.2012ms | 2.8260ms | 227.15K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.25K | ±1.12% | 5.9085ms | 8.5770ms | 84.63K |

**Key Insight:** Craft is **4.01x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.13M
🥈 Mutative             ███████████████ 410.78K
🥉 Immer                █████ 151.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.13M | ±0.41% | 0.8851ms | 1.3670ms | 564.88K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 410.78K | ±0.51% | 2.4344ms | 3.1020ms | 205.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 151.69K | ±0.66% | 6.5924ms | 11.2340ms | 75.84K |

**Key Insight:** Craft is **7.45x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 771.23K
🥈 Mutative             ██████████████████████ 430.48K
🥉 Immer                █████████ 165.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 771.23K | ±0.45% | 1.2966ms | 1.8370ms | 385.62K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 430.48K | ±0.43% | 2.3230ms | 2.8870ms | 215.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.26K | ±0.40% | 6.0509ms | 6.8710ms | 82.63K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 738.61K
🥈 Mutative             ███████████████████████ 428.23K
🥉 Immer                ██████████ 176.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 738.61K | ±0.50% | 1.3539ms | 1.8860ms | 369.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.23K | ±0.45% | 2.3352ms | 2.8490ms | 214.12K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.30K | ±0.53% | 5.6720ms | 8.0130ms | 88.15K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.36K
🥈 Mutative             ████████████████████████████████ 145.80K
🥉 Immer                █████████████████ 76.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.36K | ±0.49% | 5.5140ms | 7.2220ms | 90.68K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 145.80K | ±0.51% | 6.8586ms | 9.3400ms | 72.90K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 76.78K | ±0.74% | 13.0238ms | 22.8150ms | 38.39K |

**Key Insight:** Craft is **2.36x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.10K
🥈 Mutative             ██████████████ 75.64K
🥉 Immer                ███ 15.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.10K | ±0.45% | 4.4623ms | 5.4430ms | 112.05K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.64K | ±0.49% | 13.2201ms | 21.8380ms | 37.82K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 15.39K | ±0.47% | 64.9612ms | 77.8750ms | 7.70K |

**Key Insight:** Craft is **14.56x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 209.36K
🥈 Immer                █████████████ 68.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 209.36K | ±0.43% | 4.7764ms | 5.6650ms | 104.68K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 68.32K | ±0.39% | 14.6376ms | 21.1500ms | 34.16K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 947.74K
🥈 Mutative             ██████████████████████████████████████ 900.45K
🥉 Immutability Helper  █████████████████████████████████████ 882.30K
   Craft                █████████████████████████████████████ 881.68K
   Immer                ████████████████████████████ 667.49K
   Seamless Immutable   █████ 116.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 15.80M | ±0.08% | 0.0633ms | 0.1630ms | 7.90M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 947.74K | ±0.39% | 1.0551ms | 1.7220ms | 473.87K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 900.45K | ±0.81% | 1.1106ms | 1.6030ms | 450.22K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 882.30K | ±0.45% | 1.1334ms | 1.8420ms | 441.15K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 881.68K | ±2.97% | 1.1342ms | 2.3420ms | 440.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 667.49K | ±2.20% | 1.4981ms | 2.8880ms | 333.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 116.77K | ±0.38% | 8.5638ms | 15.0110ms | 58.39K |

**Key Insight:** Native Spread is **135.31x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 430.05K
🥈 Mutative             ████████████████████████████████████ 391.37K
🥉 Craft                ██████████████████████████████ 322.81K
   Immutable.js         ████████████████████ 214.01K
   Immer                ██████████████ 147.41K
   Seamless Immutable   ███ 37.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.87M | ±0.13% | 0.0842ms | 0.2000ms | 5.94M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 430.05K | ±0.59% | 2.3253ms | 3.3290ms | 215.03K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 391.37K | ±0.41% | 2.5551ms | 3.1610ms | 195.69K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 322.81K | ±2.61% | 3.0978ms | 5.2920ms | 161.40K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 214.01K | ±0.42% | 4.6726ms | 7.9650ms | 107.01K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 147.41K | ±2.00% | 6.7838ms | 13.7940ms | 73.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.06K | ±0.37% | 26.9797ms | 33.0840ms | 18.53K |

**Key Insight:** Native Spread is **320.32x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.58M
🥈 Immutability Helper  ████████████████████████████████ 1.25M
🥉 Craft                ███████████ 440.15K
   Mutative             ██████████ 386.08K
   Immer                ███████ 265.50K
   Seamless Immutable   ██ 60.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.01M | ±0.90% | 0.0833ms | 0.2210ms | 6.00M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.58M | ±0.33% | 0.6325ms | 1.0280ms | 790.50K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.25M | ±0.23% | 0.8026ms | 1.2040ms | 622.99K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 440.15K | ±0.57% | 2.2720ms | 3.0620ms | 220.07K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 386.08K | ±0.46% | 2.5901ms | 3.5710ms | 193.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 265.50K | ±0.83% | 3.7665ms | 6.3690ms | 132.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.93K | ±0.45% | 16.4128ms | 22.0320ms | 30.46K |

**Key Insight:** Native Spread is **197.09x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 761.19K
🥈 Immutability Helper  ████████████████████████████ 535.79K
🥉 Craft                ███████████████ 285.82K
   Mutative             ███████████ 203.36K
   Immer                ███████ 134.94K
   Seamless Immutable   ███ 61.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 13.58M | ±0.78% | 0.0736ms | 0.1850ms | 6.79M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 761.19K | ±0.46% | 1.3137ms | 1.7860ms | 380.60K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 535.79K | ±0.21% | 1.8664ms | 2.3620ms | 267.89K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 285.82K | ±0.49% | 3.4988ms | 5.3990ms | 142.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 203.36K | ±0.31% | 4.9173ms | 5.7940ms | 101.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 134.94K | ±0.82% | 7.4105ms | 12.9140ms | 67.47K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.64K | ±0.40% | 16.2222ms | 21.9830ms | 30.82K |

**Key Insight:** Native Filter is **220.33x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 460.20K
🥈 Mutative             ████████████████████████████████████ 411.45K
🥉 Immutability Helper  ████████████████████████████████ 370.29K
   Immer                ███████████████████████ 264.86K
   Immutable.js         ███████████████ 172.73K
   Seamless Immutable   ███ 31.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.90M | ±1.04% | 0.0840ms | 0.1980ms | 5.95M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 460.20K | ±0.63% | 2.1730ms | 2.9190ms | 230.15K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 411.45K | ±0.68% | 2.4305ms | 2.9990ms | 205.72K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 370.29K | ±0.26% | 2.7006ms | 3.4260ms | 185.14K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 264.86K | ±0.35% | 3.7756ms | 5.5220ms | 132.43K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.73K | ±0.60% | 5.7894ms | 7.0920ms | 86.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.12K | ±0.63% | 32.1305ms | 37.7650ms | 15.56K |

**Key Insight:** Native Map is **382.48x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 289.88K
🥈 Craft                ███████████████████████████████████ 251.28K
🥉 Mutative             ██████████████████████████ 190.72K
   Immutable.js         █████████████████████ 151.65K
   Immer                █████████████ 92.00K
   Seamless Immutable   ███ 21.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.09M | ±0.98% | 0.1100ms | 0.2670ms | 4.55M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 289.88K | ±0.77% | 3.4497ms | 5.3820ms | 144.94K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 251.28K | ±0.84% | 3.9796ms | 6.9410ms | 125.64K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 190.72K | ±0.74% | 5.2433ms | 6.1060ms | 95.36K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 151.65K | ±0.80% | 6.5940ms | 8.5270ms | 75.83K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 92.00K | ±0.79% | 10.8693ms | 16.4830ms | 46.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.67K | ±0.79% | 46.1438ms | 82.6270ms | 10.84K |

**Key Insight:** Native Spread is **419.49x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 337.26K
🥈 Immer                ████ 31.11K
🥉 Craft                ███ 22.88K
   Immutability Helper  █ 7.27K
   Immutable.js         █ 684.47
   Seamless Immutable   █ 239.48
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 351.44K | ±0.59% | 2.8454ms | 3.7160ms | 175.72K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 337.26K | ±0.64% | 2.9650ms | 3.7080ms | 168.63K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 31.11K | ±0.60% | 32.1474ms | 38.2080ms | 15.55K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.88K | ±0.46% | 43.7106ms | 49.8950ms | 11.44K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.27K | ±0.59% | 137.5557ms | 167.1560ms | 3.63K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 684.47 | ±1.55% | 1460.9916ms | 2233.4640ms | 343.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 239.48 | ±0.74% | 4175.7926ms | 4800.2560ms | 120.00 |

**Key Insight:** Native Map is **1467.54x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 260.89K
🥈 Immutability Helper  ████████████████████████████████████████ 257.65K
🥉 Mutative             ██████████████████████████████ 197.05K
   Immutable.js         ███████████████████████ 148.88K
   Immer                ███████████████████ 121.74K
   Seamless Immutable   ███ 18.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.84M | ±0.79% | 0.1462ms | 0.2740ms | 3.42M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 260.89K | ±0.55% | 3.8330ms | 4.5090ms | 130.45K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 257.65K | ±0.55% | 3.8812ms | 4.8670ms | 128.83K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.05K | ±0.62% | 5.0750ms | 6.0370ms | 98.52K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 148.88K | ±0.66% | 6.7168ms | 9.8810ms | 74.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 121.74K | ±0.52% | 8.2141ms | 13.0150ms | 60.87K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.80K | ±0.52% | 53.1888ms | 61.8110ms | 9.40K |

**Key Insight:** Native Spread is **363.88x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T23:03:54.793Z*
