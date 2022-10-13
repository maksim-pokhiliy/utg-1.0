import React from "react";

import Header from "../../components/Header";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <Header />

      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainLayout;
