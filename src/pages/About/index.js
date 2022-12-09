import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PUBLIC_ROUTES } from "../../utils/constants/routes";

import donate from "../../assets/images/no_commercial.JPG";

import styles from "./index.module.scss";

const About = () => {
  const { pathname } = useLocation();
  const { title } = PUBLIC_ROUTES[pathname] || PUBLIC_ROUTES[`${pathname}/`];

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t(title)}</p>

      <p className={styles.text}>
        {t(
          "This site was created exclusively as a volunteer project. The idea appeared due to numerous requests from subscribers to make merch and as another opportunity to collect a resource to cover the needs of the under-boss's special unit."
        )}
      </p>

      <p className={styles.text}>
        {t(
          "All proceeds from the sale will be used to purchase equipment, consumables, and repair equipment. After the start of sales, another section with reports will appear here."
        )}
      </p>

      <img src={donate} alt="no commercial" className={styles.image} />
    </div>
  );
};

export default About;
