import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import SearchComponent from "./components/SearchComponent";

export default class HomePage extends BasePage {
  private search: SearchComponent;

  constructor(page: Page) {
    super(page)
    this.search = new SearchComponent(page);
  }

  async searchDoctors(specialty: string, location: string) {
    await this.search.searchDoctors(specialty, location);
  }
}
