import React, { useState } from "react";
import "./AttSettingMenu.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Switch } from "@mui/material";
import ModalAttendance from "../ModalAttendance/ModalAttendance";
export default function AttSettingMenu() {
  const [modalOpenAttendance, setModalOpenAttendance] = useState(false);
  return (
    <div className="client-setting-menu">
      <div className="wrapper-client-setting">
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span> Scheme 1</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <Link to="/attendance-setting-view">
            <div className="items-setting-footer" style={{ cursor: "pointer" }}>
              <Button
                className="items-setting-footer"
                style={{ textTransform: "none" }}
              >
                <span>View Settings</span>
                <ArrowRightAltIcon
                  style={{ color: "#1571DE", marginLeft: 15 }}
                />
              </Button>
            </div>
          </Link>
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span>Scheme 2</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>

          <div className="items-setting-footer" style={{ cursor: "pointer" }}>
            <Button
              className="items-setting-footer"
              style={{ textTransform: "none" }}
              onClick={() => setModalOpenAttendance(true)}
            >
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </Button>
          </div>
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span>Scheme 3</span>
            <Switch />
          </div>
          <span className="items__sub-setting">
            View setting for user <br />
            yours clients
          </span>
          <div className="items-setting-footer" style={{ cursor: "pointer" }}>
            <span>View Settings</span>
            <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
