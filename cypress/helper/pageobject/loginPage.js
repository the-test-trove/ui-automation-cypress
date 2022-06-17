
class LoginPage
{

        setUserName( username)
        {
            cy.get('[data-test="username"]').type(username)
            return this
        }

        setPassWord(password)
        {
            cy.get('[data-test="password"]').type(password,{log:false})
            return this
        }
    
        clickLoginButton()
        {
            cy.get('[data-test="login-button"]').as("btnLogin").click()

        }

}
module.exports = new LoginPage()