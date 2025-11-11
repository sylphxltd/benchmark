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
- **Last Run:** 4:00:13 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 77.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.2/100 | 75.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 214.59K
🥈 Immer                ██████████████████████ 115.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 214.59K | ±2.12% | 4.6602ms | 9.1970ms | 107.29K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 115.40K | ±1.61% | 8.6658ms | 18.9250ms | 57.70K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 946.60K
🥈 Immer                █████ 128.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 946.60K | ±0.18% | 1.0564ms | 1.5030ms | 473.30K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.49K | ±1.79% | 7.7828ms | 17.6530ms | 64.25K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.17K
🥈 Immer                ██████████████ 60.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 174.17K | ±1.63% | 5.7414ms | 11.6720ms | 87.09K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.25K | ±1.67% | 16.5970ms | 31.4290ms | 30.13K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 736.98K
🥈 Mutative             ██████████████████████████ 474.71K
🥉 Immer                ██████████ 178.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 736.98K | ±1.71% | 1.3569ms | 3.0160ms | 368.49K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 474.71K | ±0.75% | 2.1065ms | 2.8360ms | 237.35K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.52K | ±1.07% | 5.6015ms | 9.6880ms | 89.26K |

**Key Insight:** Craft is **4.13x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 429.40K
🥉 Immer                █████ 159.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.26M | ±0.42% | 0.7952ms | 1.1020ms | 628.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.40K | ±0.43% | 2.3288ms | 2.8250ms | 214.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.87K | ±0.53% | 6.2549ms | 12.4340ms | 79.94K |

**Key Insight:** Craft is **7.87x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 855.63K
🥈 Mutative             ████████████████████ 435.40K
🥉 Immer                ████████ 167.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 855.63K | ±0.43% | 1.1687ms | 1.5330ms | 427.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 435.40K | ±0.49% | 2.2968ms | 2.8360ms | 217.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.83K | ±0.43% | 5.9583ms | 10.3190ms | 83.92K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 821.61K
🥈 Mutative             █████████████████████ 428.41K
🥉 Immer                █████████ 182.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 821.61K | ±0.56% | 1.2171ms | 1.5830ms | 410.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 428.41K | ±0.63% | 2.3342ms | 2.9660ms | 214.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.16K | ±0.59% | 5.4896ms | 8.1660ms | 91.08K |

**Key Insight:** Craft is **4.51x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 187.81K
🥈 Mutative             ████████████████████████████████ 148.83K
🥉 Immer                █████████████████ 78.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 187.81K | ±0.45% | 5.3245ms | 8.1650ms | 93.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.83K | ±0.48% | 6.7191ms | 10.7100ms | 74.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.87K | ±0.76% | 12.6793ms | 26.7500ms | 39.44K |

**Key Insight:** Craft is **2.38x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.74K
🥈 Mutative             █████████████ 75.50K
🥉 Immer                ██ 13.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 224.74K | ±0.41% | 4.4497ms | 5.5310ms | 112.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.50K | ±0.43% | 13.2442ms | 22.5730ms | 37.75K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.42K | ±0.66% | 74.4955ms | 144.7510ms | 6.71K |

**Key Insight:** Craft is **16.74x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.22K
🥈 Immer                █████████████ 71.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 223.22K | ±0.33% | 4.4800ms | 7.1740ms | 111.61K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.57K | ±0.28% | 13.9720ms | 25.7780ms | 35.79K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 997.42K
🥉 Mutative             █████████████████████████████████████ 989.95K
   Craft                ██████████████████████████████████ 920.28K
   Immer                ██████████████████████████ 686.56K
   Seamless Immutable   █████ 128.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.68M | ±0.10% | 0.0681ms | 0.1000ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.15% | 0.9362ms | 1.2520ms | 534.06K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 997.42K | ±0.43% | 1.0026ms | 1.2920ms | 498.71K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 989.95K | ±0.52% | 1.0101ms | 1.7540ms | 494.98K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 920.28K | ±2.54% | 1.0866ms | 2.7350ms | 460.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 686.56K | ±1.87% | 1.4565ms | 3.2060ms | 343.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.72K | ±0.29% | 7.7689ms | 13.7860ms | 64.36K |

**Key Insight:** Native Spread is **114.08x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 497.98K
🥈 Mutative             ████████████████████████████████ 392.46K
🥉 Craft                ███████████████████████████ 337.71K
   Immutable.js         ███████████████████ 230.61K
   Immer                ████████████ 153.72K
   Seamless Immutable   ███ 37.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.79M | ±0.12% | 0.0848ms | 0.1200ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 497.98K | ±0.35% | 2.0081ms | 2.3850ms | 248.99K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.46K | ±2.99% | 2.5481ms | 4.5890ms | 196.23K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 337.71K | ±2.66% | 2.9612ms | 5.4100ms | 168.85K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.61K | ±0.41% | 4.3364ms | 5.7210ms | 115.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 153.72K | ±1.96% | 6.5055ms | 11.9220ms | 76.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.70K | ±0.33% | 26.5267ms | 36.0970ms | 18.85K |

