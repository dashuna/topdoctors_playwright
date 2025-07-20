import { expect, Page } from '@playwright/test';

export default class SearchComponent {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectores del componente de búsqueda
    private readonly doctorTab = '.tab-doctor';
    private readonly specialtyInput = '#input-specialty input';
    private readonly specialtySearchResults = '#suggestion-specialty';
    private readonly mostPopularList = 'ul.result__items:first-of-type';
    
    private readonly locationInput = '#input-location input';
    private readonly locationSearchResults = '#suggestion-location';
    private readonly searchButton = 'button[type="submit"]'; // button[type="submit"]:has(.td-icon-filled-search)


    /**
     * Realizar una búsqueda en la selección de especialidad
     * @param specialty término de especialidad a buscar
     */
    public async searchSpecialty(specialty: string) {
        await this.page.locator('[title="Aceptar todo"]').click();
        const specialtyInput = this.page.locator(this.specialtyInput);
        await specialtyInput.click();
        //await expect(input).toBeEnabled({ timeout: 5000 });
        await specialtyInput.fill(specialty);
        await this.page.locator(this.specialtySearchResults).waitFor({ state: 'visible' });
        const firstSuggestion = this.page.locator(`${this.mostPopularList} li`).first();
        await firstSuggestion.click();
      
    }

    /**
     * Realizar una búsqueda en la selección de ubicación
     * @param location término de ubicación a buscar
     */
    public async searchLocation(location: string) {
        const locationInput = this.page.locator(this.locationInput)
        await locationInput.fill(location);
        await this.page.locator(this.locationSearchResults).waitFor({ state: 'visible' });
        const firstSuggestion = this.page.locator(`${this.mostPopularList} li`).first();
        await firstSuggestion.click();
    }
    
    /**
     * Realizar una búsqueda con especialidad y ubicación
     */
    public async searchDoctors(specialty: string, location: string) {
        // await this.page.getElement(this.doctorTab).click();
        await this.searchSpecialty(specialty);
        // Esperar a que la búsqueda de especialidad se complete
        await this.searchLocation(location);
        await this.page.locator(this.searchButton).click();
        
        // Esperar a que la búsqueda se complete
        await this.page.waitForNavigation();
    }
}
