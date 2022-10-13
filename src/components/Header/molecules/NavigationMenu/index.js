import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Logo from "../../../Logo";
import CollapsibleItem from "../CollapsibleItem";

import styles from "./index.module.scss";

const Menu = ({ menuItems, isOpen }) => {
  return (
    <div
      className={classNames(styles.menuContainer, {
        [styles.menuContainerActive]: isOpen,
      })}
    >
      {Object.keys(menuItems).map((item) => {
        return <CollapsibleItem key={item} path={item} {...menuItems[item]} />;
      })}
    </div>
  );
};

const Burger = ({ isOpen, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(!isOpen)}
      className={classNames(styles.hamburger, {
        [styles.hamburgerActive]: isOpen,
      })}
    >
      <span className={classNames(styles.hamburgerItem)} />
      <span className={classNames(styles.hamburgerItem)} />
      <span className={classNames(styles.hamburgerItem)} />
    </div>
  );
};

const NavigationMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = (newIsOpen) => setIsOpen(newIsOpen);

  return (
    <div className={styles.container}>
      <Menu menuItems={menuItems} isOpen={isOpen} />

      <Burger isOpen={isOpen} handleClick={handleBurgerClick} />

      <Logo />
    </div>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

NavigationMenu.propTypes = {
  menuItems: PropTypes.object.isRequired,
};

export default NavigationMenu;
