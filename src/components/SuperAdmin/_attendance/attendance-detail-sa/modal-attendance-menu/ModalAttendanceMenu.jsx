import React from "react";
import "./ModalAttendanceMenu.css";

import CloseIcon from "@mui/icons-material/Close";

export default function ModalAttendanceMenu({ setModalAttDetailMenu }) {
  return (
    <div className="modalBackground-modal-attendance">
      <div className="modalContainer-modal-attendance">
        <div className="titleCloseBtn-modal-attendance">
          <div className="items__fill-modal-attendance">dummy</div>
          <div className="text__main-modal-attendance">
            <span>Leave Detail</span>
          </div>
          <div className="item__button-right">
            <button
              onClick={() => {
                setModalAttDetailMenu(false);
              }}
            >
              <CloseIcon style={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6" }} />
        </div>
        <div className="container-body-modal-attendance">
          <div className="box-text-modal-attendance">
            <label htmlFor="">Tanggal Awal Cuti</label>
            <span>19 November 2021</span>
          </div>
          <div className="box-text-sub-modal-attendance">
            <label htmlFor="">Tanggal Akhir Cuti</label>
            <span>21 November 2021</span>
          </div>
          <div className="box-text-footer-modal-attendance">
            <label htmlFor="">Alasan</label>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
