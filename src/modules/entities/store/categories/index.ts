import { Module } from "vuex";

import state, { CategoriesState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { StateInterface } from "@/store";

const categoriesModule: Module<CategoriesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default categoriesModule;
