
Cypress.Commands.add('login', (Name, password) => {
 
  cy.visit('https://automationteststore.com/index.php?rt=account/login').click()
   
   
      cy.get('input[name="loginname"]').type("bubuko");
      cy.get('input[name="password"]').type("bubu123!");
      cy.get('button[title="Login"]').click();

      })