import { useStore } from "vuex";
import { computed } from "vue";
import { Category, Region } from "@/api/types";

export function useNorthwindStore() {
  const store = useStore();

  return {
    /**============================================
     *               Categories
     *=============================================**/
    allCategories: computed<Category[]>(
      () => store.getters["categories/allCategories"]
    ),
    selectedCategory: computed<Category | null | undefined>(
      () => store.getters["categories/selectedCategory"]
    ),
    loadingCategories: computed<boolean>(
      () => store.getters["categories/loading"]
    ),
    errorCategories: computed<string | null | undefined>(
      () => store.getters["categories/error"]
    ),
    fetchCategories: () => store.dispatch("categories/fetchCategories"),
    /**============================================
     *               Regions
     *=============================================**/
    allRegions: computed<Region[]>(() => store.getters["regions/allRegions"]),
    selectedRegion: computed<Region | null | undefined>(
      () => store.getters["regions/selectedRegion"]
    ),
    loadingRegions: computed<boolean>(() => store.getters["regions/loading"]),
    errorRegions: computed<string | null | undefined>(
      () => store.getters["regions/error"]
    ),
    fetchRegions: () => store.dispatch("regions/fetchRegions"),
    /**============================================
     *               Suppliers
     *=============================================**/
    allSuppliers: computed<Category[]>(
      () => store.getters["suppliers/allSuppliers"]
    ),
    loadingSuppliers: computed<boolean>(
      () => store.getters["suppliers/loading"]
    ),
    errorSuppliers: computed<string | null | undefined>(
      () => store.getters["suppliers/error"]
    ),
    fetchSuppliers: () => store.dispatch("suppliers/fetchSuppliers"),
  };
}
