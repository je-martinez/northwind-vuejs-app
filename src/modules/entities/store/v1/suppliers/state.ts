import { Supplier } from "@/api/types";

export interface SuppliersState {
  loading: boolean;
  suppliers: Supplier[];
  selectedSupplier: Supplier | null | undefined;
  error: string | null | undefined;
}

function state(): SuppliersState {
  return {
    loading: false,
    suppliers: [],
    selectedSupplier: null,
    error: null,
  };
}

export default state;
