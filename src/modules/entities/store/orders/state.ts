import { Order } from "@/api/types";

export interface OrdersState {
  loading: boolean;
  orders: Order[];
  selectedOrder: Order | null | undefined;
  error: string | null | undefined;
}

function state(): OrdersState {
  return {
    loading: false,
    orders: [],
    selectedOrder: null,
    error: null,
  };
}

export default state;
