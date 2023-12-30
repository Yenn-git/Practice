class CheckoutStepOnePage {
  //Selectors
  continueBtn = '#continue';
  firstNameInput = '#first-name';
  lastNameInput = '#last-name';
  postalCodeInput = '#postal-code';

  fillFirstName(firstName) {
      cy.get(this.firstNameInput).type(Cypress.env('firstName'));
    }
  
  fillLastName(lastName) {
      cy.get(this.lastNameInput).type(Cypress.env('lastName'));
    }

  fillPostalCode(postalCode) {
      cy.get(this.postalCodeInput).type(Cypress.env('postalCode'));
    }

  continue(){
      cy.get(this.continueBtn).click();
  }



}

export default new CheckoutStepOnePage();