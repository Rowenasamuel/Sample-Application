describe('TodoMVC', function() {

    it('Loads the TodoMVC app', function() {
       cy.visit('http://localhost:8080/')
       cy.percySnapshot()
     })

  })







