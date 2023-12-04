import form from "./selectors/fillFormDemo.sel.cy";

Cypress.Commands.add('func_some', () => {
    cy.get('#numb1')
        .then(($value1) => {
            cy.log($value1)
            const n1 = parseInt($value1.text())
            cy.get('#numb2')
                .then(($value2) => {
                    const n2 = parseInt($value2.text())
                    const som = n1 + n2
                    cy.get(form.result).type(som, { force: true })
                })
        })
})

Cypress.Commands.add('new_user', (firstName, lastName, businessName, email) => {
    cy.get(form.firstName).click({ force: true }).type(firstName)
    cy.get(form.lastName).click({ force: true }).type(lastName)
    cy.get(form.businessName).click({ force: true }).type(businessName)
    cy.get(form.email).click({ force: true }).type(email)
    cy.get('.headline').scrollIntoView({ easin: 'linear' })
})