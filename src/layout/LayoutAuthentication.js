import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen p-6 lg:p-10 bg-lite isolate dark:bg-darkBg">
      <img
        className="absolute bottom-0 left-0 right-0 hidden lg:block pointer-events-none z-[-1]"
        srcSet="/images/ellipse.png"
        alt=""
      />
      <Link to={"/"} className="inline-block  mb-5 lg:mb-[60px]">
        <img srcSet="/images/logo.png 2x" alt="logo" />
      </Link>
      <div className="max-w-[556px] w-full rounded-xl px-5 py-8 lg:px-16 lg:py-12 bg-white dark:bg-darkSecondary mx-auto">
        <h2 className="lg:text-xl text-lg font-semibold text-text1 mb-[5px] lg:mb-[10px] text-center dark:text-white">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default LayoutAuthentication;
