import React, { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { PUBLIC_ROUTES as PRODUCTS, ROOT } from "../../utils/constants/routes";

import styles from "./index.module.scss";

const ProductPage = () => {
  const { pathname } = useLocation();

  const product = useMemo(() => {
    const splittedPathname = pathname.split("/").filter((el) => el);
    const categoryPathName = `${ROOT}${splittedPathname[0]}${ROOT}${splittedPathname[1]}${ROOT}`;
    const category = PRODUCTS[categoryPathName];
    const product = category.products.find((el) => el.path.includes(pathname));

    return product;
  }, [pathname]);

  if (!product) {
    return <Navigate to={ROOT} />;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>{product.title}</p>

      <img src={product.image} alt="product" className={styles.image} />

      <p className={styles.productPrice}>{`from ${product.price}`}</p>

      <a href={`https://t.me/makspooh?message="hello!"`} className={styles.link}>
        Order in Telegram
      </a>
    </div>
  );
};

export default ProductPage;
