const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  includeShadowDom: true,
  defaultCommandTimeout: 50000,
  taskTimeout: 80000,
  restartBrowserBetweenSpecFiles: true,
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
  env: {
    width: 1920,
    height: 1080,
  }
})
