import { ActionTree } from "vuex";
import { CategoriesState as CategoriesState } from "./state";
import { getCategories, searchPhotoByQuery } from "@/api";
import { StateInterface } from "@/store";
import { Category } from "@/api/types";

const actions: ActionTree<CategoriesState, StateInterface> = {
  async fetchCategories({ commit, dispatch }) {
    commit("setLoading", true);
    try {
      const response = await getCategories();
      commit("setCategories", response.data);
      response.data.forEach((category: Category) => {
        dispatch("fetchCategoryPhotos", category);
      });
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching categories");
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchCategoryPhotos({ commit }, category: Category) {
    try {
      const response = await searchPhotoByQuery(category.name);

      if (!response) {
        return;
      }
      const { results } = response;
      const { urls: photos } = results[0];
      commit("setCategoryPhotos", {
        id: category.id,
        photos,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
