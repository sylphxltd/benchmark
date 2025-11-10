#!/usr/bin/env node
/**
 * Extract performance results from vitest output
 * Converts vitest output to JSON format for README generation
 */

const { spawn } = require('child_process');
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { join, dirname } = require('path');

class ResultExtractor {
  constructor(basePath) {
    this.basePath = basePath;
    this.vitestConfigPath = join(basePath, 'vitest.config.ts');
  }

  async runTestAndExtractResults(testFile) {
    console.log(`🔍 Running and extracting results for: ${testFile}`);

    return new Promise((resolve, reject) => {
      const { execSync } = require('child_process');
      try {
        // Capture both stdout and stderr
        const output = execSync(`npx vitest bench --run ${testFile} 2>&1`, {
          encoding: 'utf8',
          cwd: this.basePath,
          maxBuffer: 10 * 1024 * 1024 // 10MB buffer
        });

        // Parse from regular vitest output
        const fallbackResults = this.parseFromVitestOutput(output, testFile);
        resolve(fallbackResults);
      } catch (error) {
        // Even if vitest exits with error code, try to parse the output
        if (error.stdout || error.stderr) {
          const output = (error.stdout || '') + (error.stderr || '');
          const fallbackResults = this.parseFromVitestOutput(output, testFile);
          resolve(fallbackResults);
        } else {
          console.error(`Error running test: ${error.message}`);
          reject(error);
        }
      }
    });
  }

  parseFromVitestOutput(output, testFile) {
    const lines = output.split('\n');
    const results = {
      files: []
    };

    // console.log('Total output lines:', lines.length);

    const currentFile = {
      filepath: testFile,
      groups: []
    };

    // Find the test name from the success line
    let testName = '';
    for (const line of lines) {
      const match = line.match(/✓.*>(.*)\d+ms/);
      if (match) {
        testName = match[1].trim();
        break;
      }
    }

    let currentGroup = {
      fullName: testName || 'Benchmark',
      benchmarks: []
    };

    let inTable = false;

    for (const line of lines) {
      // Check if we're at the results table header
      if (line.includes('name') && line.includes('hz')) {
        inTable = true;
        continue; // Skip the header line itself
      }

      // Parse benchmark result line (look for bullet character)
      if ((line.includes('\u00B7') || line.includes('·')) && !line.includes('----')) {
        // Start table processing if we haven't yet
        if (!inTable) {
          inTable = true;
        }
        // Clean ANSI codes
        const cleanLine = line.replace(/\x1b\[[0-9;]*m/g, '');

        // Extract library name (starts after the bullet, before the dash)
        const libraryMatch = cleanLine.match(/\u00B7\s+(\w+)\s*-/);
        if (!libraryMatch) {
          continue;
        }

        const library = libraryMatch[1];

        // Get the full library description for the name
        const nameMatch = cleanLine.match(/\u00B7\s+([^·]+?)\s+\d[\d,]*\.?\d*/);
        const fullName = nameMatch ? nameMatch[1].trim() : library;

        // Extract hz - it's the large number with commas that appears before the ANSI code for samples
        let hz = null;
        let samples = null;
        let rme = null;

        // Look for hz pattern: large number with commas in the middle of the line
        // It appears after the library description and before the time metrics
        const hzMatch = cleanLine.match(/\)\s+([\d,]+\.\d{2})\s+/);
        if (hzMatch) {
          hz = parseFloat(hzMatch[1].replace(/,/g, ''));
        }

        // Look for samples - it's the number after the RME percentage
        const samplesMatch = cleanLine.match(/±[\d.]+%\s+(\d+)/);
        if (samplesMatch) {
          samples = parseInt(samplesMatch[1]);
        }

        // Look for RME percentage
        const rmeMatch = cleanLine.match(/±([-\d.]+)%/);
        if (rmeMatch) {
          rme = parseFloat(rmeMatch[1]);
        }

        // Extract mean time - look for the decimal values after the hz
        const meanMatches = cleanLine.match(/0\.\d{4}/g);
        const mean = meanMatches && meanMatches.length > 0 ? parseFloat(meanMatches[0]) / 1000 : null;

        // Extract p99 - usually the 3rd occurrence of 0.xxxx
        const p99 = meanMatches && meanMatches.length >= 3 ? parseFloat(meanMatches[2]) / 1000 : null;

        // If hz is still null, try alternative extraction
        if (hz === null) {
          // Extract the first large number (could be hz)
          const largeNumberMatch = cleanLine.match(/([\d,]+\.\d{2})/);
          if (largeNumberMatch) {
            hz = parseFloat(largeNumberMatch[1].replace(/,/g, ''));
          }
        }

        if (hz !== null && hz > 0) {
          const benchmark = {
            name: fullName,
            library: library,
            hz: hz,
            mean: mean,
            p99: p99,
            rme: rme,
            samples: samples
          };
          currentGroup.benchmarks.push(benchmark);
        }
      }

      // End of table
      if (inTable && line.includes('BENCH') && line.includes('Summary')) {
        break;
      }
    }

    if (currentGroup.benchmarks.length > 0) {
      currentFile.groups.push(currentGroup);
      results.files.push(currentFile);
    }

    return results;
  }

