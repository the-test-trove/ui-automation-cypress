/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('test for handling multiple windows', () => {
    it('Code is commented for handling multiple windows', () => {
    cy.task('log'," cy.get( 'locator' ).should( 'be.visible' ).invoke( 'removeAttr', 'target' ).click( { force: true } );")
})
})