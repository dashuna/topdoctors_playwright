import { Page, Locator } from '@playwright/test';
import environment from '../config/environments';

export abstract class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
        this.setupBasicAuth();
    }

    private setupBasicAuth() {
        const { username, password } = environment.auth.basic;
        // Configurar basic auth para todas las peticiones
        this.page.context().setHTTPCredentials({
            username,
            password
        });
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getElement(selector: string): Promise<Locator> {
        return this.page.locator(selector);
    }
  
    async click(selector: string) {
        const element = await this.getElement(selector);
        await element.click();
    }
  
    async fill(selector: string, text: string) {
        const element = await this.getElement(selector);
        this.waitForElement(selector);
        await element.fill(text);
    }

    async waitForElement(selector: string) {
        const element = await this.getElement(selector);
        await element.waitFor({ state: 'visible' });
    }
}
