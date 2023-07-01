import React from "react";
import classes from "./Topbar.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setCollapsed } from "../../../Store/Project/ProjectSlice";
import { Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Topbar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: any) => state.project.collapsed);
  const dashboardScreen = useSelector((state: any) => state.project.dashboard);
  return (
    <>
      <div className={classes.topbarWrapper}>
        <div className={classes.container}>
          <div className={classes.dashTitle}>
            <div
              onClick={() => dispatch(setCollapsed(!collapsed))}
              className={classes.collapse}
            >
              {collapsed ? (
                <ArrowForwardIosIcon fontSize="small" color="action" />
              ) : (
                <ArrowBackIosIcon fontSize="small" color="action" />
              )}
            </div>
            <div className={classes.title}>
              {dashboardScreen === "allCampaigns" ? (
                <h2>All Campaigns List</h2>
              ) :  dashboardScreen === "createCampaigns" ? (
                <h2>Create Campaigns</h2>
              ) : (
                <h2>Email Analytics Dashboard</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
