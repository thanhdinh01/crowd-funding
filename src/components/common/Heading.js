import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, number = null, className = "" }) => {
  return (
    <h1 className={`text-lg font-semibold text-text1 ${className}`}>
      {children}{" "}
      <span className="text-secondary">{number ? `(${number})` : ""}</span>
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number,
};

export default Heading;
