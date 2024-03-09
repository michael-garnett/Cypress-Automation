describe('Twitter marketing post', () => {

  before(() => {
    it('Login should handle two-factor authentication', () => {
      cy.visit('https://twitter.com/')
      cy.fixture('credentials').then((data) => {
        cy.contains('Sign in').click()
        cy.get('input[name="text"]').type(data.emailOrNumb)
        cy.contains('Next').click()
        if (cy.contains('There was unusual login activity on your account. To help keep your account safe, please enter your phone number or username to verify it’s you.')) {
          cy.get('input[name="text"]').type(data.numb)
          cy.contains('Next').click()
        } else {
          //do nothing
        }
        cy.get('input[name="password"]').type(data.password)
        cy.contains('Log in').click()
      })
    })
  })



  after(() => {
    it('Logout of Twitter', () => {
      cy.get('header[role="banner"] div:nth-child(4) div:nth-child(1)')
        .click()
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
        .click()
    })
  })

  it('Twitter marketing post creation flow', ()=> {
    cy.get('div[data-block="true"] div').type('New media www.{enter}')

})

})