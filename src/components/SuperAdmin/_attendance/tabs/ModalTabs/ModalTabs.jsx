import React from "react";
import "./ModalTabs.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";
import logo_delete from "../../../../../assets/images/delete-file.png";

export default function ModalTabs({ setModalTabsOpen }) {
  return (
    <div className="modalBackground-modal-tabs">
      <div className="modalContainer-modal-tabs">
        <div className="titleCloseBtn-ePay">
          <div className="items__fill">dummy</div>
          <div className="text__main-ePay">
            <span>Delete Scheme 1</span>
          </div>
          <div className="item__button-right">
            <button
              onClick={() => {
                setModalTabsOpen(false);
              }}
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="body-attendance-modal">
          <div className="img-item-main">
            <img src={logo_delete} alt="" />
          </div>
          <div className="text-main-modal-tabs-settings">
            <span>Are you sure want to delete this item?</span>
          </div>
          <div className="button-wrapper-modal-tabs-settings">
            <div className="button-delete-modal-tabs-settings">
              <Button style={{ backgroundColor: "#1571de" }}>Delete</Button>
            </div>
            <div className="button-delete-modal-tabs-settings">
              {/* <Link to="/attendance"> */}
              <Button
                style={{ border: "1px solid #1571DE", color: "#1571de" }}
                onClick={() => {
                  setModalTabsOpen(false);
                }}
              >
                Cancel
              </Button>
              {/* </Link> */}
            </div>
          </div>
          {/* <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Shifting</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Lembur</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Cuti</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Off</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Izin</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Penguncian Lokasi</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Jumlah Jam Kerja</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>Keterlambatan</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div>
          <div className="wrapper-body-modal">
            <div className="items-left-modal-att">
              <span>WFH</span>
            </div>
            <div className="items-right-modal-att">
              <span>On</span>
            </div>
          </div> */}
          {/* <div className="" style={{ paddingTop: 40 }}>
            <hr />
          </div> */}
          {/* <Link to="/attendance-add-scheme">
            <div className="button-modal-tabs">
              <Button style={{ textTransform: "none" }}>
                <span>Lihat Detail</span>
                <ArrowRightAltIcon
                  style={{ color: "#1571DE", marginLeft: 15 }}
                />
              </Button>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
