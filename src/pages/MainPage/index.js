import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import { PRODUCTS } from "../../utils/constants/products";

import styles from "./index.module.scss";

const MainPage = () => {
  const { title, ...rest } = useMemo(
    () => PRODUCTS[Object.keys(PRODUCTS)[0]],
    []
  );

  const renderCategories = () => {
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

export default MainPage;
