import { Order } from "./orders.types";

export interface Customer extends CustomerRelations {
  id: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: CustomerAddress;
}

export interface CustomerAddress {
  street: string;
  city: string;
  region: string;
  postalCode: number | string;
  country: string;
  phone: string;
}

interface CustomerRelations {
  orders?: Order[];
}

export type CustomersResponse = Array<Customer>;
