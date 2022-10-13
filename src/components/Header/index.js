import React from "react";

import NavigationMenu from "./molecules/NavigationMenu";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationMenu />
    </header>
  );
};

export default Header;
