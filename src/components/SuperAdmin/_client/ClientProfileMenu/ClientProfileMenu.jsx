import React from "react";
import "./ClientProfileMenu.css";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo_big_company from "../../../../assets/images/logo-big.png";
import logo_jaka from "../../../../assets/images/logo-employee.png";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function ClientProfileMenu() {
  return (
    <div className="container-client-profile-menu">
      <div className="wrapper-client-profile-menu">
        <div className="logo-client-big-left">
          <img src={logo_big_company} alt="" />
        </div>
        <div className="data-client-profile-right">
          <div className="wrapper-data-box-right-1">
            <div className="client-name-box-right">
              <span>Client Name</span>
              <label>Pt Arla</label>
            </div>
            <div className="client-name-box-right">
              <span>Join Date</span>
              <label>21 December 2021</label>
            </div>
          </div>
          <div className="wrapper-data-box-right-2">
            <div className="client-name-box-right-adress">
              <span>Address</span>
              <label>Jalan Setiabudi Kuningan Jakarta Selatan</label>
            </div>
            <div className="client-name-box-right-2">
              <span>Contact</span>
              <label>0812-8280-8828</label>
            </div>
          </div>
          <div className="button-action-profile-menu">
            <Link to="edit-clients">
              <Button
                style={{
                  border: "1px solid #1571de",
                  textTransform: "none",
                  width: 274,
                  height: 36,
                  borderRadius: 4,
                }}
              >
                <span>Edit</span>
                <EditIcon style={{ color: "#1571de", marginLeft: 20 }} />
              </Button>
            </Link>

            <Button style={{ border: "1px solid #D1421A" }}>
              <span style={{ color: "#d1421a" }}>Delete</span>
              <DeleteIcon style={{ color: "#d1421a", marginLeft: 20 }} />
            </Button>
          </div>
        </div>
      </div>
      <div className="container-employee-profile-menu">
        <div className="title-employee-profile-menu">
          <span>Employee</span>
        </div>
        <div className="button-detail-employee-profile-menu">
          <div className="detail-employee-span">
            <span>Total Employee : 100</span>
          </div>
          <Link to="/user-settings">
            <div className="detail-employee-right">
              <span>Lihat Semua</span>
              <ArrowRightAltIcon style={{ color: "#1571de" }} />
            </div>
          </Link>
        </div>
        <div className="container-employee-list-menu">
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
          <div className="list-data-employee-menu">
            <div className="image-data-employee">
              <img src={logo_jaka} alt="" />
            </div>
            <div className="title-employee-data">
              <span>Melvin Adrean</span>
              <label>UX Designer</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
