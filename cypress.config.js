const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/results/results-[hash].xml",
    toConsole: false,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://automationexercise.com",
  },
});
