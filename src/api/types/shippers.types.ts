import { UnsplashUrls } from "./unsplash.types";

export interface Shipper {
  id: number;
  companyName: string;
  phone: string;
  photos?: UnsplashUrls;
}

export type ShippersResponse = Array<Shipper>;
