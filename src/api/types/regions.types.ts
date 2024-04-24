export interface Region {
  id: number;
  name: string;
  territories: Territory[];
}

export interface Territory {
  territoryId: number;
  name: string;
}

export type RegionsResponse = Array<Region>;
