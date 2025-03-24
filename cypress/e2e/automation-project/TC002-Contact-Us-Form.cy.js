import homePage from "../../page-objects/homePage"
import contactUsPage from "../../page-objects/contactUsPage"

let contactData
let user

describe('Contact us form', () => {
    before(() => {
        cy.fixture('contactData').then((data) => {
            contactData = data
        })
        cy.fixture('userData').then((data) => {
            user = data
        })
    })

    it('Test Case 1: Submit the contact us form successfully', () => {
        cy.login(user.email, user.password)
        homePage.selectItemFromMenu(['Contact us'])
        contactUsPage.verifyContactUsFormVisible()
        contactUsPage.fillContactForm(contactData.name, contactData.email, contactData.subject, contactData.message)
        contactUsPage.uploadFile(contactData.filePath)
        contactUsPage.submitForm()
        contactUsPage.verifySuccessMessage()
        contactUsPage.clickHomeButton()
        homePage.verifyHomePageVisible()
    })
})