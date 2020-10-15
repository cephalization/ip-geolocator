export { fetchCoordinates } from "./fetchCoordinates";

const baseURL = process.env.REACT_APP_API_HOST || "/";

export const fetcher = (url: string, requestInit?: RequestInit) =>
  fetch(`${baseURL}${url}`, requestInit);
