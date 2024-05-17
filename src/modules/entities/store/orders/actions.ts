import { ActionTree } from "vuex";
import { OrdersState } from "./state";
import { StateInterface } from "@/store";
import { getOrders } from "@/api";

const actions: ActionTree<OrdersState, StateInterface> = {
  async fetchOrders({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getOrders();
      commit("setOrders", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching orders");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
