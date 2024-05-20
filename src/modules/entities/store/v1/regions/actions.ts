import { StateInterface } from "@/store/v1";
import { ActionTree } from "vuex";
import { RegionState } from "./state";
import { getRegions, searchPhotoByQuery } from "@/api";
import { Region } from "@/api/types";

const actions: ActionTree<RegionState, StateInterface> = {
  async fetchRegions({ commit, dispatch }) {
    commit("setLoading", true);
    try {
      const response = await getRegions();
      commit("setRegions", response?.data);
      response?.data.forEach((region: Region) => {
        dispatch("fetchRegionPhotos", region);
      });
    } catch (error) {
      commit("setError", "Error while fetching regions");
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchRegionPhotos({ commit }, region: Region) {
    try {
      const response = await searchPhotoByQuery(region.name);
      if (!response) {
        return;
      }
      const { results } = response;
      if (!results.length) {
        return;
      }
      const { urls: photos } = results[0];
      commit("setRegionPhotos", {
        id: region.id,
        photos,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
