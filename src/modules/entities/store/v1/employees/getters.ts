import { GetterTree } from "vuex";
import { EmployeesState } from "./state";
import { StateInterface } from "@/store/v1";
import { Employee, Order, Territory } from "@/api/types";

const getRelationsPerEmployee = (
  employee: Employee | undefined,
  state: EmployeesState,
  rootGetters: {
    "orders/getOrdersByEmployeeId": (employeeId: number) => Order;
    "regions/getTerrritoriesByIDs": (territoryIds: number[]) => Territory[];
  }
) => {
  if (!employee) {
    return;
  }
  return {
    reportsToEmployee: state?.employees?.find(
      (employee) => employee.id === employee.reportsTo
    ),
    orders: rootGetters["orders/getOrdersByEmployeeId"](employee.id),
    territories: rootGetters["regions/getTerrritoriesByIDs"](
      employee.territoryIds
    ),
  };
};

const getters: GetterTree<EmployeesState, StateInterface> = {
  allEmployees: (state, _getters, _rootState, rootGetters) => {
    return state.employees?.map((employee) => {
      return {
        ...employee,
        ...getRelationsPerEmployee(employee, state, rootGetters),
      };
    });
  },
  getEmployeeById:
    (state, _getters, _rootState, rootGetters) => (id: number) => {
      const employee = state.employees?.find((employee) => employee.id === id);
      return {
        ...employee,
        ...getRelationsPerEmployee(employee, state, rootGetters),
      };
    },
  getEmployeeByIdNoRelations: (state) => (id: number) => {
    const employee = state.employees?.find((employee) => employee.id === id);
    return {
      ...employee,
    };
  },
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export default getters;
