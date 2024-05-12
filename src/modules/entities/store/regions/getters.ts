import { GetterTree } from "vuex";
import { RegionState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<RegionState, StateInterface> = {
  allRegions: (state) => state.regions,
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export default getters;
