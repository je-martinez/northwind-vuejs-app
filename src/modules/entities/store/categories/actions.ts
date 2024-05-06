import { ActionTree } from "vuex";
import { CategoriesState as CategoriesState } from "./state";
import { getCategories } from "@/api";
import { StateInterface } from "@/store";

const actions: ActionTree<CategoriesState, StateInterface> = {
  async fetchCategories({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getCategories();
      commit("setCategories", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching categories");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
