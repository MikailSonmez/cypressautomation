describe('MyTestSuite', ()=> {

    // Direct access
        it('DataDrivenTest', ()=> {

            cy.fixture('orangehrm').then( (data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


            data.foreach((userdata)=>{
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();
            
            if(userdata.username=='Admin' && userdata.password=="admin123")
            {
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('hav.text',userdata.expected);

                cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                cy.get('').click();


            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                .should('hav.text',userdata.expected);
            }

            
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
})
