import { Locator, Page } from "@playwright/test";
export class AddOwnRecipePage {
  readonly page: Page;
  private readonly titleInput: Locator;
  private readonly descrInput: Locator;
  private readonly timeInput: Locator;
  private readonly caloriesInput: Locator;
  private readonly ingredientSelect: Locator;
  private readonly categorySelect: Locator;
  private readonly amountInput: Locator;
  private readonly instructionsInput: Locator;
  private readonly addIngredientBtn: Locator;
  private readonly publishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator("input[name='title']");
    this.descrInput = page.locator("textarea[name='description']");
    this.timeInput = page.locator("input[name='time']");
    this.caloriesInput = page.locator("input[name='calories']");
    this.ingredientSelect = page.getByRole("combobox").nth(1);
    this.categorySelect = page.locator('select[name="category"]');
    this.amountInput = page.locator("input[name='ingredientInput.measure']");
    this.instructionsInput = page.locator("textarea[name='instructions']");
    this.publishBtn = page.getByRole("button", { name: "Publish Recipe" });
    this.addIngredientBtn = page.getByRole("button", {
      name: "Add Ingredient",
    });
  }

  async createRecipe(recipeName: string) {
    await this.titleInput.fill(recipeName);
    await this.descrInput.fill("Test recipe description");

    await this.timeInput.fill("30");
    await this.caloriesInput.fill("500");

    await this.categorySelect.selectOption({ label: "Dessert" });
    await this.ingredientSelect.selectOption({ label: "Sriracha" });

    await this.amountInput.fill("200");
    await this.addIngredientBtn.click();
    await this.instructionsInput.fill(
      "Mix ingredients thoroughly and cook for 30 minutes.",
    );

    await this.publishBtn.click();
  }
}
