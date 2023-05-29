import React from "react";

const DashboardFundrising = () => {
  return (
    <div className="flex gap-[7px] items-center">
      <p className="text-base font-semibold text-text2 ">Fundrising for</p>
      <span className="text-iconColor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashboardFundrising;
