describe('Add User', () => {
    it('should add a new user', () => {
      cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/users', {
        firstName: 'Billy',
        lastName: 'Bob',
        email: 'email@email.com',
        password: 'Password'
      }).then((response) => {
        expect(response.status).to.eq(201);
        
      });
    });
  })