import { MutationTree } from "vuex";
import { ShippersState } from "./state";
import { Shipper, UnsplashUrls } from "@/api/types";

const mutation: MutationTree<ShippersState> = {
  setShippers(state: ShippersState, payload: Shipper[]) {
    state.shippers = [...payload];
  },
  setShipperPhotos(
    state: ShippersState,
    payload: { id: number; photos: UnsplashUrls }
  ) {
    state.shippers = state.shippers.map((shipper) => {
      if (shipper.id === payload.id) {
        return {
          ...shipper,
          photos: payload.photos,
        };
      }
      return shipper;
    });
  },
  setLoading(state: ShippersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: ShippersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
