describe('item lister tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('the h1 contains the correct text', () => {
    cy.get('#header-title').contains('Item Lister')
  })

  it('the form takes text and submit button adds a new item', () => {
    const inputText = 'new item'
    //const itemCount = cy.get('li').its('length')
    cy.get('#new-item-text').type(inputText)
    cy.get('#new-item-btn').click()
    // cy.get('li').eq(itemCount).should('exist')
    cy.get('li').eq(-1).contains(inputText)
  })

})