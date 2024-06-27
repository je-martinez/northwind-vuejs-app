import { Category } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useCategories() {
  const store = useStore();
  return {
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
  };
}
