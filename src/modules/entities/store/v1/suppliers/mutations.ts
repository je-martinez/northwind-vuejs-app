import { MutationTree } from "vuex";
import { SuppliersState } from "./state";
import { Supplier, UnsplashUrls } from "@/api/types";

const mutation: MutationTree<SuppliersState> = {
  setSuppliers(state: SuppliersState, payload: Supplier[]) {
    state.suppliers = [...payload];
  },
  setSupplierPhotos(
    state: SuppliersState,
    payload: { id: number; photos: UnsplashUrls }
  ) {
    state.suppliers = state.suppliers.map((supplier) => {
      if (supplier.id === payload.id) {
        return {
          ...supplier,
          photos: payload.photos,
        };
      }
      return supplier;
    });
  },
  setLoading(state: SuppliersState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: SuppliersState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
