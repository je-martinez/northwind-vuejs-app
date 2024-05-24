import { GetterTree } from "vuex";
import { CustomersState } from "./state";
import { StateInterface } from "@/store/v1";
import { Customer, Order } from "@/api/types";

const getCustomerRelations = (
  customer: Customer | undefined,
  rootGetters: {
    "orders/getOrdersByCustomerId": (customerId: string) => Order[];
  }
) => {
  if (!customer) {
    return;
  }
  return {
    orders: rootGetters["orders/getOrdersByCustomerId"](customer.id),
  };
};

const getters: GetterTree<CustomersState, StateInterface> = {
  allCustomers: (state: CustomersState, _getters, _rootState, rootGetters) => {
    return state.customers?.map((customer) => {
      return {
        ...customer,
        ...getCustomerRelations(customer, rootGetters),
      };
    });
  },
  getCustomerById:
    (state: CustomersState, _getters, _rootState, rootGetters) =>
    (id: string) => {
      const customer = state.customers?.find((customer) => customer.id === id);
      return {
        ...customer,
        ...getCustomerRelations(customer, rootGetters),
      };
    },
  getCustomerByIdNoRelations: (state: CustomersState) => (id: string) => {
    const customer = state.customers?.find((customer) => customer.id === id);
    return { ...customer };
  },
  loading: (state: CustomersState) => state.loading,
  error: (state: CustomersState) => state.error,
};

export default getters;
