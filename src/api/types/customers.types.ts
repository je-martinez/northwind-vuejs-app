export interface CustomersResponse {
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
