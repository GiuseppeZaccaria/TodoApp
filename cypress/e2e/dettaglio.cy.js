describe('Test Dettaglio Todo', () => {

  it('test btn back', function () {
    cy.visit('http://localhost:4200');
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get(':nth-child(1) > [style="cursor: pointer;"] > b').click();
    cy.get('.btn').click();
    cy.url().should('not.include','dettaglio');

  });

})
