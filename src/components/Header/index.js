import React from "react";
import NavigationMenu from "./molecules/NavigationMenu";

import styles from "./index.module.scss";

const menuItems = {};

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationMenu menuItems={menuItems} />
    </header>
  );
};

export default Header;
