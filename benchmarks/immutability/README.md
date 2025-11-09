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
- **Last Run:** 6:17:25 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 217.43K
🥈 Immer                █████████████████████ 115.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.43K | ±1.87% | 4.5993ms | 9.1670ms | 108.71K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.86K | ±1.54% | 8.6309ms | 18.1450ms | 57.93K |

### JSON Patches - Apply {#json-patches-apply}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 983.41K
🥈 Immer                █████ 132.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 983.41K | ±0.16% | 1.0169ms | 1.7430ms | 491.71K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.81K | ±1.38% | 7.5298ms | 13.5250ms | 66.40K |

### JSON Patches - Roundtrip {#json-patches-roundtrip}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.59K
🥈 Immer                ██████████████ 60.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.59K | ±1.63% | 5.6308ms | 11.3820ms | 88.80K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.11K | ±1.34% | 16.6350ms | 35.0760ms | 30.06K |

### Map - Set Operation {#map-set-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 751.55K
🥈 Mutative             █████████████████████████ 472.77K
🥉 Immer                ██████████ 180.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 751.55K | ±1.51% | 1.3306ms | 3.0260ms | 375.78K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.77K | ±0.70% | 2.1152ms | 2.8350ms | 236.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.16K | ±0.88% | 5.5505ms | 9.7380ms | 90.08K |

**Key Insight:** Craft is **4.17x faster** than Immer in this category.

### Map - Update Nested Value {#map-update-nested-value}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.29M
🥈 Mutative             █████████████ 426.85K
🥉 Immer                █████ 159.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.29M | ±0.40% | 0.7732ms | 1.1120ms | 646.64K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 426.85K | ±0.38% | 2.3427ms | 2.8560ms | 213.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.75K | ±0.58% | 6.2599ms | 12.6840ms | 79.87K |

**Key Insight:** Craft is **8.10x faster** than Immer in this category.

### Set - Add Operation {#set-add-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 860.32K
🥈 Mutative             █████████████████████ 460.08K
🥉 Immer                ████████ 173.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 860.32K | ±0.40% | 1.1624ms | 1.5430ms | 430.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 460.08K | ±0.39% | 2.1735ms | 2.5850ms | 230.04K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 173.09K | ±0.30% | 5.7773ms | 7.5440ms | 86.55K |

**Key Insight:** Craft is **4.97x faster** than Immer in this category.

### Set - Delete Operation {#set-delete-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 843.52K
🥈 Mutative             ██████████████████████ 454.14K
🥉 Immer                █████████ 185.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 843.52K | ±0.45% | 1.1855ms | 1.5130ms | 421.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.14K | ±0.42% | 2.2020ms | 2.6450ms | 227.07K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.26K | ±0.32% | 5.3977ms | 6.9130ms | 92.63K |

**Key Insight:** Craft is **4.55x faster** than Immer in this category.

