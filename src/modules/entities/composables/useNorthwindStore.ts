import { useStore } from "vuex";
import { computed } from "vue";
import {
  Category,
  Customer,
  Employee,
  Order,
  Product,
  Region,
  Shipper,
  Supplier,
} from "@/api/types";

export function useNorthwindStore() {
  const store = useStore();

  return {
    /**============================================
     *               Categories
     *=============================================**/
    allCategories: computed<Category[]>(
      () => store.getters["categories/allCategories"]
    ),
    loadingCategories: computed<boolean>(
      () => store.getters["categories/loading"]
    ),
    errorCategories: computed<string | null | undefined>(
      () => store.getters["categories/error"]
    ),
    fetchCategories: () => store.dispatch("categories/fetchCategories"),
    /**============================================
     *               Regions
     *=============================================**/
    allRegions: computed<Region[]>(() => store.getters["regions/allRegions"]),
    loadingRegions: computed<boolean>(() => store.getters["regions/loading"]),
    errorRegions: computed<string | null | undefined>(
      () => store.getters["regions/error"]
    ),
    fetchRegions: () => store.dispatch("regions/fetchRegions"),
    /**============================================
     *               Suppliers
     *=============================================**/
    allSuppliers: computed<Supplier[]>(
      () => store.getters["suppliers/allSuppliers"]
    ),
    loadingSuppliers: computed<boolean>(
      () => store.getters["suppliers/loading"]
    ),
    errorSuppliers: computed<string | null | undefined>(
      () => store.getters["suppliers/error"]
    ),
    fetchSuppliers: () => store.dispatch("suppliers/fetchSuppliers"),
    /**============================================
     *               Shippers
     *=============================================**/
    allShippers: computed<Shipper[]>(
      () => store.getters["shippers/allShippers"]
    ),
    loadingShippers: computed<boolean>(() => store.getters["shippers/loading"]),
    errorShippers: computed<string | null | undefined>(
      () => store.getters["shippers/error"]
    ),
    fetchShippers: () => store.dispatch("shippers/fetchShippers"),
    /**============================================
     *               Customers
     *=============================================**/
    allCustomers: computed<Customer[]>(
      () => store.getters["customers/allCustomers"]
    ),
    loadingCustomers: computed<boolean>(
      () => store.getters["customers/loading"]
    ),
    errorCustomers: computed<string | null | undefined>(
      () => store.getters["customers/error"]
    ),
    fetchCustomers: () => store.dispatch("customers/fetchCustomers"),
    /**============================================
     *               Employees
     *=============================================**/
    allEmployees: computed<Employee[]>(
      () => store.getters["employees/allEmployees"]
    ),
    loadingEmployees: computed<boolean>(
      () => store.getters["employees/loading"]
    ),
    errorEmployees: computed<string | null | undefined>(
      () => store.getters["employees/error"]
    ),
    fetchEmployees: () => store.dispatch("employees/fetchEmployees"),
    /**============================================
     *               Orders
     *=============================================**/
    allOrders: computed<Order[]>(() => store.getters["orders/allOrders"]),
    loadingOrders: computed<boolean>(() => store.getters["orders/loading"]),
    errorOrders: computed<string | null | undefined>(
      () => store.getters["orders/error"]
    ),
    fetchOrders: () => store.dispatch("orders/fetchOrders"),
    /**============================================
     *               Products
     *=============================================**/
    allProducts: computed<Product[]>(
      () => store.getters["products/allProducts"]
    ),
    loadingProducts: computed<boolean>(() => store.getters["products/loading"]),
    errorProducts: computed<string | null | undefined>(
      () => store.getters["products/error"]
    ),
    fetchProducts: () => store.dispatch("products/fetchProducts"),
  };
}
