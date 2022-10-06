

describe('My First Test', () => {

  it('verify title-positive test', function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })

  it('verify title-Negative test', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM123')
  })

  it('test3', () => {

    // steps

  })

  it('test4', () => {

    // steps

  })

})


describe('My Second Test', function() {
  it('Does not do much!', function(){
    expect(true).to.equal(true)
  })
})