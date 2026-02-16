describe('test suit', () =>  {
  beforeEach(() => {

  
  
  })


  it("test 01-account details", () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')

    
      cy.get('input[name="loginname"]').type("bubuko");
     cy.get('input[name="password"]').type("bubu123!");
      cy.get('button[title="Login"]').click();
    cy.get('.side_account_list > :nth-child(3) > a').click()
  
  

  

  
    //saxelis cvlileba  

    cy.get('input[name="firstname"]').clear().type('nene');
    cy.get('input[name="lastname"]').clear().type('nene123');
    cy.get('button[title="Continue"]').click();
 cy.contains('Your account has been successfully updated').should('exist');

  })
    
  
  

})
    
  
  
  

  

