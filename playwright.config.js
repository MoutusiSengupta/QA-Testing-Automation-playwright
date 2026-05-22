// @ts-check
const { defineConfig, devices } =  require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
modeule.exports = defineConfig({
  testDir: './tests',
  timeout:30_000,
  retries: 1
  reporter: [['html',{open: 'never'}], ['list']],
  use: {
     baseURL: 'https://www.saucedemo.com',
     headless:true,
     screenshot:'only-on-failure',
     video: 'retain-on-failure',
     trace: 'on-first-retry',

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

});

