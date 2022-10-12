import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { ROOT } from "../../utils/constants/routes";

import styles from "./index.module.scss";

const Logo = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <NavLink to={ROOT} className={styles.link}>
        UA Tactical Gear
      </NavLink>
    </div>
  );
};

Logo.propTypes = { className: PropTypes.string };

Logo.defaultProps = { className: "" };

export default Logo;
