import React, { useState } from "react";
import "./LoanSASettings.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ModalLoanSASetting from "../ModalLoanSASetting/ModalLoanSASetting";

export default function LoanSASettings() {
  const [modalOpenSASetting, setModalOpenSASetting] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="loan-sa-settings">
      <div className="wrapper-loan-download-settings">
        <div className="loan__menu-left" style={{ marginRight: "auto" }}>
          <input type="text" placeholder="Search by name" />
          <i className="bx bx-search"></i>
        </div>
        <div className="button__add-store-loan">
          <Link to="/add-scheme">
            <Button
              startIcon={<AddIcon style={{ color: "white", fontSize: 16 }} />}
              className="button__add-store-main-client"
              style={{ textTransform: "none", paddingLeft: 15 }}
            >
              <span style={{ fontSize: 12, color: "white" }}>Add Scheme</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="wrapper-loan-sa-setting">
        <div className="card-setting-menu-loan-sa">
          <div className="items-setting-radio-loan-sa">
            <span> Scheme 1</span>
          </div>
          <span className="items__sub-setting-loan-sa">
            View setting for user <br />
            yours clients
          </span>
          <div className="wrapper-button-bottom-setting-loan-sa">
            <Link to="/loan-setting-view">
              <div
                className="items-setting-footer-loan-sa"
                style={{ cursor: "pointer" }}
              >
                <Button
                  endIcon={
                    <ArrowRightAltIcon
                      style={{ color: "#1571DE", marginLeft: 15 }}
                    />
                  }
                  className="items-setting-footer-loan-sa"
                  style={{ textTransform: "none" }}
                >
                  <span>View Settings</span>
                </Button>
              </div>
            </Link>
            <div className="button-setting-loan-sa-right">
              <button>
                <Link to="/loan-edit-scheme">
                  <EditIcon
                    style={{ fontSize: 18, width: 20, color: "#1571DE" }}
                  />
                </Link>
              </button>
              <button>
                <DeleteOutlineIcon
                  style={{ fontSize: 18, color: "#D1421A", width: 20 }}
                />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="card-setting-menu-loan-sa">
          <div className="items-setting-radio-loan-sa">
            <span> Scheme 2</span>
          </div>
          <span className="items__sub-setting-loan-sa">
            View setting for user <br />
            yours clients
          </span>
        
          <div
            className="items-setting-footer-loan-sa"
            style={{ cursor: "pointer" }}
          >
            <Button
              className="items-setting-footer-loan-sa"
              style={{ textTransform: "none" }}
              onClick={() => setModalOpenSASetting(true)}
            >
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </Button>
            {modalOpenSASetting && (
              <ModalLoanSASetting
                setModalOpenSASetting={setModalOpenSASetting}
              />
            )}
          </div>
         
        </div> */}
        {/* <div className="card-setting-menu-loan-sa">
          <div className="items-setting-radio-loan-sa">
            <span> Scheme 3</span>
          </div>
          <span className="items__sub-setting-loan-sa">
            View setting for user <br />
            yours clients
          </span>
         
          <div
            className="items-setting-footer-loan-sa"
            style={{ cursor: "pointer" }}
          >
            <Button
              className="items-setting-footer-loan-sa"
              style={{ textTransform: "none" }}
              onClick={() => setModalOpenSASetting(true)}
            >
              <span>View Settings</span>
              <ArrowRightAltIcon style={{ color: "#1571DE", marginLeft: 15 }} />
            </Button>
            {modalOpenSASetting && (
              <ModalLoanSASetting
                setModalOpenSASetting={setModalOpenSASetting}
              />
            )}
          </div>
    
        </div> */}
      </div>
    </div>
  );
}
