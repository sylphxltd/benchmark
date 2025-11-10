# Architecture Documentation

## Fully Config-Driven Design

This benchmark category uses a **completely config-driven architecture** with **zero hardcoded values**. All test groups, libraries, features, and metadata are defined in JSON configuration files.

## Configuration Files

### 1. `category-config.json`
**Category-level settings** (benchmark name, description, environment, performance tiers)

```json
{
  "name": "State Management",
  "description": "...",
  "performanceTiers": [...],
  "benchmarkStandard": {...},
  "environment": {...}
}
```

**Use cases:**
- Update benchmark environment (Node.js version, framework)
- Define performance tier classification
- Specify benchmark standard compliance

---

### 2. `groups-config.json`
**Test group definitions** (what tests exist, what benchmarks in each test)

```json
{
  "groups": {
    "01-read": {
      "title": "Read Operations",
      "description": "...",
      "type": "universal",
      "benchmarks": [...]
    },
    "08-async-reactive": {
      "title": "Reactive Async",
      "type": "feature",
      "libraries": ["Jotai"],
      "benchmarks": [...]
    }
  }
}
```

**Use cases:**
- Add new test group
- Define benchmark patterns and descriptions
- Mark tests as universal or feature-specific
- Mark tests as incomplete

---

### 3. `library-metadata.json`
**Library information** (names, URLs, colors, tradeoffs)

```json
{
  "libraries": {
    "jotai": {
      "name": "Jotai",
      "displayName": "Jotai",
      "description": "...",
      "url": "...",
      "npm": "jotai",
      "color": "#000000",
      "tradeoff": "..."
    }
  }
}
```

**Use cases:**
- Add new library to benchmark
- Update library descriptions
- Define performance tradeoffs

---

### 4. `features.json`
**Feature support matrix** (which libraries support which features)

```json
{
  "features": {
    "computed-native": {
      "name": "Native Computed Values",
      "description": "...",
      "supported": ["jotai", "mobx", "solid-js", ...]
    }
  }
}
```

**Use cases:**
- Define new feature categories
- Update library feature support
- Auto-generate feature matrix table

---

### 5. `versions.json`
**Current library versions and bundle sizes**

```json
{
  "libraries": {
    "jotai": {
      "version": "2.15.1",
      "size": {
        "gzip": 4397,
        "brotli": 3924
      }
    }
  }
}
```

**Use cases:**
- Update library versions
- Track bundle size changes
- Auto-generate version table

---

### 6. `overall-scores.json`
**Calculated performance scores**

```json
{
  "includedTests": ["Read", "Write", "Creation", "Memory"],
  "scores": [
    {
      "library": "Solid Signals",
      "read": 39913249.37,
      "write": 33108765.67,
      "creation": 32134155.75,
      "memory": 922.99,
      "overall": 2502107.93
    }
  ]
}
```

**Use cases:**
- Update after benchmark runs
- Calculate geometric mean scores
- Track performance trends

---

## Adding New Components

### Add a New Library

1. **Add to `library-metadata.json`:**
```json
"new-lib": {
  "name": "New Lib",
  "displayName": "New Lib",
  "description": "...",
  "url": "https://github.com/...",
  "npm": "new-lib",
  "color": "#FF5733",
  "tradeoff": "Fast but large bundle"
}
```

2. **Add to `features.json`** (which features it supports):
```json
"computed-native": {
  "supported": [..., "new-lib"]
}
```

3. **Add to `versions.json`:**
```json
"new-lib": {
  "version": "1.0.0",
  "size": {
    "gzip": 5000,
    "brotli": 4500
  }
}
```

4. **Create benchmark implementations** in `groups/*/`

5. **Run benchmarks** and update `overall-scores.json`

**That's it!** No generator code changes needed.

---

### Add a New Test Group

1. **Add to `groups-config.json`:**
```json
"12-new-test": {
  "title": "New Test",
  "description": "Tests something new",
  "type": "universal",  // or "feature"
  "benchmarks": [
    {
      "name": "New Benchmark",
      "pattern": "New Benchmark -",
      "description": "optional description"
    }
  ]
}
```

2. **Create directory:** `groups/12-new-test/`

3. **Create benchmark files:** `*.bench.ts`

4. **Run benchmarks** to generate `results.json`

**Generator automatically:**
- Discovers new group
- Reads configuration
- Generates README section
- Updates test category ranges

---

### Add a New Benchmark to Existing Group

1. **Update `groups-config.json`:**
```json
"01-read": {
  "benchmarks": [
    ...,
    {
      "name": "New Read Pattern",
      "pattern": "New Read Pattern -",
      "description": "specific use case"
    }
  ]
}
```

