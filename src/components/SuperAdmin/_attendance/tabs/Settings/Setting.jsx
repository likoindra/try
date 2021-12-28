import React, { useState } from "react";
import "./Setting.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ModalTabs from "../ModalTabs/ModalTabs";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function Setting() {
  const [modalTabsOpen, setModalTabsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="container__setting">
      <div className="wrapper__setting">
        <div className="setting__menu-left" style={{ marginRight: "auto" }}>
          <input type="text" placeholder="Search by name" />
          <i className="bx bx-search"></i>
        </div>
        <div
          className="setting__menu-right"
          style={{ marginLeft: 40, marginTop: 4, marginRight: 40 }}
        >
          <Button
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            // className="button__right-store"
          >
            <span>Download</span>
          </Button>
          <Menu
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            elevation={1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Export as Pdf</MenuItem>
            <MenuItem>Export as Xls</MenuItem>
          </Menu>
        </div>
        <div className="button__add-store-setting">
          <Link to="/attendance-add-scheme">
            <Button
              startIcon={<AddIcon style={{ color: "white", fontSize: 16 }} />}
              // className="button__add-store-main-client"
              style={{ textTransform: "none", paddingLeft: 15 }}
            >
              <span style={{ fontSize: 12, color: "white" }}>Add Scheme</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="container__setting-card">
        <div className="card__setting-menu">
          <div className="items-setting-radio-loan-sa">
            <span> Scheme 1</span>
          </div>
          <span className="items__sub-setting-loan-sa">
            View setting for user <br />
            yours clients
          </span>

          <div
            className="items-setting-footer-setting"
            style={{ cursor: "pointer" }}
          >
            <Link to="/setting-attendance-view">
              <Button
                className="items-setting-footer-setting"
                style={{ textTransform: "none" }}
                // onClick={() => setModalTabsOpen(true)}
              >
                <span>View Settings</span>
                <ArrowRightAltIcon
                  style={{ color: "#1571DE", marginLeft: 15 }}
                />
              </Button>
            </Link>
            <div className="button-setting-loan-sa-right">
              <button>
                <Link to="/attendance-edit-scheme">
                  <EditIcon
                    style={{ fontSize: 18, width: 20, color: "#1571DE" }}
                  />
                </Link>
              </button>
              <button onClick={() => setModalTabsOpen(true)}>
                <DeleteOutlineIcon
                  style={{ fontSize: 18, color: "#D1421A", width: 20 }}
                />
              </button>
              {modalTabsOpen && (
                <ModalTabs setModalTabsOpen={setModalTabsOpen} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
