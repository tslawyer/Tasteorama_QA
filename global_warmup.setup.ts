import { request } from "@playwright/test";

async function globalSetup() {
  const apiContext = await request.newContext();

  console.log("⏳ Waking up backend...");

  while (true) {
    try {
      const response = await apiContext.get(
        "https://cook-api-dtdl.onrender.com/api/categories",
        {
          timeout: 10000,
        },
      );

      if (response.ok()) {
        console.log("✅ Backend is ready");
        break;
      }
    } catch {}

    console.log("⌛ Waiting for backend...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  await apiContext.dispose();
}

export default globalSetup;
