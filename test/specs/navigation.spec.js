describe('Navegação entre telas', () => {

  it('deve navegar para a tela de Forms', async () => {
    const tabForms = await $('//android.widget.TextView[@text="Forms"]');
    await tabForms.click();
    const formsScreen = await $('//android.widget.TextView[@text="Forms"]');
    await expect(formsScreen).toBeDisplayed();
  });

  it('deve navegar para a tela de Swipe', async () => {
    const tabSwipe = await $('//android.widget.TextView[@text="Swipe"]');
    await tabSwipe.click();
    await expect(tabSwipe).toBeDisplayed();
  });

  it('deve navegar de volta para a tela Home', async () => {
    const tabHome = await $('//android.widget.TextView[@text="Home"]');
    await tabHome.click();
    await expect(tabHome).toBeDisplayed();
  });

});