import { MutationTree } from "vuex";
import { CategoriesState } from "./state";
import { Category, UnsplashUrls } from "@/api/types";

const mutation: MutationTree<CategoriesState> = {
  setCategories(state: CategoriesState, payload: Category[]) {
    state.categories = [...payload];
  },
  setCategoryPhotos(
    state: CategoriesState,
    { id, photos }: { id: number; photos: UnsplashUrls }
  ) {
    state.categories = state.categories.map((category) => {
      if (category.id === id) {
        return {
          ...category,
          photos: { ...photos },
        };
      }
      return category;
    });
  },
  setLoading(state: CategoriesState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: CategoriesState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
