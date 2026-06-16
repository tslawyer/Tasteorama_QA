export type Ingredient = {
  id: string;
  measure: string;
};

export type CreateDataBody = {
  title: string;
  category: string;
  instructions: string;
  description: string;
  calories: number;
  time: number;
  ingredients: Ingredient[];
};

export type LoginData = {
  email: string | null;
  password: string | null;
};

export type RegisterData = {
  name: string | null;
  email: string | null;
  password: string | null;
};
