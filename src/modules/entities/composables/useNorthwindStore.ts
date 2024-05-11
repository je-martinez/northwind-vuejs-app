import { useStore } from "vuex";
import { computed } from "vue";
import { Category } from "@/api/types";

export function useNorthwindStore() {
  const store = useStore();

  return {
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
  };
}
