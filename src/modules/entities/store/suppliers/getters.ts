import { GetterTree } from "vuex";
import { SuppliersState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<SuppliersState, StateInterface> = {
  allSuppliers: (state: SuppliersState) => state.suppliers,
  loading: (state: SuppliersState) => state.loading,
  error: (state: SuppliersState) => state.error,
};

export default getters;
