import { GetterTree } from "vuex";
import { CategoriesState } from "./state";
import { StateInterface } from "@/store/v1";

const getters: GetterTree<CategoriesState, StateInterface> = {
  allCategories: (
    state: CategoriesState,
    _getters,
    _rootState,
    rootGetters
  ) => {
    return state.categories?.map((category) => {
      return {
        ...category,
        products: rootGetters["products/getProductsByCategoryId"](category.id),
      };
    });
  },
  loading: (state: CategoriesState) => state.loading,
  error: (state: CategoriesState) => state.error,
};

export default getters;
