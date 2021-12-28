import React from "react";
import "./AverageSA.css";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function AverageSA() {
  return (
    <div className="averageSA-container">
      <div className="wrapper__averageSA">
        <div className="title__averageSA">
          <span>Average</span>
        </div>
        <div className="wrapper__items-averageSA">
          <div className="box__items-averageSA">
            <div className="title__items-averageSA">
              <span className="box__blue"></span>
              <span>Finished</span>
            </div>
            <div className="text__inside-averageSA">
              <label htmlFor="">10 Employee/months</label>
              <div className="text__sub-inside">
                <ArrowUpwardIcon
                  style={{ fontSize: 20, marginBottom: 3, color: "#1b45d9" }}
                />
                <span> 41,8%</span>
                <label>From last Months</label>
              </div>
            </div>
          </div>
          <div className="box__items-averageSA">
            <div className="title__items-averageSA">
              <span className="box__green"></span>
              <span>Active</span>
            </div>
            <div className="text__inside-averageSA">
              <label htmlFor="">5 Employee/months</label>
              <div className="text__sub-inside">
                <ArrowDownwardIcon
                  style={{ fontSize: 20, marginBottom: 3, color: "#D1421A" }}
                />
                <span style={{ color: "#D1421A" }}>10%</span>
                <label>From last Months</label>
              </div>
            </div>
          </div>
          <div className="box__items-averageSA">
            <div className="title__items-averageSA">
              <span className="box__red"></span>
              <span>Denied</span>
            </div>
            <div className="text__inside-averageSA">
              <label htmlFor="">5 Employee/months</label>
              <div className="text__sub-inside">
                <ArrowDownwardIcon
                  style={{ fontSize: 20, marginBottom: 3, color: "#D1421A" }}
                />
                <span style={{ color: "#D1421A" }}>10%</span>
                <label>From last Months</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AverageSA;
