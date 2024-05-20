import { MutationTree } from "vuex";
import { ShippersState } from "./state";
import { Shipper } from "@/api/types";

const mutation: MutationTree<ShippersState> = {
  setShippers(state: ShippersState, payload: Shipper[]) {
    state.shippers = [...payload];
  },
  setLoading(state: ShippersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: ShippersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
