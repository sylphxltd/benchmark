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
- **Last Run:** 10:22:04 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.1/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.8/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 30.9/100 | 42.3% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.4% |
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
🥇 Craft                ████████████████████████████████████████ 216.31K
🥈 Immer                ████████████████████ 110.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.31K | ±2.09% | 4.6231ms | 9.3980ms | 108.15K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.68K | ±1.73% | 9.0354ms | 25.5680ms | 55.34K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 985.27K
🥈 Immer                █████ 123.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 985.27K | ±0.44% | 1.0150ms | 1.3930ms | 492.63K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 123.98K | ±1.74% | 8.0656ms | 20.0980ms | 61.99K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.13K
🥈 Immer                ██████████████ 59.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.13K | ±1.75% | 5.7759ms | 11.2110ms | 86.57K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.98K | ±1.85% | 16.6735ms | 31.4590ms | 29.99K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 735.25K
🥈 Mutative             █████████████████████████ 466.04K
🥉 Immer                ██████████ 175.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 735.25K | ±1.64% | 1.3601ms | 3.0960ms | 367.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.04K | ±0.47% | 2.1457ms | 3.3270ms | 233.02K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.63K | ±0.86% | 5.6937ms | 9.1870ms | 87.85K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.16M
🥈 Mutative             ███████████████ 424.25K
🥉 Immer                █████ 156.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.16M | ±0.64% | 0.8603ms | 1.5130ms | 581.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.25K | ±0.42% | 2.3571ms | 3.0060ms | 212.12K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.83K | ±0.38% | 6.3761ms | 10.9700ms | 78.42K |

**Key Insight:** Craft is **7.41x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 835.05K
🥈 Mutative             █████████████████████ 448.06K
🥉 Immer                ████████ 163.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 835.05K | ±0.40% | 1.1975ms | 1.5920ms | 417.52K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.06K | ±0.43% | 2.2319ms | 2.8350ms | 224.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.40K | ±0.38% | 6.1200ms | 11.7120ms | 81.70K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 823.67K
🥈 Mutative             ██████████████████████ 443.66K
🥉 Immer                █████████ 178.11K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 823.67K | ±0.38% | 1.2141ms | 1.5430ms | 411.84K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.66K | ±0.40% | 2.2540ms | 2.7450ms | 221.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.11K | ±0.39% | 5.6145ms | 9.5180ms | 89.06K |

**Key Insight:** Craft is **4.62x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 179.21K
🥈 Mutative             █████████████████████████████████ 148.10K
🥉 Immer                █████████████████ 76.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 179.21K | ±0.52% | 5.5800ms | 8.1550ms | 89.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.10K | ±0.51% | 6.7523ms | 10.7800ms | 74.05K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 76.59K | ±0.60% | 13.0573ms | 24.7760ms | 38.29K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.72K
🥈 Mutative             █████████████ 74.77K
🥉 Immer                ██ 13.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.72K | ±0.46% | 4.4499ms | 5.6110ms | 112.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.77K | ±0.56% | 13.3747ms | 22.8120ms | 37.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.72K | ±0.40% | 72.9033ms | 87.0030ms | 6.86K |

**Key Insight:** Craft is **16.38x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.31K
🥈 Immer                █████████████ 71.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.31K | ±0.42% | 4.4781ms | 8.6970ms | 111.66K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.99K | ±0.32% | 13.8907ms | 24.4560ms | 36.00K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 969.61K
🥉 Immutability Helper  ███████████████████████████████████ 958.45K
   Craft                ███████████████████████████████████ 947.81K
   Immer                ██████████████████████████ 696.16K
   Seamless Immutable   █████ 128.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.62M | ±0.10% | 0.0684ms | 0.1000ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.15% | 0.9248ms | 1.0120ms | 540.67K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 969.61K | ±0.46% | 1.0313ms | 1.3930ms | 484.81K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 958.45K | ±0.19% | 1.0434ms | 1.2830ms | 479.22K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 947.81K | ±2.66% | 1.0551ms | 2.7150ms | 473.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 696.16K | ±1.80% | 1.4364ms | 3.2460ms | 348.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.32K | ±0.36% | 7.7929ms | 13.8460ms | 64.16K |

**Key Insight:** Native Spread is **113.95x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 524.42K
🥈 Mutative             █████████████████████████████ 381.73K
🥉 Craft                █████████████████████████ 330.14K
   Immutable.js         ████████████████ 208.71K
   Immer                ████████████ 151.49K
   Seamless Immutable   ███ 35.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.70M | ±0.19% | 0.0855ms | 0.1300ms | 5.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 524.42K | ±0.38% | 1.9069ms | 3.7580ms | 262.21K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 381.73K | ±2.98% | 2.6196ms | 4.9890ms | 190.87K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 330.14K | ±2.96% | 3.0290ms | 5.5610ms | 165.07K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 208.71K | ±1.49% | 4.7914ms | 8.1960ms | 104.35K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 151.49K | ±2.29% | 6.6013ms | 14.1170ms | 75.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 35.55K | ±0.64% | 28.1301ms | 48.8420ms | 17.77K |

