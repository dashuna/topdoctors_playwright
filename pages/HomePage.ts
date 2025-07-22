import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import SearchComponent from "./components/SearchComponent";

export default class HomePage extends BasePage {
  private search: SearchComponent;

  constructor(page: Page) {
    super(page);
    this.search = new SearchComponent(page);
  }
  private readonly allowAllCookiebot = '#CybotCookiebotDialog #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll';
  private readonly allowAllCookies = '[title="Aceptar todo"]';
  private readonly rejectCookiesButton = 'button.reject-button';

  async acceptAllCookiebot() {
    await this.click(this.allowAllCookiebot);
  }

  async acceptAllCookies() {
    await this.click(this.allowAllCookies);
  }

  async rejectCookies() {
    await this.click(this.rejectCookiesButton);
  }

  async searchDoctors(specialty: string, location: string) {
    await this.acceptAllCookiebot();
    await this.rejectCookies();
    await this.search.searchDoctors(specialty, location);
  }
}
