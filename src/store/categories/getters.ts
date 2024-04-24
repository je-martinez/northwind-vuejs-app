import { GetterTree } from "vuex";
import { CategoriesState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<CategoriesState, StateInterface> = {
  allCategories(state: CategoriesState) {
    return state.categories;
  },
  loading(state: CategoriesState) {
    return state.loading;
  },
  error(state: CategoriesState) {
    return state.error;
  },
};

export default getters;
