import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import styles from "./index.module.scss";

const Select = ({ onChange, options, value, label }) => {
  const id = useMemo(() => nanoid(), []);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      <select
        id={id}
        className={styles.select}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Select.defaultProps = {
  label: "",
};

export default Select;
