import { ApiClient } from "./../ApiClient";
import { test, expect } from "@playwright/test";

test("Add recipe to fav without login", async ({ request }) => {
  const api = new ApiClient(request);
  const ID = "6462a8f74c3d0ddd288980b1";
  const response = await api.addRecipeToFav(ID);
  expect(response.status()).toBe(401);
});

test("Successfully added and removed recipe from fav", async ({ request }) => {
  const api = new ApiClient(request);
  const ID = "6462a8f74c3d0ddd288980d3";
  const loginResponse = await api.login({
    email: "grut80781@gmail.com",
    password: "12345678",
  });
  expect(loginResponse.status()).toBe(200);
  try {
    await api.removeRecipeFromFav(ID);
    const responseAddToFav = await api.addRecipeToFav(ID);
    const bodyAddToFav = await responseAddToFav.json();
    expect(responseAddToFav.status()).toBe(200);
    expect(bodyAddToFav.message).toBe("Recipe added to favorites");
    expect(bodyAddToFav.data).not.toBeNull();
  } finally {
    const responseRemoveFromFav = await api.removeRecipeFromFav(ID);
  }
});

test("Add recipe to fav that is not found", async ({ request }) => {
  const api = new ApiClient(request);
  const ID = "6462a8f74c3d0ddd288980b1";
  await api.login({
    email: "nikita7251@gmail.com",
    password: "something",
  });
  const BAD_ID = "6462a8f74c3d0ddd438980b2";
  const response = await api.addRecipeToFav(BAD_ID);
  const body = await response.json();
  expect(response.status()).toBe(404);
  expect(body.data.message).toBe("Recipe not found");
});

test("Remove recipe from fav that is not found", async ({ request }) => {
  const api = new ApiClient(request);
  const ID = "6462a8f74c3d0ddd288980b1";
  await api.login({
    email: "nikita7251@gmail.com",
    password: "something",
  });
  const BAD_ID = "6462a8f74c3d0ddd438980b2";
  const response = await api.removeRecipeFromFav(BAD_ID);
  const body = await response.json();
  expect(response.status()).toBe(404);
  expect(body.data.message).toBe("Recipe not found");
});

test("Handling adding recipe to fav twice", async ({ request }) => {
  const api = new ApiClient(request);
  const ID = "6462a8f74c3d0ddd288980b1";
  await api.login({
    email: "grut8078@gmail.com",
    password: "12345678",
  });
  try {
    await api.addRecipeToFav(ID);
    const responseAddToFav = await api.addRecipeToFav(ID);
    const body = await responseAddToFav.json();
    expect(responseAddToFav.status()).toBe(409);
    expect(body.data.message).toBe("Recipe already in favorites");
  } finally {
    await api.removeRecipeFromFav(ID);
  }
});
