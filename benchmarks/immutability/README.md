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
- **Last Run:** 9:05:42 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 73.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 44.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.7% |
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
🥇 Craft                ████████████████████████████████████████ 214.39K
🥈 Immer                █████████████████████ 113.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 214.39K | ±2.30% | 4.6644ms | 9.0570ms | 107.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.00K | ±1.86% | 8.8496ms | 19.5660ms | 56.50K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 994.39K
🥈 Immer                █████ 128.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 994.39K | ±0.18% | 1.0056ms | 1.1820ms | 497.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.97K | ±1.82% | 7.7537ms | 15.2590ms | 64.49K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 170.30K
🥈 Immer                ██████████████ 60.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 170.30K | ±2.09% | 5.8721ms | 11.5520ms | 85.15K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.18K | ±1.66% | 16.6163ms | 31.3590ms | 30.09K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 709.62K
🥈 Mutative             ██████████████████████████ 464.90K
🥉 Immer                ██████████ 179.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 709.62K | ±1.73% | 1.4092ms | 3.0660ms | 354.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 464.90K | ±0.74% | 2.1510ms | 3.6070ms | 232.45K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.55K | ±1.14% | 5.5696ms | 10.1290ms | 89.77K |

**Key Insight:** Craft is **3.95x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.19M
🥈 Mutative             ██████████████ 424.30K
🥉 Immer                █████ 159.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.19M | ±0.69% | 0.8395ms | 1.2620ms | 595.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.30K | ±0.50% | 2.3568ms | 2.9460ms | 212.15K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.66K | ±0.46% | 6.2634ms | 13.2350ms | 79.83K |

**Key Insight:** Craft is **7.46x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 833.92K
🥈 Mutative             █████████████████████ 445.29K
🥉 Immer                ████████ 166.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 833.92K | ±0.48% | 1.1992ms | 1.6230ms | 416.96K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.29K | ±0.51% | 2.2457ms | 2.8050ms | 222.65K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.39K | ±0.49% | 6.0100ms | 12.1230ms | 83.19K |

**Key Insight:** Craft is **5.01x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 803.38K
🥈 Mutative             ██████████████████████ 441.01K
🥉 Immer                █████████ 178.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 803.38K | ±0.49% | 1.2447ms | 1.6030ms | 401.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 441.01K | ±0.47% | 2.2675ms | 2.9150ms | 220.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.32K | ±0.45% | 5.6080ms | 8.3460ms | 89.16K |

**Key Insight:** Craft is **4.51x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.78K
🥈 Mutative             █████████████████████████████████ 147.85K
🥉 Immer                █████████████████ 77.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 178.78K | ±0.60% | 5.5933ms | 8.4560ms | 89.39K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.85K | ±0.60% | 6.7637ms | 11.0600ms | 73.92K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.41K | ±0.56% | 12.9180ms | 25.0870ms | 38.71K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 220.67K
🥈 Mutative             ██████████████ 74.53K
🥉 Immer                ██ 13.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 220.67K | ±0.49% | 4.5317ms | 5.8810ms | 110.33K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.53K | ±0.58% | 13.4182ms | 24.0450ms | 37.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.55K | ±0.49% | 73.8158ms | 92.5430ms | 6.77K |

**Key Insight:** Craft is **16.29x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 221.90K
🥈 Immer                █████████████ 70.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.90K | ±0.56% | 4.5066ms | 5.3300ms | 110.95K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.57K | ±0.36% | 14.1706ms | 25.1380ms | 35.28K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  ████████████████████████████████████ 966.59K
🥉 Mutative             ████████████████████████████████████ 963.13K
   Craft                ███████████████████████████████████ 952.87K
   Immer                █████████████████████████ 677.77K
   Seamless Immutable   █████ 129.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.72M | ±0.10% | 0.0679ms | 0.1000ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.14% | 0.9246ms | 1.0920ms | 540.80K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 966.59K | ±0.14% | 1.0346ms | 1.3330ms | 483.30K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 963.13K | ±0.50% | 1.0383ms | 1.4920ms | 481.57K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 952.87K | ±2.93% | 1.0495ms | 2.6850ms | 476.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 677.77K | ±2.19% | 1.4754ms | 3.1960ms | 338.88K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.96K | ±0.46% | 7.6948ms | 13.7160ms | 64.98K |

**Key Insight:** Native Spread is **113.29x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 502.00K
🥈 Mutative             ███████████████████████████████ 390.24K
🥉 Craft                ███████████████████████████ 344.44K
   Immutable.js         ██████████████████ 230.09K
   Immer                ████████████ 153.49K
   Seamless Immutable   ███ 37.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.52M | ±0.15% | 0.0868ms | 0.1400ms | 5.76M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 502.00K | ±0.36% | 1.9920ms | 2.3650ms | 251.00K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.24K | ±4.92% | 2.5625ms | 4.4190ms | 195.12K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 344.44K | ±2.84% | 2.9033ms | 5.3600ms | 172.22K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.09K | ±0.80% | 4.3461ms | 6.5920ms | 115.05K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.49K | ±2.21% | 6.5151ms | 12.4830ms | 76.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.50K | ±0.37% | 26.6642ms | 36.1070ms | 18.75K |

