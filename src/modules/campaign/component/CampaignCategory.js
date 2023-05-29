import React from "react";

const CampaignCategory = ({ icon, category = "", className = "text-xs" }) => {
  return (
    <div className={`flex gap-[10px] items-baseline ${className}`}>
      <span>{icon}</span>
      <span className="font-medium text-text3">{category}</span>
    </div>
  );
};

export default CampaignCategory;
