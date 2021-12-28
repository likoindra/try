import React, { useState } from "react";

import "./ModalSA.css";
import jaka_image from "../../../../assets/images/jaka-image.png";
import permata_image from "../../../../assets/images/logo-permata.png";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

export default function ModalSA({ setModalDataListOpen }) {
  return (
    <div className="modal-backgroundSA">
      <div className="modal-container-SA">
        <div className="titleCloseBtn-SA">
          <div className="items__fill-SA">dummy</div>
          <div className="text__main-SA">
            <span>Loan Detail</span>
          </div>
          <div className="item__button-right-SA">
            <button
              onClick={() => {
                setModalDataListOpen(false);
              }}
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="body-modal-SA">
          <div className="image-modal-SA">
            <img src={jaka_image} alt="" />
          </div>
          <div className="text__info-main">
            <label>Jaka Saputra</label> <br />
            <span> product design</span>
            <h5>PT Arla</h5>
          </div>
          <div className="status-info">
            <div className="box__status-info">
              <span>Active</span>
            </div>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="body-modal-SA-main">
          <div className="title__body-modal-main">
            <span>Info Pinjaman</span>
          </div>
          <div className="wrapper-info-pinjaman">
            <div className="info-items">
              <div className="info-items-left">
                <label htmlFor="">Simple Credit</label> <br />
                <span>Cash Loan</span>
                <h4>PT Permata Indonesia</h4>
              </div>
              <div className="info-items-right">
                <img src={permata_image} alt="" />
              </div>
            </div>
            <div>
              <hr style={{ width: "100%", color: "#C2C2C2", marginTop: 20 }} />
            </div>
            <div className="info-items-2">
              <div className="info-items-right-2">
                <label htmlFor="">Tanggal Pengajuan</label>
                <span>12 October 2021</span>
              </div>
              <div className="info-items-right-2">
                <label htmlFor="">Jumlah Pengajuan</label>
                <span>Rp. 4.500.000</span>
              </div>
            </div>

            <div className="info-items-2" style={{ paddingTop: 20 }}>
              <div className="info-items-right-2">
                <label htmlFor="">Biaya</label>
                <span>10.0 %</span>
              </div>
              <div className="info-items-right-2" style={{ paddingRight: 50 }}>
                <label htmlFor="">Jangka Waktu</label>
                <span> 3 Bulan</span>
              </div>
            </div>
            <div className="info-items-2">
              <div className="info-items-right-2">
                <label htmlFor="">Nominal Diterima</label>
                <span>Rp. 4.050.000</span>
              </div>
            </div>
          </div>
          <div className="footer-modal-SA">
            <div className="title__body-modal-main">
              <span>Payment History</span>
            </div>
            <div className="wrapper-footer-cards">
              <div className="cards-footer">
                <label htmlFor="">12 November 2021</label>
                <br />
                <span>Rp. 1.350.000</span>
                <div className="icons-footer" style={{ color: "#255BFC" }}>
                  <CheckCircleOutlineIcon />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>
                    {" "}
                    Sudah Dibayar
                  </span>
                </div>
              </div>
              <div className="cards-footer">
                <label htmlFor="">12 November 2021</label>
                <br />
                <span>Rp. 1.350.000</span>
                <div className="icons-footer" style={{ color: "#255BFC" }}>
                  <CheckCircleOutlineIcon />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>
                    {" "}
                    Sudah Dibayar
                  </span>
                </div>
              </div>
              <div className="cards-footer">
                <label htmlFor="">12 November 2021</label>
                <br />
                <span>Rp. 1.350.000</span>
                <div className="icons-footer" style={{ color: "#D1421A" }}>
                  <CloseIcon />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>
                    {" "}
                    Belum Dibayar
                  </span>
                </div>
              </div>
            </div>
            <div className="footer-ePay">
              <div className="button__ePay-one">
                <Button
                  style={{ backgroundColor: "#1571de" }}
                  endIcon={<GetAppIcon style={{ fontSize: 14 }} />}
                >
                  <span style={{ fontSize: 14 }}>Download</span>
                </Button>
              </div>
              <div className="button__ePay-two">
                <Button
                  endIcon={
                    <i className="bx bxs-printer" style={{ fontSize: 14 }}></i>
                  }
                  className="button__right-store"
                >
                  <span style={{ fontSize: 14 }}>Print</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
