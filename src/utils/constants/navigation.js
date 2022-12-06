import { TSHIRTS } from "./routes";

export const MENU_ITEMS = {
  [TSHIRTS.replace("/", "")]: {
    title: "T-shirts",
    items: [
      { title: "Black 1", path: `${TSHIRTS}black1` },
      { title: "Black 2", path: `${TSHIRTS}black2` },
      { title: "Green 1", path: `${TSHIRTS}green1` },
      { title: "Green 2", path: `${TSHIRTS}green2` },
      { title: "Grey 1", path: `${TSHIRTS}grey1` },
    ],
  },
};
