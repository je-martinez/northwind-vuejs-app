import { Module } from "vuex";
import { StateInterface } from "@/store/v1";
import state, { CustomersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const customersModule: Module<CustomersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default customersModule;
