/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import LoginPage from '../helper/pageobject/loginPage'
import ProductPage from "../helper/pageobject/productPage"

describe('Add to Cart Test', () => {
    beforeEach(() => {
        cy.viewport(Cypress.env('width'), Cypress.env('height'));       
    })
    
    it('Verify User should be able to login with valid credentials and add items to the cart', () => {
      
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => cy.log(title.text()))
        ProductPage.getAllProducts().then(item => {
            cy.log(item.length)
        })
        cy.lighthouse({
            performance: 50,
            accessibility: 90,
            "best-practices": 50,
            seo: 50,
            pwa: 50,
        },  {
            formFactor: 'desktop',
            screenEmulation: {
              mobile: false,
              disable: false,
              width: Cypress.config('viewportWidth'),
              height: Cypress.config('viewportHeight'),
              deviceScaleRatio: 1,
            },
          });
        ProductPage.addItemToCart().click()

    });

    it('Verify User not should be able add items to the cart without succesful login', () => {
      
        cy.visit(Cypress.config().baseUrl);
        LoginPage.setUserName("standard_user").setPassWord("secret_sauce").clickLoginButton() 
        ProductPage.getPageTitle().then(title => 
            {
                cy.log(title.text())
                expect(title.text()).eq("Products")
            })
        ProductPage.getAllProducts().then(item => cy.log(item.text()))
        cy.pa11y();
        ProductPage.addItemToCart().click()

    });
});