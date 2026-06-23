import { Locator, Page } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly addRecipeBtn: Locator;
  readonly addToFavBtn: Locator;
  readonly inputField: Locator;
  constructor(page: Page) {
    ((this.page = page),
      (this.addRecipeBtn = page.getByRole("link", { name: "Add recipe" })));
    this.addToFavBtn = page.locator('button[class*="btnIcon"]');
    this.inputField = page.getByPlaceholder("Search recipes");
  }

  async clickAddRecipes() {
    await this.addRecipeBtn.click();
  }

  async open() {
    await this.page.goto("https://tasteorama-ten.vercel.app/");
  }

  async addToFavAndRemoveFromFav(recipeName: string) {
    const card = this.page
      .locator('li[class*="item"]')
      .filter({
        has: this.page.locator("h3", { hasText: recipeName }),
      })
      .first();

    const favButton = card.locator('button[class*="btnIcon"]');

    await favButton.click();
    await favButton.click();
  }

  async searchForRecipe(recipeName: string) {
    await this.inputField.fill(recipeName);
  }
  getRecipeCardByName(recipeName: string) {
    return this.page.getByRole("listitem").filter({
      has: this.page.getByRole("heading", { name: recipeName }),
    });
  }
}
