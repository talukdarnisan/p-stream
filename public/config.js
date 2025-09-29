window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: import.meta.env.VITE_CORS_PROXY_URL,

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: import.meta.env.VITE_TMDB_READ_API_KEY,

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: import.meta.env.VITE_DMCA_EMAIL === 'null' ? null : import.meta.env.VITE_DMCA_EMAIL,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: import.meta.env.VITE_NORMAL_ROUTER === 'true',

  // The backend URL to communicate with
  VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: import.meta.env.VITE_DISALLOWED_IDS,
  VITE_APP_DOMAIN: import.meta.env.VITE_APP_DOMAIN
};
