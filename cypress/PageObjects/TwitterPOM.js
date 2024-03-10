class TwitterPOM{

    txtUsername='input[name="text"]'
    txtPassword='input[name="password"]'
    txtNumber='input[name="text"]'
    btnSignIn='Sign in'
    btnNext='Next'
    btnLogin='Log in'
    btnAccounts='header[role="banner"] div:nth-child(4) div:nth-child(1)'
    btnLogOut='body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)'
    txtTweetBody='div[data-block="true"] div'

    setUserName(username)
    {
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    setNumber(number)
    {
        cy.get(this.txtNumber).type(number)
    }

    clickSignIn()
    {
        cy.contains(this.btnSignIn).click()
    }

    clickNext()
    {
        cy.contains(this.btnNext).click()
    }

    clickLogin()
    {
        cy.contains(this.btnLogin).click()
    }

    clickAccounts()
    {
        cy.get(this.btnAccounts)
        .click()
    }

    clickLogOut()
    {
        cy.get(this.btnLogOut)
        .click() 
    }

    verifyLogin()
    {
        cy.wait(2500)
        cy.contains(this.btnLogin).should('not.be.visible')
    }

    TweetBody(body)
    {
        cy.get(txtTweetBody).type(body)
    }

}

export default TwitterPOM