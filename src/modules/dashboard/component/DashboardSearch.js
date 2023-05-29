import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="max-w-[458px] w-full flex-1 relative z-50">
      <div className="h-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-full relative">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full h-full px-[25px] py-[15px] rounded-full bg-white text-text1 placeholder:text-text4 text-xs lg:text-sm"
        />
        <button className="w-[72px] h-10 absolute top-2/4 bg-primary text-white flex items-center justify-center rounded-full -translate-y-2/4 right-[7px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="absolute md:w-[840px] md:max-h-[600px] w-full top-full left-0 translate-y-5 bg-white rounded-[20px]">
          <div className="bg-graySoft rounded-[20px] relative h-[70px]">
            <p className="w-full h-full px-[25px] py-[24px] text-sm font-medium text-text1 underline">
              See all 10,124 fundraisier
            </p>
            <button className="absolute w-[72px] h-[50px] rounded-xl cursor-pointer flex items-center justify-center bg-error bg-opacity-20 text-error top-2/4 -translate-y-2/4 right-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="py-5 px-[25px]">
            <div className="mb-[25px]">
              <div className="py-[5px] mb-[15px] flex gap-5 items-center ">
                <img
                  src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  className="w-[50px] h-[50px] object-cover rounded-xl"
                />
                <div className="">
                  <Link to={"/#"} className="text-sm text-text1 mb-[5px]">
                    <strong>Education</strong> fund for Durgham Family
                  </Link>
                  <p className="text-sm text-text3">By Durgham Family</p>
                </div>
              </div>
              <div className="py-[5px] mb-[15px] flex gap-5 items-center ">
                <img
                  src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  className="w-[50px] h-[50px] object-cover rounded-xl"
                />
                <div className="">
                  <Link to={"/#"} className="text-sm text-text1 mb-[5px]">
                    <strong>Education</strong> fund for Durgham Family
                  </Link>
                  <p className="text-sm text-text3">By Durgham Family</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-text1 mb-[15px]">
                Releted searchs
              </p>
              <div className="text-sm font-normal text-text2 flex flex-col gap-[10px]">
                <span>
                  <span className="font-medium text-text1">education</span> fund
                </span>
                <span>
                  <span className="font-medium text-text1">education</span> fund
                </span>
                <span>
                  <span className="font-medium text-text1">education</span> fund
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSearch;