### Map - Large (100 items) {#map-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.59K
🥈 Mutative             █████████████████████████████████ 151.71K
🥉 Immer                █████████████████ 79.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.59K | ±0.45% | 5.3881ms | 8.0550ms | 92.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 151.71K | ±0.46% | 6.5915ms | 10.4900ms | 75.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.39K | ±0.61% | 12.5965ms | 23.5640ms | 39.69K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items) {#set-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.94K
🥈 Mutative             █████████████ 76.36K
🥉 Immer                ██ 13.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.94K | ±0.40% | 4.3871ms | 5.6300ms | 113.97K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.36K | ±0.44% | 13.0963ms | 22.7020ms | 38.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.93K | ±0.72% | 71.7822ms | 108.6130ms | 6.97K |

**Key Insight:** Craft is **16.36x faster** than Immer in this category.

### Undo/Redo - Inverse Patches {#undo-redo-inverse-patches}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.68K
🥈 Immer                ████████████ 70.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.68K | ±0.35% | 4.3922ms | 6.1820ms | 113.84K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.71K | ±0.31% | 14.1431ms | 27.0710ms | 35.35K |

### Simple Object Update {#simple-object-update}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Mutative             ██████████████████████████████████████ 986.47K
🥉 Immutability Helper  █████████████████████████████████████ 964.55K
   Craft                ████████████████████████████████████ 947.80K
   Immer                ███████████████████████████ 697.64K
   Seamless Immutable   █████ 128.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.56M | ±0.09% | 0.0687ms | 0.1100ms | 7.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.17% | 0.9532ms | 1.1520ms | 524.56K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 986.47K | ±0.40% | 1.0137ms | 1.2730ms | 493.24K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 964.55K | ±0.39% | 1.0368ms | 1.8140ms | 482.27K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 947.80K | ±2.51% | 1.0551ms | 2.6850ms | 473.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 697.64K | ±1.92% | 1.4334ms | 3.1860ms | 348.82K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.97K | ±0.25% | 7.7535ms | 13.3340ms | 64.49K |

**Key Insight:** Native Spread is **112.87x faster** than Seamless Immutable in this category.

### Nested Object Update {#nested-object-update}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 520.69K
🥈 Mutative             ██████████████████████████████ 386.78K
🥉 Craft                ██████████████████████████ 344.73K
   Immutable.js         ██████████████████ 236.34K
   Immer                ████████████ 158.33K
   Seamless Immutable   ███ 37.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.66M | ±0.14% | 0.0858ms | 0.1410ms | 5.83M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 520.69K | ±0.31% | 1.9205ms | 2.2550ms | 260.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 386.78K | ±1.24% | 2.5855ms | 4.9490ms | 193.39K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 344.73K | ±2.46% | 2.9008ms | 5.4000ms | 172.37K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 236.34K | ±0.39% | 4.2312ms | 5.2300ms | 118.17K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 158.33K | ±1.98% | 6.3160ms | 11.4310ms | 79.17K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.41K | ±0.45% | 26.7289ms | 37.2390ms | 18.71K |

**Key Insight:** Native Spread is **311.54x faster** than Seamless Immutable in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  █████████████████████████████████ 1.43M
🥉 Craft                ████████████ 505.62K
   Mutative             ██████████ 431.93K
   Immer                ███████ 285.36K
   Seamless Immutable   █ 61.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.73M | ±1.02% | 0.0852ms | 0.1110ms | 5.87M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±0.44% | 0.5859ms | 0.9910ms | 853.42K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.53% | 0.7016ms | 0.7510ms | 712.68K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 505.62K | ±0.45% | 1.9778ms | 2.5140ms | 252.81K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 431.93K | ±0.44% | 2.3152ms | 2.7650ms | 215.97K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.36K | ±0.38% | 3.5043ms | 6.3520ms | 142.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.27K | ±0.40% | 16.3222ms | 25.6170ms | 30.63K |

**Key Insight:** Native Spread is **191.48x faster** than Seamless Immutable in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 803.16K
🥈 Immutability Helper  █████████████████████████████ 581.37K
🥉 Craft                ████████████████ 317.98K
   Mutative             ██████████ 208.24K
   Immer                ███████ 143.78K
   Seamless Immutable   ███ 60.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.85M | ±0.69% | 0.0778ms | 0.1100ms | 6.43M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 803.16K | ±0.81% | 1.2451ms | 1.6130ms | 401.58K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 581.37K | ±0.30% | 1.7201ms | 1.9140ms | 290.69K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.98K | ±0.50% | 3.1448ms | 3.5470ms | 158.99K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 208.24K | ±0.59% | 4.8022ms | 9.4570ms | 104.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.78K | ±0.65% | 6.9550ms | 12.3630ms | 71.89K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.68K | ±0.69% | 16.4789ms | 25.8380ms | 30.34K |

**Key Insight:** Native Filter is **211.80x faster** than Seamless Immutable in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.16K
🥈 Mutative             ████████████████████████████████████ 453.80K
🥉 Immutability Helper  ████████████████████████████████ 401.72K
   Immer                ███████████████████████ 290.84K
   Immutable.js         ███████████████ 187.08K
   Seamless Immutable   ███ 31.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.28M | ±1.06% | 0.0886ms | 0.1200ms | 5.64M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 498.16K | ±0.40% | 2.0074ms | 2.3750ms | 249.08K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 453.80K | ±0.46% | 2.2036ms | 2.6750ms | 226.90K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.72K | ±0.19% | 2.4893ms | 2.9150ms | 200.86K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 290.84K | ±0.14% | 3.4383ms | 4.0780ms | 145.42K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.08K | ±0.47% | 5.3453ms | 6.0110ms | 93.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.95K | ±0.36% | 31.3017ms | 40.7160ms | 15.97K |

**Key Insight:** Native Map is **353.18x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 304.58K
🥈 Craft                ███████████████████████████████████ 269.07K
🥉 Mutative             ████████████████████████████ 211.32K
   Immutable.js         ██████████████████████ 165.95K
   Immer                █████████████ 99.06K
   Seamless Immutable   ███ 22.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.43M | ±11.76% | 0.1186ms | 0.1600ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 304.58K | ±1.03% | 3.2832ms | 3.8970ms | 152.29K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.07K | ±0.67% | 3.7164ms | 4.3580ms | 134.54K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 211.32K | ±0.62% | 4.7322ms | 5.8710ms | 105.66K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.95K | ±0.86% | 6.0258ms | 8.2250ms | 82.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.06K | ±0.78% | 10.0948ms | 19.1060ms | 49.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.22K | ±0.88% | 44.9972ms | 58.2090ms | 11.11K |

**Key Insight:** Native Spread is **379.36x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items) {#large-array-update-1000-items-}

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 360.36K
🥈 Immer                ███ 29.67K
🥉 Craft                ██ 21.71K
   Immutability Helper  █ 6.42K
   Immutable.js         █ 738.58
   Seamless Immutable   █ 258.35
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 360.36K | ±0.61% | 2.7750ms | 3.7360ms | 180.18K |
| 🥈 | **Native Map** | 358.40K | ±0.50% | 2.7901ms | 3.5070ms | 179.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.67K | ±0.47% | 33.7044ms | 54.4520ms | 14.84K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.71K | ±0.44% | 46.0655ms | 92.4230ms | 10.86K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.42K | ±0.30% | 155.7039ms | 178.4840ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 738.58 | ±1.14% | 1353.9549ms | 1863.2880ms | 370.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 258.35 | ±0.49% | 3870.7009ms | 4298.4800ms | 130.00 |

**Key Insight:** Mutative is **1394.84x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes) {#multiple-updates-3-changes-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.69K
🥈 Craft                ████████████████████████████████████████ 275.89K
🥉 Mutative             █████████████████████████████ 199.48K
   Immutable.js         ███████████████████████ 162.80K
   Immer                ██████████████████ 127.71K
   Seamless Immutable   ███ 18.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.60M | ±0.54% | 0.1516ms | 0.2100ms | 3.30M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.69K | ±0.38% | 3.5883ms | 4.2380ms | 139.34K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 275.89K | ±0.41% | 3.6246ms | 4.2680ms | 137.95K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.48K | ±0.42% | 5.0131ms | 5.7410ms | 99.74K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.80K | ±0.46% | 6.1426ms | 7.2430ms | 81.40K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.71K | ±0.38% | 7.8304ms | 14.0670ms | 63.85K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.78K | ±0.65% | 53.2521ms | 100.0280ms | 9.39K |

**Key Insight:** Native Spread is **351.23x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T13:55:35.315Z*
