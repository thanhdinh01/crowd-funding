import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 *
 * @param kind type: primary | secondary | ghost
 * @returns
 */

const Button = ({
  type = "button",
  children = "",
  className = "",
  isLoading,
  kind = "primary",
  ...props
}) => {
  const child = isLoading ? (
    <div className="w-8  h-8 rounded-full border-[3px] border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultClassName =
    "inline-flex items-center justify-center rounded-xl font-semibold p-[13px]";
  switch (kind) {
    case "primary":
      defaultClassName += " bg-primary text-white";
      break;

    case "secondary":
      defaultClassName += " bg-secondary text-white";
      break;

    case "ghost":
      defaultClassName += " bg-secondary bg-opacity-20 text-secondary";
      break;

    default:
      break;
  }

  if (props.href) {
    return (
      <Link to={props.href} className={`${className} ${defaultClassName}`}>
        {" "}
        {child}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={` ${className} ${defaultClassName} ${
        isLoading && "opacity-50"
      }`}
      {...props}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  kind: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
