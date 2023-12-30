class LoginPage {
    //selectors
    usernameInput = '#user-name';
    passwordInput = '#password';
    submitButton = '#login-button';


    visit() {
      cy.visit('/');
    }
  
    fillUsername(username) {
      cy.get(this.usernameInput).type(Cypress.env('username'));
    }
  
    fillPassword(password) {
      cy.get(this.passwordInput).type(Cypress.env('password'));
    }
  
    submit() {
      cy.get(this.submitButton).click();
    }
  }
  
  export default new LoginPage();