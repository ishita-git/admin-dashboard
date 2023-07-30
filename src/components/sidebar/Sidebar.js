import React, { useContext } from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";

import "./sidebar.scss";

const Sidebar = () => {

  const{dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration:'none'}}>
        <span className="logo">ishitaamod</span>
        </Link>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          
          <Link to='/' style={{textDecoration:'none'}}>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>
        

          <Link to='/users' style={{textDecoration:'none'}}>
          <li>
            <PersonOutlineOutlinedIcon className="icons" />
            <span>Users</span>
          </li>
          </Link>

          <Link to='/products' style={{textDecoration:'none'}}>
          <li>
            <StoreOutlinedIcon className="icons" />
            <span>Products</span>
          </li>
          </Link>

          <li>
            <CreditCardOutlinedIcon className="icons" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingOutlinedIcon className="icons" />
            <span>Delivery</span>
          </li>

          <p className="title">STATS</p>
          <li>
            <QueryStatsOutlinedIcon className="icons" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneOutlinedIcon className="icons" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartOutlinedIcon className="icons" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsOutlinedIcon className="icons" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutOutlinedIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="color-option" onClick={()=>dispatch({type:"DARK"})}> </div>
      </div>
    </div>
  );
};

export default Sidebar;
