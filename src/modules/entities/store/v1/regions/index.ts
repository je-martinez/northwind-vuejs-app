import { Module } from "vuex";
import state, { RegionState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { StateInterface } from "@/store/v1";

const categoriesModule: Module<RegionState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default categoriesModule;
