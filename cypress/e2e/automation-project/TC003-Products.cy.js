import homePage from "../../page-objects/homePage"
import productsPage from "../../page-objects/productsPage"

let user

describe('Products page', () => {
    before(() => {
        cy.fixture('userData').then((data) => {
            user = data
        })
    })
    it('Test Case 1: Verify all products and check first product details page', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Products'])
        productsPage.verifyAllProductsDisplayed()
        productsPage.viewFirstProduct()
        productsPage.verifyProductDetails()
    })
    it('Test Case 2: Search for a product and verify results', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Products'])
        productsPage.searchForProduct('Winter Top')
        productsPage.verifySearchResults('Winter Top')
    })
})