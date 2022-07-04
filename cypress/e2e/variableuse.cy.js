/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('test for using variables across tests', () => {
    it('Code is commented for using the variables', () => {
        cy.task('log',"cy.get('locator').invoke('val').as('testname');")
        //cy.get('locator').as('testname');
    })
    it('Using the variable in different test case with function keyword to be put',function (){
        cy.task('log', "cy.contains(this.testname).should('be.visible')");
    })

})