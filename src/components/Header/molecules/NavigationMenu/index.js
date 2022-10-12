import React, { useState } from "react";
import PropTypes from "prop-types";

import Logo from "../../../Logo";

import styles from "./index.module.scss";
import classNames from "classnames";

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
      <Burger isOpen={isOpen} handleClick={handleBurgerClick} />

      <Logo />
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

NavigationMenu.propTypes = {
  menuItems: PropTypes.object.isRequired,
};

export default NavigationMenu;
