//EXERCICIO 03

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir um histórico de transações de um usuário corretamente', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("[name='username']").type('Heath93')
      cy.get("[name='password']").type('s3cret')
      cy.get("[type='submit']").click()
      cy.get('.MuiToolbar-root')
      cy.get('.MuiGrid-spacing-xs-3 > :nth-child(1)')
    })
  })

  describe('Visualizar histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("[name='username']").type('Heath93')
      cy.get("[name='password']").type('s3cret')
      cy.get("[type='submit']").click()
      cy.get('.MuiToolbar-root')
      cy.get('[data-test="transaction-list-filter-date-range-button"]').click({force: true})
      cy.get("[data-date='2024-05-14']").click({force: true}).click({force: true})
      cy.get('body').should('contain', 'No Transactions')
    })
  })