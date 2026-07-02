import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export class LoginHelper {
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginPage.navigate();
    await this.loginPage.verifyLoginPageIsDisplayed();
    await this.loginPage.login(username, password);
  }
}