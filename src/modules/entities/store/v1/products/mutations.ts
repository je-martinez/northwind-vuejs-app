import { MutationTree } from "vuex";
import { ProductsState } from "./state";
import { Product } from "@/api/types";

const mutation: MutationTree<ProductsState> = {
  setProducts(state: ProductsState, payload: Product[]) {
    state.products = [...payload];
  },
  setLoading(state: ProductsState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: ProductsState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
