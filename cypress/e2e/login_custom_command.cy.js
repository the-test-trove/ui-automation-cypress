/// <reference types="Cypress" />

import users from '/cypress/fixtures/users.json'
describe('Login Page Tests Custom Command', () => {


    /** 
     * Test that uses fixure file and create dynamic tests using custom cypress command
     * **/
    Object.keys(users).forEach(key => {
    it('User Login attempt'+ key, () => {
        cy.visit(Cypress.config().baseUrl);
        cy.Login(key,users[key]);
    })
});
});