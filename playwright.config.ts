import { defineConfig, devices } from '@playwright/test';

const artifactRoot = process.env.P18A_ARTIFACT_DIR || 'test-results/p18a';

export default defineConfig({
  testDir: './e2e',
  outputDir: `${artifactRoot}/artifacts`,
  globalSetup: './e2e/global-setup.ts',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  timeout: 45_000,
  reporter: [
    ['html', { outputFolder: `${artifactRoot}/html`, open: 'never' }],
    ['json', { outputFile: `${artifactRoot}/results.json` }],
    ['junit', { outputFile: `${artifactRoot}/junit.xml` }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3100',
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: process.env.PLAYWRIGHT_SKIP_WEBSERVER
    ? undefined
    : {
        command: 'npm run dev -- --hostname 127.0.0.1 --port 3100',
        url: 'http://127.0.0.1:3100/login',
        reuseExistingServer: false,
        timeout: 180000,
        env: {
          ...process.env,
          NEXT_PUBLIC_DEEPSENSE_BUILD_ID: process.env.NEXT_PUBLIC_DEEPSENSE_BUILD_ID || 'p1.8a-browser',
          NEXT_PUBLIC_DEEPSENSE_ENVIRONMENT: 'browser-test',
          NEXT_PUBLIC_SANDBOX_API_URL: process.env.NEXT_PUBLIC_SANDBOX_API_URL || 'http://127.0.0.1:18000',
          NEXT_PUBLIC_PRODUCTION_API_URL: process.env.NEXT_PUBLIC_PRODUCTION_API_URL || 'http://127.0.0.1:18000',
          NEXT_PUBLIC_CONTROL_API_URL: process.env.NEXT_PUBLIC_CONTROL_API_URL || 'http://127.0.0.1:18000',
        },
      },
});
