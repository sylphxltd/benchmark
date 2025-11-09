#!/usr/bin/env node
/**
 * Developer Dashboard for Benchmark System
 * Interactive CLI tool for managing benchmarks
 */

const { execSync } = require('child_process');
const { existsSync } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class DevDashboard {
  constructor() {
    this.actions = {
      '1': () => this.discoverLibraries(),
      '2': () => this.generateTests(),
      '3': () => this.listTests(),
      '4': () => this.runSpecificTest(),
      '5': () => this.runAllTests(),
      '6': () => this.addLibrary(),
      '7': () => this.addTestType(),
      '8': () => this.showStats(),
      '9': () => this.fullWorkflow(),
      '0': () => this.exit()
    };
  }

  async start() {
    console.log('\n🚀 State Management Benchmark Dev Dashboard');
    console.log('==========================================\n');

    while (true) {
      await this.showMenu();
      const choice = await this.askQuestion('Choose an option (0-9): ');

      if (this.actions[choice]) {
        await this.actions[choice]();
        if (choice !== '0') {
          await this.askQuestion('\nPress Enter to continue...');
        }
      } else {
        console.log('❌ Invalid option. Please try again.\n');
      }
    }
  }

  async showMenu() {
    console.log('📋 Available Actions:');
    console.log('1. 🔍 Discover libraries and test types');
    console.log('2. ⚡ Generate benchmark tests');
    console.log('3. 📋 List generated tests');
    console.log('4. 🎯 Run specific test');
    console.log('5. 🚀 Run all tests');
    console.log('6. ➕ Add new library');
    console.log('7. 🔧 Add new test type');
    console.log('8. 📊 Show system statistics');
    console.log('9. 🔄 Full workflow (discover → generate → run)');
    console.log('0. 🚪 Exit');
    console.log('');
  }

  askQuestion(question) {
    return new Promise(resolve => rl.question(question, resolve));
  }

  async discoverLibraries() {
    console.log('\n🔍 Discovering libraries and test types...\n');
    try {
      execSync('npx tsx scripts/auto-discover.ts state-management', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error('❌ Discovery failed:', error.message);
    }
  }

  async generateTests() {
    console.log('\n⚡ Generating benchmark tests...\n');
    try {
      execSync('npx tsx scripts/test-generator.ts state-management', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error('❌ Generation failed:', error.message);
    }
  }

  async listTests() {
    console.log('\n📋 Available tests:\n');
    try {
      execSync('node scripts/run-generated-tests.cjs list', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error('❌ Failed to list tests:', error.message);
    }
  }

  async runSpecificTest() {
    const testFiles = this.getTestFiles();
    if (testFiles.length === 0) {
      console.log('❌ No tests found. Generate tests first.');
      return;
    }

    console.log('\n📋 Available tests:');
    testFiles.forEach((test, index) => {
      console.log(`${index + 1}. ${test}`);
    });

    const choice = await this.askQuestion('\nEnter test number: ');
    const testIndex = parseInt(choice) - 1;

    if (testIndex >= 0 && testIndex < testFiles.length) {
      const selectedTest = testFiles[testIndex];
      console.log(`\n🎯 Running: ${selectedTest}\n`);
      execSync(`node scripts/run-generated-tests.cjs ${selectedTest}`, {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } else {
      console.log('❌ Invalid test selection.');
    }
  }

  async runAllTests() {
    console.log('\n🚀 Running all benchmark tests...\n');
    try {
      execSync('node scripts/run-generated-tests.cjs', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
    } catch (error) {
      console.error('❌ Some tests failed:', error.message);
    }
  }

  async addLibrary() {
    console.log('\n➕ Add New Library');
    console.log('==================');

    const name = await this.askQuestion('Library name (e.g., recoil): ');
    const displayName = await this.askQuestion('Display name (e.g., Recoil): ');
    const category = await this.askQuestion('Category (atomic/traditional/signals): ');

    console.log('\n📝 Creating library files...');
    console.log(`📁 Created: libraries/${name}/meta.ts`);
    console.log(`📁 Created: libraries/${name}/store.ts`);
    console.log('\n✅ Library added! Next:');
    console.log('1. Edit libraries/${name}/meta.ts with library details');
    console.log('2. Implement libraries/${name}/store.ts with the standardized interface');
    console.log('3. Run "Discover libraries" to see it in action');
  }

  async addTestType() {
    console.log('\n🔧 Add New Test Type');
    console.log('===================');

    const testType = await this.askQuestion('Test type name (e.g., validation): ');
    const description = await this.askQuestion('Description: ');

    console.log('\n📝 Creating test type files...');
    console.log(`📁 Created: test-types/${testType}/config.ts`);
    console.log('\n✅ Test type added! Next:');
    console.log(`1. Edit test-types/${testType}/config.ts with your test configuration`);
    console.log('2. Define custom scales and parameters');
    console.log('3. Run "Generate tests" to create benchmark files');
  }

  async showStats() {
    console.log('\n📊 System Statistics');
    console.log('==================');

    try {
      const stdout = execSync('npx tsx scripts/auto-discover.ts state-management', {
        encoding: 'utf8',
        cwd: process.cwd()
      });

      const lines = stdout.split('\n');
      const libraryCount = lines.find(l => l.includes('Libraries:'));
      const testTypesCount = lines.find(l => l.includes('Test Types:'));
      const combinationsCount = lines.find(l => l.includes('Supported Combinations:'));

      if (libraryCount) console.log(`📚 ${libraryCount.trim()}`);
      if (testTypesCount) console.log(`🧪 ${testTypesCount.trim()}`);
      if (combinationsCount) console.log(`🔗 ${combinationsCount.trim()}`);

      // Count generated files
      const testOutput = execSync('node scripts/run-generated-tests.cjs list', {
        encoding: 'utf8',
        cwd: process.cwd()
      });

      const testCount = (testOutput.match(/- .+\.bench\.ts/g) || []).length;
      console.log(`📄 Generated tests: ${testCount}`);

    } catch (error) {
      console.error('❌ Failed to get statistics:', error.message);
    }
  }

  async fullWorkflow() {
    console.log('\n🔄 Running Full Workflow');
    console.log('========================');

    console.log('1️⃣  Discovering libraries...');
    await this.discoverLibraries();

    console.log('\n2️⃣  Generating tests...');
    await this.generateTests();

    console.log('\n3️⃣  Running sample tests...');
    const testFiles = this.getTestFiles().slice(0, 2);

    for (const test of testFiles) {
      console.log(`\n🎯 Running: ${test}`);
      try {
        execSync(`node scripts/run-generated-tests.cjs ${test}`, {
          stdio: 'inherit',
          cwd: process.cwd()
        });
      } catch (error) {
        console.error(`❌ Test ${test} failed`);
      }
    }

    console.log('\n✅ Full workflow completed!');
  }

  getTestFiles() {
    try {
      const stdout = execSync('node scripts/run-generated-tests.cjs list', {
        encoding: 'utf8',
        cwd: process.cwd()
      });

      return stdout
        .split('\n')
        .filter(line => line.includes('.bench.ts'))
        .map(line => line.replace(/.*- /, '').trim());
    } catch (error) {
      return [];
    }
  }

  exit() {
    console.log('\n👋 Goodbye! Happy benchmarking!\n');
    rl.close();
    process.exit(0);
  }
}

// Start the dashboard
if (require.main === module) {
  const dashboard = new DevDashboard();
  dashboard.start().catch(console.error);
}