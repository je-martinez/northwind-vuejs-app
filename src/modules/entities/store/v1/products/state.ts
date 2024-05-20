import { Product } from "@/api/types";

export interface ProductsState {
  loading: boolean;
  products: Product[];
  selectedProduct: Product | null | undefined;
  error: string | null | undefined;
}

function state(): ProductsState {
  return {
    loading: false,
    products: [],
    selectedProduct: null,
    error: null,
  };
}

export default state;
