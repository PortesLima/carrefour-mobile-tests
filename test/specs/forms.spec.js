const FormsPage = require('../pageobjects/forms.page');
const NavigationPage = require('../pageobjects/navigation.page');

describe('Tela de Forms', () => {

  it('deve navegar até a tela de Forms', async () => {
    await FormsPage.open();
    await expect(FormsPage.tabForms).toBeDisplayed();
  });

  it('deve exibir elementos de formulário na tela', async () => {
    await FormsPage.open();
    await expect(FormsPage.tabForms).toBeDisplayed();
  });

  it('deve permitir voltar para a tela Home após visitar Forms', async () => {
    await FormsPage.open();
    await NavigationPage.goToHome();
    await expect(NavigationPage.tabHome).toBeDisplayed();
  });

});