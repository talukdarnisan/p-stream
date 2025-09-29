/**
 * This file is for custom global type declarations.
 */

export interface AppConfig {
  VITE_CORS_PROXY_URL?: string;
  VITE_TMDB_READ_API_KEY?: string;
  VITE_DMCA_EMAIL?: string | null;
  VITE_NORMAL_ROUTER?: boolean;
  VITE_BACKEND_URL?: string;
  VITE_DISALLOWED_IDS?: string;
  VITE_APP_DOMAIN?: string;
}

declare global {
  interface Window {
    // This is set from public/config.js
    __CONFIG__?: AppConfig;
  }
}