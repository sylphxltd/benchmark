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
- **Last Run:** 2:54:05 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.4/100 | 76.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.1/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.2% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 221.08K
🥈 Immer                █████████████████████ 113.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.08K | ±1.92% | 4.5232ms | 8.9770ms | 110.54K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.51K | ±1.55% | 8.8095ms | 23.7340ms | 56.76K |

### JSON Patches - Apply {#json-patches-apply}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 994.46K
🥈 Immer                █████ 133.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 994.46K | ±0.16% | 1.0056ms | 1.1720ms | 497.23K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 133.33K | ±1.37% | 7.5002ms | 14.7480ms | 66.67K |

### JSON Patches - Roundtrip {#json-patches-roundtrip}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.89K
🥈 Immer                ██████████████ 61.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.89K | ±1.55% | 5.6531ms | 11.4010ms | 88.45K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.33K | ±1.48% | 16.3052ms | 30.0360ms | 30.66K |

### Map - Set Operation {#map-set-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 756.16K
🥈 Mutative             █████████████████████████ 472.53K
🥉 Immer                █████████ 176.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 756.16K | ±1.57% | 1.3225ms | 2.9560ms | 378.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.53K | ±0.71% | 2.1163ms | 2.5950ms | 236.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.14K | ±0.90% | 5.6772ms | 9.1770ms | 88.07K |

**Key Insight:** Craft is **4.29x faster** than Immer in this category.

### Map - Update Nested Value {#map-update-nested-value}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 428.03K
🥉 Immer                █████ 156.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.28M | ±0.37% | 0.7840ms | 1.0920ms | 637.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.03K | ±0.38% | 2.3363ms | 2.6850ms | 214.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.32K | ±0.53% | 6.3973ms | 13.3650ms | 78.16K |

**Key Insight:** Craft is **8.16x faster** than Immer in this category.

