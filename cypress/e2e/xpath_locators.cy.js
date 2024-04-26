describe("xpath locators", () => {

    it("find no of products", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        // note /li is used to count no of products
        cy.xpath("//ul[@class='product_list grid row']/li").should("have.length",4)
    })

    it("chain xpath", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        // note /li is used to count no of products
        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should("have.length",4)
    })

    

})