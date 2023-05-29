import React from "react";
import CampaignImage from "./component/CampaignImage";
import CampaignCategory from "./component/CampaignCategory";
import IconFolder from "../../components/icons/IconFolder";
import CampaignTitle from "./component/CampaignTitle";
import CampaignDesc from "./component/CampaignDesc";
import CampaignMeta from "./component/CampaignMeta";

const CampaignMain = () => {
  return (
    <div className="w-full max-w-[1140px] flex gap-[30px]">
      <CampaignImage
        to="/#"
        src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="w-full max-w-[583px] h-[266px] rounded-3xl flex-shrink-0"
      ></CampaignImage>
      <div className="py-[17px] flex-1">
        <CampaignCategory
          icon={<IconFolder></IconFolder>}
          category="Architecture"
          className="mb-3 text-sm"
        ></CampaignCategory>
        <CampaignTitle className="text-xl font-bold mb-[15px]">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="mb-[22px] text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="h-[5px] w-full bg-[#EFEFEF] rounded-md mb-[22px]">
          <div className="w-2/4 h-full rounded-md bg-primary"></div>
        </div>
        <div className="flex gap-[65px]">
          <CampaignMeta
            size="big"
            amount="$2,000"
            text="Raised of $2,500"
          ></CampaignMeta>
          <CampaignMeta
            size="big"
            amount="173"
            text="Total backers"
          ></CampaignMeta>
          <CampaignMeta size="big" amount="30" text="Days left"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignMain;
