// @ts-check
import { defineConfig, devices } from '@playwright/test'

import dotenv from 'dotenv'

import { config as appConfig}  from './config/config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config({ 
  
 path: './.env' 

});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config  = defineConfig({
testDir: './tests',
testMatch: '/tests/**/*.spec.js', /* Можно указать паттерны. Любой уровень вложенности это эти знаки ** потом файл начинается не важно как и закнчивается  spec.js */
// testIgnore: и пописать путь к файлам то эти все тесты будут игнорироваться

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    headless: true, //* если false то при отрбатке тестов открывается браузер открывается если true то не открывается браузер*/

    baseURL: appConfig.baseUrl,
    httpCredentials:{
      username: appConfig.httpCredentials.username ?? ' ',
      password: appConfig.httpCredentials.password ?? ' '
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video:'retain-on-failure',
    screenshot:'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      dependencies:['setup:stage'],
      use: { ...devices['Desktop Chrome'] }
      
    },
    {
      name: 'setup:stage',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '/tests/**/*.setup.js'
      
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

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
});

export default config

