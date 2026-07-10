class NavigationPage {

  get tabHome() {
    return $('//android.widget.TextView[@text="Home"]');
  }

  get tabForms() {
    return $('//android.widget.TextView[@text="Forms"]');
  }

  get tabSwipe() {
    return $('//android.widget.TextView[@text="Swipe"]');
  }

  async goToHome() {
    await this.tabHome.click();
  }

  async goToForms() {
    await this.tabForms.click();
  }

  async goToSwipe() {
    await this.tabSwipe.click();
  }

}

module.exports = new NavigationPage();