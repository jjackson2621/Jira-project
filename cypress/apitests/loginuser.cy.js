describe('Login to website', () => {
it('should log in a user', () => {
    cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/users/login', {
      email: 'jasjackson@gmail.com',
      password: 'Jasmine'
    }).then((response) => {
      expect(response.status).to.eq(200);
            const token = response.body.token;
      
    });
  });
});
