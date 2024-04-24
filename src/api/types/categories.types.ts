export interface Category {
  id: number;
  description: string;
  name: string;
}

export type CategoriesResponse = Array<Category>;
