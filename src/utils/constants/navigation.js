import { ACCESSORIES, ADAPT_SYSTEM, ARMOR, CARRIERS, POCKETS } from "./routes";

export const MENU_ITEMS = {
  [CARRIERS.replace("/", "")]: {
    title: "Carriers",
    items: [
      { title: "FCPC", path: `${CARRIERS}fcpc` },
      { title: "The Slickster", path: `${CARRIERS}slickster` },
      { title: "Chesty Rig", path: `${CARRIERS}chesty-rig` },
    ],
  },
  [ADAPT_SYSTEM.replace("/", "")]: {
    title: "ADAPT System",
    items: [
      { title: "FCPC", path: `${ADAPT_SYSTEM}fcpc` },
      { title: "The Slickster", path: `${ADAPT_SYSTEM}slickster` },
      { title: "Chesty Rig", path: `${ADAPT_SYSTEM}chesty-rig` },
    ],
  },
  [POCKETS.replace("/", "")]: {
    title: "Pockets",
    items: [
      { title: "FCPC", path: `${POCKETS}fcpc` },
      { title: "The Slickster", path: `${POCKETS}slickster` },
      { title: "Chesty Rig", path: `${POCKETS}chesty-rig` },
    ],
  },
  [ACCESSORIES.replace("/", "")]: {
    title: "Accessories",
    items: [
      { title: "FCPC", path: `${ACCESSORIES}fcpc` },
      { title: "The Slickster", path: `${ACCESSORIES}slickster` },
      { title: "Chesty Rig", path: `${ACCESSORIES}chesty-rig` },
    ],
  },
  [ARMOR.replace("/", "")]: {
    title: "Armor",
    items: [
      { title: "FCPC", path: `${ARMOR}fcpc` },
      { title: "The Slickster", path: `${ARMOR}slickster` },
      { title: "Chesty Rig", path: `${ARMOR}chesty-rig` },
    ],
  },
};
