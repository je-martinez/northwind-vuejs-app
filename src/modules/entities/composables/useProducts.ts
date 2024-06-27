import { Product } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useProducts() {
  const store = useStore();
  return {
    allProducts: computed<Product[]>(
      () => store.getters["products/allProducts"]
    ),
    loadingProducts: computed<boolean>(() => store.getters["products/loading"]),
    errorProducts: computed<string | null | undefined>(
      () => store.getters["products/error"]
    ),
    fetchProducts: () => store.dispatch("products/fetchProducts"),
  };
}
