import { GetterTree } from "vuex";
import { ProductsState } from "./state";
import { StateInterface } from "@/store/v1";

const getters: GetterTree<ProductsState, StateInterface> = {
  allProducts: (state: ProductsState) => state.products,
  getProductsByCategoryId: (state: ProductsState) => (categoryId: number) => {
    return state.products?.filter(
      (product) => product?.categoryId === categoryId
    );
  },
  getProductById: (state: ProductsState) => (id: number) => {
    return state.products?.find((product) => product.id === id);
  },
  loading: (state: ProductsState) => state.loading,
  error: (state: ProductsState) => state.error,
};

export default getters;
