import { Locator, Page } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly addRecipeBtn: Locator;
  constructor(page: Page) {
    ((this.page = page),
      (this.addRecipeBtn = page.getByRole("link", { name: "Add recipe" })));
  }

  async clickAddRecipes() {
    await this.addRecipeBtn.click();
  }
}
