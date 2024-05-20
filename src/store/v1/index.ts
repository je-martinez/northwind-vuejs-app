import categories from "@/modules/entities/store/v1/categories";
import type { CategoriesState } from "@/modules/entities/store/v1/categories/state";
import regions from "@/modules/entities/store/v1/regions";
import type { RegionState } from "@/modules/entities/store/v1/regions/state";
import suppliers from "@/modules/entities/store/v1/suppliers";
import type { SuppliersState } from "@/modules/entities/store/v1/suppliers/state";
import shippers from "@/modules/entities/store/v1/shippers";
import type { ShippersState } from "@/modules/entities/store/v1/shippers/state";
import customers from "@/modules/entities/store/v1/customers";
import type { CustomersState } from "@/modules/entities/store/v1/customers/state";
import { createStore } from "vuex";
import type { EmployeesState } from "@/modules/entities/store/v1/employees/state";
import employees from "@/modules/entities/store/v1/employees";
import type { OrdersState } from "@/modules/entities/store/v1/orders/state";
import orders from "@/modules/entities/store/v1/orders";
import type { ProductsState } from "@/modules/entities/store/v1/products/state";
import products from "@/modules/entities/store/v1/products";

export interface StateInterface {
  categories: CategoriesState;
  regions: RegionState;
  suppliers: SuppliersState;
  shippers: ShippersState;
  customers: CustomersState;
  employees: EmployeesState;
  orders: OrdersState;
  products: ProductsState;
}

export default createStore<StateInterface>({
  modules: {
    categories,
    regions,
    suppliers,
    shippers,
    customers,
    employees,
    orders,
    products,
  },
});
