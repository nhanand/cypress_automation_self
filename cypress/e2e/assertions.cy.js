/// <reference types="cypress"/>
describe("assertions", () => {

    it("implicit assertions", ()=> {
     
        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain','orangehrm')

        // or

        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','orangehrm')

        // or

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','orangehrm')

        cy.get(".orangehrm-login-branding > img").should('be.visible')
        .and('exist')
         
        // checking no of links 

        cy.xpath("//a").should('have.length','5')  
        
        // for login user name and password

        cy.get("input[placeholder='Username']").type("Admin")  //user name 
        cy.get("input[placeholder='Username']").should('have.value','Admin') // validation check

        cy.get("input[placeholder='Password']").type("admin123") // password
        cy.get("input[placeholder='Password']").should("have.value", "admin123")  //password validation

        cy.get("button[type='submit']").click()  // button click


    })

    it("explicit assertions", ()=> {
     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")  //user name 
        cy.get("input[placeholder='Password']").type("admin123") // password
        cy.get("button[type='submit']").click()  // button click

        let expName="Giovanna Kikuchi";

        cy.get(".oxd-userdropdown-name").then(  (x) => {

                  let actName=x.text()

       

                  expect(actName).to.equal(expName)   // explicit assertion applied in BDD approach

                  assert.equal(actName,expName)      //  explicit assertion applied in TDD approach



        })                    // storing cy.get(".oxd-userdropdown-name") into x

    })
})