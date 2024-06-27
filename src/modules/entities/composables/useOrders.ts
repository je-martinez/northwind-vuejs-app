import { Order } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useOrders() {
  const store = useStore();
  return {
    allOrders: computed<Order[]>(() => store.getters["orders/allOrders"]),
    getOrderById: (id: number) =>
      computed<Order>(() => store.getters["orders/getOrderById"](id)),
    loadingOrders: computed<boolean>(() => store.getters["orders/loading"]),
    errorOrders: computed<string | null | undefined>(
      () => store.getters["orders/error"]
    ),
    fetchOrders: () => store.dispatch("orders/fetchOrders"),
  };
}
