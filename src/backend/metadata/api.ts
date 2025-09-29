import { ofetch } from "ofetch";

/**
 * Retrieves the TMDB API key from the global window configuration.
 * Throws an error if the key is not found.
 */
function getTmdbApiKey(): string {
  const apiKey = window.__CONFIG__?.VITE_TMDB_READ_API_KEY;
  if (!apiKey) {
    throw new Error("VITE_TMDB_READ_API_KEY is not configured in window.__CONFIG__");
  }
  return apiKey;
}

/**
 * A pre-configured ofetch instance for the TMDB API.
 * It automatically includes the API key in every request.
 */
export const tmdbApi = ofetch.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: getTmdbApiKey(),
  },
});