import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;

  private readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
  }

  async verifyInventoryPageIsDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.pageTitle).toHaveText('Products');
  }
}