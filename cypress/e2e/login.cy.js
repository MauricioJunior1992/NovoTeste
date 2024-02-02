///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    });
    
    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('mauricioteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
    });

    it('Deve dar erro de senha inválida', () => {
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('testemauricio')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','está incorreta')
    });

    it('Deve dar erro de usuário inválido', () => {
        cy.get('#username').type('mauricioteste1992.com')
        cy.get('#password').type('testemauricio')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','não está registrado neste site')
    });

    it('Deve dar erro de email inválido', () => {
        cy.get('#username').type('mauricioteste1992@gmail.com')
        cy.get('#password').type('testemauricio')
        cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
        
    });

});