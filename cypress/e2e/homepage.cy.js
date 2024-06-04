describe('Go to homepage', () => {

    it('open the webiste', () => {
  
      cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });