describe(' Delete Contact API Tests', () => {
it('should delete a contact', () => {
    const contactId = 'Yvonne Johnson';
    cy.request({
      method: 'DELETE',
      url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${YvonneJohnson}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      
    });
  });
});