//EXERCICIO 02

describe.skip('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("[name='username']").type('Dina20')
      cy.get("[name='password']").type('s3cret')
      cy.get("[type='submit']").click()
      cy.get('.MuiToolbar-root')
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get("[src='https://avatars.dicebear.com/api/human/uBmeaz5pX.svg']").click()
      cy.get("[placeholder='Amount']").type('100')
      cy.get("[placeholder='Add a note']").type('Thanks')
      cy.get("[data-test='transaction-create-submit-payment']").click()
      cy.get('body').should('contain', 'Transaction Submitted')
    })
  })

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("[name='username']").type('Dina20')
      cy.get("[name='password']").type('s3cret')
      cy.get("[type='submit']").click()
      cy.get('.MuiToolbar-root')
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get("[src='https://avatars.dicebear.com/api/human/uBmeaz5pX.svg']").click()
      cy.get("[placeholder='Amount']").type('5000')
      cy.get("[placeholder='Add a note']").type('Thanks')
      cy.get("[data-test='transaction-create-submit-payment']").click()
      cy.get("[role='alert']")
      cy.get('body').should('contain', 'Insufficient funds')
    })
  })
  