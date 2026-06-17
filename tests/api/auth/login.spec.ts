import { expect, test } from "@playwright/test";
import { ApiClient } from "../ApiClient";

test(
  "Succesfull login",
  {
    tag: "@smoke",
  },
  async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.login({
      email: "nikita7251@gmail.com",
      password: "something",
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.data).toHaveProperty("accessToken");
  },
);

test("Invalid credentials", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.login({
    email: "nikita7251@gmail.com",
    password: "notvalidpassword",
  });
  expect(response.status()).toBe(401);
});

test("Null values while login", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.login({
    email: null,
    password: null,
  });
  const body = await response.json();
  expect(response.status()).toBe(400);
  expect(body.message).toBe("BadRequestError");
});
