import React, { useRef, useEffect } from "react";
import "./modal.css";

import excel_logo from "../../assets/images/excel-image.png";
import { Button } from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import GetAppIcon from "@mui/icons-material/GetApp";

function Modal({ setOpenModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
    };
  });
  return (
    <div className="modalBackground" ref={modalRef} onClick={closeModal}>
      <div className="modalContainer">
        <div className="title">
          <span>Download Template</span>
        </div>
        <div className="body">
          <img src={excel_logo} alt="" />
          <div className="body__items-wrapper">
            <span>Template .Xls</span>
            <Button endIcon={<GetAppIcon />} className="button__download-now">
              Download Now
            </Button>
          </div>
        </div>
        <div className="footer">
          <span>Already have file?</span>
          <Button
            endIcon={<PublishIcon />}
            style={{ backgroundColor: "#1571de" }}
          >
            Upload File
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
