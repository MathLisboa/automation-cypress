import Demonstration from '../../support/page/demonstration_page'

describe('Form Demonstration', () => {
    it('Fill complete form and click submit button', () => {
        cy.visit('/');
        Demonstration.fillFormDemonstration();
        Demonstration.validateFillForm()
    });
    it('Blank first name', () => {
        cy.visit('/');
        Demonstration.blankFirstName()
    });
    it('Blank last name', () => {
        cy.visit('/');
        Demonstration.blankLastName()
    });
    it('Blank business name', () => {
        cy.visit('/');
        Demonstration.blankBusinessName()
    });
    it('Validate that FAQ is visible to users', () => {
        cy.visit('/');
        Demonstration.validateFAQ()
    });
    it('Validate virtual assistant', () => {
        cy.visit('/');
        Demonstration.virtualAssistant()
    });
});