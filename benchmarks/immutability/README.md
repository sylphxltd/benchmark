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
- **Last Run:** 4:37:25 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 58.7/100 | 79.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.5/100 | 75.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.8/100 | 43.3% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 25.8/100 | 35.1% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.2/100 | 5.7% |

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
🥇 Craft                ████████████████████████████████████████ 193.24K
🥈 Immer                ██████████████████████ 107.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 193.24K | ±2.46% | 5.1750ms | 9.2220ms | 96.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 107.75K | ±2.10% | 9.2811ms | 22.4310ms | 53.87K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.01M
🥈 Immer                █████ 122.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.01M | ±0.19% | 0.9927ms | 1.6350ms | 503.70K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 122.76K | ±1.90% | 8.1461ms | 15.2220ms | 61.38K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 157.82K
🥈 Immer                ███████████████ 59.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 157.82K | ±2.13% | 6.3364ms | 11.4290ms | 78.91K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.13K | ±1.88% | 16.9130ms | 27.8290ms | 29.56K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 663.19K
🥈 Mutative             ███████████████████████████ 440.70K
🥉 Immer                ██████████ 169.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 663.19K | ±2.17% | 1.5079ms | 2.6930ms | 331.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 440.70K | ±0.89% | 2.2691ms | 3.0290ms | 220.35K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.70K | ±1.40% | 5.8927ms | 8.7750ms | 84.85K |

**Key Insight:** Craft is **3.91x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.08M
🥈 Mutative             ███████████████ 410.10K
🥉 Immer                ██████ 150.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.08M | ±0.60% | 0.9271ms | 1.4820ms | 539.31K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 410.10K | ±0.61% | 2.4384ms | 3.0620ms | 205.05K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 150.61K | ±0.70% | 6.6399ms | 11.2740ms | 75.30K |

**Key Insight:** Craft is **7.16x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 765.14K
🥈 Mutative             ██████████████████████ 429.22K
🥉 Immer                █████████ 163.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 765.14K | ±0.57% | 1.3069ms | 1.8680ms | 382.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.22K | ±0.62% | 2.3298ms | 3.3860ms | 214.61K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.94K | ±0.47% | 6.0996ms | 8.9580ms | 81.97K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 741.85K
🥈 Mutative             ███████████████████████ 425.46K
🥉 Immer                ██████████ 178.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 741.85K | ±0.62% | 1.3480ms | 1.8820ms | 370.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 425.46K | ±0.60% | 2.3504ms | 2.9600ms | 212.73K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.35K | ±0.48% | 5.6069ms | 7.8860ms | 89.18K |

**Key Insight:** Craft is **4.16x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 170.59K
🥈 Mutative             ████████████████████████████████ 138.42K
🥉 Immer                ██████████████████ 76.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 170.59K | ±0.66% | 5.8618ms | 7.9950ms | 85.31K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 138.42K | ±0.81% | 7.2242ms | 14.1670ms | 69.21K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 76.45K | ±0.75% | 13.0806ms | 21.6930ms | 38.23K |

**Key Insight:** Craft is **2.23x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 216.71K
🥈 Mutative             ██████████████ 73.50K
🥉 Immer                ██ 13.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 216.71K | ±0.59% | 4.6145ms | 6.4070ms | 108.35K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 73.50K | ±0.61% | 13.6050ms | 23.0110ms | 36.75K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.28K | ±0.81% | 75.2737ms | 93.2380ms | 6.64K |

**Key Insight:** Craft is **16.31x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 205.05K
🥈 Immer                █████████████ 68.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 205.05K | ±0.57% | 4.8769ms | 5.9600ms | 102.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 68.59K | ±0.35% | 14.5790ms | 21.6100ms | 34.30K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 973.98K
🥈 Immutability Helper  ██████████████████████████████████████ 921.19K
🥉 Craft                ████████████████████████████████████ 886.79K
   Mutative             ████████████████████████████████████ 878.67K
   Immer                ███████████████████████████ 666.74K
   Seamless Immutable   █████ 128.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 16.12M | ±0.09% | 0.0620ms | 0.1840ms | 8.06M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 973.98K | ±0.53% | 1.0267ms | 1.6220ms | 486.99K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 921.19K | ±0.65% | 1.0856ms | 1.5670ms | 460.60K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 886.79K | ±2.98% | 1.1277ms | 2.3730ms | 443.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 878.67K | ±0.82% | 1.1381ms | 1.6860ms | 439.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 666.74K | ±1.98% | 1.4998ms | 2.9500ms | 333.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.60K | ±0.39% | 7.7758ms | 10.1060ms | 64.30K |

**Key Insight:** Native Spread is **125.35x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 446.35K
🥈 Mutative             ███████████████████████████████████ 385.27K
🥉 Craft                ████████████████████████████ 314.51K
   Immutable.js         ███████████████████ 214.26K
   Immer                █████████████ 141.72K
   Seamless Immutable   ███ 36.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.53M | ±0.15% | 0.0798ms | 0.2140ms | 6.27M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 446.35K | ±0.68% | 2.2404ms | 3.0680ms | 223.18K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 385.27K | ±0.61% | 2.5956ms | 3.3420ms | 192.63K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 314.51K | ±2.88% | 3.1796ms | 5.4360ms | 157.25K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 214.26K | ±0.60% | 4.6672ms | 5.8190ms | 107.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.72K | ±2.17% | 7.0563ms | 14.5760ms | 70.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.89K | ±0.36% | 27.1053ms | 49.3150ms | 18.45K |

