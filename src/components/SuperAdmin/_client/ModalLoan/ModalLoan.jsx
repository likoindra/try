import React from "react";
import "./ModalLoan.css";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
export default function ModalLoan({ setModalLoanSettingOpen }) {
  return (
    <div className="modalBackground-loan">
      <div className="modalContainer-loan">
        <div className="titleCloseBtn-ePay">
          <div className="items__fill">dummy</div>
          <div className="text__main-ePay">
            <span>Scheme 1</span>
          </div>
          <div className="item__button-right">
            <button
              onClick={() => {
                setModalLoanSettingOpen(false);
              }}
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="body-loan">
          <div className="items-body-one-loan">
            <label style={{ paddingBottom: 10 }}>Max Loan</label>
            <span style={{ fontSize: 20 }}>Rp. 5.000.000</span>
          </div>
          <div className="items-body-one-loan" style={{ paddingBottom: 20 }}>
            <label style={{ paddingBottom: 10 }}>Period</label>
            <div className="items-row-body-loan">
              <label htmlFor="" className="circle-items-loan">
                3 Month
              </label>
              <label htmlFor="" className="circle-items-loan">
                5 Month
              </label>
              <label htmlFor="" className="circle-items-loan">
                9 Month
              </label>
            </div>
          </div>
          <div className="items-body-one-loan">
            <label style={{ paddingBottom: 10 }}>Bank</label>
            <span style={{ fontSize: 20 }}>Bank Permata</span>
          </div>
          <div className="items-body-one-loan" style={{ paddingTop: 20 }}>
            <label style={{ paddingBottom: 10 }}>Cicilan Perbulan</label>
            <span style={{ fontSize: 20 }}>Rp. 5.000.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
