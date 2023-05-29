import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ control, name = "", placeholder, className = "" }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      {...field}
      id={name}
      cols="30"
      rows="10"
      placeholder={placeholder}
      className="outline-none placeholder:text-text4 placeholder:text-sm placeholder:font-medium py-[15px] px-[25px] border border-strokeColor rounded-xl max-h-[140px] resize-none"
    ></textarea>
  );
};

export default Textarea;
