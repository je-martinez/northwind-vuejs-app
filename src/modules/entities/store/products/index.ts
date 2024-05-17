import { Module } from "vuex";
import { StateInterface } from "@/store";

import state, { ProductsState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const productsModule: Module<ProductsState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default productsModule;
