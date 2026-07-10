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
    await expect(texto).not.toContain('senha123');
    await expect(texto.length).toBeGreaterThan(0);
  });

  it('deve exibir mensagem de erro ao tentar logar sem preencher os campos', async () => {
    await LoginPage.btnLogin.click();
    await browser.pause(1500);

    const alertMessage = await $('android=new UiSelector().resourceId("android:id/message")');
    const isAlertShown = await alertMessage.isExisting();

    console.log('ALERTA APARECEU?', isAlertShown);

    if (isAlertShown) {
      const texto = await alertMessage.getText();
      console.log('TEXTO DO ALERTA:', texto);

      // Fecha o alerta usando o botão padrão do Android (OK)
      const okButton = await $('android=new UiSelector().resourceId("android:id/button1")');
      if (await okButton.isExisting()) {
        await okButton.click();
      }
    }

    await expect(isAlertShown).toBe(true);
  });

  it('deve realizar login preenchendo email e senha', async () => {
    await LoginPage.login('teste@qa.com', 'senha123');
    await browser.pause(1500);

    // Fecha o alerta de sucesso, se aparecer, usando o botão padrão
    const okButton = await $('android=new UiSelector().resourceId("android:id/button1")');
    if (await okButton.isExisting()) {
      await okButton.click();
    }
  });

});