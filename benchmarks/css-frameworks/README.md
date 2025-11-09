# CSS Frameworks Benchmark 🎨

Professional performance comparison of CSS-in-JS and utility-first CSS frameworks.

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
- **Last Run:** 2:53:42 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v1.0.0` | 9.46KB | Nov 9, 2025 | ⚠️ v2.2.2 incompatible |
| **react** | `v18.3.1` | 2.52KB | Nov 9, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 9, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 9, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 9, 2025 | ⚠️ v66.5.5 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **react** | 2.52KB | 6.44KB | Baseline |
| 🥈 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 1.36x |
| 🥉 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 1.94x |
| 4 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 9.46KB | 30.18KB | 3.76x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 16.67x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 205.39x |

**Size Insight:** react is the most lightweight at 2.52KB (gzip), while tailwindcss is 205.39x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 98.9/100 | Baseline |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk)** | 98.6/100 | 99.7% |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss)** | 97.7/100 | 98.8% |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 97.1/100 | 98.2% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk)** | 9.46KB | 66/100 | Average |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 7/7 | 100% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 7/7 | 100% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7/7 | 100% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 7/7 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across CSS frameworks

| Feature | **Panda CSS** | **Silk** | **Tailwind CSS** | **UnoCSS** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support without runtime overhead</sub> | [✅](https://panda-css.com/docs/concepts/type-safety) | [✅](https://github.com/sylphxltd/silk#type-safety) | ❌ | ❌ |
| **Codegen Required**<br/><sub>Requires code generation step for type safety</sub> | [✅](https://panda-css.com/docs/installation/cli) | ❌ | ❌ | ❌ |
| **Design Tokens**<br/><sub>Built-in design token/theme configuration system</sub> | [✅](https://panda-css.com/docs/theming/tokens) | [✅](https://github.com/sylphxltd/silk#design-tokens) | [✅](https://tailwindcss.com/docs/theme) | [✅](https://unocss.dev/config/theme) |
| **Preset System**<br/><sub>Installable preset packages for complete design systems</sub> | [Community presets](https://panda-css.com/docs/customization/presets) | [2 official (Material, Minimal)](https://github.com/sylphxltd/silk#presets) | ❌ | [20+ official presets](https://unocss.dev/presets/) |
| **Critical CSS**<br/><sub>Automatic critical CSS extraction for performance</sub> | ❌ | [✅](https://github.com/sylphxltd/silk#critical-css) | ❌ | ❌ |
| **Pure CSS Icons**<br/><sub>Icon support via pure CSS classes (no SVG/font)</sub> | ❌ | ❌ | ❌ | [✅](https://unocss.dev/presets/icons) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Apply 100 inline styles](#apply-100-inline-styles)
- [Conditional styling (1000 iterations)](#conditional-styling-1000-iterations-)
- [String concatenation (complex className)](#string-concatenation-complex-classname-)
- [Theme toggle (dark/light mode)](#theme-toggle-dark-light-mode-)
- [Responsive breakpoint matching](#responsive-breakpoint-matching)
- [Cold Build Time (Small App)](#cold-build-time-small-app-)
- [CSS Output Size (Small App - 10 components)](#css-output-size-small-app-10-components-)

### Apply 100 inline styles {#apply-100-inline-styles}

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 298.04K
🥈 Silk - Apply styles  ████████████████████████████████████████ 297.02K
🥉 UnoCSS - Apply st... █████████████████████████████████████ 279.22K
   Tailwind CSS - Ap... ███████████████████████████████████ 258.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 298.04K | ±0.43% | 3.3553ms | 6.3320ms | 149.02K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 297.02K | ±0.41% | 3.3668ms | 6.2320ms | 148.51K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 279.22K | ±0.44% | 3.5815ms | 6.5320ms | 139.61K |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Apply styles** | 258.73K | ±1.48% | 3.8650ms | 10.9110ms | 129.37K |

**Key Insight:** Panda CSS - Apply styles is **1.15x faster** than Tailwind CSS - Apply styles in this category.

### Conditional styling (1000 iterations) {#conditional-styling-1000-iterations-}

**Performance Comparison:**

```
🥇 Tailwind CSS - Co... ████████████████████████████████████████ 2.55M
🥈 Silk - Conditiona... ████████████████████████████████████████ 2.53M
🥉 Panda CSS - Condi... ███████████████████████████████████████ 2.48M
   UnoCSS - Conditio... ██████████████████████████████████████ 2.44M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Conditional styles** | 2.55M | ±0.13% | 0.3925ms | 0.8120ms | 1.27M |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 2.53M | ±0.11% | 0.3957ms | 0.8220ms | 1.26M |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.48M | ±0.14% | 0.4025ms | 0.8410ms | 1.24M |
