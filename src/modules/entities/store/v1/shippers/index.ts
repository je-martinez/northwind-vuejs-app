import { Module } from "vuex";
import state, { ShippersState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { StateInterface } from "@/store/v1";

const shippersModule: Module<ShippersState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default shippersModule;
