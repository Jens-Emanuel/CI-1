describe('First tests', () => {



  it('Asserting adding to basket and that item "billy" comes in on the right price', () => {
    //Visit website
    cy.visit('https://www.ikea.se')
    cy.wait(500)
    //accept all cookies
    cy.get('#onetrust-accept-btn-handler').click()
    //search for item
    cy.get('.search-field__input').type('billy {ENTER}')
    //add to basket
    cy.get('.plp-product-list__products > :nth-child(1) > .plp-product-list__fragment > :nth-child(1) > .pip-product-compact > .pip-product-compact__bottom-wrapper > .pip-product-compact__buttons-container > .pip-btn--icon-emphasised').click()
    cy.wait(2000)

    //get basket
    cy.scrollTo('top')
    cy.wait(1000)
    cy.get('.hnf-header__shopping-cart-link > .hnf-btn > .hnf-btn__inner').click()
      .should('have.length',1);
    cy.get('.cart-ingka-price__integer').should('contain', 599)

  })

  it('Test 2', () => {


  })

})
