/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Handling Iframe in cypress', () => {

    it('Code for Handling Iframe-method 1', function() {
        cy.task("log","cy.get('iframe_element').its('0.contentDocument.body').should('be.visible').then(cy.wrap).find('locator_inside_iframe')")
    })

})