2. **Create benchmark file** in `groups/01-read/`

3. **Run benchmarks**

**Generator automatically:**
- Extracts new benchmark results
- Generates chart and table
- Adds to detailed results section

---

### Add a New Feature

1. **Add to `features.json`:**
```json
"new-feature": {
  "name": "New Feature",
  "description": "Does something cool",
  "supported": ["lib1", "lib2"]
}
```

2. **Add to `groups-config.json`:**
```json
"13-new-feature": {
  "title": "New Feature",
  "description": "...",
  "type": "feature",
  "libraries": ["Lib1", "Lib2"],
  "benchmarks": [...]
}
```

3. **Implement feature tests**

---

### Add a New Category (e.g., Immutability, Router)

1. **Copy category structure:**
```bash
cp -r state-management new-category
```

2. **Update config files:**
   - `category-config.json` → category name, description
   - `groups-config.json` → test groups specific to category
   - `library-metadata.json` → libraries in this category
   - `features.json` → features specific to category

3. **Implement benchmarks**

4. **Use same `generate-readme.js`** (works for any category)

---

## Generator Behavior

The `generate-readme.js` script:

1. **Auto-discovers groups** from `groups/*/` directories
2. **Loads all config files**
3. **Extracts benchmark results** from `groups/*/results.json`
4. **Generates complete README** with:
   - Dynamic header from category-config
   - Dynamic library count
   - Dynamic test ranges (01-06, 08-11)
   - Dynamic compliance section
   - Config-driven performance tiers
   - Auto-generated feature matrix

### Zero Hardcoded Values

✅ **No hardcoded:**
- Test numbers or ranges
- Library names
- Feature lists
- Performance tier thresholds
- Environment details
- Benchmark patterns

✅ **Everything configurable:**
- Add/remove libraries → update JSON
- Add/remove tests → create directory + update config
- Change environment → update category-config
- Modify tiers → update performance tiers
- Add features → update features.json

---

## Scalability

### Current Scale
- 8 libraries
- 11 test groups (7 universal, 4 feature)
- 5 features
- ~30 individual benchmarks

### Designed For
- ✅ Unlimited libraries
- ✅ Unlimited test groups
- ✅ Unlimited benchmarks per group
- ✅ Unlimited features
- ✅ Multiple categories (state-management, immutability, router, etc.)

### To Add 100 Libraries
1. Add 100 entries to `library-metadata.json`
2. Update `features.json` support arrays
3. Update `versions.json`
4. Implement benchmark files
5. Run benchmarks
6. **Zero generator changes**

### To Add 50 Test Groups
1. Add 50 entries to `groups-config.json`
2. Create 50 `groups/XX-name/` directories
3. Implement benchmark files
4. Run benchmarks
5. **Zero generator changes**

---

## Maintenance

### Regular Updates
- **Versions:** Update `versions.json` when libraries update
- **Scores:** Update `overall-scores.json` after benchmark runs
- **Results:** `groups/*/results.json` auto-generated by Vitest

### No Code Changes Needed For
- Adding/removing libraries
- Adding/removing tests
- Changing feature support
- Updating descriptions
- Modifying performance tiers
- Environment updates

### Code Changes Only Needed For
- New README sections (rare)
- New calculation methods (rare)
- Visualization changes (rare)

---

## Best Practices

1. **Keep configs in sync:**
   - Add library → update all 3 JSONs (metadata, features, versions)

2. **Use consistent naming:**
   - Benchmark pattern: `"Test Name -"` (note the space and dash)
   - Group IDs: `"XX-lowercase-name"`

3. **Test after config changes:**
   ```bash
   node generate-readme.js
   ```

4. **Validate JSON:**
   - Use JSON linter
   - Check for typos in library keys

5. **Document tradeoffs:**
   - Keep tradeoffs concise
   - Focus on key differences

---

## Migration from Hardcoded

**Before:**
```javascript
const tiers = [
  { name: 'Signal-based (Tier S)', threshold: 2000000 },
  // ...hardcoded
];
```

**After:**
```javascript
const tiers = categoryConfig.performanceTiers.map(t => ({ ...t, examples: [] }));
```

**Impact:**
- Tiers now in `category-config.json`
- Can be changed without touching code
- Consistent across all generators
- Easy to add/remove tiers

---

## Summary

This architecture achieves **true automation**:
- **Add library:** Update 3 JSON files
- **Add test:** Create directory + update 1 JSON
- **Add feature:** Update 2 JSON files
- **Add category:** Copy structure + update configs

**No generator modifications needed.**
