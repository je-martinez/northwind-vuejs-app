import { Supplier } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useSuppliers() {
  const store = useStore();
  return {
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
  };
}
