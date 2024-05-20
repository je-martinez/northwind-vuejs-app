import { Employee } from "@/api/types";

export interface EmployeesState {
  loading: boolean;
  employees: Employee[];
  selectedEmployee: Employee | null | undefined;
  error: string | null | undefined;
}

function state(): EmployeesState {
  return {
    loading: false,
    employees: [],
    selectedEmployee: null,
    error: null,
  };
}

export default state;
