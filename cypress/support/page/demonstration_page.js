import { faker } from '@faker-js/faker';
import form from '../selectors/fillFormDemo.sel.cy'
faker.location = 'pt_BR'
class Demonstration {

    elements = {
    btnChat:() => cy.get('#tidio-chat-iframe')
    }

    fillFormDemonstration() {
        cy.new_user(faker.person.firstName(),
            faker.person.lastName(),
            faker.company.name(),
            faker.internet.email()
        );
        cy.func_some()
        cy.get(form.submit).click({ force: true })
    }

    blankFirstName() {
        cy.get(form.submit)
            .click({ force: true })
        cy.get('.headline').scrollIntoView({ easin: 'linear' })
        this.msgFirstNm()
    }

    blankLastName() {
        cy.get('.headline').scrollIntoView({ easin: 'linear' })

        cy.get(form.firstName).click({force: true}).type(faker.person.firstName())
        cy.get(form.submit)
            .click({ force: true })
        this.msgLastNm()
    }

    blankBusinessName() {
        cy.get('.headline').scrollIntoView({ easin: 'linear' })

        cy.get(form.firstName).click({force: true}).type(faker.person.firstName())
        cy.get(form.lastName).click({force: true}).type(faker.person.lastName())
        cy.get(form.submit)
            .click({ force: true })

        this.msgBusinessNm()
    }

    //Asserts
    validateFillForm() {
        cy.get('.animation-ctn')
            .should('be.visible')
    }

    msgFirstNm() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains(form.msgFirstNm)
        })
    }

    msgLastNm() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains(form.msgLaststNm)
        })
    }
    
    msgBusinessNm() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains(form.msgBusinessNm)
        })
    }
    
    validateFAQ(){
        cy.get(':nth-child(4) > .container')
        .should('is.visible')
    }
}

module.exports = new Demonstration();