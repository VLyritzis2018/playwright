import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Users } from '../test-data/users';

export class LoginHelper {
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async loginAsStandardUser(): Promise<void> {
    await this.loginPage.navigate();
    await this.loginPage.verifyLoginPageIsDisplayed();
    await this.loginPage.login(
      Users.STANDARD_USER.username,
      Users.STANDARD_USER.password
    );
  }
}