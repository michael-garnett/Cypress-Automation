describe('Twitter marketing post', () => {
  it('passes', () => {
    cy.visit('https://twitter.com/')
    cy.contains('Sign in').click()
    cy.get('input[name="text"]').type(usernameOrNumb)
    cy.contains('Next').click()
    cy.get('input[name="password"]').type(Password)
  })
})