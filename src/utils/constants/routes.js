import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";

// t-shirts
import black1 from "../../assets/images/products/BLACK.jpg";
import black2 from "../../assets/images/products/BLACK1.jpg";
import green1 from "../../assets/images/products/GREEN.jpg";
import green2 from "../../assets/images/products/GREEN1.jpg";
import grey1 from "../../assets/images/products/GREY1.jpg";

export const ROOT = "/";
export const COLLECTIONS = `${ROOT}collections${ROOT}`;
export const TSHIRTS = `${COLLECTIONS}tshirts${ROOT}`;
export const PRODUCT = `${COLLECTIONS}:collectionId${ROOT}:productId${ROOT}`;

export const PRODUCTS = {
  [TSHIRTS]: {
    image: black1,
    title: "T-shirts",
    path: TSHIRTS,
    products: [
      {
        title: "Black 1",
        image: black1,
        path: `${TSHIRTS}black1${ROOT}`,
      },
      {
        title: "Black 2",
        image: black2,
        path: `${TSHIRTS}black2${ROOT}`,
      },
      {
        title: "Green 1",
        image: green1,
        path: `${TSHIRTS}green1${ROOT}`,
      },
      {
        title: "Green 2",
        image: green2,
        path: `${TSHIRTS}green2${ROOT}`,
      },
      {
        title: "Grey 1",
        image: grey1,
        path: `${TSHIRTS}grey1${ROOT}`,
      },
    ],
  },
};

export const PUBLIC_ROUTES = {
  [ROOT]: {
    title: "All categories",
    component: CategoryPage,
    path: ROOT,
    products: Object.values(PRODUCTS).map((product) => ({
      image: product.image,
      title: product.title,
      path: product.path,
    })),
  },
  [TSHIRTS]: {
    title: "T-shirts",
    component: CategoryPage,
    path: TSHIRTS,
    products: PRODUCTS[TSHIRTS].products,
  },
  [PRODUCT]: { component: ProductPage, path: PRODUCT },
};
