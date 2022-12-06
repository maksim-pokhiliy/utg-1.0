import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { PUBLIC_ROUTES as PRODUCTS } from "../../utils/constants/routes";

import styles from "./index.module.scss";

const CategoryPage = () => {
  const { pathname } = useLocation();
  const { title, products } = PRODUCTS[pathname] || PRODUCTS[`${pathname}/`];

  const renderCategories = () => {
    return products.map((product) => {
      const { title, image, path, price } = product;

      return (
        <NavLink key={title} className={styles.categoryContainer} to={path}>
          <p className={styles.categoryTitle}>{title}</p>

          <img src={image} alt="category" className={styles.image} />

          {price && <p className={styles.categoryPrice}>{`from ${price}`}</p>}
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
