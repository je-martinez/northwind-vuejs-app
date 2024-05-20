import { Module } from "vuex";
import { StateInterface } from "@/store/v1";

import state, { SuppliersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const suppliersModule: Module<SuppliersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default suppliersModule;