**Key Insight:** Native Spread is **329.14x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  █████████████████████████████████ 1.42M
🥉 Craft                ████████████ 515.70K
   Mutative             ██████████ 424.26K
   Immer                ███████ 281.53K
   Seamless Immutable   █ 59.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.30M | ±0.64% | 0.0813ms | 0.1200ms | 6.15M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±1.71% | 0.5817ms | 0.9620ms | 859.59K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.42M | ±0.35% | 0.7049ms | 0.7520ms | 709.36K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 515.70K | ±0.72% | 1.9391ms | 2.4250ms | 257.85K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.26K | ±0.79% | 2.3571ms | 3.0060ms | 212.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.53K | ±0.53% | 3.5520ms | 6.0810ms | 140.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.40K | ±0.42% | 16.8352ms | 31.3780ms | 29.70K |

**Key Insight:** Native Spread is **207.08x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 794.19K
🥈 Immutability Helper  █████████████████████████████ 580.54K
🥉 Craft                ████████████████ 311.97K
   Mutative             ███████████ 214.11K
   Immer                ███████ 142.46K
   Seamless Immutable   ███ 61.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.85M | ±1.15% | 0.0844ms | 0.1200ms | 5.93M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 794.19K | ±0.67% | 1.2591ms | 1.6530ms | 397.10K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.54K | ±0.19% | 1.7225ms | 1.8240ms | 290.27K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 311.97K | ±0.50% | 3.2055ms | 4.8590ms | 155.98K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.11K | ±0.72% | 4.6704ms | 5.6710ms | 107.06K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.46K | ±0.60% | 7.0193ms | 12.2030ms | 71.23K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.84K | ±0.59% | 16.1719ms | 25.5880ms | 30.92K |

**Key Insight:** Native Filter is **191.69x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 497.02K
🥈 Mutative             ████████████████████████████████████ 444.71K
🥉 Immutability Helper  █████████████████████████████████ 404.87K
   Immer                ███████████████████████ 280.26K
   Immutable.js         ██████████████ 170.15K
   Seamless Immutable   ███ 31.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.71M | ±1.43% | 0.0934ms | 0.1310ms | 5.35M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 497.02K | ±0.88% | 2.0120ms | 2.4550ms | 248.51K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 444.71K | ±1.13% | 2.2486ms | 2.8150ms | 222.36K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 404.87K | ±0.46% | 2.4700ms | 3.1250ms | 202.43K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 280.26K | ±0.44% | 3.5681ms | 4.2680ms | 140.13K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 170.15K | ±1.03% | 5.8772ms | 7.2840ms | 85.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.42K | ±1.00% | 31.8293ms | 43.7620ms | 15.71K |

**Key Insight:** Native Map is **340.80x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 313.71K
🥈 Craft                ███████████████████████████████████ 273.03K
🥉 Mutative             ███████████████████████████ 213.84K
   Immutable.js         ██████████████████████ 171.26K
   Immer                ████████████ 95.82K
   Seamless Immutable   ███ 22.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.16M | ±0.76% | 0.1091ms | 0.1500ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 313.71K | ±0.47% | 3.1876ms | 3.5670ms | 156.86K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.03K | ±0.63% | 3.6626ms | 4.4480ms | 136.51K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.84K | ±0.55% | 4.6764ms | 5.4810ms | 106.92K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.26K | ±0.55% | 5.8392ms | 6.7630ms | 85.63K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 95.82K | ±0.60% | 10.4364ms | 19.9070ms | 47.91K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.05K | ±0.52% | 45.3597ms | 74.3100ms | 11.02K |

**Key Insight:** Native Spread is **415.66x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 338.24K
🥈 Immer                ████ 29.73K
🥉 Craft                ███ 21.99K
   Immutability Helper  █ 6.28K
   Immutable.js         █ 679.32
   Seamless Immutable   █ 254.05
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 338.24K | ±1.01% | 2.9565ms | 4.9690ms | 169.17K |
| 🥈 | **Native Map** | 328.35K | ±0.72% | 3.0456ms | 4.3980ms | 164.17K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.73K | ±0.75% | 33.6395ms | 43.2410ms | 14.86K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.99K | ±0.66% | 45.4818ms | 54.0510ms | 10.99K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.28K | ±0.70% | 159.3219ms | 190.4570ms | 3.14K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 679.32 | ±1.33% | 1472.0556ms | 2186.1450ms | 340.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.05 | ±0.89% | 3936.3105ms | 4649.3980ms | 128.00 |

**Key Insight:** Mutative is **1331.43x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.67K
🥈 Craft                ███████████████████████████████████████ 268.32K
🥉 Mutative             █████████████████████████████ 198.42K
   Immutable.js         ██████████████████████ 153.90K
   Immer                ██████████████████ 125.01K
   Seamless Immutable   ███ 18.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.31M | ±1.27% | 0.1585ms | 0.1810ms | 3.15M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.67K | ±0.93% | 3.6275ms | 4.3080ms | 137.84K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 268.32K | ±0.81% | 3.7269ms | 4.3380ms | 134.16K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.42K | ±0.91% | 5.0398ms | 6.0110ms | 99.21K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 153.90K | ±1.01% | 6.4978ms | 9.1270ms | 76.95K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.01K | ±0.82% | 7.9993ms | 14.3570ms | 62.51K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.83K | ±0.87% | 53.1041ms | 64.3210ms | 9.42K |

**Key Insight:** Native Spread is **334.94x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T22:39:11.066Z*
