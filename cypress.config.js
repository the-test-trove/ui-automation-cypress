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
  screenshotOnRunFailure: true,
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   reporterEnabled: 'mochawesome',
  //   mochawesomeReporterOptions: {
  //     reportDir: 'e2e/reports/',
  //     overwrite: 'false',
  //     json: true,
  //     html: false,
  //     quiet: true,
  //     enableCode: false,
  //     inlineAssets: true,
  //     reportFilename: 'AutomationTest',
  //     timestamp: 'mmddyyyy_HHMMss',
  //     charts: true,
  //     reportPageTitle: 'one-platform-test',
  //   }
  // },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  projectId:'abcd',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
    },

    baseUrl: 'https://www.saucedemo.com',
    experimentalSessionAndOrigin: true,
  },
  env: {
    width: 1920,
    height: 1080,
  }
})
