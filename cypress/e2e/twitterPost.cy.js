describe('Twitter marketing post', () => {

  let emailOrNumb = 'top.gamer1@yahoo.com';
  let password = 'Mic_Gar_14'
  let numb = '2402169897'

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