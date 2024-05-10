import { createApi } from "unsplash-js";
import { UnsplashSearchResponse } from "./types";

const unsplash = createApi({
  accessKey: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
});

const searchPhotoByQuery = async (query: string) => {
  try {
    const { response } = await unsplash.search.getPhotos({
      query,
      perPage: 1,
    });
    return response as UnsplashSearchResponse | undefined;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching photo");
  }
};

export { searchPhotoByQuery };
