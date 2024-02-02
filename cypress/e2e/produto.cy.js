///<reference types='cypress'/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('mauricioteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
    })

    it('Deve adicionar um produto no carrinho', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'adicionados no seu carrinho')
        
    });

});