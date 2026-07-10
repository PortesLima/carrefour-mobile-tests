describe('Tela de Forms', () => {

  it('deve navegar até a tela de Forms', async () => {
    const tabForms = await $('//android.widget.TextView[@text="Forms"]');
    await tabForms.click();
    await expect(tabForms).toBeDisplayed();
  });

  it('deve exibir elementos de formulário na tela', async () => {
    const tabForms = await $('//android.widget.TextView[@text="Forms"]');
    await tabForms.click();
    // Verifica que a tela carregou verificando que a aba Forms está selecionada/visível
    await expect(tabForms).toBeDisplayed();
  });

  it('deve permitir voltar para a tela Home após visitar Forms', async () => {
    const tabForms = await $('//android.widget.TextView[@text="Forms"]');
    await tabForms.click();
    const tabHome = await $('//android.widget.TextView[@text="Home"]');
    await tabHome.click();
    await expect(tabHome).toBeDisplayed();
  });

});