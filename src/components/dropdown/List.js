import React from "react";
import { useDropdownContext } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdownContext();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-10 w-full shadow-md options-dropdown rounded-xl top-full bg-lite max-h-[250px] overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
