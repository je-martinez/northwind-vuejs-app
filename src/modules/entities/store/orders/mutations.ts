import { MutationTree } from "vuex";
import { OrdersState } from "./state";
import { Order } from "@/api/types";

const mutation: MutationTree<OrdersState> = {
  setOrders(state: OrdersState, payload: Order[]) {
    state.orders = [...payload];
  },
  setLoading(state: OrdersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: OrdersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
