import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = ({
  children,
  type = "text",
  placeholder = "",
  name = "",
  control,
  error = null,
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative">
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className={`px-[25px] py-[15px] rounded-xl border ${
          error
            ? "border-error dark:border-error"
            : "border-strokeColor dark:border-darkStroke"
        } placeholder:text-text4 text-sm text-text1 font-medium w-full bg-transparent dark:placeholder:text-text2 dark:text-white`}
        {...field}
      />
      {children && (
        <span className="absolute top-2/4 -translate-y-2/4 right-4">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.object,
};

export default Input;
