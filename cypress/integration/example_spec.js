
describe('BlackBox', function () {
  it('.should() - follow the correct routes', function () {

    cy.visit('http://black-box-app.surge.sh/#/')
    cy.get('.router-link-exact-active').click()
    cy.url().should('contain', '/')
    cy.get('.btn-group > [href="#/Input"]').click()
    cy.url().should('contain', '/Input')
    cy.get('[href="#/ToDo"]').click()
    cy.url().should('contain', '/ToDo')
    cy.get('[href="#/Done"]').click()
    cy.url().should('contain', '/Done')
  })
})
