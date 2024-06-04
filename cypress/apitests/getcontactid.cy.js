describe('Get Contact ID', () => {
it('should retrieve contacts', () => {
    cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/users', {
      email: 'jasjackson@gmail.com',
      password: 'Jasmine'
    const token = 'response.body.token';
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.greaterThan(0);
    
    });
  });
});
});