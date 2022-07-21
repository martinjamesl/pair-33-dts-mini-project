import axios from "axios";

export const API_KEY = "8b112bc9eadc58813c8f4b8641a05af2";
const BASE_URL = "https://api.themoviedb.org/";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/";

export const urlRequest = axios.create({
  baseURL: BASE_URL,
});
