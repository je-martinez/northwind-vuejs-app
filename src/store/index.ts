import { createStore } from "vuex";
import { CategoriesState } from "./categories/state";
import categories from "./categories";

export interface StateInterface {
  categories: CategoriesState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
  },
});
