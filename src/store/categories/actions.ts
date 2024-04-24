import { ActionTree } from "vuex";
import { CategoriesState as CategoriesState } from "./state";
import { StateInterface } from "../index";
import { getCategories } from "@/api";

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
