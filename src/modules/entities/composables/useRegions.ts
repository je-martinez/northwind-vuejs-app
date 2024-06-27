import { Region } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useRegions() {
  const store = useStore();
  return {
    allRegions: computed<Region[]>(() => store.getters["regions/allRegions"]),
    loadingRegions: computed<boolean>(() => store.getters["regions/loading"]),
    errorRegions: computed<string | null | undefined>(
      () => store.getters["regions/error"]
    ),
    fetchRegions: () => store.dispatch("regions/fetchRegions"),
  };
}
