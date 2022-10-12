import MainPage from "../../pages/MainPage";
import CategoryPage from "../../pages/CategoryPage";

export const ROOT = "/";
export const CARRIERS = `${ROOT}carriers`;
export const ADAPT_SYSTEM = `${ROOT}adapt-system`;
export const POCKETS = `${ROOT}pockets`;
export const ACCESSORIES = `${ROOT}accessories`;
export const ARMOR = `${ROOT}armor`;

export const PUBLIC_ROUTES = {
  [ROOT]: MainPage,
  [CARRIERS]: CategoryPage,
  [ADAPT_SYSTEM]: CategoryPage,
  [POCKETS]: CategoryPage,
  [ACCESSORIES]: CategoryPage,
  [ARMOR]: CategoryPage,
};
