import React from "react";
import IconFolder from "../../components/icons/IconFolder";
import CampaignImage from "./component/CampaignImage";
import CampaignCategory from "./component/CampaignCategory";
import CampaignTitle from "./component/CampaignTitle";
import CampaignDesc from "./component/CampaignDesc";
import CampaignMeta from "./component/CampaignMeta";
import CampaignAuthor from "./component/CampaignAuthor";

const CampaignItem = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-2xl shadow-[0px_2px_4px_rgba(184,_184,_184,_0.03),_0px_6px_12px_rgba(184,_184,_184,_0.02),_0px_12px_20px_rgba(184,_184,_184,_0.03)]">
      <CampaignImage
        to="/#"
        src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className=""
      ></CampaignImage>
      <div className="flex flex-col flex-1 px-5 pb-4">
        <CampaignCategory
          icon={<IconFolder></IconFolder>}
          category="Education"
          className="mb-[15px] text-xs"
        ></CampaignCategory>
        <CampaignTitle className="text-base mb-[5px]">
          Powered Kits Learning Boxes
        </CampaignTitle>
        <CampaignDesc className="text-xs mb-[15px]">
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex gap-[50px] mb-5">
          <CampaignMeta amount="$2,000" text="Raised of $1,900"></CampaignMeta>
          <CampaignMeta amount="173" text="Total backers"></CampaignMeta>
        </div>
        <CampaignAuthor
          author="ahfuzul Nabil"
          src="../images/logo.png"
        ></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
