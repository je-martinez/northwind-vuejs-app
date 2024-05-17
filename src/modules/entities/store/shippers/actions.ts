import { ActionTree } from "vuex";
import { ShippersState } from "./state";
import { StateInterface } from "@/store";
import { getShippers } from "@/api";

const actions: ActionTree<ShippersState, StateInterface> = {
  async fetchShippers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getShippers();
      commit("setShippers", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching shippers");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
