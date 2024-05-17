import { Module } from "vuex";
import { StateInterface } from "@/store";
import state, { CustomersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const categoriesModule: Module<CustomersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default categoriesModule;
