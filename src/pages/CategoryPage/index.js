import { get } from "lodash";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { PRODUCTS } from "../../utils/constants/products";

const CategoryPage = () => {
  const { pathname } = useLocation();

  const categoryPath = pathname
    .split("/")
    .filter((el) => el)
    .join(".");

  const category = useMemo(
    () => get(PRODUCTS, categoryPath, PRODUCTS),
    [categoryPath]
  );
  // const categoryData = useMemo(() => {
  //   switch (true) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // }, [pathname]);

  console.log({ pathname, categoryPath, category });

  return <></>;
};

export default CategoryPage;
