// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("Login",(username, password) =>
{
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password,{log:false})
    cy.get('[data-test="login-button"]').as("btnLogin").click()       
})

Cypress.Commands.add('isInViewPort', element => {
    cy.get(element).then($el => {
  
      const bottom = Cypress.$(cy.state("window")).height();
      const rect = $el[0].getBoundingClientRect();
  
      expect(rect.top).to.be.least(0)
      expect(rect.bottom).to.be.greaterThan(0);
      expect(rect.top).to.be.lessThan(bottom);
      expect(rect.bottom).to.be.lessThan(bottom);
  
  
    })
  })