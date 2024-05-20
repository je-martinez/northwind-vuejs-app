import { ActionTree } from "vuex";
import { SuppliersState } from "./state";
import { StateInterface } from "@/store/v1";
import { getSuppliers, searchPhotoByQuery } from "@/api";
import { Supplier } from "@/api/types";

const actions: ActionTree<SuppliersState, StateInterface> = {
  async fetchSuppliers({ commit, dispatch }) {
    commit("setLoading", true);
    try {
      const response = await getSuppliers();
      const blacklist: number[] = [30];
      commit(
        "setSuppliers",
        response.data?.filter((supplier) => !blacklist.includes(supplier.id))
      );
      response.data?.forEach((supplier) => {
        dispatch("fecthSupplierPhotos", supplier);
      });
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching suppliers");
    } finally {
      commit("setLoading", false);
    }
  },
  async fecthSupplierPhotos({ commit }, supplier: Supplier) {
    try {
      const response = await searchPhotoByQuery(supplier.companyName);
      if (!response) {
        return;
      }
      const { results } = response;
      if (!results.length) {
        return;
      }
      const { urls: photos } = results[0];
      commit("setSupplierPhotos", {
        id: supplier.id,
        photos,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
