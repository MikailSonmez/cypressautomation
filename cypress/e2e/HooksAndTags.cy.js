// before
// after
// beforeEach
// afterEach

describe('MyTestSuite', ()=> {

    before(()=>{
        cy.log("*********   Launch app *********")
    })

    after('search', ()=> {

        cy.log("*********   advanced searching *********")
    })

    beforeEach('advanced search', ()=> {

        cy.log("*********   Listing products *********")
    })

    afterEach('search', ()=> {

        cy.log("*********   Logout *********")
    })

    it('search', ()=> {

        cy.log("*********   searching *********")
    })
})