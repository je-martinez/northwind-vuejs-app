import { UnsplashUrls } from "./unsplash.types";

export interface Region {
  id: number;
  name: string;
  territories: Territory[];
  photos?: UnsplashUrls;
}

export interface Territory {
  territoryId: number;
  name: string;
}

export type RegionsResponse = Array<Region>;