**Key Insight:** Native Spread is **339.72x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.61M
🥈 Immutability Helper  ████████████████████████████████ 1.30M
🥉 Craft                ███████████ 433.07K
   Mutative             ██████████ 391.19K
   Immer                ██████ 259.15K
   Seamless Immutable   █ 57.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.68M | ±0.99% | 0.0856ms | 0.2690ms | 5.84M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.61M | ±0.41% | 0.6214ms | 1.0630ms | 804.67K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.30M | ±0.56% | 0.7681ms | 1.1440ms | 650.97K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 433.07K | ±0.49% | 2.3091ms | 3.7190ms | 216.54K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 391.19K | ±0.52% | 2.5563ms | 3.2150ms | 195.60K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 259.15K | ±0.79% | 3.8588ms | 6.3830ms | 129.57K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 57.35K | ±0.45% | 17.4378ms | 23.4630ms | 28.67K |

**Key Insight:** Native Spread is **203.74x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 761.49K
🥈 Immutability Helper  ████████████████████████████ 534.25K
🥉 Craft                ███████████████ 280.22K
   Mutative             ███████████ 200.57K
   Immer                ███████ 132.64K
   Seamless Immutable   ███ 58.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 13.31M | ±1.02% | 0.0751ms | 0.2270ms | 6.66M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 761.49K | ±0.56% | 1.3132ms | 1.8280ms | 380.74K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 534.25K | ±0.31% | 1.8718ms | 2.5060ms | 267.13K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 280.22K | ±0.69% | 3.5686ms | 6.0300ms | 140.11K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 200.57K | ±0.51% | 4.9858ms | 5.9390ms | 100.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 132.64K | ±0.47% | 7.5394ms | 12.8890ms | 66.32K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.96K | ±0.47% | 16.9603ms | 23.3030ms | 29.48K |

**Key Insight:** Native Filter is **225.80x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 457.00K
🥈 Mutative             ██████████████████████████████████████ 428.44K
🥉 Immutability Helper  ████████████████████████████████ 363.28K
   Immer                ███████████████████████ 263.27K
   Immutable.js         ███████████████ 168.56K
   Seamless Immutable   ███ 31.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.72M | ±1.52% | 0.0933ms | 0.2580ms | 5.36M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 457.00K | ±0.81% | 2.1882ms | 2.8460ms | 228.50K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 428.44K | ±0.86% | 2.3341ms | 2.9100ms | 214.22K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 363.28K | ±0.27% | 2.7527ms | 3.4650ms | 181.64K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 263.27K | ±0.40% | 3.7983ms | 6.4990ms | 131.64K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.56K | ±0.44% | 5.9325ms | 8.7570ms | 84.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.09K | ±0.69% | 32.1633ms | 39.1840ms | 15.55K |

**Key Insight:** Native Map is **344.73x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 280.36K
🥈 Craft                ███████████████████████████████████ 244.85K
🥉 Mutative             █████████████████████████████ 205.68K
   Immutable.js         █████████████████████ 149.34K
   Immer                █████████████ 91.97K
   Seamless Immutable   ███ 22.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.49M | ±1.59% | 0.1178ms | 0.3040ms | 4.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 280.36K | ±1.23% | 3.5668ms | 5.0900ms | 140.18K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 244.85K | ±1.36% | 4.0841ms | 5.0080ms | 122.43K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 205.68K | ±1.34% | 4.8618ms | 6.9730ms | 102.84K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 149.34K | ±1.40% | 6.6962ms | 9.6770ms | 74.67K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 91.97K | ±1.02% | 10.8735ms | 17.2090ms | 45.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.12K | ±0.84% | 45.2114ms | 85.0550ms | 11.06K |

**Key Insight:** Native Spread is **383.69x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 323.67K
🥈 Immer                ████ 35.03K
🥉 Craft                ███ 22.76K
   Immutability Helper  █ 7.32K
   Immutable.js         █ 637.51
   Seamless Immutable   █ 255.54
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 336.54K | ±0.58% | 2.9714ms | 3.8160ms | 168.27K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 323.67K | ±0.62% | 3.0895ms | 3.9010ms | 161.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 35.03K | ±1.08% | 28.5457ms | 60.3660ms | 17.52K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.76K | ±0.35% | 43.9454ms | 60.4880ms | 11.38K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 7.32K | ±0.41% | 136.5665ms | 154.3500ms | 3.66K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 637.51 | ±1.23% | 1568.6149ms | 2182.2680ms | 319.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 255.54 | ±0.59% | 3913.3519ms | 4416.2420ms | 128.00 |

**Key Insight:** Native Map is **1317.02x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 260.16K
🥈 Immutability Helper  █████████████████████████████████████ 241.94K
🥉 Mutative             ██████████████████████████████ 196.09K
   Immutable.js         ███████████████████████ 146.79K
   Immer                ███████████████████ 120.85K
   Seamless Immutable   ███ 18.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.99M | ±0.77% | 0.1430ms | 0.3160ms | 3.50M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 260.16K | ±0.54% | 3.8439ms | 4.6320ms | 130.08K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 241.94K | ±0.44% | 4.1332ms | 5.0730ms | 120.97K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.09K | ±0.53% | 5.0998ms | 6.0140ms | 98.04K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 146.79K | ±0.88% | 6.8124ms | 12.1700ms | 73.40K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 120.85K | ±0.43% | 8.2744ms | 13.8810ms | 60.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.88K | ±0.37% | 52.9537ms | 76.7190ms | 9.44K |

**Key Insight:** Native Spread is **370.38x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T04:51:19.773Z*
