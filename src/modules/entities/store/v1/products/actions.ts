import { ActionTree } from "vuex";
import { ProductsState } from "./state";
import { StateInterface } from "@/store/v1";
import { getProducts } from "@/api";

const actions: ActionTree<ProductsState, StateInterface> = {
  async fetchProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getProducts();
      commit("setProducts", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching products");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
