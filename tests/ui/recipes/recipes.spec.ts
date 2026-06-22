import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AddOwnRecipePage } from "../pages/AddOwnRecipePage";
import { MyRecipesPage } from "../pages/MyRecipesPage";

test("Successfully creates a recipe and opens its details page", async ({
  page,
}) => {
  const recipeName = `Test Recipe ${Date.now()}`;
  const login = new LoginPage(page);
  await login.open();
  await login.login("test7251@gmail.com", "12345678");
  const homePage = new HomePage(page);
  await expect(homePage.addRecipeBtn).toBeVisible();
  await homePage.clickAddRecipes();
  const addMyRecipe = new AddOwnRecipePage(page);
  await addMyRecipe.createRecipe(recipeName);
  const myRecipes = new MyRecipesPage(page);
  await myRecipes.clickLearnMore(recipeName);
  await expect(page).toHaveURL(/\/recipes\/[a-zA-Z0-9]+$/);
});
