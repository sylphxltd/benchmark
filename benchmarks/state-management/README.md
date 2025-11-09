# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **60+ generated benchmarks** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Overview

**Performance comparison of 3 state management libraries** across 7 different test scenarios.

### 🚀 Current Library Performance Rankings

| Rank | Library | Best Performance | Key Strengths |
|------|---------|------------------|---------------|
| 1 | **Jotai** | ~17M ops/sec | Atomic updates, Minimal overhead |
| 2 | **Zustand** | ~9M ops/sec | Simple API, Fast mutations |
| 3 | **Redux Toolkit** | ~200K ops/sec | DevTools, Middleware, Ecosystem |

### 📈 Test Categories

| Category | Description | Link |
|----------|-------------|------|
| [📖 Read Operations](groups/read/) | State access performance | View Details |
| [✏️ Write Operations](groups/write/) | State mutation performance | View Details |
| [📝 Form State](groups/form/) | Complex form management | View Details |
| [🔄 Async Operations](groups/async/) | Promise handling patterns | View Details |
| [🧠 Memory Management](groups/memory/) | Memory usage patterns | View Details |
| [💾 Cache Performance](groups/cache/) | Memoization efficiency | View Details |

### ⚡ Quick Stats

- **3 Libraries Tested**: Redux Toolkit, Zustand, Jotai
- **7 Test Types**: Read, Write, Form, Async, Memory, Cache, Spike
- **60 Generated Tests**: Automatically created comparison benchmarks
- **17 Test Combinations**: Library × Test Type matrix

## 🗂️ Test Categories

Each test category has its own detailed README with performance results, technical details, and usage instructions.

### ✅ [📖 Read Operations](groups/read/)
Individual benchmarks for read operations.

### ✅ [✏️ Write Operations](groups/write/)
Individual benchmarks for write operations.

### ✅ [📝 Form State](groups/form/)
Individual benchmarks for form state management.

### ✅ [🔄 Async Operations](groups/async/)
Individual benchmarks for async operations.

### ✅ [🧠 Memory Management](groups/memory/)
Individual benchmarks for memory management.

### ✅ [💾 Cache Performance](groups/cache/)
Individual benchmarks for cache performance.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run Benchmarks

```bash
# Run all benchmarks
npm run benchmark:all-groups

# Run specific category
npm run benchmark:read
npm run benchmark:write

# Interactive developer dashboard
node scripts/dev-dashboard.cjs
```

### Add New Library

```bash
# 1. Create library directory
mkdir libraries/your-library

# 2. Add metadata
touch libraries/your-library/meta.ts
touch libraries/your-library/store.ts

# 3. Run auto-discovery
npx tsx scripts/auto-discover.ts state-management

# 4. Generate tests
npx tsx scripts/test-generator.ts state-management
```

## 🏆 Performance Summary

### Key Findings

- **Atomic libraries (Jotai)** significantly outperform traditional solutions
- **Zustand** provides excellent performance with minimal API surface
- **Redux Toolkit** offers rich ecosystem but with performance trade-offs

### Performance Winners by Category

| Category | Winner | Performance Margin |
|-----------|---------|-------------------|
| Single Write | Jotai | 82x faster than Redux Toolkit |
| Batch Write | Jotai | 10x faster than Zustand |
| Memory Usage | Zustand | Low memory footprint |

> 💡 **Note**: Results may vary based on hardware, Node.js version, and test configuration.
> View individual group READMEs for detailed performance breakdowns.

## 🏗️ Architecture

This benchmark suite uses a revolutionary **auto-discovery architecture**:

### Key Components

- `libraries/` - Self-describing library implementations
- `test-types/` - Flexible test type configurations
- `scripts/` - Automation and generation tools
- `generated/` - Auto-generated comparison tests

### Advantages

✅ **Zero Configuration**: Add libraries without modifying core code
✅ **Automatic Discovery**: Libraries and test types are auto-detected
✅ **Modular Design**: Each component can be developed independently
✅ **Type Safe**: Full TypeScript support with automatic validation
✅ **Extensible**: Easy to add new test scenarios and scales
✅ **Maintainable**: Clear separation of concerns and standardized interfaces

## 🔗 Related Resources

- [Developer Dashboard](scripts/dev-dashboard.cjs) - Interactive CLI tools
- [Library Implementation Guide](./libraries/) - How to add new libraries
- [Test Type Configuration](./test-types/) - How to add new test scenarios

## 📄 License

MIT License - see [LICENSE](../../LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines and feel free to submit a Pull Request.

---

*Last updated: ${new Date().toISOString()}*