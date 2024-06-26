import { ActionTree } from "vuex";
import { EmployeesState } from "./state";
import { StateInterface } from "@/store/v1";
import { getEmployees } from "@/api";
import { getAvatarUrl } from "@/modules/entities/utils";

const actions: ActionTree<EmployeesState, StateInterface> = {
  async fetchEmployees({ commit }) {
    commit("setLoading", true);
    try {
      const response = await getEmployees();
      const employees = response.data?.map((employee) => ({
        ...employee,
        avatar: getAvatarUrl(employee),
      }));
      commit("setEmployees", employees);
    } catch (error) {
      console.error(error);
      commit("setError", "Error while fetching employees");
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
