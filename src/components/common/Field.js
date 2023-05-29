import React from "react";
import PropTypes from "prop-types";

const Field = ({ children, className = "", error = "" }) => {
  return (
    <div className={`flex flex-col gap-[10px] lg:mb-5 mb-[15px] ${className}`}>
      {children}
      {error && <p className="text-xs transition-all text-error">{error}</p>}
    </div>
  );
};
Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
};
export default Field;
