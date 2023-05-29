import React from "react";

const CampaignMeta = ({
  size = "small",
  amount = "$2,000",
  text = "Raised of $1,900",
  gap = "3px",
}) => {
  return (
    <div className="flex-1">
      <p
        className={`text-text2 mb-[${gap}] ${
          size === "small" ? "text-sm font-semibold" : "text-xl font-bold"
        }`}
      >
        {amount}
      </p>
      <p
        className={` font-normal text-text4 ${
          size === "small" ? "text-xs" : "text-base"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CampaignMeta;
