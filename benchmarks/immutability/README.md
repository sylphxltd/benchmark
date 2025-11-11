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
- **Last Run:** 1:28:24 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 74.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 44.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.6% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 220.50K
🥈 Immer                ████████████████████ 112.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 220.50K | ±1.95% | 4.5352ms | 9.0470ms | 110.33K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.86K | ±1.77% | 8.8606ms | 25.8990ms | 56.43K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 970.18K
🥈 Immer                █████ 132.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 970.18K | ±0.15% | 1.0307ms | 1.4120ms | 485.09K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.78K | ±1.53% | 7.5314ms | 16.1000ms | 66.39K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.66K
🥈 Immer                ██████████████ 61.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 173.66K | ±1.97% | 5.7583ms | 11.1400ms | 86.83K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.63K | ±1.44% | 16.2254ms | 30.2570ms | 30.82K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 748.68K
🥈 Mutative             ██████████████████████████ 480.19K
🥉 Immer                ██████████ 180.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 748.68K | ±1.61% | 1.3357ms | 3.0060ms | 374.34K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 480.19K | ±0.62% | 2.0825ms | 2.6550ms | 240.09K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.65K | ±0.89% | 5.5356ms | 9.0170ms | 90.33K |

**Key Insight:** Craft is **4.14x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 427.76K
🥉 Immer                █████ 160.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.50% | 0.7889ms | 1.1120ms | 633.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.76K | ±0.37% | 2.3378ms | 2.6950ms | 213.88K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 160.80K | ±0.33% | 6.2188ms | 7.7350ms | 80.40K |

**Key Insight:** Craft is **7.88x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 868.61K
🥈 Mutative             █████████████████████ 454.71K
🥉 Immer                ████████ 170.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 868.61K | ±0.39% | 1.1513ms | 1.4930ms | 434.31K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.71K | ±0.41% | 2.1992ms | 2.6950ms | 227.36K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 170.10K | ±0.56% | 5.8788ms | 10.9810ms | 85.05K |

**Key Insight:** Craft is **5.11x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 868.23K
🥈 Mutative             █████████████████████ 448.03K
🥉 Immer                ████████ 182.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 868.23K | ±0.38% | 1.1518ms | 1.4420ms | 434.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.03K | ±0.38% | 2.2320ms | 2.6250ms | 224.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.60K | ±0.36% | 5.4763ms | 6.7120ms | 91.30K |

**Key Insight:** Craft is **4.75x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.07K
🥈 Mutative             █████████████████████████████████ 147.44K
🥉 Immer                █████████████████ 78.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 181.07K | ±0.52% | 5.5227ms | 9.5980ms | 90.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.44K | ±0.54% | 6.7826ms | 12.9440ms | 73.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.20K | ±0.50% | 12.7873ms | 23.2230ms | 39.10K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.70K
🥈 Mutative             ██████████████ 75.59K
🥉 Immer                ██ 13.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 222.70K | ±0.49% | 4.4903ms | 7.9350ms | 111.35K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.59K | ±0.52% | 13.2298ms | 23.1040ms | 37.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.60K | ±0.35% | 73.5470ms | 90.0190ms | 6.80K |

**Key Insight:** Craft is **16.38x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.44K
🥈 Immer                ████████████ 69.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.44K | ±0.38% | 4.4162ms | 5.0590ms | 113.22K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.01K | ±0.45% | 14.4915ms | 25.7080ms | 34.50K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 980.38K
🥉 Immutability Helper  ████████████████████████████████████ 966.42K
   Craft                ████████████████████████████████████ 957.82K
   Immer                ██████████████████████████ 706.57K
   Seamless Immutable   █████ 127.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.64M | ±0.09% | 0.0683ms | 0.1100ms | 7.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.30% | 0.9354ms | 1.1420ms | 534.54K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 980.38K | ±0.41% | 1.0200ms | 1.3030ms | 490.19K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 966.42K | ±0.41% | 1.0347ms | 1.8730ms | 483.21K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 957.82K | ±2.54% | 1.0440ms | 2.6650ms | 478.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 706.57K | ±1.84% | 1.4153ms | 3.1860ms | 353.29K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.45K | ±0.27% | 7.8465ms | 14.2470ms | 63.72K |

**Key Insight:** Native Spread is **114.86x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 522.02K
🥈 Mutative             ███████████████████████████████ 398.27K
🥉 Craft                ███████████████████████████ 349.24K
   Immutable.js         ██████████████████ 233.75K
   Immer                ████████████ 157.58K
   Seamless Immutable   ███ 37.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.77M | ±0.14% | 0.0850ms | 0.1200ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 522.02K | ±0.31% | 1.9157ms | 2.2740ms | 261.01K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 398.27K | ±1.23% | 2.5109ms | 4.8890ms | 199.13K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 349.24K | ±2.63% | 2.8633ms | 5.3190ms | 174.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 233.75K | ±0.39% | 4.2781ms | 5.1590ms | 116.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 157.58K | ±1.76% | 6.3458ms | 11.4120ms | 78.79K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.17K | ±0.45% | 26.9046ms | 39.1430ms | 18.59K |

