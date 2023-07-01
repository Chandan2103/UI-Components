import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import classes from "./DashSidebar.module.scss";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../assets/Images/logoNT.png";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import BarChartIcon from "@mui/icons-material/BarChart";
import ScoreIcon from "@mui/icons-material/Score";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';

import { useDispatch, useSelector } from "react-redux";
import { setDashboard } from "../../../Store/Project/ProjectSlice";

const DashSidebar = () => {
  const collapsed = useSelector((state: any) => state.project.collapsed);
  const dispatch = useDispatch();

 

  return (
    <div className={classes.sidebar}>
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#F3F6FA"
        transitionDuration={600}
      >
        <div className={classes.wrapper}>
          <div className={classes.wrapperTop}>
            <div className={classes.brand}>
              <Avatar alt="" src={logo}>
                F
              </Avatar>
              <div className={classes.brandTitle}>FIRSTOCK</div>
            </div>
            {!collapsed && (
              <div className={classes.searchInput}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className={classes.inputBox}
                  placeholder="Search"
                />
              </div>
            )}

            <div className={classes.sidebarMenu}>
              <Menu
                menuItemStyles={{
                  button: {
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  },
                }}
              >
                <MenuItem
                  active
                  icon={<AutoAwesomeMosaicIcon color="action" />}
                  onClick={()=>dispatch(setDashboard(" "))}
                >
                  {" "}
                  Dashboard
                </MenuItem>
                <Menu
                  menuItemStyles={{
                    button: {
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    },
                  }}
                >
                  <SubMenu
                    style={{ display: "flex" }}
                    icon={<ScoreIcon color="action" />}
                    label="Campaigns"
                  >
                    <div className={classes.submenu}>
                      <div
                        className={classes.subitem}
                        onClick={()=>dispatch(setDashboard("allCampaigns"))}
                      >
                        <MenuItem active> All Campaigns</MenuItem>
                      </div>
                      <div className={classes.subitem}>
                        <MenuItem active> Transactional</MenuItem>
                      </div>
                      <div className={classes.subitem} onClick={()=>dispatch(setDashboard("createCampaigns"))}>
                        <MenuItem active>Create Campaigns </MenuItem>
                      </div>
                    </div>
                  </SubMenu>
                  <SubMenu
                    icon={<BarChartIcon color="action" />}
                    label="Subscribers"
                  >
                    <div className={classes.submenu}>
                      <div className={classes.subitem}  onClick={()=>dispatch(setDashboard("subscribersList"))}>
                        <MenuItem active> All Subscribers</MenuItem>
                      </div>
                      <div className={classes.subitem}>
                        <MenuItem active> Create Subscibers</MenuItem>
                      </div>
                      
                    </div>
                  </SubMenu>
                </Menu>
                <Menu
                  menuItemStyles={{
                    button: {
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    },
                  }}
                >
                  <SubMenu
                    icon={<VerticalSplitIcon color="action" />}
                    label="Templates"
                  >
                    <div className={classes.submenu}>
                      <div className={classes.subitem} onClick={()=>dispatch(setDashboard("emailTemplate"))}>
                        <MenuItem active> Create Templates</MenuItem>
                      </div>
                      <div className={classes.subitem}>
                        <MenuItem active> All Templates</MenuItem>
                      </div>
                     
                    </div>
                  </SubMenu>
                </Menu>
                <MenuItem icon={<InsightsIcon color="action" />}>
              Automate
                </MenuItem>
                <MenuItem icon={<LiveHelpIcon color="action" />}>
                  {" "}
                    Help
                </MenuItem>
              
                
              </Menu>
            </div>
          </div>

          <div className={classes.profileContainer}>
            <Avatar alt="" src="">
              F
            </Avatar>{" "}
            <div className={classes.data}>
              <div className={classes.name}>User Name</div>
              <div className={classes.email}>username@gmail.com</div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
