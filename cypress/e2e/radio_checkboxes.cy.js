describe("radio buttons", () => {

it("radio buttons check", () => {


    cy.visit("https://demos.telerik.com/aspnet-ajax/button/examples/radiosandcheckboxes/defaultcs.aspx")

    // checking visibilty 
    cy.get("button[id='ctl00_ContentPlaceholder1_RadButton16'] span[class='rbText']").should("be.visible")

    // checking check and assertion

    cy.get("button[id='ctl00_ContentPlaceholder1_RadButton16'] span[class='rbText']").check().should("be.checked")
})


it("check boxes", () => {


    cy.visit("https://demos.telerik.com/aspnet-ajax/button/examples/radiosandcheckboxes/defaultcs.aspx")

    // checking visibilty 
    cy.get("b]utton[id='ctl00_ContentPlaceholder1_RadButton17'] span[class='rbText'").should("be.visible")

    // checking check and assertion

    cy.get("b]utton[id='ctl00_ContentPlaceholder1_RadButton17'] span[class='rbText'").check().should("be.checked")
})




})