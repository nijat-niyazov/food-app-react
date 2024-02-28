const devMode = true;

export const projectURL = devMode ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PROD_URL;
