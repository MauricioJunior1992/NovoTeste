///<reference types='cypress'/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    })
    
    it('Deve dar erro ao cadastrar', () => {
        cy.get('#reg_email').type('mauricioteste1992@teste.com')
        cy.get('#reg_password').type('mauricioteste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Uma conta já está registrada com seu endereço de e-mail') 
    });

    it('Deve fazer cadastro com sucesso e alterar dados pessoais', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });

    it('Deve fazer cadastro com sucesso e alterar dados pessoais - Usando variáveis', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome)
        var senha = faker.internet.password()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#account_display_name').clear().type(nome+' '+sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });
});