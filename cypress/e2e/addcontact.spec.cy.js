describe('Login Process', () => {
    it('should log in successfully', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type ('jasjackson@gmail.com')
    cy.get('#password').type ('Jasmine')        
    cy.get('#submit').click()
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Tracy')
    cy.get('#lastName').type('Wright')
    cy.get('#birthdate').type('1969-08-07')
    cy.get('#email').type('email@email.com')
    cy.get('#phone').type('5555555555')
    cy.get('#street1').type('123 Main St')
    cy.get('#city').type('Chicago')
    cy.get('#stateProvince').type('Illinois')
    cy.get('#postalCode').type('60008')
    cy.get('#country').type('United States')
    cy.get('#submit').click()


    
    })
    })