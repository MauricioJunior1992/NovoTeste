/// <reference types = 'cypress'/>
import produtosPage from "../support/page_objects/produtos.page";

describe('Teste de Arquivos de Dados', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
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

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
        
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it
    
});