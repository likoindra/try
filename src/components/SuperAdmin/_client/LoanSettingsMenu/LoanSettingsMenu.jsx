import React, { useState } from "react";
import "./LoanSettingsMenu.css";

import { Link } from "react-router-dom";
import { Box, Button, Grid, Switch } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ModalLoan from "../ModalLoan/ModalLoan";
export default function LoanSettingsMenu() {
  const [modalLoanSettingsOpen, setModalLoanSettingOpen] = useState(false);

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
          {/* <Link to="/user-settings"> */}
          <div className="items-setting-footer" style={{ cursor: "pointer" }}>
            <Link to="/loan-settings-view">
              <Button
                className="items-setting-footer"
                style={{ textTransform: "none" }}
              >
                <span>View Settings</span>
                <ArrowRightAltIcon
                  style={{ color: "#1571DE", marginLeft: 15 }}
                />
              </Button>
            </Link>

            {/* {modalLoanSettingsOpen && (
              <ModalLoan setModalLoanSettingOpen={setModalLoanSettingOpen} />
            )} */}
          </div>
          {/* </Link> */}
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
          {/* <Link to="/loan-settings"> */}
          <div className="items-setting-footer" style={{ cursor: "pointer" }}>
            <span>View Settings</span>
            <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
          </div>
          {/* </Link> */}
        </div>
        <div className="card-setting-menu">
          <div className="items-setting-radio">
            <span> Scheme 3</span>
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
