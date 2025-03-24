class ProductsPage {
    //selectors
    headerText() {
        return cy.get('.title')
    }
    viewProductButton() {
        return cy.get('.choose')
    }
    productInformationScreen() {
        return cy.get('.product-information')
    }
    productName() {
        return cy.get('.product-information h2')
    }
    searchInput() {
        return cy.get('#search_product')
    }
    searchButton() {
        return cy.get('#submit_search')
    }
    productCard() {
        return cy.get('.col-sm-4')
    }
    addToCartButton() {
        return cy.get('.productinfo > .btn')
    }
    viewCartButton() {
        return cy.get('a[href="/view_cart"]').contains('View Cart')
    }
    continueShoppingButton() {
        return cy.get('.modal-footer > .btn')
    }

    //methods
    verifyAllProductsDisplayed() {
        return this.headerText().should('have.text', 'All Products')
    }
    viewFirstProduct() {
        return this.viewProductButton().first().click()
    }
    verifyProductDetails() {
        this.productInformationScreen().should('be.visible')
        return this.productName().should('not.be.empty')
    }
    searchForProduct(productName) {
        this.searchInput().type(productName)
        return this.searchButton().click()
    }
    verifySearchResults(productName) {
        this.productCard().should('be.visible')
        this.viewProductButton().click()
        this.productName().should('have.text', productName)
    }
    clickOnAddToCart() {
        return this.addToCartButton().click()
    }
    clickOnViewCart() {
        return this.viewCartButton().click()
    }
    clickOnContinueShopping() {
        return this.continueShoppingButton().click()
    }
}

module.exports = new ProductsPage()
