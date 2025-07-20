import { Page, Locator } from '@playwright/test';
import { Environment, getEnvironmentConfig } from '../config/environments';
import SearchComponent from './components/SearchComponent';

export abstract class BasePage {

    protected page: Page;
    protected env: Environment;

    constructor(page: Page) {
        this.page = page;
        this.env = (process.env.ENV || 'mx') as Environment;
        this.setupBasicAuth();
    }

    /**
     * Get current environment configuration
     */
    protected getConfig() {
        return getEnvironmentConfig(this.env);
    }

    /**
     * Setup Basic Authentication
     */
    private setupBasicAuth() {
        const config = this.getConfig();
        const { username, password } = config.auth.basic;

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
        await element.fill(text);
    }

    async waitForElement(selector: string) {
        const element = await this.getElement(selector);
        await element.waitFor({ state: 'visible' });
    }
}
