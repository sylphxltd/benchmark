# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **60+ generated benchmarks** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

Based on write operations benchmark (single state mutation):

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Zustand** | ~5.4M ops/sec | ⚡⚡⚡ Excellent |
| 2 | **Redux Toolkit** | ~0.1M ops/sec | ⚡ Good |

> 💡 Rankings based on real benchmark results. [View detailed methodology →](docs/methodology.md)

## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [📖 Read Operations](groups/read/) | State access performance across different scales | ✅ Results Available |
| [✏️ Write Operations](groups/write/) | State mutation and update performance | ✅ Results Available |
| [📝 Form State](groups/form/) | Complex form state management | ⏳ Running |
| [🔄 Async Operations](groups/async/) | Promise handling and async patterns | ⏳ Running |
| [🧠 Memory Management](groups/memory/) | Memory usage and allocation patterns | ⏳ Running |
| [💾 Cache Performance](groups/cache/) | Memoization and caching efficiency | ⏳ Running |

> 📊 Click each category to view detailed benchmark results and analysis

## 🚀 Quick Start

### Run Benchmarks

```bash
# Run all benchmarks
npm run benchmark:all-groups

# Run specific category
npm run benchmark:read
npm run benchmark:write
npm run benchmark:form

# Interactive developer dashboard
node scripts/dev-dashboard.cjs
```

### Add New Library

```bash
# 1. Create library directory
mkdir libraries/your-library

# 2. Add implementation files
touch libraries/your-library/meta.ts
touch libraries/your-library/store.ts

# 3. Auto-generate tests
npx tsx scripts/test-generator.ts state-management
```

## 🏗️ Architecture

This benchmark suite uses a **revolutionary auto-discovery architecture**:

- **Zero Configuration**: Add libraries without modifying core code
- **Automatic Discovery**: Libraries and test types are auto-detected
- **Type Safe**: Full TypeScript support with automatic validation
- **Modular Design**: Each component can be developed independently

### Directory Structure

```
benchmarks/state-management/
├── groups/              # Test categories with detailed results
│   ├── read/           # Read operation benchmarks + results
│   ├── write/          # Write operation benchmarks + results
│   ├── form/           # Form state benchmarks + results
│   └── async/          # Async operation benchmarks + results
├── libraries/          # Self-describing library implementations
├── test-types/         # Test type configurations
├── generated/          # Auto-generated comparison tests
└── scripts/            # Automation and generation tools
```

## 📚 Documentation

- [Methodology](docs/methodology.md) - How benchmarks are measured
- [Contributing](docs/contributing.md) - Add new libraries or tests
- [Architecture](docs/architecture.md) - Deep dive into the system design

## 📊 Stats

- **3 Libraries Tested**: Redux Toolkit, Zustand, Jotai
- **7 Test Categories**: Read, Write, Form, Async, Memory, Cache, Spike
- **60+ Generated Tests**: Automatically created comparison benchmarks

---

Made with ⚡ by the Benchmark Team | [Report Issues](https://github.com/sylphxltd/benchmark/issues)
