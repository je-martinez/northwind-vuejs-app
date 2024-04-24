import { Category } from "./categories.types";
import { Supplier } from "./suppliers.types";

export interface Product {
  id: number;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  name: string;
  supplier?: Supplier;
  category?: Category;
}

export type ProductsResponse = Array<Product>;
