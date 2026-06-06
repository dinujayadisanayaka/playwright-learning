import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { validUsers } from '../../testData/loginCredentials';

let loginPage;
let inventoryPage;
test.beforeEach(async ({page})=>{
     test.loginPage = new LoginPage(page);
     test.inventoryPage = new InventoryPage(page);
     await test.loginPage.navigateToWeb();
});

validUsers.forEach(testUser => {
    test(`Login with ${testUser.username}`, async ({ page }) => {
        
        await test.loginPage.login(testUser);
        await test.inventoryPage.verifyPageLoaded();
    });
});