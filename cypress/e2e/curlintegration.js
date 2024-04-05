/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Curl integration", () => {
    it('Code to interate curl in cypress', () => {
        cy.task('log','The key value pair needs to be in single quotes')
        cy.task('log', 'cy.exec("curl -X GET "https://fakerestapi.azurewebsites.net/api/v1/Activities" -H "accept: text/plain; v=1.0")')
    })
                  
})
