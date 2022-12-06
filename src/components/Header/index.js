import React from "react";

import NavigationMenu from "./molecules/NavigationMenu";
import LanguageSelect from "./molecules/LanguageSelect";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <NavigationMenu />

      <LanguageSelect />
    </header>
  );
};

export default Header;