| 4 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.44M | ±0.16% | 0.4098ms | 0.8420ms | 1.22M |

**Key Insight:** Tailwind CSS - Conditional styles is **1.04x faster** than UnoCSS - Conditional styles in this category.

### String concatenation (complex className) {#string-concatenation-complex-classname-}

**Performance Comparison:**

```
🥇 UnoCSS - Concat 1... ████████████████████████████████████████ 18.02M
🥈 Panda CSS - Conca... ████████████████████████████████████████ 18.02M
🥉 Tailwind CSS - Co... ████████████████████████████████████████ 17.93M
   Silk - Concat 10 ... ███████████████████████████████████████ 17.64M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 18.02M | ±0.11% | 0.0555ms | 0.0610ms | 9.01M |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 18.02M | ±0.16% | 0.0555ms | 0.0610ms | 9.01M |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Concat 10 classes** | 17.93M | ±0.10% | 0.0558ms | 0.0800ms | 8.97M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 17.64M | ±0.10% | 0.0567ms | 0.0900ms | 8.82M |

**Key Insight:** UnoCSS - Concat 10 classes is **1.02x faster** than Silk - Concat 10 classes in this category.

### Theme toggle (dark/light mode) {#theme-toggle-dark-light-mode-}

**Performance Comparison:**

```
🥇 Tailwind CSS - To... ████████████████████████████████████████ 516.42K
🥈 UnoCSS - Toggle t... ████████████████████████████████████████ 515.45K
🥉 Panda CSS - Toggl... ████████████████████████████████████████ 515.34K
   Silk - Toggle the... ████████████████████████████████████████ 511.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Toggle theme 1000x** | 516.42K | ±0.08% | 1.9364ms | 1.9240ms | 258.21K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 515.45K | ±0.08% | 1.9400ms | 2.0640ms | 257.73K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 515.34K | ±0.17% | 1.9404ms | 1.9340ms | 257.67K |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 511.65K | ±0.09% | 1.9544ms | 3.9570ms | 255.83K |

**Key Insight:** Tailwind CSS - Toggle theme 1000x is **1.01x faster** than Silk - Toggle theme 1000x in this category.

### Responsive breakpoint matching {#responsive-breakpoint-matching}

**Performance Comparison:**

```
🥇 Tailwind CSS - Ma... ████████████████████████████████████████ 307.68K
🥈 UnoCSS - Match br... ████████████████████████████████████████ 305.70K
🥉 Panda CSS - Match... ███████████████████████████████████████ 299.68K
   Silk - Match brea... ███████████████████████████████████████ 299.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Match breakpoint 1000x** | 307.68K | ±0.17% | 3.2501ms | 3.3370ms | 153.84K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 305.70K | ±0.09% | 3.2712ms | 5.7910ms | 152.85K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 299.68K | ±0.08% | 3.3369ms | 3.4560ms | 149.84K |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 299.61K | ±0.20% | 3.3377ms | 3.4470ms | 149.80K |

**Key Insight:** Tailwind CSS - Match breakpoint 1000x is **1.03x faster** than Silk - Match breakpoint 1000x in this category.

### Cold Build Time (Small App) {#cold-build-time-small-app-}

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 234.00ms
🥈 UnoCSS               ██████████████████████████ 456.00ms
🥉 Tailwind CSS         █████████████ 678.00ms
   Panda CSS            █ 890.00ms
```

| Rank | Library | Time | Variance | p75 | p99 | Samples |
|------|---------|------|----------|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 234.00ms | ±0.00% | 234.00ms | 234.00ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 456.00ms | ±0.00% | 456.00ms | 456.00ms | 0.00 |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 678.00ms | ±0.00% | 678.00ms | 678.00ms | 0.00 |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 890.00ms | ±0.00% | 890.00ms | 890.00ms | 0.00 |

**Key Insight:** Silk is **3.80x faster** than Panda CSS in this category.

### CSS Output Size (Small App - 10 components) {#css-output-size-small-app-10-components-}

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 1.76KB
🥈 UnoCSS               ██████████████████████ 6.35KB
🥉 Panda CSS            ████████████████ 7.91KB
   Tailwind CSS         █ 12.01KB
```

| Rank | Library | Size | Min | Max | p99 | Samples |
|------|---------|------|-----|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 1.76KB | 1.76KB | 1.76KB | 1.76KB | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 6.35KB | 6.35KB | 6.35KB | 6.35KB | 0.00 |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7.91KB | 7.91KB | 7.91KB | 7.91KB | 0.00 |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 12.01KB | 12.01KB | 12.01KB | 12.01KB | 0.00 |

**Key Insight:** Silk generates **6.83x smaller** CSS than Tailwind CSS in this category.

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

*Last generated: 2025-11-09T17:06:51.308Z*
