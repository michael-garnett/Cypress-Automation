
describe('Handle tabs',(()=>{


    it.skip('Appracoh1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');  // parent link
        cy.get('.example >a').invoke('removeAttr','target').click();  // clicking on link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        //operations
        cy.go('back');  // back to parent link

    })

it('Approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');  // parent link
        cy.get('.example >a').then((e)=>{   //JQuery
                let url=e.prop('href');
                cy.visit(url);
        }) 
        //domain has to match
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        //operations
        cy.go('back');  // back to parent link
    })

}))