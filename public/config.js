/**
 * @typedef {'string' | 'boolean' | 'nullable-string'} EnvVarType
 */

/**
 * Parses an environment variable from `import.meta.env` and performs type coercion.
 * @param {string} key - The environment variable key (e.g., 'VITE_NORMAL_ROUTER').
 * @param {EnvVarType} [type='string'] - The expected type of the variable.
 * @returns {string | boolean | null | undefined} The parsed value.
 */
function getEnv(key, type = 'string') {
  const value = import.meta.env[key];
  if (value === undefined) return undefined;

  switch (type) {
    case 'boolean':
      return value === 'true';
    case 'nullable-string':
      return value === 'null' ? null : value;
    default:
      return value;
  }
}

window.__CONFIG__ = {
  // The URL for the CORS proxy.
  VITE_CORS_PROXY_URL: getEnv('VITE_CORS_PROXY_URL'),

  // The READ API key to access TMDB.
  VITE_TMDB_READ_API_KEY: getEnv('VITE_TMDB_READ_API_KEY'),

  // The DMCA email displayed in the footer.
  VITE_DMCA_EMAIL: getEnv('VITE_DMCA_EMAIL', 'nullable-string'),

  // Whether to disable hash-based routing.
  VITE_NORMAL_ROUTER: getEnv('VITE_NORMAL_ROUTER', 'boolean'),

  // The backend URL to communicate with.
  VITE_BACKEND_URL: getEnv('VITE_BACKEND_URL'),

  // A comma-separated list of disallowed IDs for DMCA claims.
  VITE_DISALLOWED_IDS: getEnv('VITE_DISALLOWED_IDS'),
  VITE_APP_DOMAIN: getEnv('VITE_APP_DOMAIN'),
};
