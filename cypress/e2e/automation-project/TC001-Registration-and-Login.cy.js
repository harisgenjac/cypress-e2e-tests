import homePage from "../../page-objects/homePage"
import loginPage from "../../page-objects/loginPage"

let user

describe('Registration and login', () => {
    before(() => {
        cy.fixture('userData').then((data) => {
            user = data
            user.email = `test${Date.now()}@email.com`
        })
    })
    it('Test Case 1: Register user', () => {
        cy.registerUser(user)
        loginPage.verifyAccountCreated()
    })
    it('Test Case 2: Login with correct email and password', () => {
        cy.login(user.email, user.password)
        loginPage.verifySuccessfulLogin(user.name)
    })
    it('Test Case 3: Login with incorrect email and password', () => {
        cy.login('wrongemail@test.com', 'wrongpassword')
        loginPage.verifyLoginError()
    })

    it('Test Case 4: Logout', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Logout'])
        homePage.verifyLogoutSuccessful()
    })

    it('Test Case 5: Register user with existing email', () => {
        cy.registerUser(user)
        loginPage.verifySignupError()
    })
    it('Test Case 6: Delete user', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Delete Account'])
        loginPage.verifyAccountDeleted()
    })
})