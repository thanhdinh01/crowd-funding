import React from "react";

const CampaignTitle = ({ children, className = "mb-[5px] text-base" }) => {
  return (
    <h2 className={`${className}  font-semibold text-text1 `}>{children}</h2>
  );
};

export default CampaignTitle;
