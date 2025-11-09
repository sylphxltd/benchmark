# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 8, 2025
- **Last Run:** 12:15:34 AM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.6/100 | 77.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 32.9% |
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

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.71K
🥈 Immer                █████████████████████ 112.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.71K | ±2.01% | 4.5933ms | 9.0060ms | 108.86K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.38K | ±1.62% | 8.8986ms | 18.5950ms | 56.19K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.02M
🥈 Immer                █████ 128.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.02M | ±0.17% | 0.9823ms | 1.2420ms | 508.99K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.18K | ±1.60% | 7.8015ms | 16.4110ms | 64.09K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.72K
🥈 Immer                █████████████ 59.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.72K | ±1.73% | 5.6588ms | 11.1200ms | 88.36K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.30K | ±1.60% | 16.8648ms | 30.7280ms | 29.65K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 743.20K
🥈 Mutative             █████████████████████████ 466.03K
🥉 Immer                ██████████ 176.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 743.20K | ±1.71% | 1.3455ms | 2.6750ms | 371.60K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.03K | ±0.68% | 2.1458ms | 2.7050ms | 233.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.72K | ±0.90% | 5.6587ms | 9.8890ms | 88.36K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 427.66K
🥉 Immer                █████ 153.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.28M | ±0.44% | 0.7818ms | 1.1120ms | 639.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.66K | ±0.44% | 2.3383ms | 3.0760ms | 213.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 153.80K | ±0.70% | 6.5020ms | 12.5730ms | 76.90K |

**Key Insight:** Craft is **8.32x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 865.14K
🥈 Mutative             █████████████████████ 451.62K
🥉 Immer                ████████ 169.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 865.14K | ±0.41% | 1.1559ms | 1.5230ms | 432.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.62K | ±0.42% | 2.2143ms | 2.7250ms | 225.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.70K | ±0.42% | 5.8926ms | 9.8190ms | 84.85K |

**Key Insight:** Craft is **5.10x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 834.44K
🥈 Mutative             █████████████████████ 445.61K
🥉 Immer                █████████ 181.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 834.44K | ±0.50% | 1.1984ms | 1.5730ms | 417.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.61K | ±0.46% | 2.2441ms | 2.7450ms | 222.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.85K | ±0.41% | 5.4992ms | 9.5180ms | 90.92K |

**Key Insight:** Craft is **4.59x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.70K
🥈 Mutative             ████████████████████████████████ 149.17K
🥉 Immer                █████████████████ 79.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.70K | ±0.50% | 5.3849ms | 7.7640ms | 92.85K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.17K | ±0.48% | 6.7036ms | 10.7310ms | 74.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.93K | ±0.66% | 12.5113ms | 23.0830ms | 39.96K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.62K
🥈 Mutative             █████████████ 75.27K
🥉 Immer                ██ 12.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.62K | ±0.44% | 4.4323ms | 5.6600ms | 112.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.27K | ±0.46% | 13.2849ms | 22.7430ms | 37.64K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 12.48K | ±0.40% | 80.1445ms | 98.8250ms | 6.24K |

**Key Insight:** Craft is **18.08x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.34K
🥈 Immer                ████████████ 69.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.34K | ±0.38% | 4.4378ms | 5.1500ms | 112.67K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.98K | ±0.26% | 14.2900ms | 24.9660ms | 34.99K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 980.24K
🥉 Craft                █████████████████████████████████████ 978.05K
   Mutative             ████████████████████████████████████ 953.44K
   Immer                ██████████████████████████ 696.28K
   Seamless Immutable   █████ 129.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.52M | ±0.09% | 0.0689ms | 0.1100ms | 7.26M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.21% | 0.9348ms | 1.0620ms | 534.85K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 980.24K | ±0.65% | 1.0202ms | 1.2930ms | 490.12K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 978.05K | ±2.53% | 1.0224ms | 2.6450ms | 489.03K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 953.44K | ±0.43% | 1.0488ms | 1.3720ms | 476.72K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 696.28K | ±1.81% | 1.4362ms | 3.1960ms | 348.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 129.48K | ±0.41% | 7.7230ms | 10.9600ms | 64.74K |

**Key Insight:** Native Spread is **112.12x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 502.27K
🥈 Mutative             ████████████████████████████████ 396.68K
🥉 Craft                ████████████████████████████ 346.09K
   Immutable.js         ██████████████████ 232.05K
   Immer                ████████████ 154.46K
   Seamless Immutable   ███ 37.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.84M | ±0.11% | 0.0844ms | 0.1100ms | 5.92M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 502.27K | ±0.41% | 1.9909ms | 2.5650ms | 251.14K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 396.68K | ±0.74% | 2.5209ms | 4.3680ms | 198.34K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 346.09K | ±2.47% | 2.8894ms | 5.3600ms | 173.05K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 232.05K | ±0.40% | 4.3093ms | 5.0300ms | 116.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.46K | ±1.98% | 6.4742ms | 13.1440ms | 77.23K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.81K | ±0.40% | 26.4497ms | 38.4710ms | 18.90K |

