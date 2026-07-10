const LoginPage = require('../pageobjects/login.page');

describe('Tela de Login', () => {

  beforeEach(async () => {
    await LoginPage.open();
  });

  it('deve exibir os campos de email, senha e o botão de login', async () => {
    await expect(LoginPage.inputEmail).toBeDisplayed();
    await expect(LoginPage.inputPassword).toBeDisplayed();
    await expect(LoginPage.btnLogin).toBeDisplayed();
  });

  it('deve permitir digitar no campo de email', async () => {
    await LoginPage.inputEmail.setValue('teste@qa.com');
    const texto = await LoginPage.inputEmail.getText();
    await expect(texto).toContain('teste@qa.com');
  });

  it('deve permitir digitar no campo de senha (mascarado por segurança)', async () => {
    await LoginPage.inputPassword.setValue('senha123');
    const texto = await LoginPage.inputPassword.getText();
    // O campo de senha deve mostrar caracteres mascarados, não o texto real
    await expect(texto).not.toContain('senha123');
    await expect(texto.length).toBeGreaterThan(0);
  });

  it('deve realizar login preenchendo email e senha', async () => {
    await LoginPage.login('teste@qa.com', 'senha123');
  });

});