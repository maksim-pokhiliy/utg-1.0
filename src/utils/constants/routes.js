import MainPage from "../../pages/MainPage";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";

export const ROOT = "/";
export const COLLECTIONS = `${ROOT}collections${ROOT}`;
export const CARRIERS = `${COLLECTIONS}carriers${ROOT}`;
export const ADAPT_SYSTEM = `${COLLECTIONS}adapt-system${ROOT}`;
export const POCKETS = `${COLLECTIONS}pockets${ROOT}`;
export const ACCESSORIES = `${COLLECTIONS}accessories${ROOT}`;
export const ARMOR = `${COLLECTIONS}armor${ROOT}`;
export const PRODUCT = `${COLLECTIONS}:collectionId/:productId`;

export const PUBLIC_ROUTES = {
  [ROOT]: MainPage,
  [COLLECTIONS]: MainPage,
  [CARRIERS]: CategoryPage,
  [ADAPT_SYSTEM]: CategoryPage,
  [POCKETS]: CategoryPage,
  [ACCESSORIES]: CategoryPage,
  [ARMOR]: CategoryPage,
  [PRODUCT]: ProductPage,
};
