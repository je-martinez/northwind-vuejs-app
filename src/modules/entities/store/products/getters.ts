import { GetterTree } from "vuex";
import { ProductsState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<ProductsState, StateInterface> = {
  allProducts: (state: ProductsState) => state.products,
  getProductsByCategoryId: (state: ProductsState) => (categoryId: number) => {
    return state.products?.filter(
      (product) => product?.categoryId === categoryId
    );
  },
  loading: (state: ProductsState) => state.loading,
  error: (state: ProductsState) => state.error,
};

export default getters;
