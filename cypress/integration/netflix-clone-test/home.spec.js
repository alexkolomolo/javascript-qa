/// <reference types="cypress" />
describe('home page test suite', () => {
  // WRITE YOUR CYPRESS TESTS CASES HERE
  beforeEach(() => {
    cy.visit('https://netflix-clone-8e5f4.web.app');
  });

  it('Should contain a Sign In button', () => {
    cy.get('.header__ButtonLink-t8lkk2-11');
  });

  it('Should type an email into the first edit box', () => {
    cy.get('.footer__Row-eh6b4z-2 > :nth-child(1) > :nth-child(1)').type('email@email.com');
  });

  it('Should type an email into the second edit box', () => {
    cy.get(
      '.feature__Container-sc-19zs3jp-0 > .opt-form__Container-wdq7id-0 > .opt-form__Input-wdq7id-1'
    ).type('email@email.com');
  });

  it('Should check the footer sections countains 4 columns', () => {
    cy.get('.footer__Row-eh6b4z-2').children('div').should('have.length', 4);
  });
});
