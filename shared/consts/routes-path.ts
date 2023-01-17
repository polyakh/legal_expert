export const PATH_INDEX = "/";

export const PATH_SERVICES = "/services/";

export const PATH_ABOUT_US = "/about-us/";

export const PATH_CONTACTS = "/contacts/";

export const ROUTES_PATH = {
  PATH_SERVICES,
  PATH_CONTACTS,
  PATH_ABOUT_US,
} as const;

export type RoutesPath = typeof ROUTES_PATH;
