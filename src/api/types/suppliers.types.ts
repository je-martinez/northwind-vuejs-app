import { UnsplashUrls } from "./unsplash.types";

export interface Supplier {
  id: number;
  companyName: string;
  contactName: string;
  contactTitle?: string;
  address: SupplierAddress;
  photos?: UnsplashUrls;
}

export interface SupplierAddress {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: number | string;
  country?: string;
  phone: number | string;
}

export type SuppliersResponse = Array<Supplier>;
