beforeEach(function() {
  cy.visit('http://localhost:4200');
});

describe('Test http', () => {

  it('No data', function () {
    const response = {
      "payload": []
    }
    cy.intercept('GET', '/assets/get-todo.json', response).as('todo');
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get('.fw-bold').should('exist');
  });

  it('http error', function () {
    const response = {
      "status": 404,
      "statusText": "Not Found",
      "url": "https://api.example.com/users/123",
      "ok": false,
      "name": "HttpErrorResponse",
      "message": "Http failure response for https://api.example.com/users/123: 404 Not Found",
      "error": {
        "code": 404,
        "message": "User not found"
      }
    }
    cy.intercept('GET', '/assets/get-todo.json', response).as('todo');
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get('.alert').should('exist');
  });
})

describe('Test actions', () => {
  it('Loads todo', () => {
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get('.mt-3 > .col-12 > :nth-child(1)');
    cy.get('.not-todo-container');
  })

  it('Actions todo', function () {
    const todoName = 'test';
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get('.form-control').type(todoName).should('have.value','test');
    cy.get('.input-group > .btn').click();
    cy.get('.col-12 > :nth-child(3)').should('exist');
    cy.get(':nth-child(3) > :nth-child(2) > .d-flex > :nth-child(1)').click();
    cy.get('.col-12 > :nth-child(4)').should('exist');
    cy.get(':nth-child(4) > :nth-child(2) > .d-flex > .mx-2').click();
    cy.get('.col-12 > :nth-child(4)').should('not.exist');
  });

  it('Open detail', function () {
    cy.get('#username').type('test');
    cy.get('#password').type('test');
    cy.get('.btn').click();
    cy.get(':nth-child(1) > [style="cursor: pointer;"] > b').click();
    cy.url().should('include','dettaglio');
  });
})
