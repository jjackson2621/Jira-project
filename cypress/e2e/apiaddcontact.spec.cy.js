describe('Login Process', () => {
    it('should log in successfully', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type ('jasjackson@gmail.com')
    cy.get('#password').type ('Jasmine')        
    cy.get('#submit').click()
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Billy')
    cy.get('#lastName').type('Bob')
    cy.get('#birthdate').type('1972-08-27')
    cy.get('#email').type('fakeemail@email.com')
    cy.get('#phone').type('5555555555')
    cy.get('#street1').type('123 Main blvd')
    cy.get('#city').type('Schaumburg')
    cy.get('#stateProvince').type('Illinois')
    cy.get('#postalCode').type('60008')
    cy.get('#country').type('United States')
    cy.get('#submit').click()



    
    })
    })