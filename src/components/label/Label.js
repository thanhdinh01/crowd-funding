import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, className = "", name }) => {
  return (
    <label
      htmlFor={name}
      className={`text-sm font-medium cursor-pointer text-text2 dark:text-text3  ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Label;
