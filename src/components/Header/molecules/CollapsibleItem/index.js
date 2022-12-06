import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./index.module.scss";

const CollapsibleItem = ({ title, products, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const handleOpen = () => setIsOpen(!isOpen);

  const renderCrossIcon = () => {
    return (
      <div
        onClick={handleOpen}
        className={classNames(styles.crossContainer, {
          [styles.crossContainerOpen]: isOpen,
        })}
      >
        <div />
        <div />
      </div>
    );
  };

  const renderItems = () => {
    return products.map(({ title, path }) => {
      return (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            classNames(styles.itemLink, { [styles.itemLinkActive]: isActive })
          }
        >
          {t(title)}
        </NavLink>
      );
    });
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerOpen]: isOpen,
      })}
    >
      <div className={styles.header}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            classNames(styles.link, { [styles.activeLink]: isActive })
          }
        >
          {t(title)}
        </NavLink>

        {!!products && !!products.length && renderCrossIcon()}
      </div>

      <div
        className={classNames(styles.body, {
          [styles.bodyOpen]: isOpen && !!products && !!products.length,
        })}
      >
        {renderItems()}
      </div>
    </div>
  );
};

CollapsibleItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  path: PropTypes.string.isRequired,
};

CollapsibleItem.defaultProps = {
  items: [],
};

export default CollapsibleItem;
