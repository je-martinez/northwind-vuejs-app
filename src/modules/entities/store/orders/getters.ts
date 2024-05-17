import { GetterTree } from "vuex";
import { OrdersState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<OrdersState, StateInterface> = {
  allOrders: (state: OrdersState) => state.orders,
  getOrdersByCustomerId: (state: OrdersState) => (customerId: string) => {
    return state.orders?.filter((order) => order?.customerId === customerId);
  },
  loading: (state: OrdersState) => state.loading,
  error: (state: OrdersState) => state.error,
};

export default getters;
