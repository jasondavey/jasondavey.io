const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // Basic setup only
      return config;
    },
    // Reasonable timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    // Basic retry configuration
    retries: {
      runMode: 2,
      openMode: 0,
    },
    // Other Cypress configuration
    video: true,
    screenshotOnRunFailure: true,
    projectId: "kuh134",
    record: true,
  },
});
