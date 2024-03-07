describe('Twitter marketing post', () => {

  let emailOrNumb = '@yahoo.com';
  let password = 'password'
  let numb = '1234567890'

  it('passes', () => {
      cy.visit('https://twitter.com/')
      cy.contains('Sign in').click()
      cy.get('input[name="text"]').type(emailOrNumb)
      cy.contains('Next').click()
    if (cy.contains('There was unusual login activity on your account. To help keep your account safe, please enter your phone number or username to verify it’s you.')) {
      cy.get('input[name="text"]').type(numb)
      cy.contains('Next').click()
    } else {
      //do nothing
    }
      cy.get('input[name="password"]').type(password)
      cy.contains('Log in').click()
  })
})