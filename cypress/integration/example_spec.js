describe('BlackBox', function () {
  it('.should() - assert that the app works correctly', function () {
    
    //landing page
    cy.visit('http://black-box-app.surge.sh/#/')

    //check navigation
    cy.get('[href="#/"]').click()
    cy.url().should('contain', '/')
    cy.get('.btn-group > [href="#/Input"]').click()
    cy.url().should('contain', '/Input')
    cy.get('[href="#/ToDo"]').click()
    cy.url().should('contain', '/ToDo')
    cy.get('[href="#/Done"]').click()
    cy.url().should('contain', '/Done')
  })
})