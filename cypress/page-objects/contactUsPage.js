class ContactUsPage {
    //selectors
    contactUsForm() {
        return cy.get('.contact-form')
    }
    nameInput() {
        return cy.get('input[data-qa="name"]')
    }
    emailInput() {
        return cy.get('input[data-qa="email"]')
    }
    subjectInput() {
        return cy.get('input[data-qa="subject"]')
    }
    messageInput() {
        return cy.get('textarea[data-qa="message"]')
    }
    fileUploadButton() {
        return cy.get('input[type="file"]')
    }
    submitButton() {
        return cy.get('input[data-qa="submit-button"]')
    }
    successMessage() {
        return cy.get('.status')
    }
    homeButton() {
        return cy.get('#form-section > .btn')
    }

    //methods
    verifyContactUsFormVisible() {
        return this.contactUsForm().should('be.visible')
    }
    fillContactForm(name, email, subject, message) {
        this.nameInput().type(name)
        this.emailInput().type(email)
        this.subjectInput().type(subject)
        this.messageInput().type(message)
    }
    uploadFile(filePath) {
        return this.fileUploadButton().selectFile(filePath)
    }
    submitForm() {
        return this.submitButton().click()
    }
    confirmAlert() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Press OK to continue')
        })
    }
    verifySuccessMessage() {
        return this.successMessage().should('have.text', 'Success! Your details have been submitted successfully.')
    }
    clickHomeButton() {
        return this.homeButton().click()
    }
}

module.exports = new ContactUsPage()
