import homePage from "../../page-objects/homePage"
import productsPage from "../../page-objects/productsPage"
import cartPage from "../../page-objects/cartPage"

let user
let paymentData

describe('Place Order', () => {
    before(() => {
        cy.fixture('userData').then((data) => {
            user = data
        })
        cy.fixture('paymentData').then((data) => {
            paymentData = data
        })
    })
    it('Test Case 1: Add product in cart', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Products'])
        productsPage.searchForProduct('Winter Top')
        productsPage.clickOnAddToCart()
        productsPage.clickOnViewCart()
        cartPage.verifyCartPageIsOpened()
        cartPage.verifyProductInCart('Winter Top')
        cartPage.verifyQuantityOfProducts('1')
        cartPage.removeAllProductsFromCart()
        cartPage.verifyCartIsEmpty()
    })
    it('Test Case 2: Place order and proceed to checkout', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Products'])
        productsPage.searchForProduct('Winter Top')
        productsPage.clickOnAddToCart()
        productsPage.clickOnViewCart()
        cartPage.verifyCartPageIsOpened()
        cartPage.verifyProductInCart('Winter Top')
        cartPage.verifyQuantityOfProducts('1')
        cartPage.clickOnProceedToCheckout()
        cartPage.verifyDeliveryAndBillingAddressIsDisplayed()
        cartPage.fillCommentForm('I want my product delivered until Friday')
        cartPage.clickOnPlaceOrder()
        cartPage.verifyPaymentPageIsOpened()
        cartPage.fillPaymentInfo(paymentData.cardName, paymentData.cardNumber, paymentData.cvc, paymentData.expMonth, paymentData.expYear)
        cartPage.clickOnPayAndConfirmOrder()
        cartPage.verifyOrderIsConfirmed()
    })
})