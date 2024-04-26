
describe('learning css locators', () => {

  it('css locators', () => {

    cy.visit("http://www.automationpractice.pl/index.php")
    cy.get("#search_query_top").type("T-shirts")
    cy.get("[name='submit_search']").click  
    // assertions
    // cy.get('.lighter').contains("T-shirts")           

 })

})