describe('MyTestSuite', ()=> {

    // Direct access
        it('FixturesDemoTest', ()=> {

            cy.visit('https://opensource-demo.orangehrmlive.com/');

            cy.fixture('orangehrm').then( (data)=>{

            
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('hav.text',data.expected);
            })

        })

    // Access through hook - for multipme it blocks
    let userdata;
     before( ()=> {
        cy.fixture("orangehrm").then((data)=>{
            userdatadata=data;
        })
     })

    it('FixturesDemoTest', ()=> {

            cy.visit('https://opensource-demo.orangehrmlive.com/');


            
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('hav.text',userdata.expected);
            

        })


})