import { Order } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";
import { OrderSummary } from "../types";

export function useOrders() {
  const store = useStore();
  return {
    allOrders: computed<Order[]>(() => store.getters["orders/allOrders"]),
    getOrderById: (id: number) =>
      computed<Order>(() => store.getters["orders/getOrderById"](id)),
    getOrderSummary: (id: number) =>
      computed<OrderSummary>(() => store.getters["orders/getOrderSummary"](id)),
    loadingOrders: computed<boolean>(() => store.getters["orders/loading"]),
    errorOrders: computed<string | null | undefined>(
      () => store.getters["orders/error"]
    ),
    fetchOrders: () => store.dispatch("orders/fetchOrders"),
  };
}
