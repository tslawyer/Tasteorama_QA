import { APIRequestContext } from "./../../node_modules/playwright-core/types/types.d";
import type { CreateDataBody, LoginData, RegisterData } from "./types/types";

export class ApiClient {
  private token?: string;

  constructor(private request: APIRequestContext) {}

  async createRecipe(data: CreateDataBody) {
    return this.request.post("https://cook-api-dtdl.onrender.com/api/recipes", {
      headers: this.token ? { Authorization: `Bearer ${this.token}` } : {},
      data: {
        ...data,
        ingredients: JSON.stringify(data.ingredients),
      },
    });
  }

  async getAllRecipes() {
    return this.request.get("https://cook-api-dtdl.onrender.com/api/recipes");
  }
  async getRecipeCategories() {
    return this.request.get(
      "https://cook-api-dtdl.onrender.com/api/categories",
    );
  }
  async getAvaliableIngredients() {
    return this.request.get(
      "https://cook-api-dtdl.onrender.com/api/ingredients",
    );
  }
  async getRecipeById(id: string) {
    return this.request.get(
      `https://cook-api-dtdl.onrender.com/api/recipes/${id}`,
    );
  }

  async addRecipeToFav(id: string) {
    return this.request.post(
      `https://cook-api-dtdl.onrender.com/api/recipes/${id}/favorite`,
      {
        headers: this.token ? { Authorization: `Bearer ${this.token}` } : {},
      },
    );
  }

  async removeRecipeFromFav(id: string) {
    return this.request.delete(
      `https://cook-api-dtdl.onrender.com/api/recipes/${id}/favorite`,
      {
        headers: this.token ? { Authorization: `Bearer ${this.token}` } : {},
      },
    );
  }

  async getMyRecipes() {
    return this.request.get(
      "https://cook-api-dtdl.onrender.com/api/recipes/my",
      { headers: this.token ? { Authorization: `Bearer ${this.token}` } : {} },
    );
  }
  async getCurrentUser() {
    return this.request.get(
      "https://cook-api-dtdl.onrender.com/api/users/currentUser",
      { headers: this.token ? { Authorization: `Bearer ${this.token}` } : {} },
    );
  }

  async login(data: LoginData) {
    const response = await this.request.post(
      "https://cook-api-dtdl.onrender.com/api/auth/login",
      { data },
    );
    const respBody = await response.json();
    this.token = respBody.data.accessToken;

    return response;
  }
  async register(data: RegisterData) {
    const response = await this.request.post(
      "https://cook-api-dtdl.onrender.com/api/auth/register",
      { data },
    );
    return response;
  }
}
