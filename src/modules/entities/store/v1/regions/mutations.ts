import { Region, UnsplashUrls } from "@/api/types";
import { MutationTree } from "vuex";
import { RegionState } from "./state";

const mutation: MutationTree<RegionState> = {
  setLoading(state: RegionState, loading: boolean) {
    state.loading = loading;
  },
  setRegions(state: RegionState, regions: Region[]) {
    state.regions = regions;
  },
  setRegionPhotos(
    state: RegionState,
    { id, photos }: { id: number; photos: UnsplashUrls }
  ) {
    state.regions = state.regions.map((region) => {
      if (region.id === id) {
        region.photos = { ...photos };
      }
      return region;
    });
  },
  setError(state: RegionState, error: string) {
    state.error = error;
  },
};

export default mutation;
