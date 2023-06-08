// https://docs.cypress.io/api/table-of-contents

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Visits the app root url', () => {
    cy.contains('h1', 'Random Dog Images').eq(0).debug()
    // cy.get('h1').eq(1).contains('Random Dog Images111')
    cy.get('h1').eq(1).debug() // .should('contain', 'Random Dog Images111')
    // cy.get('h1').should('have.value', 'Random Dog Images111').eq(1)
    // cy.contains('My journey with Vue')
  })
  it('changes counter when button is pressed', () => {
    cy.get('#myCounter').click()
    cy.contains('p', 'Font size is: 11')
  })
  it('typeText class', () => {
    const text = 'redTape'
    cy.get('.typeText').type(text).should('have.value', text)
    cy.get('#typeTextId') // .should('have.value', 'anil kumar karnam siva')
    // console.log(cy.get('.typeText'),"renderrrrr")
  })
})

describe('LifeCycleHooks.vue', () => {
  const myPromise = new Promise((resolve, reject) => {
    // we use setTimeout(...) to simulate async code.
    setTimeout(() => {
      resolve({
        type: 'success',
        message: 'It worked!'
      })
    }, 2500)
  })

  beforeEach(() => {
    cy.visit('/about')
  })
  it('Visits the app root url', () => {
    cy.contains('My journey with Vue')
  })
  it('Class Name Check', () => {
    cy.get('.red').should('have.class', 'red')
  })

  it('should wait for promises to resolve', () => {
    cy.wrap(myPromise).its('message').should('eq', 'It worked!')
  })
})
