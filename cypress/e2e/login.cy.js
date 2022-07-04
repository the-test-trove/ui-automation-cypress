/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
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

    it("Handling iframe", () =>{
        cy.task('log', "cy.frameLoaded(Iframe_attribute)");
        cy.task('log', "cy.iframe(iframe_attribute).find(iframe_element_to_search)");
    })

    it("Checking 404 status code", ()=>{
       // cy.request({url: Cypress.config().baseUrl+"/abc" , failOnStatusCode: false }).then((resp)=>{
       //     if (resp.status == '404')
       //     {
        //        cy.log(url+ "Status is 404")
        //    }
 
  //  })
});
});