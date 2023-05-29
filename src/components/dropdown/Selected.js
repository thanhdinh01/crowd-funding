import React from "react";
import { useDropdownContext } from "./dropdown-context";

const Selected = ({ placeholder }) => {
  const { show, toggleDropdown } = useDropdownContext();
  return (
    <div
      className="flex items-center text-sm font-medium text-text4 capitalize justify-between px-[25px] py-[15px] bg-transparent border rounded-xl cursor-pointer selected-option border-strokeColor"
      onClick={toggleDropdown}
    >
      <span
        className={
          placeholder.includes("Select") ? "" : "text-text1 text-sm font-medium"
        }
      >
        {placeholder}
      </span>
      <span className="icon">
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Selected;
