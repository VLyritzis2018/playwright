import { test } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper';
import { InventoryPage } from '../pages/InventoryPage/InventoryPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Users } from '../test-data/users';

test.describe('Login', () => {
    test('LoginStandardUser @TC_001', async ({ page }) => {
        const loginHelper = new LoginHelper(page);
        const inventoryPage = new InventoryPage(page);

        await loginHelper.login(Users.STANDARD_USER.username, Users.STANDARD_USER.password);
        await inventoryPage.verifyInventoryPageIsDisplayed();
    });

    test('LoginInvalidUser @login @regression @TC_002', async ({ page }) => {
        const loginHelper = new LoginHelper(page);
        const loginPage = new LoginPage(page);

        await loginHelper.login(
            Users.INVALID_USER.username,
            Users.INVALID_USER.password
        );

        await loginPage.verifyErrorMessage(
            'Epic sadface: Username and password do not match any user in this service'
        );
    });
});