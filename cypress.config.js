const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 40000,
  hideXHR: false,
  failOnStatusCode: false,
  video: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.saucedemo.com',
    experimentalSessionAndOrigin: true,
  },
})
