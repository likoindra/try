import React from "react";
import "./ClientSettingMenu.css";

import { Link } from "react-router-dom";
import { Box, Grid, Switch } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function ClientSettingMenu() {
  return (
    <div className="client-setting-menu">
      <div className="wrapper-client-setting">
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span> Employee Settings</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <Link to="/user-settings">
            <div className="items-setting-footer" style={{ cursor: "pointer" }}>
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </div>
          </Link>
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span>Loan Settings</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <Link to="/loan-settings">
            <div className="items-setting-footer">
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </div>
          </Link>
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span> Attendance Settings</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <Link to="attendance-settings">
            <div className="items-setting-footer">
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </div>
          </Link>
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span>Workspace Settings</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <div className="items-setting-footer">
            <span>View Settings</span>
            <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
