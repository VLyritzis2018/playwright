import { test } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper';
import { InventoryPage } from '../pages/InventoryPage/InventoryPage';

test.describe('Login', () => {
  test('LoginStandardUser @TC_001', async ({ page }) => {
    const loginHelper = new LoginHelper(page);
    const inventoryPage = new InventoryPage(page);

    await loginHelper.loginAsStandardUser();
    await inventoryPage.verifyInventoryPageIsDisplayed();
  });
});