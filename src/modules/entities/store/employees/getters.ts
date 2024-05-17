import { GetterTree } from "vuex";
import { EmployeesState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<EmployeesState, StateInterface> = {
  allEmployees: (state, _getters, _rootState, rootGetters) => {
    return state.employees?.map((employee) => {
      return {
        ...employee,
        reportsToEmployee: state?.employees?.find(
          (employee2) => employee2.id === employee.reportsTo
        ),
        orders: rootGetters["orders/getOrdersByEmployeeId"](employee.id),
        territories: rootGetters["regions/getTerrritoriesByIDs"](
          employee.territoryIds
        ),
      };
    });
  },
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export default getters;
