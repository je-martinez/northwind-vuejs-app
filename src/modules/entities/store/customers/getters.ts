import { GetterTree } from "vuex";
import { CustomersState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<CustomersState, StateInterface> = {
  allCustomers: (state: CustomersState) => state.customers,
  loading: (state: CustomersState) => state.loading,
  error: (state: CustomersState) => state.error,
};

export default getters;
