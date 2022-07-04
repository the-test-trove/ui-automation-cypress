/// <reference types="Cypress" />

import LoginPage from '../helper/pageobject/loginPage'
import users from '/cypress/fixtures/users.json'
describe('Login Page Tests Dynamic', () => {


    /** 
     * Test that uses fixure file and create dynamic tests
     * **/
    Object.keys(users).forEach(key => {
    it('User Login attempt'+ key, () => {
        cy.visit(Cypress.config().baseUrl);
       LoginPage.setUserName(key).setPassWord(users[key]).clickLoginButton() 
    })
});
});