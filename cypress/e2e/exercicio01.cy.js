//EXERCICIO 01

describe('Login com sucesso', () => {
  it('Deve fazer um login com usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('Dina20')
    cy.get("[name='password']").type('s3cret')
    cy.get("[type='submit']").click()
  })
})

describe('Credenciais inválidas', () => {
  it('Deve exbir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})

describe('Registro de um novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('Sheldon')
    cy.get("[name='lastName']").type('Cooper')
    cy.get("[name='username']").type('sheldon11')
    cy.get("[name='password']").type('test')
    cy.get("[name='confirmPassword']").type('test')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiContainer-maxWidthXs')
  })
})

describe('Tentar registrar um usuário com informações incompletas', () => {
  it('Deve exibir uma mensagem de erro ao tentar registrar um novo usuário', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.get("[name='firstName']").type('test')
    cy.get("[name='lastName']").type('12345')
    cy.get("[name='username']").type('a')
    cy.get("[name='password']").type('1e')
    cy.get("[name='confirmPassword']").type('1e')
    cy.get("#password-helper-text")
  })
})