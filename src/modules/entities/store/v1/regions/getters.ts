import { GetterTree } from "vuex";
import { RegionState } from "./state";
import { StateInterface } from "@/store/v1";

const getters: GetterTree<RegionState, StateInterface> = {
  allRegions: (state) => state.regions,
  getTerrritoriesByIDs: (state) => (territoryIds: number[]) => {
    return state.regions
      ?.map((region) => region.territories)
      .flat()
      .filter((territory) => territoryIds.includes(territory.territoryId));
  },
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export default getters;
