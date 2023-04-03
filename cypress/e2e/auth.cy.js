describe('Test Auth', () => {

  it('test validators', function () {
    cy.visit('http://localhost:4200');
    cy.get('#username').type('test');
    cy.get('.btn').click();
    cy.get('.invalid-feedback > div').should('exist');
    cy.get('#username').clear();
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get('.invalid-feedback > div')
  });

  it('test call', function () {
    cy.visit('http://localhost:4200');
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.url().should('include','dashboard');
  });

})
