import React from "react";

import { MENU_ITEMS } from "../../utils/constants/navigation";

import NavigationMenu from "./molecules/NavigationMenu";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationMenu menuItems={MENU_ITEMS} />
    </header>
  );
};

export default Header;
