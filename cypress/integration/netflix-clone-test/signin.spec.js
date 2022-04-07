/// <reference types="cypress" />
describe('sign in test suite', () => {
  // WRITE YOUR CYPRESS TESTS CASES HERE

  before(() => {
    cy.fixture('profile').then(function (data) {
      this.data = data;
      console.log(this.data);
    });
  });

  it('Should log into the app using the given credentials', () => {
    cy.visit('https://netflix-clone-8e5f4.web.app');
    cy.get('.header__ButtonLink-t8lkk2-11').click();
    cy.get('[placeholder="Email address"]').type('test@kolomolo.com');
    cy.get('[type="password"]').type('kolomolo123+');
    cy.get('[data-testid="sign-in"]').click();
    cy.get('.profiles__Picture-dt3hl3-4').click();
  });

  it('Should find the movie "Titanic" and play it', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .dHldHL').click();
    cy.get(
      ':nth-child(5) > .card__Entities-sc-1tn30zk-12 > :nth-child(4) > .card__Image-sc-1tn30zk-14'
    ).click();
    cy.get(
      ':nth-child(5) > .card__Entities-sc-1tn30zk-12 > :nth-child(4) > .card__Image-sc-1tn30zk-14'
    ).click();
  });

  // it('Should log out from the site', () => {
  //   cy.get('.header__Profile-t8lkk2-9 > :nth-child(1)').click()

  // })
});
