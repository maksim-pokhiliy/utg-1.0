import React, { useState } from "react";
import classNames from "classnames";

import { PRODUCTS } from "../../../../utils/constants/routes";

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
          {Object.keys(PRODUCTS).map((item) => {
            return (
              <CollapsibleItem key={item} path={item} {...PRODUCTS[item]} />
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
