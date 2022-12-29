describe('e2e sanity', () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.getByCy('greeting').should('be.visible')
    cy.task('log', 'e2e sanity passed')
  })
})