**Key Insight:** Native Spread is **313.28x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  █████████████████████████████████ 1.43M
🥉 Craft                ████████████ 511.64K
   Mutative             ██████████ 420.88K
   Immer                ███████ 284.16K
   Seamless Immutable   █ 60.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.62M | ±1.15% | 0.0861ms | 0.1100ms | 5.81M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±0.46% | 0.5800ms | 0.9720ms | 862.14K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.66% | 0.7003ms | 0.7510ms | 714.02K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 511.64K | ±0.49% | 1.9545ms | 2.3740ms | 255.82K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 420.88K | ±0.49% | 2.3760ms | 2.9260ms | 210.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 284.16K | ±0.53% | 3.5192ms | 4.5680ms | 142.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.96K | ±0.60% | 16.4029ms | 25.4970ms | 30.48K |

**Key Insight:** Native Spread is **190.53x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 791.53K
🥈 Immutability Helper  █████████████████████████████ 577.31K
🥉 Craft                ████████████████ 317.31K
   Mutative             ███████████ 219.60K
   Immer                ███████ 142.96K
   Seamless Immutable   ███ 59.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.50M | ±2.54% | 0.0800ms | 0.1110ms | 6.25M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 791.53K | ±1.00% | 1.2634ms | 1.6230ms | 395.76K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 577.31K | ±0.37% | 1.7322ms | 1.8840ms | 288.65K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.31K | ±0.82% | 3.1515ms | 3.6870ms | 158.66K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.60K | ±0.62% | 4.5538ms | 5.2400ms | 109.80K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.96K | ±0.73% | 6.9950ms | 9.7890ms | 71.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.58K | ±1.06% | 16.7835ms | 25.8880ms | 29.79K |

**Key Insight:** Native Filter is **209.77x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 492.58K
🥈 Mutative             █████████████████████████████████████ 457.08K
🥉 Immutability Helper  █████████████████████████████████ 404.14K
   Immer                ███████████████████████ 283.19K
   Immutable.js         ███████████████ 185.66K
   Seamless Immutable   ███ 31.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.25M | ±1.16% | 0.0889ms | 0.1200ms | 5.62M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 492.58K | ±0.56% | 2.0301ms | 2.4940ms | 246.29K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 457.08K | ±0.67% | 2.1878ms | 2.6250ms | 228.54K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 404.14K | ±0.30% | 2.4744ms | 2.9550ms | 202.07K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.19K | ±0.37% | 3.5312ms | 4.8990ms | 141.60K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 185.66K | ±0.60% | 5.3862ms | 6.3620ms | 92.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.79K | ±0.62% | 31.4526ms | 41.3770ms | 15.90K |

**Key Insight:** Native Map is **353.75x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.95K
🥈 Craft                ██████████████████████████████████ 268.34K
🥉 Mutative             ████████████████████████████ 215.80K
   Immutable.js         █████████████████████ 164.70K
   Immer                ████████████ 95.04K
   Seamless Immutable   ███ 21.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.43M | ±11.67% | 0.1186ms | 0.1700ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.95K | ±0.76% | 3.2057ms | 5.4900ms | 155.97K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 268.34K | ±1.02% | 3.7266ms | 4.5180ms | 134.17K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.80K | ±0.82% | 4.6338ms | 5.3700ms | 107.90K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 164.70K | ±0.85% | 6.0715ms | 7.6950ms | 82.35K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 95.04K | ±0.92% | 10.5221ms | 21.2500ms | 47.52K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.88K | ±0.86% | 45.7005ms | 82.0930ms | 10.94K |

**Key Insight:** Native Spread is **385.33x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 352.05K
🥈 Immer                ███ 29.81K
🥉 Craft                ██ 21.83K
   Immutability Helper  █ 6.21K
   Immutable.js         █ 716.64
   Seamless Immutable   █ 256.24
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 354.21K | ±0.56% | 2.8232ms | 3.4270ms | 177.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 352.05K | ±0.68% | 2.8405ms | 5.1600ms | 176.05K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.81K | ±0.50% | 33.5408ms | 46.8570ms | 14.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.83K | ±0.49% | 45.8062ms | 74.9000ms | 10.92K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.21K | ±0.48% | 161.0398ms | 183.8430ms | 3.10K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 716.64 | ±1.79% | 1395.3953ms | 2764.6650ms | 359.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.24 | ±0.63% | 3902.6621ms | 4421.6460ms | 129.00 |

**Key Insight:** Native Map is **1382.35x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.26K
🥈 Craft                ███████████████████████████████████████ 274.18K
🥉 Mutative             █████████████████████████████ 198.70K
   Immutable.js         ███████████████████████ 160.53K
   Immer                ██████████████████ 126.76K
   Seamless Immutable   ███ 18.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.24M | ±0.58% | 0.1601ms | 0.2300ms | 3.12M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.26K | ±0.50% | 3.5937ms | 4.1970ms | 139.13K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 274.18K | ±0.50% | 3.6472ms | 4.2380ms | 137.09K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.70K | ±0.56% | 5.0327ms | 5.8210ms | 99.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.53K | ±0.60% | 6.2293ms | 8.2450ms | 80.27K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.76K | ±0.44% | 7.8888ms | 14.6970ms | 63.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.87K | ±0.71% | 53.0075ms | 94.3860ms | 9.43K |

**Key Insight:** Native Spread is **331.00x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T00:18:01.615Z*