  parseHz(value) {
    if (!value) return null;
    if (value === 'N/A') return null;

    // Remove commas and convert to number
    const cleanValue = value.replace(/,/g, '');
    if (cleanValue === '∞' || cleanValue === 'Infinity') return Infinity;

    const num = parseFloat(cleanValue);
    return isNaN(num) ? null : num;
  }

  parseTime(value) {
    if (!value) return null;
    const num = parseFloat(value);
    return isNaN(num) ? null : num / 1000; // Convert ms to seconds
  }

  parsePercent(value) {
    if (!value) return null;
    const match = value.match(/([-\d.]+)%?/);
    if (match) {
      const num = parseFloat(match[1]);
      return isNaN(num) ? null : num;
    }
    return null;
  }

  parseSamples(value) {
    if (!value) return null;
    const num = parseInt(value.replace(/,/g, ''));
    return isNaN(num) ? null : num;
  }

  async extractResultsForAllTests() {
    const generatedDir = join(this.basePath, 'generated');
    const groupsDir = join(this.basePath, 'groups');

    console.log('📊 Extracting performance results...\n');

    // Extract from generated tests
    if (existsSync(generatedDir)) {
      const testFiles = require('fs').readdirSync(generatedDir)
        .filter(file => file.endsWith('.bench.ts'));

      for (const testFile of testFiles) {
        try {
          const results = await this.runTestAndExtractResults(join('generated', testFile));
          const groupName = this.getGroupNameFromTestFile(testFile);

          if (results.files && results.files.length > 0) {
            await this.saveResults(results, groupName);
          }
        } catch (error) {
          console.error(`❌ Failed to extract results for ${testFile}: ${error.message}`);
        }
      }
    }

    // Also try old system tests
    const groupDirs = ['read', 'write', 'form', 'async', 'memory', 'cache'];
    for (const groupDir of groupDirs) {
      const groupPath = join(groupsDir, groupDir);
      if (existsSync(groupPath)) {
        const testFiles = require('fs').readdirSync(groupPath)
          .filter(file => file.endsWith('.bench.ts'));

        for (const testFile of testFiles) {
          try {
            const results = await this.runTestAndExtractResults(join('groups', groupDir, testFile));
            if (results.files && results.files.length > 0) {
              await this.saveResults(results, groupDir);
            }
          } catch (error) {
            console.error(`❌ Failed to extract results for ${groupDir}/${testFile}: ${error.message}`);
          }
        }
      }
    }
  }

  getGroupNameFromTestFile(testFile) {
    // Extract group name from filename like 'read-single.bench.ts'
    const parts = testFile.replace('.bench.ts', '').split('-');
    return parts[0];
  }

  async saveResults(results, groupName) {
    const resultsDir = join(this.basePath, 'groups', groupName);

    if (!existsSync(resultsDir)) {
      mkdirSync(resultsDir, { recursive: true });
    }

    const resultsPath = join(resultsDir, 'results.json');

    // Merge with existing results if any
    let mergedResults = results;
    if (existsSync(resultsPath)) {
      try {
        const existingResults = JSON.parse(readFileSync(resultsPath, 'utf-8'));
        // Merge results
        mergedResults = {
          files: [...existingResults.files, ...results.files]
        };
      } catch (error) {
        console.warn(`Warning: Could not parse existing results for ${groupName}`);
      }
    }

    writeFileSync(resultsPath, JSON.stringify(mergedResults, null, 2));
    console.log(`✅ Extracted results for ${groupName}`);
  }

  generateAllGroupReadmes() {
    console.log('\n📝 Generating all group READMEs...');

    const { execSync } = require('child_process');
    try {
      execSync('node scripts/group-readme-generator.cjs', {
        stdio: 'inherit',
        cwd: this.basePath
      });
    } catch (error) {
      console.error('❌ Failed to generate group READMEs:', error.message);
    }
  }
}

// CLI interface
if (require.main === module) {
  const extractor = new ResultExtractor(process.cwd());

  extractor.extractResultsForAllTests()
    .then(() => {
      extractor.generateAllGroupReadmes();
      console.log('\n🎉 Results extraction complete!');
    })
    .catch(error => {
      console.error('❌ Results extraction failed:', error);
      process.exit(1);
    });
}

module.exports = ResultExtractor;