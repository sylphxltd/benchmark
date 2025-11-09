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
- **Last Run:** 1:55:35 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.5/100 | 78.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.3/100 | 72.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.4% |
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
🥇 Craft                ████████████████████████████████████████ 216.72K
🥈 Immer                █████████████████████ 114.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.72K | ±2.01% | 4.6142ms | 9.1570ms | 108.36K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.88K | ±1.68% | 8.7048ms | 18.3640ms | 57.44K |

### JSON Patches - Apply {#json-patches-apply}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 966.22K
🥈 Immer                █████ 130.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 966.22K | ±0.17% | 1.0350ms | 1.2820ms | 483.11K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.62K | ±1.48% | 7.6559ms | 13.7560ms | 65.31K |

### JSON Patches - Roundtrip {#json-patches-roundtrip}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.17K
🥈 Immer                ██████████████ 59.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.17K | ±1.72% | 5.7086ms | 12.2130ms | 87.59K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.50K | ±1.60% | 16.8075ms | 35.1960ms | 29.75K |

### Map - Set Operation {#map-set-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 734.05K
🥈 Mutative             ██████████████████████████ 480.79K
🥉 Immer                █████████ 169.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 734.05K | ±1.62% | 1.3623ms | 2.8050ms | 367.03K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 480.79K | ±0.69% | 2.0799ms | 2.7760ms | 240.40K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.19K | ±0.84% | 5.9106ms | 12.9540ms | 84.59K |

**Key Insight:** Craft is **4.34x faster** than Immer in this category.

### Map - Update Nested Value {#map-update-nested-value}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 429.17K
🥉 Immer                █████ 150.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.22M | ±0.40% | 0.8169ms | 1.1420ms | 612.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.17K | ±0.44% | 2.3301ms | 2.8150ms | 214.58K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 150.42K | ±0.65% | 6.6482ms | 16.1900ms | 75.21K |

**Key Insight:** Craft is **8.14x faster** than Immer in this category.

### Set - Add Operation {#set-add-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 845.18K
🥈 Mutative             ██████████████████████ 460.16K
🥉 Immer                ████████ 167.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 845.18K | ±0.37% | 1.1832ms | 1.5230ms | 422.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 460.16K | ±0.40% | 2.1731ms | 2.5050ms | 230.08K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.55K | ±0.32% | 5.9683ms | 8.3050ms | 83.78K |

**Key Insight:** Craft is **5.04x faster** than Immer in this category.

### Set - Delete Operation {#set-delete-operation}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 811.64K
🥈 Mutative             ██████████████████████ 449.44K
🥉 Immer                █████████ 182.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 811.64K | ±0.41% | 1.2321ms | 1.5430ms | 405.82K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.44K | ±0.41% | 2.2250ms | 2.6650ms | 224.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.78K | ±0.35% | 5.4712ms | 6.8530ms | 91.39K |

**Key Insight:** Craft is **4.44x faster** than Immer in this category.

