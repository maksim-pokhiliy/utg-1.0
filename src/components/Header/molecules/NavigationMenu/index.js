import React, { useState } from "react";
import classNames from "classnames";

import { MENU_ITEMS } from "../../../../utils/constants/navigation";

import Logo from "../../../Logo";
import CollapsibleItem from "../CollapsibleItem";

import styles from "./index.module.scss";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.sideMenuContainer, {
          [styles.sideMenuContainerActive]: isOpen,
        })}
      >
        <div className={styles.sideMenuScrollContainer}>
          {Object.keys(MENU_ITEMS).map((item) => {
            return (
              <CollapsibleItem key={item} path={item} {...MENU_ITEMS[item]} />
            );
          })}
        </div>
      </div>

      <div
        onClick={handleBurgerClick}
        className={classNames(styles.hamburger, {
          [styles.hamburgerActive]: isOpen,
        })}
      >
        <span className={classNames(styles.hamburgerItem)} />
        <span className={classNames(styles.hamburgerItem)} />
        <span className={classNames(styles.hamburgerItem)} />
      </div>

      <Logo className={styles.logo} />
    </div>
  );
};

export default NavigationMenu;
