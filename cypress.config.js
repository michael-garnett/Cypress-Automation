const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  screenshots: "on-failure", // Capture screenshots on failure
  video: true, // Enable video recording for all tests (including passing ones)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true
      require('cypress-mochawesome-reporter/plugin')(on) // for html eports

    },
  },
})
