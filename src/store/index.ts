import categories from "@/modules/entities/store/categories";
import type { CategoriesState } from "@/modules/entities/store/categories/state";
import regions from "@/modules/entities/store/regions";
import type { RegionState } from "@/modules/entities/store/regions/state";
import suppliers from "@/modules/entities/store/suppliers";
import type { SuppliersState } from "@/modules/entities/store/suppliers/state";
import { createStore } from "vuex";

export interface StateInterface {
  categories: CategoriesState;
  regions: RegionState;
  suppliers: SuppliersState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
    regions,
    suppliers,
  },
});
