import { Module } from "vuex";
import { StateInterface } from "../index";

import state, { CategoriesState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const categoriesModule: Module<CategoriesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default categoriesModule;
