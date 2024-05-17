import { ActionTree } from "vuex";
import { SuppliersState } from "./state";
import { StateInterface } from "@/store";
import { getSuppliers } from "@/api";

const actions: ActionTree<SuppliersState, StateInterface> = {
  async fetchSuppliers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getSuppliers();
      commit("setSuppliers", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching suppliers");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
