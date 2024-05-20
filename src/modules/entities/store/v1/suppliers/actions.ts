import { ActionTree } from "vuex";
import { SuppliersState } from "./state";
import { StateInterface } from "@/store/v1";
import { getSuppliers } from "@/api";

const actions: ActionTree<SuppliersState, StateInterface> = {
  async fetchSuppliers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getSuppliers();
      const blacklist: number[] = [30];
      commit(
        "setSuppliers",
        response.data?.filter((supplier) => !blacklist.includes(supplier.id))
      );
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching suppliers");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
