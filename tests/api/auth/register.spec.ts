import { expect, test } from "@playwright/test";
import { ApiClient } from "../ApiClient";

test("Registration success", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: `test_${Date.now()}@mail.com`,
    password: `somepassword_${Date.now() + 1}`,
  });
  expect(response.status()).toBe(201);
});

test("Email already in use while registration", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: "nikita7251@gmail.com",
    password: `somepassword_${Date.now() + 1}`,
  });
  expect(response.status()).toBe(409);
});
