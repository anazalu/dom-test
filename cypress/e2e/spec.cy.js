describe('item lister tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('the h1 contains the correct text', () => {
    cy.get('#header-title').contains('Item Lister')
  })

  it('the form takes text and submit button adds a new item', () => {
    const inputText = 'new item'
    cy.get('#new-item-text').type(inputText)
    cy.get('#new-item-btn').click()
    cy.get('li').eq(-1).contains(inputText)
  })

  it('the delete button removes an item', () => {
    cy.get('.list-group-item').should('have.length.gt', 0).then(($deleteButtons) => {
      cy.get('.list-group-item').eq(0).children().eq(0).click();
      cy.get('.list-group-item').should('have.length', $deleteButtons.length - 1);
    })
  })

  it('the search box filters out items correctly', () => {
    cy.get('#filter').type('1');
    // Verify that only matching items are displayed
    cy.get('.list-group-item').filter(':visible').should(($items) => {
      expect($items).to.have.length(1);
      expect($items.eq(0)).to.contain('Item 1'); // Check the text of the first matching item
    });
  })
})
