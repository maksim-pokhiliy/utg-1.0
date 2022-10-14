import carriers from "../../assets/images/products/carriers.png";
import adapt from "../../assets/images/products/adapt.png";
import pockets from "../../assets/images/products/pockets.png";
import accessories from "../../assets/images/products/accessories.png";
import armor from "../../assets/images/products/armor.png";
import chesty from "../../assets/images/products/chesty.png";
import slickster from "../../assets/images/products/slickster.png";

export const PRODUCTS = {
  collections: {
    title: "All Categories",
    carriers: {
      title: "Carriers",
      image: carriers,
      path: "collections/carriers/",
      products: [
        {
          title: "FCPC V5 Base",
          image: carriers,
          price: "$25",
          path: "/collections/carriers/fcpc",
        },
        {
          title: "The Slickster",
          image: chesty,
          price: "$25",
          path: "/collections/carriers/slickster",
        },
        {
          title: "Chesty Rig",
          image: slickster,
          price: "$25",
          path: "/collections/carriers/chesty-rigs",
        },
      ],
    },
    "adapt-system": {
      title: "ADAPT System",
      image: adapt,
      path: "collections/adapt-system/",
      products: [
        {
          title: "FCPC V5 Base",
          image: carriers,
          price: "$25",
          path: "/collections/adapt-system/fcpc",
        },
        {
          title: "The Slickster",
          image: chesty,
          price: "$25",
          path: "/collections/adapt-system/slickster",
        },
        {
          title: "Chesty Rig",
          image: slickster,
          price: "$25",
          path: "/collections/adapt-system/chesty-rigs",
        },
      ],
    },
    pockets: {
      title: "Pockets",
      image: pockets,
      path: "collections/pockets/",
      products: [
        {
          title: "FCPC V5 Base",
          image: carriers,
          price: "$25",
          path: "/collections/pockets/fcpc",
        },
        {
          title: "The Slickster",
          image: chesty,
          price: "$25",
          path: "/collections/pockets/slickster",
        },
        {
          title: "Chesty Rig",
          image: slickster,
          price: "$25",
          path: "/collections/pockets/chesty-rigs",
        },
      ],
    },
    accessories: {
      title: "Accessories",
      image: accessories,
      path: "collections/accessories/",
      products: [
        {
          title: "FCPC V5 Base",
          image: carriers,
          price: "$25",
          path: "/collections/accessories/fcpc",
        },
        {
          title: "The Slickster",
          image: chesty,
          price: "$25",
          path: "/collections/accessories/slickster",
        },
        {
          title: "Chesty Rig",
          image: slickster,
          price: "$25",
          path: "/collections/accessories/chesty-rigs",
        },
      ],
    },
    armor: {
      title: "Armor",
      image: armor,
      path: "collections/armor/",
      products: [
        {
          title: "FCPC V5 Base",
          image: carriers,
          price: "$25",
          path: "/collections/armor/fcpc",
        },
        {
          title: "The Slickster",
          image: chesty,
          price: "$25",
          path: "/collections/armor/slickster",
        },
        {
          title: "Chesty Rig",
          image: slickster,
          price: "$25",
          path: "/collections/armor/chesty-rigs",
        },
      ],
    },
  },
};
