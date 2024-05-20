import { ActionTree } from "vuex";
import { ShippersState } from "./state";
import { StateInterface } from "@/store/v1";
import { getShippers, searchPhotoByQuery } from "@/api";
import { Shipper } from "@/api/types";

const actions: ActionTree<ShippersState, StateInterface> = {
  async fetchShippers({ commit, dispatch }) {
    commit("setLoading", true);
    try {
      const response = await getShippers();
      commit("setShippers", response.data);
      response.data.forEach((shipper: Shipper) => {
        dispatch("fetchShippersPhotos", shipper);
      });
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching shippers");
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchShippersPhotos({ commit }, shipper: Shipper) {
    try {
      const response = await searchPhotoByQuery(shipper.companyName);
      if (!response) {
        return;
      }
      const { results } = response;
      if (!results.length) {
        return;
      }
      const { urls: photos } = results[0];
      commit("setShipperPhotos", {
        id: shipper.id,
        photos,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
