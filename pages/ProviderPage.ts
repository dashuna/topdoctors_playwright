import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProviderPage extends BasePage {

    constructor(page: Page) {
       super(page);
    }

    // Selectores de la página de resultados de búsqueda
    private readonly resultsList = '.search-results__list';
    private readonly providerCard = '[data-id="provider"]';
    private readonly providerSchedule = '.provider-schedule';
    private readonly availableSlot = '.provider-schedule .slot-item:not(.dummy)'; 
    private readonly insuranceSelector = '.insurance-selector button:not(:disabled)';
    private readonly selfPayingOption = '.insurance-selector:has(li[value="on-site"])'

    private matchingProvider = this.page
        .locator(this.providerCard)
        .filter({ has: this.page.locator(this.selfPayingOption) })
        .filter({ has: this.page.locator(this.availableSlot) });

    async selectAvailableProvider() {
        await this.waitForElement(this.resultsList);
        const firstProvider = this.matchingProvider.first();
        const firstSlot = firstProvider.locator(this.availableSlot).first();
        await firstSlot.click();
    }
}