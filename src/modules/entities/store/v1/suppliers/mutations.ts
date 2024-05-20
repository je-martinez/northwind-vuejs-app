import { MutationTree } from "vuex";
import { SuppliersState } from "./state";
import { Supplier } from "@/api/types";

const mutation: MutationTree<SuppliersState> = {
  setSuppliers(state: SuppliersState, payload: Supplier[]) {
    state.suppliers = [...payload];
  },
  setLoading(state: SuppliersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: SuppliersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
