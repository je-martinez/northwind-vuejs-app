import { Module } from "vuex";
import { StateInterface } from "@/store/v1";

import state, { OrdersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const ordersModule: Module<OrdersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default ordersModule;
