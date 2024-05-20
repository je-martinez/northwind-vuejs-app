import { MutationTree } from "vuex";
import { EmployeesState } from "./state";
import { Employee } from "@/api/types";

const mutation: MutationTree<EmployeesState> = {
  setEmployees(state: EmployeesState, payload: Employee[]) {
    state.employees = [...payload];
  },
  setLoading(state: EmployeesState, payload: boolean) {
    state.loading = payload;
  },
  setError(state: EmployeesState, payload: string) {
    state.error = payload;
  },
};

export default mutation;
