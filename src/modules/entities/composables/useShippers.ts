import { Shipper } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useShippers() {
  const store = useStore();
  return {
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
