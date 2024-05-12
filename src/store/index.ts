import categories from "@/modules/entities/store/categories";
import type { CategoriesState } from "@/modules/entities/store/categories/state";
import regions from "@/modules/entities/store/regions";
import type { RegionState } from "@/modules/entities/store/regions/state";
import { createStore } from "vuex";

export interface StateInterface {
  categories: CategoriesState;
  regions: RegionState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
    regions,
  },
});
