import axios from "axios";
import {
  CustomersResponse,
  EmployeesResponse,
  CategoriesResponse,
  OrdersResponse,
  ProductsResponse,
  SuppliersResponse,
} from "@/api/types";
import { RegionsResponse } from "./types/regions.types";

const northwindApi = axios.create({
  baseURL: "https://northwind.vercel.app/api",
});

const getCategories = async () => {
  return northwindApi.get<CategoriesResponse>("/categories");
};

const getCustomers = async () => {
  return northwindApi.get<CustomersResponse>("/customers");
};

const getEmployees = async () => {
  return northwindApi.get<EmployeesResponse>("/employess");
};

const getOrders = async () => {
  return northwindApi.get<OrdersResponse>("/orders");
};

const getProducts = async () => {
  return northwindApi.get<ProductsResponse>("/products");
};

const getSuppliers = async () => {
  return northwindApi.get<SuppliersResponse>("/suppliers");
};

const getRegions = async () => {
  return northwindApi.get<RegionsResponse>("/regions");
};

const getShippers = async () => {
  return northwindApi.get("/shippers");
};

export {
  getCategories,
  getCustomers,
  getEmployees,
  getOrders,
  getProducts,
  getSuppliers,
  getRegions,
  getShippers,
};
