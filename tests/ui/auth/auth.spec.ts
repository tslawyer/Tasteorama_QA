import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Sucessfully UI Login", async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login("grut80781@gmail.com", "12345678");
  await expect(page).toHaveURL("https://tasteorama-ten.vercel.app/");
});
