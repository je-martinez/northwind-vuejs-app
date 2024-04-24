export interface Shipper {
  id: number;
  companyName: string;
  phone: string;
}

export type ShippersResponse = Array<Shipper>;
