import { GetterTree } from "vuex";
import { CustomersState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<CustomersState, StateInterface> = {
  allCustomers: (state: CustomersState, _getters, _rootState, rootGetters) => {
    return state.customers?.map((customer) => {
      return {
        ...customer,
        orders: rootGetters["orders/getOrdersByCustomerId"](customer.id),
      };
    });
  },
  loading: (state: CustomersState) => state.loading,
  error: (state: CustomersState) => state.error,
};

export default getters;
