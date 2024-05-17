import { ActionTree } from "vuex";
import { CustomersState } from "./state";
import { StateInterface } from "@/store";
import { getCustomers } from "@/api";

const actions: ActionTree<CustomersState, StateInterface> = {
  async fetchCustomers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getCustomers();
      commit("setCustomers", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching customers");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
