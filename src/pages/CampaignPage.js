import React from "react";
import Heading from "../components/common/Heading";
import CampaignMain from "../modules/campaign/CampaignMain";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="mb-10 bg-white rounded-[20px] flex items-center gap-[25px] py-[31px] px-10 ">
        <Button
          href="/campaign/add-new"
          kind="secondary"
          className="!rounded-full bg-opacity-40 w-[54px] h-[54px] mb-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <div className="flex flex-col gap-2">
          <p className="text-text1 text-[22px] font-semibold">
            Create Your Campaign
          </p>
          <span className="text-sm font-normal text-text3">
            Jump right into our editor and create your first Virtue campaign!
          </span>
          <Link to={"/#"} className="text-sm font-normal text-primary">
            Need any help? Learn More...
          </Link>
        </div>
        <Button
          kind="ghost"
          className="w-[200px] h-[52px] ml-auto"
          href="/campaign/add-new"
        >
          Create campaign
        </Button>
      </div>
      <div className="mb-10">
        <Heading number="4" className="mb-5">
          Your Campaign
        </Heading>
        <div className="grid grid-cols-1 gap-10">
          <CampaignMain></CampaignMain>
          <CampaignMain></CampaignMain>
          <Button
            type="button"
            kind="ghost"
            className="mx-auto py-[13px] px-[56px]"
          >
            See more+
          </Button>
        </div>
      </div>
      <div>
        <Heading number="4" className="mb-5">
          Your Campaign
        </Heading>
        <div className="grid grid-cols-1 gap-10">
          <CampaignMain></CampaignMain>
          <CampaignMain></CampaignMain>
          <Button
            type="button"
            kind="ghost"
            className="mx-auto py-[13px] px-[56px]"
          >
            See more+
          </Button>
        </div>
      </div>
    </>
  );
};

export default CampaignPage;
