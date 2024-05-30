describe('Delete Contact', () => {
    it('it should delete contact', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
      cy.get('#delete').click()
    })
  })
