import { ActionTree } from "vuex";
import { EmployeesState } from "./state";
import { StateInterface } from "@/store/v1";
import { getEmployees } from "@/api";

const actions: ActionTree<EmployeesState, StateInterface> = {
  async fetchEmployees({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getEmployees();
      commit("setEmployees", response.data);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching employees");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
