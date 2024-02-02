///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer o login com sucesso - Usando Dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
    })

    it('Deve fazer o login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , { log:false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
        })
        
    });

});