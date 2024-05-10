export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhotoResult[];
}

export interface UnsplashPhotoResult {
  id: string;
  created_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: UnsplashUser;
  current_user_collections: unknown[];
  urls: UnsplashUrls;
  links: ResultLinks;
}

export interface ResultLinks {
  self: string;
  html: string;
  download: string;
}

export interface UnsplashUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface UnsplashUser {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: UnsplashProfileImage;
  links: UnsplashUserLinks;
}

export interface UnsplashUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
}

export interface UnsplashProfileImage {
  small: string;
  medium: string;
  large: string;
}
