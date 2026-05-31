import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';


const credentials = {
  username: 'standard_user',
  password: 'secret_sauce'
};

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigateToWeb();
  await loginPage.login(credentials);
  await inventoryPage.verifyPageLoaded();
  await inventoryPage.logout();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

