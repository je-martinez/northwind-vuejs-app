import { GetterTree } from "vuex";
import { OrdersState } from "./state";
import { StateInterface } from "@/store/v1";
import { Customer, Employee, Order, Product } from "@/api/types";
import { orderMapper } from "@/modules/entities/mappers";

const getOrderRelations = (
  order: Order | undefined,
  rootGetters: {
    "products/getProductById": (productId: number) => Product;
    "customers/getCustomerByIdNoRelations": (customerId: string) => Customer;
    "employees/getEmployeeByIdNoRelations": (employeeId: number) => Employee;
  }
) => {
  if (!order) {
    return;
  }
  return {
    details: order.details?.map((orderDetail) => {
      return {
        ...orderDetail,
        product: rootGetters["products/getProductById"](orderDetail.productId),
      };
    }),
    customer: rootGetters["customers/getCustomerByIdNoRelations"](
      order.customerId
    ),
    employee: rootGetters["employees/getEmployeeByIdNoRelations"](
      order.employeeId
    ),
  };
};

const getters: GetterTree<OrdersState, StateInterface> = {
  allOrders: (state: OrdersState, _getters, _rootState, rootGetters) => {
    return state.orders?.map((order) => {
      return {
        ...order,
        ...getOrderRelations(order, rootGetters),
      };
    });
  },
  getOrdersByCustomerId:
    (state: OrdersState, _getters, _rootState, rootGetters) =>
    (customerId: string) => {
      const orders = state.orders?.filter(
        (order) => order?.customerId === customerId
      );
      return orders.map((order) => {
        return {
          ...order,
          ...getOrderRelations(order, rootGetters),
        };
      });
    },
  getOrdersByEmployeeId:
    (state: OrdersState, _getters, _rootState, rootGetters) =>
    (employeeId: number) => {
      const orders = state.orders?.filter(
        (order) => order?.employeeId === employeeId
      );
      return orders.map((order) => {
        return {
          ...order,
          ...getOrderRelations(order, rootGetters),
        };
      });
    },
  getOrderById:
    (state: OrdersState, _getters, _rootState, rootGetters) =>
    (orderId: number) => {
      const order = state.orders?.find((order) => order.id === orderId);
      return {
        ...order,
        ...getOrderRelations(order, rootGetters),
      };
    },

  getOrderSummary: (_: OrdersState, _getters) => (orderId: number) => {
    const order = (_getters["allOrders"] as Order[])?.find(
      (order) => order.id === orderId
    );

    if (!order) {
      return;
    }

    return {
      header: orderMapper.toOrderHeader(order),
      content: orderMapper.toOrderContent(order),
    };
  },
  loading: (state: OrdersState) => state.loading,
  error: (state: OrdersState) => state.error,
};

export default getters;
