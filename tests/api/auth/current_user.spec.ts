import { expect, test } from "@playwright/test";
import { ApiClient } from "../ApiClient";

test("Get current user failed", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.getCurrentUser();

  expect(response.status()).toBe(401);
});

test("Get current user success", async ({ request }) => {
  const api = new ApiClient(request);
  await api.login({
    email: "nikita7251@gmail.com",
    password: "something",
  });
  const response = await api.getCurrentUser();
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.message).toBe("User Info got successfully");
  expect(body.data.info.id).not.toBeNull();
  expect(body.data.info.name).not.toBeNull();
  expect(body.data.info.email).not.toBeNull();
});
