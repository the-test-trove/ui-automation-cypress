import LoginPage from '../helper/pageobject/loginPage'
import ProductPage from "../helper/pageobject/productPage"

describe('Add to Cart Test', () => {

    
    it('Verify User should be able to login with valid credentials and add items to the cart', () => {
      
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => cy.log(title.text()))
        ProductPage.getAllProducts().then(item => cy.log(item.text()))
        ProductPage.addItemToCart().click()

    });

    it('Verify User not should be able add items to the cart without succesful login', () => {
      
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_users").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => 
            {
                cy.log(title.text())
                expect(title.text()).eq("PRODUCTS")
            })
        ProductPage.getAllProducts().then(item => cy.log(item.text()))
        ProductPage.addItemToCart().click()

    });
});