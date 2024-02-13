// @ts-check
const { defineConfig, devices } = require('@playwright/test')

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  workers: 2,
  fullyParallel: false,
  testMatch:'./tests/**/*.spec.js',
  testIgnore: './tests/**/*.skip.spec.js',
  globalSetup: 'global.setup.js',
  globalTeardown: 'global.teardown.js',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    headless: false,
    baseURL: 'https://qauto.forstudy.space/',
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
    screenshot: 'only-on-failure',
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'smoke',
    //   testMatch: '*.smoke.spec.js',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'homework19',
    //   testMatch: 'homework19.spec.js',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    {
      name: 'assertions',
      testMatch: 'homework20.spec.js',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    //
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
