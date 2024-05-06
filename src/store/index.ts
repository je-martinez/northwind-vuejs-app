import { createStore } from "vuex";
import type { CategoriesState } from "@/modules/entities/store/categories/state";
import categories from "@/modules/entities/store/categories";

export interface StateInterface {
  categories: CategoriesState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
  },
});
