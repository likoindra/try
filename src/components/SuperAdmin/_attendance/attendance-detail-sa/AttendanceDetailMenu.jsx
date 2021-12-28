import React, { useState } from "react";
import "./AttendanceDetailMenu.css";

import profile_attendance from "../../../../assets/images/profile-attendance.png";
import image_company from "../../../../assets/images/Company.png";

import DatePicker from "../date-picker/DatePicker";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import leave_logo from "../../../../assets/images/Leave.png";
import cancel_red from "../../../../assets/images/cancel-red.png";
import checked_green from "../../../../assets/images/check_circle.png";
import ModalAttendanceMenu from "./modal-attendance-menu/ModalAttendanceMenu";

export default function AttendanceDetailMenu() {
  const [modalAttDetailMenu, setModalAttDetailMenu] = useState(false);

  return (
    <div className="container-att-detail-menu">
      <div className="wrapper-att-detail-menu">
        <div className="wrapper-date-filter">
          <DatePicker />
          <span>to</span>
          <DatePicker />
        </div>
        <div className="container-profile-att-detail-menu">
          <div className="profile-att-detail-menu">
            <div className="contaiener-image-att-detail-menu">
              <img src={profile_attendance} alt="" />
            </div>
            <div className="text-profile-detail-menu">
              <label>Jaka Saputra</label>
              <span>Product Designer</span>
              <div className="company-profile-detail-menu">
                <img src={image_company} alt="" />
                <span>PT Arla</span>
              </div>
            </div>
          </div>
          <div className="profile-att-summary">
            <div className="title-profile-att-summary">
              <span>Attendance Summary</span>
            </div>
            <div className="wrapper-item-row-att-summary">
              <div className="item-presence">
                <div className="title-item-presence">
                  <span>Presence</span>
                </div>
                <div className="item-sub-presence">
                  <label htmlFor="">22/</label>
                  <span>30 Days</span>
                </div>
              </div>
              <div className="item-off">
                <div className="title-item-off">
                  <span>Off</span>
                </div>
                <div className="item-sub-presence">
                  <label htmlFor="">8 Days</label>
                  {/* <span>30 Days</span> */}
                </div>
              </div>
              <div className="item-leave">
                <div className="title-item-leave">
                  <span>Leave</span>
                </div>
                <div className="item-sub-presence">
                  <label htmlFor="">0 Days</label>
                  {/* <span>30 Days</span> */}
                </div>
              </div>
              <div className="item-sick">
                <div className="title-item-sick">
                  <span>Sick</span>
                </div>
                <div className="item-sub-presence">
                  <label htmlFor="">0 Days</label>
                  {/* <span>30 Days</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="button-profile-att-summary">
            <Button
              endIcon={<DownloadIcon />}
              style={{ backgroundColor: "#1571de" }}
            >
              <span>Download</span>
            </Button>
          </div>
        </div>
        <div style={{ color: "#C2C2C2F", paddingTop: 20 }}>
          <hr />
        </div>
        <div className="attendance-detail-date">
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc" style={{ paddingTop: 5 }}>
                <img src={cancel_red} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="" style={{ paddingTop: 4 }}>
                  DD/MM/YY
                </label>
                <span></span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc" style={{ paddingTop: 5 }}>
                <img src={cancel_red} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="" style={{ paddingTop: 4 }}>
                  DD/MM/YY
                </label>
                <span></span>
              </div>
            </div>
          </div>
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>{" "}
          <div className="rectangle-detail-date">
            <div className="detail-date-desc">
              <div className="detail-image-desc">
                <img src={checked_green} alt="" />
              </div>
              <div className="text-detail-desc">
                <label htmlFor="">DD/MM/YY</label>
                <span>09:00 - 16.00</span>
              </div>
            </div>
          </div>{" "}
          <div className="rectangle-detail-date-permit">
            <div className="detail-date-des-permit">
              <div className="detail-image-desc-permit">
                <img src={leave_logo} alt="" />
              </div>
              <div className="text-detail-desc-permit">
                <label htmlFor="">DD/MM/YY</label>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => setModalAttDetailMenu(true)}
                >
                  <span>See Detail</span>
                </Button>
                {modalAttDetailMenu && (
                  <ModalAttendanceMenu
                    setModalAttDetailMenu={setModalAttDetailMenu}
                  />
                )}
              </div>
            </div>
          </div>{" "}
          <div className="rectangle-detail-date-permit">
            <div className="detail-date-des-permit">
              <div className="detail-image-desc-permit">
                <img src={leave_logo} alt="" />
              </div>
              <div className="text-detail-desc-permit">
                <label htmlFor="">DD/MM/YY</label>
                <Button style={{ textTransform: "none" }}>
                  <span>See Detail</span>
                </Button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
