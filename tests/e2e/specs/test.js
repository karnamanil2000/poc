// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080')
    cy.contains('h1', 'Random Dog Images')
  })
  it('changes counter when button is pressed', () => {
    cy.get('#myCounter').click();
    cy.contains('p', 'Font size is: 11')
  })
})
