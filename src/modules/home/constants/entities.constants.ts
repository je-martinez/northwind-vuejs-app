import { EntityItem } from "../types";

export const EntityList: EntityItem[] = [
  {
    id: "categories",
    name: "Categories",
    description: "Categorize products into distinct groups.",
    image: require("@/assets/images/categories.png"),
  },
  {
    id: "customers",
    name: "Customers",
    description: "Represent entities purchasing products or services.",
    image: require("@/assets/images/customers.png"),
  },
  {
    id: "employees",
    name: "Employees",
    description: "Represent individuals employed by the company.",
    image: require("@/assets/images/employees.png"),
  },
  {
    id: "orders",
    name: "Orders",
    description: "Capture details of transactions made by customers.",
    image: require("@/assets/images/orders.png"),
  },
  {
    id: "products",
    name: "Products",
    description: "Store information about the items available for sale.",
    image: require("@/assets/images/products.png"),
  },
  {
    id: "regions",
    name: "Regions",
    description: "Represents geographical regions or areas.",
    image: require("@/assets/images/regions.png"),
  },
  {
    id: "shippers",
    name: "Shippers",
    description: "List shipping companies used for order delivery.",
    image: require("@/assets/images/shippers.png"),
  },
  {
    id: "suppliers",
    name: "Suppliers",
    description: "Provide details about companies supplying products.",
    image: require("@/assets/images/suppliers.png"),
  },
];
