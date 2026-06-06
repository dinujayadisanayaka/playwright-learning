export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameField = '[data-test="username"]',
        this.passwordField = '[data-test="password"]',
        this.loginBtn = '[data-test="login-button"]'
    }

    async navigateToWeb() {
        await this.page.goto('/');
    }

    async login (credentials){
        await this.page.locator(this.usernameField).fill(credentials.username);
        await this.page.locator(this.passwordField).fill(credentials.password);
        await this.page.locator(this.loginBtn).click();
    }
}