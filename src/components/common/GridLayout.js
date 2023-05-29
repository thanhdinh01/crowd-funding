import React from "react";

const GridLayout = ({ cols = "4", gap = "10", children, className = "" }) => {
  return (
    <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default GridLayout;
