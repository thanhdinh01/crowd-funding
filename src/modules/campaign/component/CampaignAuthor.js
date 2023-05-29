import React from "react";

const CampaignAuthor = ({ src = "", author = "" }) => {
  return (
    <div className="flex items-center mt-auto">
      <img
        src={src}
        alt=""
        className="w-[30px] h-[30px] object-cover rounded-full"
      />
      <span className="text-xs font-normal text-text3 ml-[10px]">by</span>
      <span className="text-xs font-semibold text-text2 ml-[4px]">
        {author}
      </span>
    </div>
  );
};

export default CampaignAuthor;
