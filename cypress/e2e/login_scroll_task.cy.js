/// <reference types="Cypress" />
describe('Login Page Tests Dynamic', () => {

 
    it('Verify if sticky page elements are visible during scroll', () => {
        cy.visit(Cypress.config().baseUrl_lab);
        cy.scrollTo('bottom')
        cy.isInViewPort('.nav-image > .nav-image-link') // to check if element is visible on scroll
        cy.task('log', "Success") // to print the log in CI terminal 
    })
});
