import categories from "@/modules/entities/store/categories";
import type { CategoriesState } from "@/modules/entities/store/categories/state";
import regions from "@/modules/entities/store/regions";
import type { RegionState } from "@/modules/entities/store/regions/state";
import suppliers from "@/modules/entities/store/suppliers";
import type { SuppliersState } from "@/modules/entities/store/suppliers/state";
import shippers from "@/modules/entities/store/shippers";
import type { ShippersState } from "@/modules/entities/store/shippers/state";
import customers from "@/modules/entities/store/customers";
import type { CustomersState } from "@/modules/entities/store/customers/state";
import { createStore } from "vuex";

export interface StateInterface {
  categories: CategoriesState;
  regions: RegionState;
  suppliers: SuppliersState;
  shippers: ShippersState;
  customers: CustomersState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
    regions,
    suppliers,
    shippers,
    customers,
  },
});
