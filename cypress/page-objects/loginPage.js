class LoginPage {
  //selectors
  messageForWrongLogin() {
    return cy.get('.login-form p')
  }
  messageForExistingEmail() {
    return cy.get('.signup-form p')
  }
  messageForDeleteAcc() {
    return cy.get('[data-qa="account-deleted"]')
  }
  messageForCreatedAccount() {
    return cy.get('[data-qa="account-created"]')
  }
  loggedInMessage() {
    return cy.contains(`Logged in as`)
  }

  //methods
  verifyLoginError() {
    return this.messageForWrongLogin().should('contain', 'Your email or password is incorrect!')
  }
  verifySignupError() {
    return this.messageForExistingEmail().should('contain', 'Email Address already exist!')
  }
  verifyAccountDeleted() {
    return this.messageForDeleteAcc().should('contain', 'Account Deleted!')
  }
  verifyAccountCreated() {
    return this.messageForCreatedAccount().should('contain', 'Account Created!')
  }
  verifySuccessfulLogin(userName) {
    return this.loggedInMessage().should('contain', `Logged in as ${userName}`)
  }
}
module.exports = new LoginPage();