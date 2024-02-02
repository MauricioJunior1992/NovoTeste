/// <reference types = 'cypress'/>

describe('Teste de Arquivos de Dados', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve entrar em produtos via dados', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'adicionados no seu carrinho')
    });
    
});