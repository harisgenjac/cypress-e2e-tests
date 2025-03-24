class CartPage {
    //selectors
    cartPageScreen() {
        return cy.get('#cart_items')
    }
    itemInProductCart() {
        return cy.get('.cart_description')
    }
    quantityOfProducts() {
        return cy.get('.cart_quantity')
    }
    deleteItemCartButton() {
        return cy.get('.cart_quantity_delete')
    }
    messageForEmptyCart() {
        return cy.get('#empty_cart')
    }
    proceedToCheckoutButton() {
        return cy.get('.col-sm-6 > .btn')
    }
    deliveryAddressCard() {
        return cy.get('#address_delivery')
    }
    billingAddressCard() {
        return cy.get('#address_invoice')
    }
    commentForm() {
        return cy.get('.form-control')
    }
    placeOrderButton() {
        return cy.get('a[href="/payment"]')
    }
    paymentPageScreen() {
        return cy.get('.payment-information')
    }
    nameOfCardInput() {
        return cy.get('[data-qa="name-on-card"]')
    }
    cardNumberInput() {
        return cy.get('[data-qa="card-number"]')
    }
    CVCInput() {
        return cy.get('[data-qa="cvc"]')
    }
    expirationMonthInput() {
        return cy.get('[data-qa="expiry-month"]')
    }
    expirationYearInput() {
        return cy.get('[data-qa="expiry-year"]')
    }
    payAndConfirmOrderButton() {
        return cy.get('[data-qa="pay-button"]')
    }
    confirmationMessage() {
        return cy.get('.col-sm-9 > p')
    }

    //methods
    verifyCartPageIsOpened() {
        return this.cartPageScreen().should('be.visible')
    }
    verifyProductInCart(productName) {
        return this.itemInProductCart().should('contain.text', productName)
    }
    verifyQuantityOfProducts(quantity) {
        return this.quantityOfProducts().should('contain.text', quantity)
    }
    removeAllProductsFromCart() {
        return this.deleteItemCartButton().click()
    }
    verifyCartIsEmpty() {
        return this.messageForEmptyCart().should('contain.text', 'Cart is empty!')
    }
    clickOnProceedToCheckout() {
        return this.proceedToCheckoutButton().click()
    }
    verifyDeliveryAndBillingAddressIsDisplayed() {
        this.billingAddressCard().should('be.visible')
        this.deliveryAddressCard().should('be.visible')
    }
    fillCommentForm(comment) {
        return this.commentForm().type(comment)
    }
    clickOnPlaceOrder() {
        return this.placeOrderButton().click()
    }
    verifyPaymentPageIsOpened() {
        return this.paymentPageScreen().should('be.visible')
    }
    fillPaymentInfo(cardName, cardNumber, cvc, expMonth, expYear) {
        this.nameOfCardInput().type(cardName)
        this.cardNumberInput().type(cardNumber)
        this.CVCInput().type(cvc)
        this.expirationMonthInput().type(expMonth)
        this.expirationYearInput().type(expYear)
    }
    clickOnPayAndConfirmOrder() {
        return this.payAndConfirmOrderButton().click()
    }
    verifyOrderIsConfirmed() {
        return this.confirmationMessage().should('contain.text', 'Congratulations! Your order has been confirmed!')
    }

}

module.exports = new CartPage()