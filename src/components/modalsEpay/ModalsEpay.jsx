import React from "react";
import "./modalEpay.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import GetAppIcon from "@mui/icons-material/GetApp";
function ModalsEpay({ setModalLoanOpen }) {
  return (
    <div className="modalBackground-ePay">
      <div className="modalContainer-ePay">
        <div className="titleCloseBtn-ePay">
          <div className="items__fill">dummy</div>
          <div className="text__main-ePay">
            <span>ePay Slip</span>
          </div>
          <div className="item__button-right">
            <button
              onClick={() => {
                setModalLoanOpen(false);
              }}
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        {/* <div className="title-ePay"></div> */}
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="body-ePay">
          <div className="items-body-one">
            <label>Pay Slip Date</label>
            <span>30 November</span>
          </div>
          <div className="items-body-one">
            <label>Employee Name</label>
            <span>Anastasia</span>
          </div>
          <div className="items-body-one">
            <label>Position</label>
            <span>Merchandiser</span>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="wrapper-items-body-two">
          <div className="items-body-two-main">
            <span>Rutin</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">Gaji Pokok</label>
            <span>Rp. 4.500.000</span>
          </div>{" "}
          <div className="items-body-two">
            <label htmlFor="">TTUM</label>
            <span>Rp. 2.500.000</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">Tunjangan Jabatan</label>
            <span>Rp. 500.000</span>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="wrapper-items-body-two">
          <div className="items-body-two-main">
            <span>Tidak Rutin</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">Lembur</label>
            <span>Rp. 2.000.000</span>
          </div>{" "}
          <div className="items-body-two">
            <label htmlFor="">Bonus</label>
            <span>Rp. 2.000.000</span>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="wrapper-items-body-two">
          <div className="items-body-two-main">
            <span>Potongan</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">JHT</label>
            <span>Rp. 2.000.000</span>
          </div>{" "}
          <div className="items-body-two">
            <label htmlFor="">JP</label>
            <span>Rp. 2.000.000</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">BPJS Kesehatan</label>
            <span>Rp. 2.000.000</span>
          </div>
          <div className="items-body-two">
            <label htmlFor="">BPJS Ketenagakerjaan</label>
            <span>Rp. 2.000.000</span>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6", marginBottom: 10 }} />
        </div>
        <div className="wrapper-items-body-two">
          <div className="items-body-two">
            <label
              htmlFor=""
              style={{ fontSize: 16, fontWeight: 500, color: "#0A0A0A" }}
            >
              Total
            </label>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0A0A0A" }}>
              Rp. 17.000.000
            </span>
          </div>{" "}
        </div>
        <div className="footer-ePay">
          <div className="button__ePay-one">
            <Button
              style={{ backgroundColor: "#1571de" }}
              endIcon={<GetAppIcon style={{ fontSize: 14 }} />}
            >
              Download
            </Button>
          </div>
          <div className="button__ePay-two">
            <Button
              endIcon={
                <i className="bx bxs-printer" style={{ fontSize: 14 }}></i>
              }
              className="button__right-store"
            >
              Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalsEpay;
