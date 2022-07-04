# UI Testing with Cypress
## Getting started
The repository contains code that demonstrate how cypress can be used to do UI Testing.

The application used for testing (https://www.saucedemo.com)


The framework demonstrate following use cases 

    -[ ] Page Object Usage
    -[ ] Using fixure to read the data
    -[ ] Dynamic tests based on the input data or excute same test with diffrent data set 
    -[ ] Allure Report Integration
    -[ ] How Parallization can be achieved without using Cypress Dashboard

## Clone Repository
    -[ ][Create] Folder on your local machine
    -[ ] Clone Repository using below command
    -[ ] git clone https://github.com/the-test-trove/ui-automation-cypress.git

## Run Tests from You Machine
    -[ ]Please ensure that you have node version 12 or higher is installed.
    -[ ]Open the project using VS Code and Open Terminal
    -[ ]Perform npm install so that all the required dependencies required for cypress are available
    -[ ] In order to run the tests using cypress runner execute command "npx cypress open" and select the spec file that needs to run.
    -[ ]In order to execute all the tests in headless mode execute the command "npm run test"
    -[ ]In order to run test with allure use command [npx cypress run --env allure=true]
    -[ ]To Generate Allure Report use command: allure generate --clean


 ### Integrate with Github Actions
 The test execution can be done in github with Github actions.
 Report URL: https://the-test-trove.github.io/ui-automation-cypress 






