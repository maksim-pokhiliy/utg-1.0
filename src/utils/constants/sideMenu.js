import { ABOUT, PRODUCTS, PUBLIC_ROUTES } from "./routes";

export const MENU_ITEMS = {
  ...PRODUCTS,
  [ABOUT]: PUBLIC_ROUTES[ABOUT],
};
