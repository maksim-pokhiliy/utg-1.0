import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { PRODUCTS } from "../../../../utils/constants/routes";

import Logo from "../../../Logo";
import CollapsibleItem from "../CollapsibleItem";

import styles from "./index.module.scss";
import { MENU_ITEMS } from "../../../../utils/constants/sideMenu";

const NavigationMenu = () => {
  const { key } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => setIsOpen(!isOpen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsOpen(false);
  }, [key]);

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
              <CollapsibleItem
                key={item}
                path={item}
                {...(PRODUCTS[item] || MENU_ITEMS[item])}
              />
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
