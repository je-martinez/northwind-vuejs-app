import { Employee } from "@/api/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useEmployees() {
  const store = useStore();
  return {
    allEmployees: computed<Employee[]>(
      () => store.getters["employees/allEmployees"]
    ),
    loadingEmployees: computed<boolean>(
      () => store.getters["employees/loading"]
    ),
    errorEmployees: computed<string | null | undefined>(
      () => store.getters["employees/error"]
    ),
    fetchEmployees: () => store.dispatch("employees/fetchEmployees"),
  };
}
