import React from "react";
import { useDropdownContext } from "./dropdown-context";

const Search = ({ placeholder = "", onChange = () => {}, error = "" }) => {
  const { show } = useDropdownContext();
  return (
    <>
      {show && (
        <div className="px-5 py-4 bg-lite sticky top-0 z-10">
          <input
            onChange={onChange}
            placeholder={placeholder}
            className="px-3 py-2 text-sm w-full rounded-md  border border-strokeColor"
          ></input>
          {error.length > 0 && (
            <p className="text-xs transition-all text-error">{error}</p>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