**Key Insight:** Native Spread is **312.72x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.64M
🥈 Immutability Helper  ██████████████████████████████████ 1.38M
🥉 Craft                ████████████ 498.30K
   Mutative             ██████████ 416.20K
   Immer                ███████ 272.74K
   Seamless Immutable   █ 60.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.40M | ±1.21% | 0.0877ms | 0.1200ms | 5.70M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.64M | ±0.58% | 0.6092ms | 0.9910ms | 820.71K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.78% | 0.7239ms | 0.8420ms | 690.74K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 498.30K | ±0.77% | 2.0068ms | 2.6750ms | 249.15K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 416.20K | ±0.91% | 2.4027ms | 3.0760ms | 208.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 272.74K | ±0.80% | 3.6664ms | 7.9550ms | 136.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.96K | ±0.64% | 16.4054ms | 25.9180ms | 30.48K |

**Key Insight:** Native Spread is **186.96x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 782.00K
🥈 Immutability Helper  ██████████████████████████████ 578.66K
🥉 Craft                ████████████████ 314.04K
   Mutative             ███████████ 213.34K
   Immer                ███████ 139.48K
   Seamless Immutable   ███ 58.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.68M | ±0.86% | 0.0789ms | 0.1100ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 782.00K | ±1.03% | 1.2788ms | 1.6740ms | 391.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.66K | ±0.45% | 1.7281ms | 1.8540ms | 289.33K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 314.04K | ±0.99% | 3.1843ms | 3.8770ms | 157.02K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 213.34K | ±1.02% | 4.6873ms | 5.6910ms | 106.67K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.48K | ±0.90% | 7.1693ms | 15.2180ms | 69.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.32K | ±1.15% | 17.1464ms | 30.2860ms | 29.16K |

**Key Insight:** Native Filter is **217.34x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 488.16K
🥈 Mutative             █████████████████████████████████████ 453.04K
🥉 Immutability Helper  █████████████████████████████████ 399.05K
   Immer                ███████████████████████ 283.57K
   Immutable.js         ████████████████ 192.34K
   Seamless Immutable   ███ 31.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.09M | ±1.25% | 0.0902ms | 0.1300ms | 5.54M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 488.16K | ±0.61% | 2.0485ms | 2.5440ms | 244.08K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 453.04K | ±0.55% | 2.2073ms | 2.6650ms | 226.52K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.05K | ±0.32% | 2.5059ms | 3.2370ms | 199.53K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.57K | ±0.15% | 3.5265ms | 4.6490ms | 141.79K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 192.34K | ±0.63% | 5.1992ms | 5.9010ms | 96.18K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.33K | ±0.67% | 31.9192ms | 44.7640ms | 15.66K |

**Key Insight:** Native Map is **353.96x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.22K
🥈 Craft                ███████████████████████████████████ 266.08K
🥉 Mutative             ████████████████████████████ 215.64K
   Immutable.js         ██████████████████████ 171.31K
   Immer                █████████████ 96.76K
   Seamless Immutable   ███ 22.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.42M | ±12.58% | 0.1187ms | 0.1600ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.22K | ±0.69% | 3.2444ms | 3.6470ms | 154.11K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 266.08K | ±0.82% | 3.7583ms | 4.6390ms | 133.04K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.64K | ±0.66% | 4.6373ms | 5.3900ms | 107.82K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.31K | ±0.67% | 5.8372ms | 7.8250ms | 85.66K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.76K | ±0.79% | 10.3343ms | 19.4560ms | 48.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.02K | ±0.74% | 45.4170ms | 81.5220ms | 11.01K |

**Key Insight:** Native Spread is **382.51x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 352.70K
🥈 Immer                ███ 29.50K
🥉 Craft                ██ 21.42K
   Immutability Helper  █ 6.42K
   Immutable.js         █ 670.30
   Seamless Immutable   █ 251.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 352.70K | ±0.66% | 2.8353ms | 4.2680ms | 176.35K |
| 🥈 | **Native Map** | 349.63K | ±0.57% | 2.8602ms | 5.0090ms | 174.82K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.50K | ±0.56% | 33.9022ms | 61.4850ms | 14.75K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.42K | ±0.45% | 46.6802ms | 55.5240ms | 10.71K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.42K | ±0.49% | 155.7542ms | 173.0240ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 670.30 | ±1.44% | 1491.8698ms | 2172.6050ms | 336.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.30 | ±0.65% | 3979.2586ms | 4587.6730ms | 126.00 |

**Key Insight:** Mutative is **1403.47x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.77K
🥈 Craft                ███████████████████████████████████████ 269.60K
🥉 Mutative             █████████████████████████████ 200.27K
   Immutable.js         ████████████████████████ 162.65K
   Immer                ██████████████████ 127.33K
   Seamless Immutable   ███ 18.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.58M | ±0.57% | 0.1519ms | 0.1800ms | 3.29M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.77K | ±0.37% | 3.6263ms | 4.0980ms | 137.88K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 269.60K | ±0.43% | 3.7092ms | 4.5290ms | 134.80K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.27K | ±0.54% | 4.9931ms | 5.8810ms | 100.14K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.65K | ±0.46% | 6.1482ms | 7.9450ms | 81.33K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.33K | ±0.39% | 7.8535ms | 14.3360ms | 63.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.98K | ±0.46% | 52.6790ms | 66.9850ms | 9.49K |

**Key Insight:** Native Spread is **346.74x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T04:08:09.058Z*
