class LoginPage {

  get inputEmail() {
    return $('~input-email');
  }

  get inputPassword() {
    return $('~input-password');
  }

  get btnLogin() {
    return $('~button-LOGIN');
  }

  get tabLoginBottomBar() {
    return $('//android.widget.TextView[@text="Login"]');
  }

  async open() {
    await this.tabLoginBottomBar.click();
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

}

module.exports = new LoginPage();