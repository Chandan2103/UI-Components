import React from "react";

import classes from "./Dashboard.module.scss";
import Mainboard from "./Mainboard/Mainboard";
import DashSidebar from "./DashSidebar/DashSidebar";

const Dashboard = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
        <DashSidebar />
        </div>
        <div style={{width:"-webkit-fill-available"}}>
        <Mainboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
