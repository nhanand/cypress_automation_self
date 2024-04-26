describe('my first spec', () => {
  it('passes', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // assertion
    cy.title().should('eq','OrangeHRM')
  })
})