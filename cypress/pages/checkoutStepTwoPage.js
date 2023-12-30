class CheckoutStepTwoPage {
    //Selectors
    finishBtn = '#finish';

    finish() {
        cy.get(this.finishBtn).click();
    }
}

export default new CheckoutStepTwoPage();