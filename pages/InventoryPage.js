import { expect } from "@playwright/test";

export class InventoryPage {
    constructor(page){
        this.page = page;
        
        this.inventoryItems = '.inventory_item';
        this.productsTitle = 'Products';
    }

    async verifyPageLoaded(){
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.page.getByText(this.productsTitle)).toBeVisible();
        await expect(this.page.locator(this.inventoryItems)).toHaveCount(6);
    }

    async logout(){
        await this.page.getByRole('button',{name:'Open Menu'}).click();
        await this.page.getByRole('link',{name:'Logout'}).click();
    }
}