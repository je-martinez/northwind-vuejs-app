import { useStore } from "vuex";
import { computed } from "vue";
import { Category, Region, Shipper, Supplier } from "@/api/types";

export function useNorthwindStore() {
  const store = useStore();

  return {
    /**============================================
     *               Categories
     *=============================================**/
    allCategories: computed<Category[]>(
      () => store.getters["categories/allCategories"]
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
    loadingRegions: computed<boolean>(() => store.getters["regions/loading"]),
    errorRegions: computed<string | null | undefined>(
      () => store.getters["regions/error"]
    ),
    fetchRegions: () => store.dispatch("regions/fetchRegions"),
    /**============================================
     *               Suppliers
     *=============================================**/
    allSuppliers: computed<Supplier[]>(
      () => store.getters["suppliers/allSuppliers"]
    ),
    loadingSuppliers: computed<boolean>(
      () => store.getters["suppliers/loading"]
    ),
    errorSuppliers: computed<string | null | undefined>(
      () => store.getters["suppliers/error"]
    ),
    fetchSuppliers: () => store.dispatch("suppliers/fetchSuppliers"),
    /**============================================
     *               Shippers
     *=============================================**/
    allShippers: computed<Shipper[]>(
      () => store.getters["shippers/allShippers"]
    ),
    loadingShippers: computed<boolean>(() => store.getters["shippers/loading"]),
    errorShippers: computed<string | null | undefined>(
      () => store.getters["shippers/error"]
    ),
    fetchShippers: () => store.dispatch("shippers/fetchShippers"),
  };
}
