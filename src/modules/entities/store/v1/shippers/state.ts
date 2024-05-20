import { Shipper } from "@/api/types";

export interface ShippersState {
  loading: boolean;
  shippers: Shipper[];
  selectedShipper: Shipper | null | undefined;
  error: string | null | undefined;
}

function state(): ShippersState {
  return {
    loading: false,
    shippers: [],
    selectedShipper: null,
    error: null,
  };
}

export default state;
