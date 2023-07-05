import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PUBLIC_ROUTES } from "../../utils/constants/routes";

import styles from "./index.module.scss";

const About = () => {
  const { pathname } = useLocation();
  const { title, reports } =
    PUBLIC_ROUTES[pathname] || PUBLIC_ROUTES[`${pathname}/`];

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t(title)}</p>

      <div className={styles.images}>
        {reports.map((report) => {
          return (
            <div key={report.image}>
              <img src={report.image} alt="report" className={styles.image} />

              <p className={styles.text}>{t(report.title)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
