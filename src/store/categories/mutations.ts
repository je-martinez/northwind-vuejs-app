import { MutationTree } from "vuex";
import { CategoriesState } from "./state";
import { Category } from "@/api/types";

const mutation: MutationTree<CategoriesState> = {
  setCategories(state: CategoriesState, payload: Category[]) {
    state.categories = [...payload];
  },
  setLoading(state: CategoriesState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: CategoriesState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
