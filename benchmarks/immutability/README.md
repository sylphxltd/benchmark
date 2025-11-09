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
- **Last Run:** 2:02:33 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 55.7/100 | 76.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 43.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.5% |
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
- [Map - Large (100 items)](#map-large-100-items-)
- [Set - Large (100 items)](#set-large-100-items-)
- [Undo/Redo - Inverse Patches](#undo-redo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels-)
- [Large Array Update (1000 items)](#large-array-update-1000-items-)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes-)

### JSON Patches - Generate {#json-patches-generate}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 216.03K
🥈 Immer                ████████████████████ 109.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.03K | ±2.31% | 4.6290ms | 9.0670ms | 108.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 109.16K | ±1.93% | 9.1611ms | 25.7180ms | 54.58K |

### JSON Patches - Apply {#json-patches-apply}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 944.04K
🥈 Immer                █████ 129.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 944.04K | ±0.21% | 1.0593ms | 1.2630ms | 472.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.69K | ±2.01% | 7.7109ms | 15.0980ms | 64.84K |

### JSON Patches - Roundtrip {#json-patches-roundtrip}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.88K
🥈 Immer                ██████████████ 59.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.88K | ±1.90% | 5.7510ms | 12.0630ms | 86.94K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.94K | ±1.85% | 16.6821ms | 31.0280ms | 29.97K |

### Map - Set Operation {#map-set-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 739.31K
🥈 Mutative             █████████████████████████ 468.68K
🥉 Immer                █████████ 174.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 739.31K | ±1.90% | 1.3526ms | 3.0060ms | 369.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 468.68K | ±0.97% | 2.1336ms | 3.1860ms | 234.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 174.42K | ±1.19% | 5.7333ms | 12.5230ms | 87.27K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value {#map-update-nested-value}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.23M
🥈 Mutative             ██████████████ 420.01K
🥉 Immer                █████ 157.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.23M | ±0.83% | 0.8106ms | 1.2920ms | 616.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 420.01K | ±0.74% | 2.3809ms | 3.0560ms | 210.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.83K | ±0.44% | 6.3359ms | 13.4150ms | 78.92K |

**Key Insight:** Craft is **7.82x faster** than Immer in this category.

### Set - Add Operation {#set-add-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 845.79K
🥈 Mutative             █████████████████████ 440.25K
🥉 Immer                ████████ 167.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 845.79K | ±0.65% | 1.1823ms | 1.7130ms | 422.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 440.25K | ±0.68% | 2.2714ms | 2.9760ms | 220.13K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.09K | ±0.47% | 5.9846ms | 11.1610ms | 83.55K |

**Key Insight:** Craft is **5.06x faster** than Immer in this category.

### Set - Delete Operation {#set-delete-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 829.64K
🥈 Mutative             █████████████████████ 433.02K
🥉 Immer                █████████ 179.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 829.64K | ±0.71% | 1.2053ms | 1.6130ms | 414.82K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.02K | ±0.66% | 2.3094ms | 2.9650ms | 216.51K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.84K | ±0.50% | 5.5605ms | 7.0930ms | 89.92K |

**Key Insight:** Craft is **4.61x faster** than Immer in this category.

### Map - Large (100 items) {#map-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.23K
🥈 Mutative             █████████████████████████████████ 147.86K
🥉 Immer                █████████████████ 77.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.23K | ±0.76% | 5.5484ms | 8.9070ms | 90.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.86K | ±0.76% | 6.7630ms | 9.9080ms | 73.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.35K | ±0.69% | 12.9275ms | 23.9450ms | 38.68K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items) {#set-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.33K
🥈 Mutative             █████████████ 75.56K
🥉 Immer                ██ 13.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.33K | ±0.73% | 4.4183ms | 5.9710ms | 113.17K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.56K | ±0.76% | 13.2344ms | 22.9230ms | 37.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.78K | ±0.51% | 72.5545ms | 89.4570ms | 6.89K |

**Key Insight:** Craft is **16.42x faster** than Immer in this category.

### Undo/Redo - Inverse Patches {#undo-redo-inverse-patches}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 220.66K
🥈 Immer                █████████████ 70.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 220.66K | ±0.71% | 4.5318ms | 5.4500ms | 110.33K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.25K | ±0.39% | 14.2343ms | 25.0670ms | 35.13K |

### Simple Object Update {#simple-object-update}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  ████████████████████████████████████ 963.45K
🥉 Craft                ████████████████████████████████████ 959.58K
   Mutative             ████████████████████████████████████ 958.71K
   Immer                █████████████████████████ 678.99K
   Seamless Immutable   █████ 129.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.63M | ±0.10% | 0.0684ms | 0.0910ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.11% | 0.9342ms | 1.3720ms | 535.25K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 963.45K | ±0.59% | 1.0379ms | 1.3230ms | 481.72K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 959.58K | ±2.89% | 1.0421ms | 2.6050ms | 479.79K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 958.71K | ±0.80% | 1.0431ms | 1.6230ms | 479.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 678.99K | ±2.13% | 1.4728ms | 3.2060ms | 339.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.66K | ±0.38% | 7.7125ms | 12.7950ms | 64.83K |

**Key Insight:** Native Spread is **112.82x faster** than Seamless Immutable in this category.

### Nested Object Update {#nested-object-update}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 519.24K
🥈 Mutative             ██████████████████████████████ 395.81K
🥉 Craft                ████████████████████████ 314.61K
   Immutable.js         █████████████████ 226.77K
   Immer                ████████████ 153.03K
   Seamless Immutable   ███ 37.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.63M | ±0.59% | 0.0860ms | 0.1400ms | 5.81M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 519.24K | ±0.64% | 1.9259ms | 2.5650ms | 259.62K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 395.81K | ±0.59% | 2.5265ms | 4.8990ms | 197.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 314.61K | ±3.16% | 3.1785ms | 6.5020ms | 157.31K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 226.77K | ±0.78% | 4.4097ms | 8.2250ms | 113.39K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.03K | ±2.35% | 6.5348ms | 11.9820ms | 76.51K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.34K | ±0.42% | 26.7812ms | 39.5030ms | 18.67K |

**Key Insight:** Native Spread is **311.42x faster** than Seamless Immutable in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.84M
🥈 Immutability Helper  ██████████████████████████████ 1.39M
🥉 Craft                ███████████ 509.68K
   Mutative             █████████ 413.26K
   Immer                ██████ 278.02K
   Seamless Immutable   █ 60.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.97M | ±2.44% | 0.0911ms | 0.1400ms | 5.49M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.84M | ±0.77% | 0.5428ms | 0.9210ms | 921.22K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.56% | 0.7201ms | 0.8010ms | 694.38K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 509.68K | ±0.75% | 1.9620ms | 2.5350ms | 254.84K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 413.26K | ±0.99% | 2.4198ms | 3.8170ms | 206.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.02K | ±0.79% | 3.5969ms | 6.2810ms | 139.01K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.47K | ±0.53% | 16.5370ms | 30.1660ms | 30.24K |

**Key Insight:** Native Spread is **181.49x faster** than Seamless Immutable in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 792.53K
🥈 Immutability Helper  █████████████████████████████ 580.72K
🥉 Craft                ████████████████ 321.96K
   Mutative             ███████████ 212.53K
   Immer                ███████ 144.22K
   Seamless Immutable   ███ 60.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.41M | ±2.06% | 0.0876ms | 0.1100ms | 5.71M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 792.53K | ±1.09% | 1.2618ms | 1.8540ms | 396.27K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.72K | ±0.20% | 1.7220ms | 1.9040ms | 290.36K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 321.96K | ±0.53% | 3.1060ms | 3.7870ms | 160.98K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 212.53K | ±0.62% | 4.7051ms | 9.9290ms | 106.27K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.22K | ±0.59% | 6.9339ms | 11.9420ms | 72.11K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.76K | ±0.75% | 16.4594ms | 25.9290ms | 30.38K |

**Key Insight:** Native Filter is **187.84x faster** than Seamless Immutable in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 484.04K
🥈 Mutative             ████████████████████████████████████ 434.99K
🥉 Immutability Helper  █████████████████████████████████ 401.60K
   Immer                ███████████████████████ 284.11K
   Immutable.js         ██████████████ 173.05K
   Seamless Immutable   ███ 31.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.90M | ±1.60% | 0.0917ms | 0.1310ms | 5.45M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 484.04K | ±1.38% | 2.0660ms | 2.7350ms | 242.02K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 434.99K | ±1.54% | 2.2989ms | 4.1580ms | 217.50K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.60K | ±0.57% | 2.4901ms | 3.2660ms | 200.80K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.11K | ±0.42% | 3.5198ms | 4.4280ms | 142.05K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 173.05K | ±1.53% | 5.7788ms | 9.0160ms | 86.52K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.20K | ±1.07% | 32.0482ms | 45.1850ms | 15.60K |

**Key Insight:** Native Map is **349.37x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.01K
🥈 Craft                ███████████████████████████████████ 271.22K
🥉 Mutative             ███████████████████████████ 208.25K
   Immutable.js         ██████████████████████ 172.76K
   Immer                █████████████ 97.76K
   Seamless Immutable   ███ 22.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.11M | ±0.68% | 0.1098ms | 0.1610ms | 4.55M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.01K | ±0.53% | 3.2050ms | 4.4280ms | 156.00K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.22K | ±0.96% | 3.6870ms | 4.5180ms | 135.61K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 208.25K | ±0.97% | 4.8019ms | 9.5380ms | 104.13K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.76K | ±2.95% | 5.7883ms | 9.7780ms | 86.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.76K | ±0.80% | 10.2293ms | 19.4070ms | 48.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.10K | ±0.60% | 45.2416ms | 60.0620ms | 11.05K |

**Key Insight:** Native Spread is **412.03x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items) {#large-array-update-1000-items-}

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 348.77K
🥈 Immer                ███ 29.86K
🥉 Craft                ███ 21.95K
   Immutability Helper  █ 6.39K
   Immutable.js         █ 664.31
   Seamless Immutable   █ 248.23
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 348.77K | ±0.96% | 2.8672ms | 3.5970ms | 174.39K |
| 🥈 | **Native Map** | 343.09K | ±1.07% | 2.9147ms | 3.6670ms | 171.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.86K | ±0.54% | 33.4909ms | 47.0980ms | 14.93K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.95K | ±0.54% | 45.5527ms | 59.5310ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.39K | ±0.60% | 156.4157ms | 197.6600ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 664.31 | ±1.87% | 1505.3185ms | 2313.9800ms | 333.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 248.23 | ±0.68% | 4028.5608ms | 4634.8730ms | 125.00 |

**Key Insight:** Mutative is **1405.04x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes) {#multiple-updates-3-changes-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.54K
🥈 Craft                ███████████████████████████████████████ 273.57K
🥉 Mutative             ████████████████████████████ 195.58K
   Immutable.js         ███████████████████████ 161.29K
   Immer                ██████████████████ 126.70K
   Seamless Immutable   ███ 19.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.37M | ±1.32% | 0.1570ms | 0.1800ms | 3.18M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.54K | ±0.70% | 3.6031ms | 4.8790ms | 138.77K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.57K | ±0.81% | 3.6554ms | 4.5790ms | 136.78K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.58K | ±0.82% | 5.1131ms | 7.1030ms | 97.79K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.29K | ±0.88% | 6.1999ms | 7.3730ms | 80.65K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.70K | ±0.74% | 7.8925ms | 14.6280ms | 63.35K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.08K | ±0.56% | 52.4219ms | 63.6090ms | 9.54K |

**Key Insight:** Native Spread is **333.83x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T14:12:08.806Z*
