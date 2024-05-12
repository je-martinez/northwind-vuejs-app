import { useStore } from "vuex";
import { computed } from "vue";
import { Category } from "@/api/types";

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
    allRegions: computed<Category[]>(() => store.getters["regions/allRegions"]),
    selectedRegion: computed<Category | null | undefined>(
      () => store.getters["regions/selectedRegion"]
    ),
    loadingRegions: computed<boolean>(() => store.getters["regions/loading"]),
    errorRegions: computed<string | null | undefined>(
      () => store.getters["regions/error"]
    ),
    fetchRegions: () => store.dispatch("regions/fetchRegions"),
  };
}
