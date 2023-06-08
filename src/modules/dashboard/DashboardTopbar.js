import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardSearch from "./component/DashboardSearch";
import Button from "../../components/button/Button";
import DashboardFundrising from "./component/DashboardFundrising";

const DashboardTopbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex flex-1 gap-[66px] h-[52px]">
        <Link to={"/"} className="flex-shrink-0 inline-block ">
          <img srcSet="../images/logo.png 2x" alt="logo" />
        </Link>
        <DashboardSearch></DashboardSearch>
      </div>
      <div className="flex justify-end flex-1 gap-10">
        <DashboardFundrising></DashboardFundrising>
        <Button
          kind="secondary"
          href="/campaign/add-new"
          className="px-[26px] "
        >
          Start a campaign
        </Button>
        <img
          src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-[52px] h-[52px] object-cover rounded-full cursor-pointer"
          onClick={() => navigate("/sign-in")}
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
