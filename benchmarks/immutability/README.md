# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** January 1, 2025
- **Last Run:** 12:00:00 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated |
|---------|---------|-------------|-------------|
| **[immer](https://github.com/immerjs/immer)** | `v10.1.1` | 4.70KB | Nov 6, 2025 |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v4.3.7` | 17.74KB | Nov 6, 2025 |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.1.1` | N/A | Nov 6, 2025 |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 📍 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🏆 Top Performers

Quick overview of category winners:

| Category | 🥇 Winner | Ops/sec | Runner-up |
|----------|-----------|---------|----------|
| **Simple Object Update** | Native Spread | 44.69M | [Immutable.js](https://github.com/immutable-js/immutable-js) (4.74M) |
| **Nested Object Update** | Native Spread | 36.52M | [Immutability Helper](https://github.com/kolodny/immutability-helper) (1.55M) |
| **Array Push** | Native Spread | 37.37M | [Immutable.js](https://github.com/immutable-js/immutable-js) (8.23M) |
| **Array Remove** | Native Filter | 40.39M | [Immutable.js](https://github.com/immutable-js/immutable-js) (2.90M) |
| **Array Update** | Native Map | 36.34M | [Mutative](https://github.com/unadlib/mutative) (1.42M) |
| **Deep Nested Update (5 levels)** | Native Spread | 24.62M | [Immutability Helper](https://github.com/kolodny/immutability-helper) (866.71K) |
| **Large Array Update (1000 items)** | [Mutative](https://github.com/unadlib/mutative) | 1.12M | Native Map (564.87K) |
| **Multiple Updates (3 changes)** | Native Spread | 32.21M | [Immutability Helper](https://github.com/kolodny/immutability-helper) (847.86K) |

## 📜 Historical Results

Track performance changes over time:

| Date | Results | Notes |
|------|---------|-------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) | Benchmark run |

> 💡 **Tip:** Compare historical results to track performance improvements or regressions over time.

## 📊 Detailed Results

### Simple Object Update

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 44.69M | ±1.99% | 0.0224ms | 0.0420ms | 22.38M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 4.74M | ±0.24% | 0.2110ms | 0.2920ms | 2.37M |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 3.22M | ±0.21% | 0.3108ms | 0.4160ms | 1.61M |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 2.84M | ±0.56% | 0.3522ms | 0.5000ms | 1.42M |
| 📍 | **[Mutative](https://github.com/unadlib/mutative)** | 2.78M | ±7.32% | 0.3597ms | 0.5420ms | 1.39M |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 335.74K | ±2.40% | 2.9785ms | 7.3340ms | 167.87K |

**Key Insight:** Native Spread is **133.12x faster** than Seamless Immutable in this category.

### Nested Object Update

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 36.52M | ±0.22% | 0.0274ms | 0.0420ms | 18.26M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.55M | ±0.35% | 0.6465ms | 0.7920ms | 773.44K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 1.22M | ±0.29% | 0.8178ms | 1.0420ms | 611.40K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 640.71K | ±0.40% | 1.5608ms | 1.9580ms | 320.35K |
| 📍 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 634.06K | ±9.24% | 1.5771ms | 1.9590ms | 324.59K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 107.68K | ±0.38% | 9.2867ms | 10.6250ms | 53.84K |

**Key Insight:** Native Spread is **339.13x faster** than Seamless Immutable in this category.

### Array Push

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 37.37M | ±0.35% | 0.0268ms | 0.0420ms | 18.68M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8.23M | ±0.43% | 0.1215ms | 0.1670ms | 4.11M |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 4.80M | ±0.43% | 0.2085ms | 0.2910ms | 2.40M |
| 📍 | **[Mutative](https://github.com/unadlib/mutative)** | 1.37M | ±0.38% | 0.7279ms | 0.9170ms | 686.89K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 954.42K | ±0.28% | 1.0478ms | 1.3330ms | 477.21K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 169.95K | ±0.43% | 5.8839ms | 7.2500ms | 84.98K |

**Key Insight:** Native Spread is **219.88x faster** than Seamless Immutable in this category.

### Array Remove

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 40.39M | ±0.41% | 0.0248ms | 0.0420ms | 20.20M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.90M | ±0.41% | 0.3444ms | 0.5410ms | 1.45M |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.74M | ±0.32% | 0.5734ms | 0.7090ms | 872.02K |
| 📍 | **[Mutative](https://github.com/unadlib/mutative)** | 636.18K | ±0.34% | 1.5719ms | 1.9590ms | 318.09K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 437.24K | ±0.33% | 2.2871ms | 2.8340ms | 218.62K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 169.22K | ±0.33% | 5.9093ms | 7.2500ms | 84.61K |

**Key Insight:** Native Filter is **238.70x faster** than Seamless Immutable in this category.

### Array Update

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 36.34M | ±1.11% | 0.0275ms | 0.0420ms | 18.17M |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 1.42M | ±0.54% | 0.7057ms | 0.9170ms | 708.50K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.25M | ±0.59% | 0.8031ms | 1.0000ms | 622.57K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 896.58K | ±1.52% | 1.1154ms | 3.2500ms | 448.29K |
| 📍 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 557.62K | ±0.54% | 1.7933ms | 2.2080ms | 278.81K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 84.01K | ±1.50% | 11.9028ms | 27.5000ms | 42.01K |

**Key Insight:** Native Map is **432.59x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 24.62M | ±0.09% | 0.0406ms | 0.0840ms | 12.31M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 866.71K | ±0.47% | 1.1538ms | 1.5000ms | 433.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 600.99K | ±0.14% | 1.6639ms | 2.0840ms | 300.50K |
| 📍 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 424.60K | ±1.63% | 2.3552ms | 5.8750ms | 212.30K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 296.00K | ±0.37% | 3.3783ms | 4.1660ms | 148.00K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.86K | ±0.23% | 16.4322ms | 22.2080ms | 30.43K |

**Key Insight:** Native Spread is **404.57x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 1.12M | ±0.30% | 0.8930ms | 1.2920ms | 559.88K |
| 🥈 | **Native Map** | 564.87K | ±0.36% | 1.7703ms | 2.2080ms | 282.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.94K | ±0.95% | 12.8308ms | 15.8330ms | 38.97K |
| 📍 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 14.12K | ±0.35% | 70.8068ms | 99.1250ms | 7.06K |
| 📍 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.21K | ±0.37% | 453.1253ms | 608.4160ms | 1.10K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 710.15 | ±0.59% | 1408.1570ms | 1917.5420ms | 356.00 |

**Key Insight:** Mutative is **1576.80x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 32.21M | ±0.06% | 0.0310ms | 0.0420ms | 16.11M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 847.86K | ±0.27% | 1.1794ms | 1.4580ms | 423.93K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 571.99K | ±0.24% | 1.7483ms | 2.1660ms | 285.99K |
| 📍 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 492.00K | ±0.24% | 2.0325ms | 2.4170ms | 246.00K |
| 📍 | **[Immer](https://github.com/immerjs/immer)** | 383.19K | ±0.29% | 2.6096ms | 3.1250ms | 191.60K |
| 📍 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 53.83K | ±0.31% | 18.5782ms | 22.7920ms | 26.91K |

**Key Insight:** Native Spread is **598.46x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-06T19:25:25.368Z*
