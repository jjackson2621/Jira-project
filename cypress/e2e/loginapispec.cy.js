describe('Get the URL', () => {
    it('Go to the website', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type ('jasjackson@gmail.com')
    cy.get('#password').type ('Jasmine')        
    cy.get('#submit').click()
    
    
    
    
    })
    })