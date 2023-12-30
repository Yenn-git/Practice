import LoginPage from '../pages/loginPage.js';
import '../support/commands.js';

describe('Login Functionality', () => {
  it('should log in successfully', () => {
    const baseUrl = Cypress.config('baseUrl');
    cy.login();
    cy.url().should('eq', `${baseUrl}/inventory.html`);
  });
});

