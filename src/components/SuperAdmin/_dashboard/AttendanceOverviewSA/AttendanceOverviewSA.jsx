import React from "react";
import "./AttendanceOverviewSA.css";

import sa_attendance from "../../../../assets/images/sa-attendance.png";
import sa_leave from "../../../../assets/images/sa-leave.png";
import sa_sick from "../../../../assets/images/sa-sick.png";
import sa_min_plus from "../../../../assets/images/sa-min-plus.png";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
export default function AttendanceOverviewSA() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="att-container">
      <div className="wrapper__att-container">
        <div className="wrapper-title-date">
          <div className="title__attendance">
            <span className="yellow__box"></span>
            <h3> Attendance Overview</h3>
          </div>
          <div className="month__picker-attendance">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["month"]}
                label="Month"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="container__items-att-overview">
          <div className="card__wrapper-items">
            <div className="text__card-items">
              <label>Attend</label>
              <span>90%</span>
            </div>
            <div className="image__card-items">
              <img src={sa_attendance} alt="" />
            </div>
          </div>
          <div className="card__wrapper-items">
            <div className="text__card-items">
              <label>Leave</label>
              <span>5%</span>
            </div>
            <div className="image__card-items">
              <img src={sa_leave} alt="" />
            </div>
          </div>
          <div className="card__wrapper-items">
            <div className="text__card-items">
              <label>Sick</label>
              <span>5%</span>
            </div>
            <div className="image__card-items">
              <img src={sa_sick} alt="" />
            </div>
          </div>
          <div className="card__wrapper-items">
            <div className="text__card-items">
              <label>Alfa</label>
              <span>0%</span>
            </div>
            <div className="image__card-items">
              <img src={sa_min_plus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
