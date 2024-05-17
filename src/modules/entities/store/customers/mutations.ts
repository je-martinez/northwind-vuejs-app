import { MutationTree } from "vuex";
import { CustomersState } from "./state";
import { Customer } from "@/api/types";

const mutation: MutationTree<CustomersState> = {
  setCustomers(state: CustomersState, payload: Customer[]) {
    state.customers = [...payload];
  },
  setLoading(state: CustomersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: CustomersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
