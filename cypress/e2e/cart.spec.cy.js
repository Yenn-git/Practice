import CartPage from '../pages/cartPage';
import '../support/commands.js';


describe('Shopping Cart Functionality', () => {
    beforeEach(() => {
      cy.login();
      cy.addProduct('Sauce Labs Backpack');
    });
  
    it('should proceed to checkout', () => {
      const baseUrl = Cypress.config('baseUrl');
      CartPage.proceedToCheckout();
      cy.url().should('eq', `${baseUrl}/checkout-step-one.html`);
    });
  
  
  });
  