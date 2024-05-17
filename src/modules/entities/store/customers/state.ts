import { Customer } from "@/api/types";

export interface CustomersState {
  loading: boolean;
  customers: Customer[];
  selectedCustomer: Customer | null | undefined;
  error: string | null | undefined;
}

function state(): CustomersState {
  return {
    loading: false,
    customers: [],
    selectedCustomer: null,
    error: null,
  };
}

export default state;
