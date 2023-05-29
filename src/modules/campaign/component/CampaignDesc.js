import React from "react";

const CampaignDesc = ({ children, className = "text-xs mb-[15px]" }) => {
  return <p className={`${className} font-normal text-text3`}>{children}</p>;
};

export default CampaignDesc;
