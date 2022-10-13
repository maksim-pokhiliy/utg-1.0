import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const CollapsibleItem = ({ title, items, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderCollapseIcon = () => {
    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(styles.collapseContainer, {
          [styles.collapseContainerOpen]: isOpen,
        })}
      >
        <div />
        <div />
      </div>
    );
  };

  const renderItems = () => {
    return items.map(({ title, path }) => {
      return (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            classNames(styles.itemLink, { [styles.itemLinkActive]: isActive })
          }
        >
          {title}
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
          to={`/${path}`}
          className={({ isActive }) =>
            classNames(styles.link, { [styles.activeLink]: isActive })
          }
        >
          {title}
        </NavLink>

        {!!items && !!items.length && renderCollapseIcon()}
      </div>

      <div
        className={classNames(styles.body, {
          [styles.bodyOpen]: isOpen && !!items && !!items.length,
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
