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
- **Last Run:** 11:16:33 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.2/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.4/100 | 43.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.2% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.8/100 | 5.2% |

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
🥇 Craft                ████████████████████████████████████████ 216.85K
🥈 Immer                █████████████████████ 115.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.85K | ±1.86% | 4.6114ms | 9.0880ms | 108.43K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.28K | ±1.40% | 8.6746ms | 19.0350ms | 57.64K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 972.81K
🥈 Immer                █████ 131.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 972.81K | ±0.42% | 1.0280ms | 1.7430ms | 486.40K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.77K | ±1.42% | 7.5888ms | 13.2950ms | 65.89K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.62K
🥈 Immer                ██████████████ 60.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.62K | ±1.54% | 5.7268ms | 12.1130ms | 87.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.57K | ±1.46% | 16.5086ms | 31.0280ms | 30.29K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 754.36K
🥈 Mutative             █████████████████████████ 470.88K
🥉 Immer                █████████ 178.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 754.36K | ±1.63% | 1.3256ms | 2.9450ms | 377.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 470.88K | ±0.68% | 2.1237ms | 2.4740ms | 235.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.67K | ±0.83% | 5.5969ms | 8.7160ms | 89.34K |

**Key Insight:** Craft is **4.22x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 433.57K
🥉 Immer                █████ 160.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.35% | 0.7861ms | 1.0420ms | 636.04K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.57K | ±0.37% | 2.3065ms | 2.6450ms | 216.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 160.53K | ±0.53% | 6.2294ms | 11.3610ms | 80.27K |

**Key Insight:** Craft is **7.92x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 879.05K
🥈 Mutative             █████████████████████ 463.37K
🥉 Immer                ████████ 172.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 879.05K | ±0.35% | 1.1376ms | 1.4030ms | 439.53K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 463.37K | ±0.38% | 2.1581ms | 2.4740ms | 231.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 172.14K | ±0.28% | 5.8094ms | 7.0130ms | 86.07K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 859.49K
🥈 Mutative             █████████████████████ 457.58K
🥉 Immer                ████████ 181.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 859.49K | ±0.36% | 1.1635ms | 1.4130ms | 429.75K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.58K | ±0.40% | 2.1854ms | 2.4950ms | 228.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.83K | ±0.31% | 5.4997ms | 12.6030ms | 90.92K |

**Key Insight:** Craft is **4.73x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.80K
🥈 Mutative             ████████████████████████████████ 150.53K
🥉 Immer                █████████████████ 79.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.80K | ±0.42% | 5.3822ms | 6.1820ms | 92.90K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.53K | ±0.43% | 6.6430ms | 11.8320ms | 75.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.60K | ±0.67% | 12.5633ms | 24.2250ms | 39.80K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.57K
🥈 Mutative             █████████████ 77.08K
🥉 Immer                ██ 13.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.57K | ±0.38% | 4.3751ms | 5.1590ms | 114.28K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.08K | ±0.42% | 12.9738ms | 22.7020ms | 38.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.86K | ±0.28% | 72.1325ms | 92.4120ms | 6.93K |

**Key Insight:** Craft is **16.49x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.74K
🥈 Immer                █████████████ 71.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.74K | ±0.60% | 4.4298ms | 7.4130ms | 112.87K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.79K | ±0.22% | 13.9301ms | 24.3160ms | 35.89K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.09M
🥈 Immutability Helper  █████████████████████████████████████ 1.00M
🥉 Craft                ████████████████████████████████████ 977.68K
   Mutative             ███████████████████████████████████ 963.87K
   Immer                █████████████████████████ 675.78K
   Seamless Immutable   █████ 128.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.58M | ±0.09% | 0.0686ms | 0.0900ms | 7.29M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.09M | ±0.11% | 0.9198ms | 1.0930ms | 543.63K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.00M | ±0.31% | 0.9972ms | 1.3020ms | 501.42K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 977.68K | ±2.49% | 1.0228ms | 2.6350ms | 488.84K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 963.87K | ±0.63% | 1.0375ms | 1.3830ms | 481.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 675.78K | ±1.73% | 1.4798ms | 3.2660ms | 337.89K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.03K | ±0.23% | 7.8109ms | 15.2980ms | 64.01K |

**Key Insight:** Native Spread is **113.92x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 536.04K
🥈 Mutative             █████████████████████████████ 394.41K
🥉 Craft                ██████████████████████████ 348.71K
   Immutable.js         █████████████████ 226.23K
   Immer                ███████████ 153.16K
   Seamless Immutable   ███ 37.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.83M | ±0.16% | 0.0845ms | 0.1100ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 536.04K | ±0.52% | 1.8655ms | 2.0940ms | 268.02K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 394.41K | ±0.53% | 2.5355ms | 3.1660ms | 197.20K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 348.71K | ±2.48% | 2.8678ms | 4.8600ms | 174.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 226.23K | ±1.86% | 4.4202ms | 7.0730ms | 113.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.16K | ±2.01% | 6.5292ms | 14.1770ms | 76.58K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.59K | ±0.36% | 26.6029ms | 35.6760ms | 18.80K |

