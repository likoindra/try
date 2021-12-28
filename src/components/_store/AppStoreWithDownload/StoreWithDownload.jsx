import React, { useState } from "react";
import "./storeWithDownload.css";

import Modal from "../../modals/Modal";
import logo_table from "../../../assets/images/items_table.png";
import employee_icon from "../../../assets/images/employee-image.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NestedMenuItem from "material-ui-nested-menu-item";
// import { spacing } from "@mui/system";

function StoreWithDownload() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="storeDownload">
      <div className="wrapper__store-download">
        <div className="wrapper__left">
          <input type="text" placeholder="Search by name" />
          <i className="bx bx-search"></i>
        </div>
        <div className="wrapper__right">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            endIcon={
              <i className="bx bxs-printer" style={{ fontSize: 14 }}></i>
            }
            className="button__right-store "
          >
            <span className="text__download-right">Upload</span>
          </Button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="wrapper__right">
          <Button
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            className="button__right-store"
          >
            <span className="text__download-right">Export</span>
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
        <div className="button__add-store">
          <Link to="/addStore">
            <Button startIcon={<AddIcon />} className="button__add-store-main">
              <span className="">Add Store</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="wrapper__table-store">
        <div className="wrapper__nav-table-store">
          <ul className="nav__table-store">
            <li>Coordinate Point</li>
            <li>Store Name</li>
            <li style={{ paddingLeft: 0 }}>Owner</li>
            <li style={{ paddingLeft: 30 }}>Phone</li>
            <li style={{ paddingLeft: 10 }}>Employee</li>
          </ul>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="items__table-store">
          <img src={logo_table} alt="" />
          <span className="coordinat__table">1.11.3345.133</span>
          <span className="store-name__table">UD Sinar Jaya</span>
          <span className="store-employee__table">Anastasia Prissia</span>
          <span className="store-number__table">0812-8828-8282</span>
          <div className="wrapper__icon-employee">
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span style={{ cursor: "pointer" }}>
              {" "}
              <Link to="/editStore">
                <EditIcon sx={{ color: "#1571DE" }} />
              </Link>
            </span>
            <span style={{ paddingLeft: "10px", cursor: "pointer" }}>
              {" "}
              <DeleteOutlineIcon sx={{ color: "#D1421A" }} />
            </span>
          </div>
        </div>
        <div className="items__table-store">
          <img src={logo_table} alt="" />
          <span className="coordinat__table">1.11.3345.133</span>
          <span className="store-name__table">UD Sinar Jaya</span>
          <span className="store-employee__table">Anastasia Prissia</span>
          <span className="store-number__table">0812-8828-8282</span>
          <div className="wrapper__icon-employee">
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span style={{ cursor: "pointer" }}>
              {" "}
              <EditIcon sx={{ color: "#1571DE" }} />
            </span>
            <span style={{ paddingLeft: "10px", cursor: "pointer" }}>
              {" "}
              <DeleteOutlineIcon sx={{ color: "#D1421A" }} />
            </span>
          </div>
        </div>
        <div className="items__table-store">
          <img src={logo_table} alt="" />
          <span className="coordinat__table">1.11.3345.133</span>
          <span className="store-name__table">UD Sinar Jaya</span>
          <span className="store-employee__table">Anastasia Prissia</span>
          <span className="store-number__table">0812-8828-8282</span>
          <div className="wrapper__icon-employee">
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span style={{ cursor: "pointer" }}>
              {" "}
              <EditIcon sx={{ color: "#1571DE" }} />
            </span>
            <span style={{ paddingLeft: "10px", cursor: "pointer" }}>
              {" "}
              <DeleteOutlineIcon sx={{ color: "#D1421A" }} />
            </span>
          </div>
        </div>
        <div className="items__table-store">
          <img src={logo_table} alt="" />
          <span className="coordinat__table">1.11.3345.133</span>
          <span className="store-name__table">UD Sinar Jaya</span>
          <span className="store-employee__table">Anastasia Prissia</span>
          <span className="store-number__table">0812-8828-8282</span>
          <div className="wrapper__icon-employee">
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
            <img src={employee_icon} alt="" />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span style={{ cursor: "pointer" }}>
              {" "}
              <EditIcon sx={{ color: "#1571DE" }} />
            </span>
            <span style={{ paddingLeft: "10px", cursor: "pointer" }}>
              {" "}
              <DeleteOutlineIcon sx={{ color: "#D1421A" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreWithDownload;
