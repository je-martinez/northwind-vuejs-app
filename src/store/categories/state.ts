import { Category } from "@/api/types";

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
  selectedCategory: Category | null | undefined;
  error: string | null | undefined;
}

function state(): CategoriesState {
  return {
    loading: false,
    categories: [],
    selectedCategory: null,
    error: null,
  };
}

export default state;
