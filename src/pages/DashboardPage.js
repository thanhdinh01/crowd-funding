import React from "react";
import Heading from "../components/common/Heading";
import GridLayout from "../components/common/GridLayout";
import CampaignItem from "../modules/campaign/CampaignItem";
import CampaignMain from "../modules/campaign/CampaignMain";

const DashboardPage = () => {
  return (
    <>
      <Heading number={4} className="mb-5">
        Your Campaign
      </Heading>
      <GridLayout cols="1" className="mb-10">
        <CampaignMain></CampaignMain>
      </GridLayout>
      <Heading className="mb-5">Popular Campaign</Heading>
      <div className="grid grid-cols-4 gap-8 mb-10">
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </div>
      <Heading className="mb-5">Recent Campaign</Heading>
      <div className="grid grid-cols-4 gap-8 mb-10">
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </div>
    </>
  );
};

export default DashboardPage;
