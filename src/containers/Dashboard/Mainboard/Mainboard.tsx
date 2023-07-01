import { useState } from "react";
import classes from "./Mainboard.module.scss";
import Topbar from "../Topbar/Topbar";
import GeneralBoard from "../../GeneralBoard/GeneralBoard";
import { useSelector } from "react-redux";
import Campaigns from "../../Campaigns/Campaigns";


import CreateCampaigns from "../../CreateCampaigns/CreateCampaigns";

const Mainboard = () => {
  const dashboardScreen = useSelector((state: any) => state.project.dashboard);
  return (
    <>
      <div className={classes.wrapper}>
        <Topbar />

        <div className={classes.dataBoardWrapper}>
          {dashboardScreen === "allCampaigns" ? (
            <Campaigns />
          )  : dashboardScreen === "createCampaigns" ? (
            <CreateCampaigns />
          ) : (
            <GeneralBoard />
          )}
          {/* <Campaigns/> */}
        </div>
      </div>
    </>
  );
};

export default Mainboard;
