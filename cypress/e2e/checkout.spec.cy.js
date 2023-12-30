import CheckoutStepOnePage from '../pages/checkoutStepOnePage.js';
import CheckoutStepTwoPage from '../pages/checkoutStepTwoPage.js';
import '../support/commands.js';


describe('Checkout Functionality', () => {
    beforeEach(() => {
      cy.login();
      cy.addProduct('Sauce Labs Backpack');
      cy.proceedToCheckout();
    });
  
    it('should finish checkout', () => {
      const baseUrl = Cypress.config('baseUrl');
      
      CheckoutStepOnePage.fillFirstName();
      CheckoutStepOnePage.fillLastName();
      CheckoutStepOnePage.fillPostalCode();
      CheckoutStepOnePage.continue();
      cy.url().should('eq', `${baseUrl}/checkout-step-two.html`);
      CheckoutStepTwoPage.finish()
      cy.url().should('eq', `${baseUrl}/checkout-complete.html`);
    });
  
  
  });
  