**Key Insight:** Native Spread is **314.69x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.77M
🥈 Immutability Helper  ████████████████████████████████ 1.43M
🥉 Craft                ████████████ 513.47K
   Mutative             █████████ 421.10K
   Immer                ██████ 285.89K
   Seamless Immutable   █ 61.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.38M | ±22.31% | 0.0963ms | 0.1210ms | 5.19M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.77M | ±0.68% | 0.5638ms | 0.7120ms | 886.89K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.66% | 0.7010ms | 0.7820ms | 713.24K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 513.47K | ±0.45% | 1.9475ms | 2.3150ms | 256.74K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 421.10K | ±0.67% | 2.3747ms | 2.9150ms | 210.55K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.89K | ±0.64% | 3.4979ms | 3.9670ms | 142.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.79K | ±0.49% | 16.1840ms | 25.3370ms | 30.89K |

**Key Insight:** Native Spread is **168.05x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 794.90K
🥈 Immutability Helper  ██████████████████████████████ 586.39K
🥉 Craft                ████████████████ 321.12K
   Mutative             ███████████ 220.73K
   Immer                ███████ 140.13K
   Seamless Immutable   ███ 60.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.78M | ±0.79% | 0.0783ms | 0.1110ms | 6.39M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 794.90K | ±0.53% | 1.2580ms | 1.5830ms | 397.45K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 586.39K | ±0.13% | 1.7054ms | 1.8440ms | 293.19K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 321.12K | ±0.24% | 3.1141ms | 3.4460ms | 160.56K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.73K | ±0.28% | 4.5304ms | 5.1190ms | 110.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.13K | ±0.29% | 7.1363ms | 16.4510ms | 70.06K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.94K | ±0.27% | 16.4093ms | 29.7050ms | 30.47K |

**Key Insight:** Native Filter is **209.65x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 504.29K
🥈 Mutative             █████████████████████████████████████ 466.66K
🥉 Immutability Helper  ████████████████████████████████ 398.56K
   Immer                ██████████████████████ 280.57K
   Immutable.js         ███████████████ 191.36K
   Seamless Immutable   ███ 31.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.70M | ±0.62% | 0.0855ms | 0.1300ms | 5.85M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 504.29K | ±0.28% | 1.9830ms | 2.3140ms | 252.14K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 466.66K | ±0.63% | 2.1429ms | 2.9160ms | 233.33K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.56K | ±0.45% | 2.5090ms | 4.1170ms | 199.28K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 280.57K | ±0.65% | 3.5642ms | 7.1230ms | 140.28K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.36K | ±0.35% | 5.2258ms | 5.9010ms | 95.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.70K | ±0.23% | 31.5474ms | 41.2570ms | 15.85K |

**Key Insight:** Native Map is **369.08x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 318.04K
🥈 Craft                ██████████████████████████████████ 271.19K
🥉 Mutative             ███████████████████████████ 216.27K
   Immutable.js         ██████████████████████ 171.74K
   Immer                ████████████ 98.29K
   Seamless Immutable   ███ 22.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.20M | ±0.60% | 0.1087ms | 0.1410ms | 4.60M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 318.04K | ±0.35% | 3.1442ms | 3.4360ms | 159.02K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.19K | ±0.42% | 3.6874ms | 4.7890ms | 135.60K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.27K | ±0.39% | 4.6239ms | 6.6720ms | 108.14K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.74K | ±0.43% | 5.8228ms | 7.4640ms | 85.87K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.29K | ±0.39% | 10.1738ms | 19.6770ms | 49.15K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.45K | ±0.33% | 44.5458ms | 79.8190ms | 11.22K |

**Key Insight:** Native Spread is **409.91x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 375.86K
🥈 Immer                ███ 30.03K
🥉 Craft                ██ 21.98K
   Immutability Helper  █ 6.34K
   Immutable.js         █ 717.66
   Seamless Immutable   █ 259.11
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 375.86K | ±0.79% | 2.6606ms | 3.2570ms | 187.94K |
| 🥈 | **Native Map** | 352.84K | ±0.68% | 2.8341ms | 4.6790ms | 176.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.03K | ±0.31% | 33.2957ms | 43.2700ms | 15.02K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.98K | ±0.27% | 45.4985ms | 55.2230ms | 10.99K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.34K | ±0.50% | 157.7933ms | 297.4650ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 717.66 | ±1.79% | 1393.4253ms | 2618.4510ms | 359.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 259.11 | ±0.47% | 3859.3835ms | 4239.2730ms | 130.00 |

**Key Insight:** Mutative is **1450.59x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.55K
🥈 Craft                ███████████████████████████████████████ 275.28K
🥉 Mutative             █████████████████████████████ 200.74K
   Immutable.js         ███████████████████████ 158.70K
   Immer                ██████████████████ 127.08K
   Seamless Immutable   ███ 19.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.48M | ±0.98% | 0.1543ms | 0.1810ms | 3.24M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.55K | ±0.38% | 3.5772ms | 3.8780ms | 139.78K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 275.28K | ±0.43% | 3.6327ms | 4.3480ms | 137.64K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.74K | ±0.47% | 4.9816ms | 6.0120ms | 100.37K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.70K | ±0.53% | 6.3011ms | 9.1680ms | 79.35K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.08K | ±0.46% | 7.8692ms | 13.6260ms | 63.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.07K | ±0.35% | 52.4344ms | 64.8000ms | 9.54K |

**Key Insight:** Native Spread is **339.84x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T23:23:44.232Z*
