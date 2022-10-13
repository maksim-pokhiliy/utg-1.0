import { ACCESSORIES, ADAPT_SYSTEM, ARMOR, CARRIERS, POCKETS } from "./routes";

export const MENU_ITEMS = {
  [CARRIERS.replace("/", "")]: {
    title: "Carriers",
    items: [
      { title: "FCPC", path: `${CARRIERS}fcpc` },
      { title: "The Slickster", path: `${CARRIERS}slickster` },
      { title: "Chest Rigs", path: `${CARRIERS}chest-rigs` },
    ],
  },
  [ADAPT_SYSTEM.replace("/", "")]: {
    title: "ADAPT System",
    items: [
      { title: "FCPC", path: `${ADAPT_SYSTEM}fcpc` },
      { title: "The Slickster", path: `${ADAPT_SYSTEM}slickster` },
      { title: "Chest Rigs", path: `${ADAPT_SYSTEM}chest-rigs` },
    ],
  },
  [POCKETS.replace("/", "")]: {
    title: "Pockets",
    items: [
      { title: "FCPC", path: `${POCKETS}fcpc` },
      { title: "The Slickster", path: `${POCKETS}slickster` },
      { title: "Chest Rigs", path: `${POCKETS}chest-rigs` },
    ],
  },
  [ACCESSORIES.replace("/", "")]: {
    title: "Accessories",
    items: [
      { title: "FCPC", path: `${ACCESSORIES}fcpc` },
      { title: "The Slickster", path: `${ACCESSORIES}slickster` },
      { title: "Chest Rigs", path: `${ACCESSORIES}chest-rigs` },
    ],
  },
  [ARMOR.replace("/", "")]: {
    title: "Armor",
    items: [
      { title: "FCPC", path: `${ARMOR}fcpc` },
      { title: "The Slickster", path: `${ARMOR}slickster` },
      { title: "Chest Rigs", path: `${ARMOR}chest-rigs` },
    ],
  },
};
