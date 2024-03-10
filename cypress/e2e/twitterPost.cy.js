import Twitter from "../PageObjects/TwitterPOM"

const X = new Twitter()

describe('Twitter marketing post', () => {

  before(() => {
    it('Login should handle two-factor authentication', () => {
      cy.visit('https://twitter.com/')
      cy.fixture('credentials').then((data) => {
        X.clickSignIn()
        X.setUserName(data.emailOrNumb)
        X.clickNext()
        if (cy.contains('There was unusual login activity on your account. To help keep your account safe, please enter your phone number or username to verify it’s you.')) {
          X.setNumber(data.numb)
          X.clickNext()
        } else {
          //do nothing
        }
        X.setPassword(data.password)
        X.clickLogin()
        X.verifyLogin
      })
    })
  })



  after(() => {
    it('Logout of Twitter', () => {
      X.clickAccounts()
      X.clickLogOut()
    })
  })

  it('Twitter marketing post creation flow', ()=> {
    X.TweetBody('New media!! www.{enter}')

})

})