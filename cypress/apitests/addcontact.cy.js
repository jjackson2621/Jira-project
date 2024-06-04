describe('Contact API Tests', () => {
    it('should add a new contact', () => {
      cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/contacts', {
        firstName: 'Bob',
        lastName: 'Wright',
        email: 'billy.bob@email.com',
        DateofBirth:'1987-08-02',
        StreetAddress1:'123 Main St',
        City: 'Chicago',
        StateorProvince: 'IL',
        PostalCode:'60008',
        Country: 'United States'
      }).then((response) => {
        expect(response.status).to.eq(201);
        // Add more assertions as needed
      });
    });
});