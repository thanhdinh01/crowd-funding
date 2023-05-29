import React, { Fragment } from "react";
import CampaignImage from "./component/CampaignImage";
import CampaignCategory from "./component/CampaignCategory";
import CampaignTitle from "./component/CampaignTitle";
import CampaignDesc from "./component/CampaignDesc";
import CampViewAuthor from "./component/CampViewAuthor";
import CampaignMeta from "./component/CampaignMeta";
import Button from "../../components/button/Button";
import CampaignSupport from "./component/CampaignSupport";
import CampaignPerk from "./component/CampaignPerk";
import CampaignItem from "./CampaignItem";
import { v4 } from "uuid";
import IconFolder from "../../components/icons/IconFolder";
import { Link } from "react-router-dom";

const listMiddleBar = ["Campgain", "Risks", "FAQ", "Updates", "Comments"];

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage
            src="https://source.unsplash.com/random"
            className="h-[398px] mb-8"
          ></CampaignImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={v4()}
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory
            icon={<IconFolder></IconFolder>}
            category="Architecture"
            className="text-sm mb-[18px]"
          ></CampaignCategory>
          <CampaignTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
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
            <CampaignMeta
              size="big"
              amount="30"
              text="Days left"
            ></CampaignMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border border-slate-100 mb-6 shadow-[1px_0px_1px_rgba(0,_0,_0,_0.25)]">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3 ">
          {listMiddleBar.length > 0 &&
            listMiddleBar.map((item) => (
              <Link
                key={v4()}
                className="cursor-pointer font-semibold first:text-secondary"
              >
                {item}
              </Link>
            ))}
        </div>
        <Button className="text-white bg-primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl text-text1 font-semibold">
        You also may be interested in
      </h2>
      <div className="grid grid-cols-4 gap-[30px]">
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </div>
    </Fragment>
  );
};

export default CampaignView;
