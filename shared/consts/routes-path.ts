export const PATH_INDEX = "/";

const PATH_SERVICES = "/services/";

const PATH_ABOUT_US = "/about-us/";

const PATH_CONTACTS = "/contacts/";

export const ROUTES_PATH = {
  PATH_SERVICES,
  PATH_CONTACTS,
  PATH_ABOUT_US,
} as const;

export type RoutesPath = typeof ROUTES_PATH;
