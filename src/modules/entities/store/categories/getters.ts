import { GetterTree } from "vuex";
import { CategoriesState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<CategoriesState, StateInterface> = {
  allCategories: (state: CategoriesState) => state.categories,
  loading: (state: CategoriesState) => state.loading,
  error: (state: CategoriesState) => state.error,
};

export default getters;
