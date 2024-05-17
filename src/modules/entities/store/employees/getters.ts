import { GetterTree } from "vuex";
import { EmployeesState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<EmployeesState, StateInterface> = {
  allEmployees: (state) => state.employees,
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export default getters;
