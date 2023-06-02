import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ children, onClick = () => {}, checked, error }) => {
  // console.log(checked);

  return (
    <div className="lg:mb-5 mb-[15px]">
      <div className="flex gap-5 mb-1">
        <div
          className="flex items-start justify-center cursor-pointer"
          onClick={onClick}
        >
          <input
            type="checkbox"
            className="hidden"
            checked={checked}
            onChange={() => {}}
          />
          {checked ? (
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="3.5"
                  stroke="#B2B3BD"
                />
                <rect width="20" height="20" rx="4" fill="#1DC071" />
                <path
                  d="M5 10.5L8.33333 14L15 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ) : (
            <div className="w-5 h-5 border-[2px] rounded border-strokeColor"></div>
          )}
        </div>
        <div onClick={onClick} className="flex-1 cursor-pointer">
          {children}
        </div>
      </div>
      {error && <p className="text-xs transition-all text-error">{error}</p>}
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.string,
};

export default Checkbox;
