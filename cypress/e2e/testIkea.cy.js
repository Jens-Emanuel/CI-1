//const { beforeEach } = require("mocha")

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
    cy.wait(2000)
    cy.get('.hnf-header__shopping-cart-link > .hnf-btn > .hnf-btn__inner').click()
      .should('have.length',1);
    cy.get('.cart-ingka-price__integer')
      .should('contain', 599)

  })
    
  it('Test 2', () => {
    //Visit website
    cy.visit('https://www.ikea.se')
    cy.wait(500)
    //Accept all cookies
    cy.get('#onetrust-accept-btn-handler').click()

    cy.get('.hnf-location__container > .hnf-location__btn-wrapper--postalcode > .hnf-location__postalcode > .hnf-btn__inner').click()

    cy.get('#hnf-txt-postalcodepicker-postcode').clear()
    cy.get('#hnf-txt-postalcodepicker-postcode').type('22221')
    cy.get('#hnf-btn-postalcodepicker-use').click()
    cy.get('.hnf-location__container > .hnf-location__btn-wrapper--postalcode > .hnf-location__postalcode > .hnf-btn__inner > .hnf-btn__label')
      .should('contain', 22221)

    
    
  })
  
  it('Test 3', () => {
    //Visit website
    cy.visit('https://www.ikea.se')
    cy.wait(500)
    //Accept all cookies
    cy.get('#onetrust-accept-btn-handler').click()

    cy.get('.search-field__input').type('konstfull {ENTER}')
    cy.get('.plp-product-list__products > :nth-child(1) > .plp-product-list__fragment > :nth-child(1) > .pip-product-compact > .pip-product-compact__bottom-wrapper > .pip-product-compact__buttons-container > .pip-btn--icon-tertiary')
      .click()
    cy.wait(2000)
    cy.scrollTo('top', { easing: 'linear' })
    cy.get('.hnf-header__shopping-list-link > .hnf-btn > .hnf-btn__inner').click()
    cy.get('.ListHeader_listItemCount__3BgoT').should('contain', 1)





  })
    


})
