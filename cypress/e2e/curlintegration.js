/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Curl integration", () => {
    it('Code to interate curl in cypress', () => {
        cy.task('log','The key value pair needs to be in single quotes')
        cy.task('log', 'cy.exec("curl --request POST https://spaship.stage.redhat.com/api/v1/applications/deploy/ecosystem-catalog/qa -H Authorization:Bearer apikey --form upload=@test.zip --form name=test --form path=/get-started --form ref=1.1.9")')
    })
                  
})