**Key Insight:** Native Spread is **307.17x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.79M
🥈 Immutability Helper  ██████████████████████████████ 1.36M
🥉 Craft                ███████████ 511.02K
   Mutative             █████████ 422.82K
   Immer                ██████ 278.64K
   Seamless Immutable   █ 60.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.28M | ±1.32% | 0.0887ms | 0.1110ms | 5.64M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.79M | ±0.68% | 0.5572ms | 0.9210ms | 897.32K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.36M | ±0.94% | 0.7353ms | 0.8020ms | 680.02K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 511.02K | ±0.76% | 1.9569ms | 2.5140ms | 255.51K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.82K | ±0.63% | 2.3651ms | 3.0360ms | 211.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.64K | ±0.76% | 3.5888ms | 4.6690ms | 139.32K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.74K | ±0.78% | 16.4639ms | 25.8380ms | 30.37K |

**Key Insight:** Native Spread is **185.64x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 785.27K
🥈 Immutability Helper  █████████████████████████████ 575.62K
🥉 Craft                ████████████████ 316.20K
   Mutative             ███████████ 214.91K
   Immer                ███████ 138.14K
   Seamless Immutable   ███ 59.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.57M | ±0.83% | 0.0796ms | 0.1100ms | 6.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 785.27K | ±1.12% | 1.2735ms | 2.2540ms | 392.63K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 575.62K | ±0.43% | 1.7373ms | 1.9240ms | 287.81K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 316.20K | ±0.90% | 3.1625ms | 3.8370ms | 158.10K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.91K | ±1.11% | 4.6532ms | 5.6310ms | 107.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 138.14K | ±0.96% | 7.2393ms | 13.6260ms | 69.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.39K | ±1.18% | 16.8380ms | 26.3590ms | 29.70K |

**Key Insight:** Native Filter is **211.59x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 493.67K
🥈 Mutative             ████████████████████████████████████ 450.01K
🥉 Immutability Helper  ████████████████████████████████ 395.33K
   Immer                ██████████████████████ 271.47K
   Immutable.js         ███████████████ 187.25K
   Seamless Immutable   ███ 31.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.86M | ±1.39% | 0.0921ms | 0.1200ms | 5.43M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 493.67K | ±0.81% | 2.0257ms | 2.6450ms | 246.83K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 450.01K | ±0.98% | 2.2222ms | 2.9050ms | 225.01K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.33K | ±0.37% | 2.5295ms | 3.0950ms | 197.67K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 271.47K | ±0.33% | 3.6837ms | 7.4940ms | 135.73K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.25K | ±0.97% | 5.3406ms | 6.1810ms | 93.62K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.32K | ±0.69% | 31.9249ms | 43.7410ms | 15.66K |

**Key Insight:** Native Map is **346.81x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 303.02K
🥈 Craft                ███████████████████████████████████ 261.63K
🥉 Mutative             ████████████████████████████ 212.11K
   Immutable.js         ██████████████████████ 170.38K
   Immer                █████████████ 97.35K
   Seamless Immutable   ███ 21.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.81M | ±1.30% | 0.1135ms | 0.1410ms | 4.41M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 303.02K | ±1.34% | 3.3001ms | 3.8980ms | 151.51K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 261.63K | ±1.25% | 3.8222ms | 4.7190ms | 130.81K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.11K | ±1.05% | 4.7144ms | 5.4300ms | 106.06K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 170.38K | ±0.47% | 5.8691ms | 9.0660ms | 85.19K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.35K | ±1.04% | 10.2717ms | 19.6970ms | 48.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.99K | ±0.93% | 45.4804ms | 81.8330ms | 10.99K |

**Key Insight:** Native Spread is **400.88x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 340.64K
🥈 Immer                ███ 29.67K
🥉 Craft                ███ 21.72K
   Immutability Helper  █ 6.33K
   Immutable.js         █ 714.25
   Seamless Immutable   █ 251.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 349.15K | ±0.66% | 2.8641ms | 3.6970ms | 174.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 340.64K | ±0.86% | 2.9356ms | 5.0200ms | 170.32K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.67K | ±0.54% | 33.7014ms | 45.6550ms | 14.84K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.72K | ±0.53% | 46.0321ms | 60.2530ms | 10.86K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.33K | ±0.54% | 158.0825ms | 200.6150ms | 3.16K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 714.25 | ±1.35% | 1400.0699ms | 2061.7110ms | 358.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.84 | ±0.66% | 3970.7725ms | 4570.5550ms | 126.00 |

**Key Insight:** Native Map is **1386.39x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.52K
🥈 Craft                ███████████████████████████████████████ 271.15K
🥉 Mutative             █████████████████████████████ 200.18K
   Immutable.js         ████████████████████████ 162.66K
   Immer                ███████████████████ 127.68K
   Seamless Immutable   ███ 18.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.52M | ±0.67% | 0.1533ms | 0.1910ms | 3.26M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.52K | ±0.70% | 3.6296ms | 4.3380ms | 137.76K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.15K | ±0.79% | 3.6880ms | 4.4180ms | 135.57K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.18K | ±0.52% | 4.9955ms | 5.8710ms | 100.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.66K | ±0.82% | 6.1476ms | 9.5980ms | 81.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.68K | ±0.54% | 7.8319ms | 17.2120ms | 63.84K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.93K | ±0.59% | 52.8216ms | 66.3240ms | 9.47K |

**Key Insight:** Native Spread is **344.48x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T21:11:09.352Z*
