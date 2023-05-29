import React from "react";
import { useDropdownContext } from "./dropdown-context";

const Option = ({ children, onClick }) => {
  const { setShow } = useDropdownContext();

  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <p
      onClick={handleClick}
      className="capitalize px-5 py-4 font-light cursor-pointer text-sm hover:bg-gray-200 hover:text-primary text-text3"
    >
      {children}
    </p>
  );
};

export default Option;
