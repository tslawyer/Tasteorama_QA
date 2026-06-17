import { ApiClient } from "./../ApiClient";
import { test, expect } from "@playwright/test";

test("Recipe creation without login", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.createRecipe({
    title: "Pizza",
    category: "64c8d958249fae54bae90bb9",
    instructions: "Bake",
    description: "Tasty pizza",
    time: 30,
    calories: 1200,
    ingredients: [
      {
        id: "640c2dd963a319ea671e367e",
        measure: "200g",
      },
    ],
  });

  expect(response.status()).toBe(401);
});

test("Recipe creation after login", async ({ request }) => {
  const api = new ApiClient(request);
  await api.login({
    email: "nikita7251@gmail.com",
    password: "something",
  });

  const response = await api.createRecipe({
    title: "Battenberg Cake",
    category: "64c8d958249fae54bae90bb9",
    instructions: "Heat oven to 180C/160C fan/gas.",
    description: "A classic British cake",
    calories: 1200,
    time: 60,
    ingredients: [
      {
        id: "640c2dd963a319ea671e367e",
        measure: "175g",
      },
    ],
  });

  expect(response.status()).toBe(200);
});

test("Get all recipes", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.getAllRecipes();
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.result.data).not.toBeNull();
});

test("Get recipe categories", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.getRecipeCategories();
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.data).not.toBeNull();
});
