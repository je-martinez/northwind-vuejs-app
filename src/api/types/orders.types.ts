import { Customer } from "./customers.types";
import { Employee } from "./employees.types";
import { Countries, Regions } from "./general.types";
import { Product } from "./products.types";

export interface Order extends OrderRelations {
  id: number;
  customerId: string;
  employeeId: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: OrderShipAddress;
  details: OrderDetail[];
}

export interface OrderDetail extends OrderDetailRelations {
  productId: number;
  unitPrice: number;
  quantity: number;
  discount: number;
}

export interface OrderShipAddress {
  street: string;
  city: string;
  region: Regions;
  postalCode: number;
  country: Countries;
}

interface OrderRelations {
  customer?: Customer;
  employee?: Employee;
}

interface OrderDetailRelations {
  product?: Product;
}

export type OrdersResponse = Array<Order>;
