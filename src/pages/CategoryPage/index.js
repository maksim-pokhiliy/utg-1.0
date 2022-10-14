import { get } from "lodash";
import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { PRODUCTS } from "../../utils/constants/products";

import styles from "./index.module.scss";

const CategoryPage = () => {
  const { pathname } = useLocation();

  const productsPath = pathname
    .split("/")
    .filter((el) => el)
    .join(".");

  const { title, ...rest } = useMemo(
    () => get(PRODUCTS, productsPath, PRODUCTS[Object.keys(PRODUCTS)[0]]),
    [productsPath]
  );

  const renderCategories = () => {
    if (rest.products) {
      return rest.products.map((product) => {
        const { title, image, path, price } = product;

        return (
          <NavLink key={title} className={styles.categoryContainer} to={path}>
            <p className={styles.categoryTitle}>{title}</p>

            <img src={image} alt="category" className={styles.image} />

            <p className={styles.categoryPrice}>{`from ${price}`}</p>
          </NavLink>
        );
      });
    }

    return Object.keys(rest).map((key) => {
      const { title, image, path } = rest[key];

      return (
        <NavLink key={key} className={styles.categoryContainer} to={path}>
          <p className={styles.categoryTitle}>{title}</p>

          <img src={image} alt="category" className={styles.image} />
        </NavLink>
      );
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>

      <div className={styles.categories}>{renderCategories()}</div>
    </div>
  );
};

export default CategoryPage;
