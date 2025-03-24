class HomePage {
  //selectors
  navigationBar() {
    return cy.get('.shop-menu > .nav')
  }
  signupOrLoginButton() {
    return cy.get('a[href="/login"]')
  }

  //methods
  selectItemFromMenu(path) {
    let menu = this.navigationBar()
    path.forEach((item) => {
      menu = menu.contains(item).parent()
      menu.click()
    })
  }
  verifyLogoutSuccessful() {
    return this.signupOrLoginButton().should('be.visible')
  }
  verifyHomePageVisible() {
    return cy.url().should('eq', 'https://www.automationexercise.com/')
  }
}

module.exports = new HomePage()
