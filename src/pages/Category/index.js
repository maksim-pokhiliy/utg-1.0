import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

import { PUBLIC_ROUTES as PRODUCTS } from "../../utils/constants/routes";
import {
  PRODUCT_AVAILABLE,
  PRODUCT_NOT_AVAILABLE,
} from "../../utils/constants/common";

import styles from "./index.module.scss";

const CategoryPage = () => {
  const { pathname } = useLocation();
  const { title, products } = PRODUCTS[pathname] || PRODUCTS[`${pathname}/`];

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const preparePrice = (price) => {
    if (language === "en") {
      return `${t("For donate")} ${t("$")}${Math.round(price / 36.5)}`;
    }

    return `${t("For donate")} ${price} ${t("$")}`;
  };

  const renderPrice = (availability, price) => {
    switch (availability) {
      case PRODUCT_AVAILABLE: {
        return <p className={styles.categoryPrice}>{preparePrice(price)}</p>;
      }

      case PRODUCT_NOT_AVAILABLE: {
        return <p className={styles.soldOut}>{t("Not available")}</p>;
      }

      default: {
        return <></>;
      }
    }
  };

  const renderProducts = () => {
    return products.map((product) => {
      const { title, image, path, price, availability } = product;

      return (
        <NavLink key={title} className={styles.categoryContainer} to={path}>
          <p className={styles.categoryTitle}>{t(title)}</p>

          <img src={image} alt="category" className={styles.image} />

          {renderPrice(availability, price)}
        </NavLink>
      );
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t(title)}</p>

      <div className={styles.categories}>{renderProducts()}</div>
    </div>
  );
};

export default CategoryPage;
