import { GetterTree } from "vuex";
import { ShippersState } from "./state";
import { StateInterface } from "@/store/v1";

const getters: GetterTree<ShippersState, StateInterface> = {
  allShippers: (state: ShippersState) => state.shippers,
  loading: (state: ShippersState) => state.loading,
  error: (state: ShippersState) => state.error,
};

export default getters;