### Map - Large (100 items) {#map-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.38K
🥈 Mutative             ████████████████████████████████ 149.10K
🥉 Immer                █████████████████ 79.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 184.38K | ±0.46% | 5.4236ms | 7.5740ms | 92.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.10K | ±0.46% | 6.7068ms | 10.5900ms | 74.55K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.22K | ±0.79% | 12.6232ms | 23.7550ms | 39.61K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items) {#set-large-100-items-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.98K
🥈 Mutative             ██████████████ 77.29K
🥉 Immer                ██ 13.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.98K | ±0.43% | 4.4057ms | 8.1750ms | 113.49K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.29K | ±0.47% | 12.9380ms | 22.6520ms | 38.65K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.96K | ±0.33% | 71.6358ms | 89.6780ms | 6.98K |

**Key Insight:** Craft is **16.26x faster** than Immer in this category.

### Undo/Redo - Inverse Patches {#undo-redo-inverse-patches}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.81K
🥈 Immer                █████████████ 71.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.81K | ±0.37% | 4.4090ms | 5.0490ms | 113.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.39K | ±0.37% | 14.0072ms | 24.7970ms | 35.70K |

### Simple Object Update {#simple-object-update}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 976.39K
🥉 Immutability Helper  ████████████████████████████████████ 955.44K
   Craft                ████████████████████████████████████ 953.58K
   Immer                █████████████████████████ 679.22K
   Seamless Immutable   █████ 127.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.57M | ±0.09% | 0.0686ms | 0.1000ms | 7.29M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.15% | 0.9382ms | 1.3830ms | 532.95K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 976.39K | ±0.43% | 1.0242ms | 1.2930ms | 488.20K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 955.44K | ±0.19% | 1.0466ms | 1.8340ms | 477.72K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 953.58K | ±2.61% | 1.0487ms | 2.6650ms | 476.79K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 679.22K | ±2.03% | 1.4723ms | 3.2860ms | 339.61K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.41K | ±0.29% | 7.8486ms | 14.7770ms | 63.71K |

**Key Insight:** Native Spread is **114.36x faster** than Seamless Immutable in this category.

### Nested Object Update {#nested-object-update}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 475.49K
🥈 Mutative             █████████████████████████████████ 391.55K
🥉 Craft                █████████████████████████████ 346.01K
   Immutable.js         ███████████████████ 224.48K
   Immer                █████████████ 157.07K
   Seamless Immutable   ███ 37.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.15% | 0.0852ms | 0.1300ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 475.49K | ±0.56% | 2.1031ms | 3.8870ms | 237.75K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 391.55K | ±3.18% | 2.5540ms | 4.9190ms | 195.77K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 346.01K | ±2.52% | 2.8901ms | 5.3400ms | 173.00K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 224.48K | ±1.57% | 4.4547ms | 7.0730ms | 112.24K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.07K | ±1.88% | 6.3665ms | 11.4010ms | 78.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.60K | ±0.26% | 26.5969ms | 37.1090ms | 18.80K |

**Key Insight:** Native Spread is **312.32x faster** than Seamless Immutable in this category.

### Array Push {#array-push}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.76M
🥈 Immutability Helper  ████████████████████████████████ 1.40M
🥉 Craft                ████████████ 517.48K
   Mutative             ██████████ 420.59K
   Immer                ██████ 285.97K
   Seamless Immutable   █ 61.29K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.90M | ±1.21% | 0.0840ms | 0.1210ms | 5.95M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.76M | ±0.33% | 0.5666ms | 0.8010ms | 882.42K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.31% | 0.7152ms | 0.7720ms | 699.12K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 517.48K | ±0.36% | 1.9325ms | 2.3250ms | 258.74K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 420.59K | ±0.44% | 2.3776ms | 4.1480ms | 210.29K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.97K | ±0.39% | 3.4969ms | 4.1380ms | 142.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.29K | ±0.36% | 16.3154ms | 26.0090ms | 30.65K |

**Key Insight:** Native Spread is **194.21x faster** than Seamless Immutable in this category.

### Array Remove {#array-remove}

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 811.71K
🥈 Immutability Helper  ████████████████████████████ 578.27K
🥉 Craft                ████████████████ 320.08K
   Mutative             ███████████ 218.91K
   Immer                ███████ 143.97K
   Seamless Immutable   ███ 62.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.45M | ±1.06% | 0.0803ms | 0.1100ms | 6.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 811.71K | ±0.58% | 1.2320ms | 1.5420ms | 405.86K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.27K | ±0.10% | 1.7293ms | 1.8930ms | 289.14K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.08K | ±0.31% | 3.1242ms | 3.6170ms | 160.04K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.91K | ±0.32% | 4.5681ms | 5.2300ms | 109.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.97K | ±0.31% | 6.9458ms | 13.9660ms | 71.99K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.47K | ±0.32% | 16.0077ms | 25.3280ms | 31.23K |

**Key Insight:** Native Filter is **199.25x faster** than Seamless Immutable in this category.

### Array Update {#array-update}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.68K
🥈 Mutative             █████████████████████████████████████ 458.48K
🥉 Immutability Helper  ███████████████████████████████ 391.51K
   Immer                ███████████████████████ 288.70K
   Immutable.js         ███████████████ 189.16K
   Seamless Immutable   ███ 31.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.36M | ±0.97% | 0.0880ms | 0.1400ms | 5.68M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 498.68K | ±0.58% | 2.0053ms | 2.3550ms | 249.34K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 458.48K | ±0.68% | 2.1811ms | 2.5240ms | 229.25K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 391.51K | ±0.24% | 2.5542ms | 2.9250ms | 195.75K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 288.70K | ±0.16% | 3.4638ms | 4.1280ms | 144.35K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.16K | ±0.63% | 5.2866ms | 5.8410ms | 94.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.46K | ±0.58% | 31.7885ms | 42.0390ms | 15.73K |

**Key Insight:** Native Map is **361.13x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels) {#deep-nested-update-5-levels-}

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.22K
🥈 Craft                ████████████████████████████████████ 273.98K
🥉 Mutative             ████████████████████████████ 214.80K
   Immutable.js         ██████████████████████ 172.19K
   Immer                █████████████ 97.16K
   Seamless Immutable   ███ 22.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.13M | ±0.64% | 0.1095ms | 0.1600ms | 4.56M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.22K | ±0.44% | 3.2444ms | 3.6070ms | 154.11K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.98K | ±0.55% | 3.6499ms | 4.3380ms | 136.99K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.80K | ±0.49% | 4.6554ms | 5.3100ms | 107.40K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.19K | ±0.53% | 5.8074ms | 8.3450ms | 86.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.16K | ±0.43% | 10.2920ms | 20.5580ms | 48.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.55K | ±0.37% | 44.3392ms | 56.9560ms | 11.28K |

**Key Insight:** Native Spread is **404.75x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items) {#large-array-update-1000-items-}

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 367.64K
🥈 Immer                ███ 29.83K
🥉 Craft                ██ 22.03K
   Immutability Helper  █ 6.08K
   Immutable.js         █ 730.15
   Seamless Immutable   █ 254.21
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 367.64K | ±0.80% | 2.7200ms | 3.4670ms | 183.82K |
| 🥈 | **Native Map** | 352.48K | ±0.67% | 2.8370ms | 3.3460ms | 176.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.83K | ±0.49% | 33.5200ms | 43.9620ms | 14.92K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.03K | ±0.45% | 45.3912ms | 54.8130ms | 11.02K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.08K | ±0.39% | 164.4778ms | 190.5970ms | 3.04K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 730.15 | ±1.35% | 1369.5849ms | 1951.3290ms | 366.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.21 | ±0.49% | 3933.7434ms | 4368.8330ms | 128.00 |

**Key Insight:** Mutative is **1446.21x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes) {#multiple-updates-3-changes-}

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 275.13K
🥈 Immutability Helper  ████████████████████████████████████████ 274.31K
🥉 Mutative             █████████████████████████████ 199.59K
   Immutable.js         ███████████████████████ 160.11K
   Immer                ██████████████████ 127.04K
   Seamless Immutable   ███ 18.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.42M | ±1.03% | 0.1558ms | 0.1810ms | 3.21M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 275.13K | ±0.50% | 3.6346ms | 4.0980ms | 137.57K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.31K | ±0.50% | 3.6454ms | 4.0480ms | 137.16K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.59K | ±0.52% | 5.0102ms | 8.7360ms | 99.80K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.11K | ±0.62% | 6.2456ms | 9.9590ms | 80.06K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.04K | ±0.36% | 7.8713ms | 14.7680ms | 63.52K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.86K | ±0.39% | 53.0177ms | 64.2500ms | 9.43K |

**Key Insight:** Native Spread is **340.30x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T14:02:33.929Z*
