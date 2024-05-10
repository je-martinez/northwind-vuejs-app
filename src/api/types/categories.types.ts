import { UnsplashUrls } from "./unsplash.types";

export interface Category {
  id: number;
  description: string;
  name: string;
  photos?: UnsplashUrls;
}

export type CategoriesResponse = Array<Category>;
