// @ts-check
const { defineConfig, devices } = require('@playwright/test')
const {envConfig} = require('./env/env-config')

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
  reporter: [['html', {open: 'always'}]],
  use: {
    headless: false,
    baseURL: envConfig.baseUrl ,
    httpCredentials: {
      username: envConfig.userName ,
      password: envConfig.userPass ,
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
      name: 'homework21',
      testMatch: 'homework23.spec.js',
     // testMatch: 'enviromentVariables.spec.js',
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
