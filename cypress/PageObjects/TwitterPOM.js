class TwitterPOM{

    setUserName(username)
    {
        cy.get('input[name="text"]').type(username)
    }

    setPassword(password)
    {
        cy.get('input[name="password"]').type(password)
    }

    setNumber(number)
    {
        cy.get('input[name="text"]').type(number)
    }

    clickSignIn()
    {
        cy.contains('Sign in').click()
    }

    clickNext()
    {
        cy.contains('Next').click()
    }

    clickLogin()
    {
        cy.contains('Log in').click()
    }

    clickAccounts()
    {
        cy.get('header[role="banner"] div:nth-child(4) div:nth-child(1)')
        .click()
    }

    clickLogOut()
    {
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
        .click() 
    }

    verifyLogin()
    {
        cy.wait(2500)
        cy.contains('Log in').should('not.be.visible')
    }

    TweetBody(body)
    {
        cy.get('div[data-block="true"] div').type(body)
    }

}

export default TwitterPOM