**Key Insight:** Native Spread is **316.68x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ████████████████████████████████ 1.40M
🥉 Craft                ████████████ 515.35K
   Mutative             ██████████ 430.82K
   Immer                ██████ 281.56K
   Seamless Immutable   █ 60.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.06M | ±1.22% | 0.0829ms | 0.1110ms | 6.03M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.30% | 0.5737ms | 0.7910ms | 871.46K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.33% | 0.7156ms | 0.7920ms | 698.74K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 515.35K | ±0.34% | 1.9404ms | 2.2750ms | 257.68K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 430.82K | ±0.42% | 2.3212ms | 2.7450ms | 215.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.56K | ±0.51% | 3.5516ms | 7.9250ms | 140.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.92K | ±0.29% | 16.4143ms | 25.7380ms | 30.46K |

**Key Insight:** Native Spread is **197.99x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 810.51K
🥈 Immutability Helper  █████████████████████████████ 582.14K
🥉 Craft                ████████████████ 317.98K
   Mutative             ███████████ 218.13K
   Immer                ███████ 142.25K
   Seamless Immutable   ███ 60.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.28M | ±1.15% | 0.0814ms | 0.1100ms | 6.14M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 810.51K | ±0.61% | 1.2338ms | 1.6130ms | 405.25K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.14K | ±0.17% | 1.7178ms | 1.9140ms | 291.07K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 317.98K | ±0.31% | 3.1449ms | 3.6270ms | 158.99K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.13K | ±0.36% | 4.5845ms | 5.2300ms | 109.06K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.25K | ±0.44% | 7.0301ms | 11.9920ms | 71.12K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.57K | ±0.47% | 16.5111ms | 25.9380ms | 30.28K |

**Key Insight:** Native Filter is **202.80x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 479.78K
🥈 Mutative             █████████████████████████████████████ 449.73K
🥉 Immutability Helper  █████████████████████████████████ 400.30K
   Immer                ████████████████████████ 283.97K
   Immutable.js         ████████████████ 191.60K
   Seamless Immutable   ███ 31.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.35M | ±0.99% | 0.0881ms | 0.1300ms | 5.67M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 479.78K | ±0.54% | 2.0843ms | 2.4750ms | 239.89K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 449.73K | ±0.66% | 2.2236ms | 2.7050ms | 224.87K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.30K | ±0.23% | 2.4981ms | 2.8750ms | 200.15K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.97K | ±0.23% | 3.5215ms | 5.8200ms | 141.99K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.60K | ±0.64% | 5.2193ms | 6.0820ms | 95.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.46K | ±0.49% | 31.7867ms | 42.0390ms | 15.73K |

**Key Insight:** Native Map is **360.67x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.74K
🥈 Craft                ███████████████████████████████████ 270.92K
🥉 Mutative             ███████████████████████████ 209.02K
   Immutable.js         ██████████████████████ 168.54K
   Immer                █████████████ 99.40K
   Seamless Immutable   ███ 22.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.24M | ±0.64% | 0.1082ms | 0.1400ms | 4.62M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.74K | ±0.44% | 3.1975ms | 3.7070ms | 156.37K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 270.92K | ±0.45% | 3.6911ms | 4.4590ms | 135.46K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 209.02K | ±0.44% | 4.7843ms | 5.9810ms | 104.51K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.54K | ±0.50% | 5.9335ms | 13.0740ms | 84.27K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.40K | ±0.36% | 10.0599ms | 19.3960ms | 49.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.40K | ±0.35% | 44.6344ms | 58.1190ms | 11.20K |

**Key Insight:** Native Spread is **412.37x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 361.32K
🥈 Immer                ███ 29.98K
🥉 Craft                ██ 21.98K
   Immutability Helper  █ 6.48K
   Immutable.js         █ 731.82
   Seamless Immutable   █ 249.80
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 361.32K | ±0.84% | 2.7677ms | 3.6770ms | 180.66K |
| 🥈 | **Native Map** | 356.69K | ±0.68% | 2.8035ms | 3.4170ms | 178.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.98K | ±0.45% | 33.3516ms | 43.9220ms | 14.99K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.98K | ±0.35% | 45.5050ms | 56.2360ms | 10.99K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.48K | ±0.36% | 154.4240ms | 177.6520ms | 3.24K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 731.82 | ±1.11% | 1366.4534ms | 1835.8300ms | 366.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 249.80 | ±0.61% | 4003.1612ms | 4411.7340ms | 125.00 |

**Key Insight:** Mutative is **1446.41x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.28K
🥈 Craft                █████████████████████████████████████ 257.03K
🥉 Mutative             █████████████████████████████ 199.17K
   Immutable.js         ███████████████████████ 158.58K
   Immer                ███████████████████ 128.78K
   Seamless Immutable   ███ 18.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.16M | ±1.18% | 0.1624ms | 0.1900ms | 3.08M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.28K | ±0.48% | 3.6065ms | 4.0580ms | 138.64K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 257.03K | ±0.55% | 3.8905ms | 4.3680ms | 128.52K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.17K | ±0.46% | 5.0209ms | 6.0510ms | 99.58K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.58K | ±0.64% | 6.3058ms | 10.9000ms | 79.29K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.78K | ±0.43% | 7.7654ms | 11.3010ms | 64.39K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.94K | ±0.52% | 52.8063ms | 63.1880ms | 9.47K |

**Key Insight:** Native Spread is **325.19x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:35:03.707Z*
