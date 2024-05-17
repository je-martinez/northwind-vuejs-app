import { Module } from "vuex";
import { StateInterface } from "@/store";

import state, { ModuleState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const categoriesModule: Module<ModuleState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default categoriesModule;