### Set - Add Operation {#set-add-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 854.16K
🥈 Mutative             █████████████████████ 455.70K
🥉 Immer                ████████ 167.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 854.16K | ±0.36% | 1.1707ms | 1.4530ms | 427.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 455.70K | ±0.38% | 2.1944ms | 2.6950ms | 227.85K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.20K | ±0.29% | 5.9809ms | 7.9050ms | 83.60K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation {#set-delete-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 844.98K
🥈 Mutative             █████████████████████ 451.49K
🥉 Immer                █████████ 180.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 844.98K | ±0.36% | 1.1835ms | 1.4620ms | 422.49K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.49K | ±0.41% | 2.2149ms | 2.5550ms | 225.75K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.39K | ±0.31% | 5.5436ms | 9.7780ms | 90.19K |

**Key Insight:** Craft is **4.68x faster** than Immer in this category.

### Map - Large (100 items) {#map-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.13K
🥈 Mutative             █████████████████████████████████ 150.54K
🥉 Immer                █████████████████ 79.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.13K | ±0.46% | 5.4605ms | 7.2530ms | 91.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.54K | ±0.45% | 6.6430ms | 11.3310ms | 75.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.23K | ±0.62% | 12.6221ms | 25.1870ms | 39.61K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items) {#set-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 230.21K
🥈 Mutative             ██████████████ 78.02K
🥉 Immer                ██ 13.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 230.21K | ±0.40% | 4.3438ms | 5.0090ms | 115.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 78.02K | ±0.44% | 12.8165ms | 22.0510ms | 39.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.63K | ±0.31% | 73.3775ms | 97.1510ms | 6.82K |

**Key Insight:** Craft is **16.89x faster** than Immer in this category.

### Undo/Redo - Inverse Patches {#undo-redo-inverse-patches}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.46K
🥈 Immer                █████████████ 71.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.46K | ±0.32% | 4.3963ms | 4.9600ms | 113.73K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.51K | ±0.23% | 13.9849ms | 24.4860ms | 35.75K |

### Simple Object Update {#simple-object-update}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.04M
🥈 Immutability Helper  ██████████████████████████████████████ 982.33K
🥉 Mutative             ██████████████████████████████████████ 979.69K
   Craft                ████████████████████████████████████ 932.88K
   Immer                ███████████████████████████ 702.99K
   Seamless Immutable   █████ 131.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.68M | ±0.09% | 0.0681ms | 0.1000ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.04M | ±0.17% | 0.9658ms | 1.6330ms | 517.70K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 982.33K | ±0.31% | 1.0180ms | 1.1520ms | 491.17K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 979.69K | ±0.37% | 1.0207ms | 1.4830ms | 489.85K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 932.88K | ±2.47% | 1.0719ms | 2.7050ms | 466.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 702.99K | ±1.68% | 1.4225ms | 3.1660ms | 351.50K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 131.81K | ±0.24% | 7.5866ms | 11.9920ms | 65.91K |

**Key Insight:** Native Spread is **111.41x faster** than Seamless Immutable in this category.

### Nested Object Update {#nested-object-update}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 483.85K
🥈 Mutative             ████████████████████████████████ 382.41K
🥉 Craft                ████████████████████████████ 340.22K
   Immutable.js         ███████████████████ 225.02K
   Immer                █████████████ 155.72K
   Seamless Immutable   ███ 37.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.23M | ±0.13% | 0.0890ms | 0.1400ms | 5.62M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 483.85K | ±0.30% | 2.0667ms | 4.0780ms | 241.93K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 382.41K | ±2.74% | 2.6150ms | 5.1490ms | 191.21K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 340.22K | ±2.46% | 2.9393ms | 5.6210ms | 170.14K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 225.02K | ±0.36% | 4.4440ms | 8.3260ms | 112.51K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.72K | ±1.72% | 6.4218ms | 13.4350ms | 77.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.67K | ±0.24% | 26.5465ms | 39.7540ms | 18.84K |

**Key Insight:** Native Spread is **298.15x faster** than Seamless Immutable in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ██████████████████████████████████ 1.46M
🥉 Craft                ████████████ 510.16K
   Mutative             ██████████ 415.62K
   Immer                ███████ 284.62K
   Seamless Immutable   █ 63.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.40M | ±0.96% | 0.0877ms | 0.1110ms | 5.70M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.40% | 0.5746ms | 0.7310ms | 870.21K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.46M | ±0.39% | 0.6850ms | 0.7520ms | 729.96K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 510.16K | ±0.32% | 1.9602ms | 2.2740ms | 255.08K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 415.62K | ±0.35% | 2.4060ms | 2.7360ms | 207.81K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 284.62K | ±0.35% | 3.5134ms | 7.5840ms | 142.31K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 63.09K | ±0.32% | 15.8492ms | 25.2570ms | 31.55K |

**Key Insight:** Native Spread is **180.74x faster** than Seamless Immutable in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 783.92K
🥈 Immutability Helper  ██████████████████████████████ 579.71K
🥉 Craft                ████████████████ 310.50K
   Mutative             ███████████ 213.55K
   Immer                ███████ 141.53K
   Seamless Immutable   ███ 62.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.77M | ±0.67% | 0.0783ms | 0.1100ms | 6.39M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 783.92K | ±0.73% | 1.2756ms | 1.5730ms | 391.96K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 579.71K | ±0.22% | 1.7250ms | 1.8340ms | 289.86K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 310.50K | ±0.38% | 3.2206ms | 3.6270ms | 155.25K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 213.55K | ±0.39% | 4.6828ms | 7.9950ms | 106.77K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.53K | ±0.39% | 7.0655ms | 13.1040ms | 70.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.77K | ±0.26% | 15.9300ms | 25.3270ms | 31.39K |

**Key Insight:** Native Filter is **203.47x faster** than Seamless Immutable in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 486.26K
🥈 Mutative             █████████████████████████████████████ 451.46K
🥉 Immutability Helper  ████████████████████████████████ 393.62K
   Immer                ███████████████████████ 281.00K
   Immutable.js         ███████████████ 181.66K
   Seamless Immutable   ███ 31.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.71M | ±0.61% | 0.0854ms | 0.1200ms | 5.85M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 486.26K | ±0.29% | 2.0565ms | 2.3940ms | 243.13K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 451.46K | ±0.58% | 2.2150ms | 2.6050ms | 225.73K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 393.62K | ±0.41% | 2.5405ms | 4.3280ms | 196.81K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.00K | ±0.65% | 3.5587ms | 7.1430ms | 140.50K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 181.66K | ±0.34% | 5.5048ms | 6.4220ms | 90.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.91K | ±0.27% | 31.3408ms | 43.6510ms | 15.95K |

**Key Insight:** Native Map is **366.85x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 314.80K
🥈 Craft                ███████████████████████████████████ 274.28K
🥉 Mutative             ███████████████████████████ 215.23K
   Immutable.js         ██████████████████████ 176.44K
   Immer                █████████████ 98.39K
   Seamless Immutable   ███ 22.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.23M | ±0.65% | 0.1083ms | 0.1400ms | 4.62M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 314.80K | ±0.38% | 3.1767ms | 3.6370ms | 157.40K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 274.28K | ±0.43% | 3.6459ms | 4.1080ms | 137.14K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.23K | ±0.43% | 4.6461ms | 5.6210ms | 107.62K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.44K | ±0.46% | 5.6675ms | 6.3320ms | 88.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.39K | ±0.35% | 10.1638ms | 19.2760ms | 49.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.68K | ±0.29% | 44.0949ms | 54.3120ms | 11.34K |

**Key Insight:** Native Spread is **407.12x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items) {#large-array-update-1000-items-}

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 357.92K
🥈 Immer                ███ 29.93K
🥉 Craft                ██ 22.17K
   Immutability Helper  █ 6.39K
   Immutable.js         █ 682.90
   Seamless Immutable   █ 258.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 357.92K | ±0.78% | 2.7939ms | 4.9700ms | 178.96K |
| 🥈 | **Native Map** | 357.78K | ±0.67% | 2.7950ms | 3.2160ms | 178.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.93K | ±0.39% | 33.4060ms | 49.0720ms | 14.97K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.17K | ±0.28% | 45.1142ms | 53.4200ms | 11.08K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.39K | ±0.32% | 156.3871ms | 174.7870ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 682.90 | ±1.02% | 1464.3428ms | 1959.7480ms | 342.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 258.30 | ±0.99% | 3871.4916ms | 4579.4410ms | 130.00 |

**Key Insight:** Mutative is **1385.68x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes) {#multiple-updates-3-changes-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.60K
🥈 Craft                ███████████████████████████████████████ 272.54K
🥉 Mutative             ██████████████████████████ 178.62K
   Immutable.js         ███████████████████████ 160.63K
   Immer                █████████████████ 116.01K
   Seamless Immutable   ███ 18.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.20M | ±0.92% | 0.1613ms | 0.1810ms | 3.10M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.60K | ±0.40% | 3.6153ms | 3.9780ms | 138.30K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 272.54K | ±0.46% | 3.6692ms | 4.2790ms | 136.27K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 178.62K | ±0.72% | 5.5984ms | 28.2230ms | 89.31K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.63K | ±0.56% | 6.2255ms | 7.9950ms | 80.31K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 116.01K | ±0.68% | 8.6203ms | 34.6560ms | 58.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.76K | ±0.47% | 53.2960ms | 72.7460ms | 9.38K |

**Key Insight:** Native Spread is **330.40x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T17:07:19.900Z*
