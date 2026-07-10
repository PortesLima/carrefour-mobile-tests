class FormsPage {

  get tabForms() {
    return $('//android.widget.TextView[@text="Forms"]');
  }

  async open() {
    await this.tabForms.click();
  }

}

module.exports = new FormsPage();