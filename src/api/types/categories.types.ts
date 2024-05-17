import { Product } from "./products.types";
import { UnsplashUrls } from "./unsplash.types";

export interface Category extends CategoryRelations {
  id: number;
  description: string;
  name: string;
  photos?: UnsplashUrls;
}

interface CategoryRelations {
  products?: Product[];
}

export type CategoriesResponse = Array<Category>;
