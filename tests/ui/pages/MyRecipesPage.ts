import { Locator, Page } from "@playwright/test";

export class MyRecipesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickLearnMore(recipeName: string) {
    const recipeCard = this.page
      .locator("li")
      .filter({
        has: this.page.locator(`img[alt="${recipeName}"]`),
      })
      .first();
    await recipeCard.getByRole("link", { name: "Learn more" }).click();
  }
}
