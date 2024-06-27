import { Customer } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useCustomers() {
  const store = useStore();
  return {
    allCustomers: computed<Customer[]>(
      () => store.getters["customers/allCustomers"]
    ),
    loadingCustomers: computed<boolean>(
      () => store.getters["customers/loading"]
    ),
    errorCustomers: computed<string | null | undefined>(
      () => store.getters["customers/error"]
    ),
    fetchCustomers: () => store.dispatch("customers/fetchCustomers"),
  };
}
