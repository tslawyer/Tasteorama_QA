import { expect, test } from "@playwright/test";
import { ApiClient } from "../ApiClient";

test("Registration success", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: `test_${Date.now()}@mail.com`,
    password: `somepassword_${Date.now() + 1}`,
  });
  const body = await response.json();
  expect(body.data).toHaveProperty("accessToken");
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

test("Password length is less than 8 character", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: "test@gmail.com",
    password: "pswrd",
  });
  expect(response.status()).toBe(400);
});

test("Password length equals 128 characters", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: `test_${Date.now() - 229}@mail.com`,
    password:
      "lAAzOMfDcqpBTaNvTiszRTdPlDdelQvrnPOszJaINsSTjjsfHJjFYuuOrHKpMAQGdVzldoFmgrIsKNKabQaflpFkqJzkpaBIPJkjzcrtFQJcYmcJNFUnSsPbAWEQNBpU",
  });
  const body = await response.json();
  expect(body.data).toHaveProperty("accessToken");
  expect(response.status()).toBe(201);
});

test("Password length is above 128 characters", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "testname",
    email: `test_${Date.now()}@mail.com`,
    password:
      "lAAzOMfDcqpBTaNvTiszRTdPlDdelQvrnPOszJaINsSTjjsfHJjFYuuOrHKpMAQGdVzldoFmgrIsKNKabQaflpFkqJzkpaBIPJkjzcrtFQJcYmcJNFUnSsPbAWEQNBpUZ",
  });
  expect(response.status()).toBe(400);
});

test("Password length equals 8 character", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "Abracadabra",
    email: `test_${Date.now() + 125}@mail.com`,
    password: "123456678",
  });
  const body = await response.json();
  expect(response.status()).toBe(201);
  expect(body.data).toHaveProperty("accessToken");
});

test("Every field is null", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: null,
    email: null,
    password: null,
  });
  expect(response.status()).toBe(400);
});

test("Email field is not valid", async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.register({
    name: "Abracadabra",
    email: "notvalidemail",
    password: "123456678",
  });
  expect(response.status()).toBe(400);
});
