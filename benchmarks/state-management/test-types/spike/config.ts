/**
 * Performance Spike Test Configuration
 * Tests sudden high-load scenarios and recovery
 */

export interface TestScale {
  id: string;
  name: string;
  description: string;
  spikeIntensity: number; // 1-10 scale
  duration: number; // ms
  baselineLoad: number; // normal operations per second
  spikeLoad: number; // peak operations during spike
  cooldown: number; // ms
  timeout?: number;
}

export interface TestConfig {
  name: string;
  description: string;
  scales: TestScale[];
  requiredMethods: string[];
  setup?: string;
  teardown?: string;
}

export const config: TestConfig = {
  name: 'Performance Spike',
  description: 'Tests performance under sudden load spikes and recovery',
  requiredMethods: ['increment', 'count'],
  setup: 'initializeSpikeTest()',
  teardown: 'cleanupSpikeTest()',
  scales: [
    {
      id: 'gentle-spike',
      name: 'Gentle Spike',
      description: 'Mild performance spike (2x load)',
      spikeIntensity: 2,
      duration: 1000,
      baselineLoad: 100,
      spikeLoad: 200,
      cooldown: 500,
      timeout: 3000
    },
    {
      id: 'moderate-spike',
      name: 'Moderate Spike',
      description: 'Moderate performance spike (5x load)',
      spikeIntensity: 5,
      duration: 2000,
      baselineLoad: 200,
      spikeLoad: 1000,
      cooldown: 1000,
      timeout: 5000
    },
    {
      id: 'severe-spike',
      name: 'Severe Spike',
      description: 'Severe performance spike (10x load)',
      spikeIntensity: 10,
      duration: 3000,
      baselineLoad: 500,
      spikeLoad: 5000,
      cooldown: 2000,
      timeout: 8000
    },
    {
      id: 'extreme-spike',
      name: 'Extreme Spike',
      description: 'Extreme performance spike (20x load)',
      spikeIntensity: 20,
      duration: 5000,
      baselineLoad: 1000,
      spikeLoad: 20000,
      cooldown: 3000,
      timeout: 12000
    }
  ]
};