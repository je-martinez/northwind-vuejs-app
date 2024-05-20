import { Region } from "@/api/types";

export interface RegionState {
  loading: boolean;
  regions: Region[];
  selectedRegion: Region | null | undefined;
  error: string | null | undefined;
}

function state(): RegionState {
  return {
    loading: false,
    regions: [],
    selectedRegion: null,
    error: null,
  };
}

export default state;
