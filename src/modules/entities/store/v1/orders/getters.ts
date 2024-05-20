import { GetterTree } from "vuex";
import { OrdersState } from "./state";
import { StateInterface } from "@/store/v1";

const getters: GetterTree<OrdersState, StateInterface> = {
  allOrders: (state: OrdersState, _getters, _rootState, rootGetters) => {
    return state.orders?.map((order) => {
      return {
        ...order,
        details: order.details?.map((detail) => {
          return {
            ...detail,
            product: rootGetters["products/getProductById"](detail.productId),
          };
        }),
        customer: rootGetters["customers/getCustomerById"](order.customerId),
        employee: rootGetters["employees/getEmployeeById"](order.employeeId),
      };
    });
  },
  getOrdersByCustomerId: (state: OrdersState) => (customerId: string) => {
    return state.orders?.filter((order) => order?.customerId === customerId);
  },
  getOrdersByEmployeeId: (state: OrdersState) => (employeeId: number) => {
    return state.orders?.filter((order) => order?.employeeId === employeeId);
  },
  loading: (state: OrdersState) => state.loading,
  error: (state: OrdersState) => state.error,
};

export default getters;
