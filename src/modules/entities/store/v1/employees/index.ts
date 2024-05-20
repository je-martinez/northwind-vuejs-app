import { Module } from "vuex";
import { StateInterface } from "@/store/v1";

import state, { EmployeesState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const employeesModule: Module<EmployeesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default employeesModule;
