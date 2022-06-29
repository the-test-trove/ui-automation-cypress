
import LoginPage from '../helper/pageobject/loginPage'
describe('Login Page Tests', () => {
    it('Verify User should be able to login with valid credentials', () => {
      
        cy.visit(Cypress.config().baseUrl);
       LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 

    });

    it('Verify User should be able to login with valid credentials Test', () => {
      
        cy.visit(Cypress.config().baseUrl);
       LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 

    });
});