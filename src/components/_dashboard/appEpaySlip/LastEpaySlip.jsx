import React, { useState } from "react";
import "./lastEpay.css";

import ModalsEpay from "../../modalsEpay/ModalsEpay";
import avatar__icon from "../../../assets/images/avatar-ePay.png";
function LastEpaySlip() {
  const [modalLoanOpen, setModalLoanOpen] = useState(false);

  return (
    <div className="container__e-pay-slip">
      <div className="wrapper__ePay">
        <span className="rectangleYellow_ePay"></span>
        <h3 className="chartTitle_ePay">Last ePay Slip</h3>
      </div>
      <div className="top__nav-ePay">
        <span>Employee Name</span>
        <span>Position</span>
        <span style={{ paddingLeft: 70 }}>Date</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductOne">
        <img src={avatar__icon} alt="Image Product" />
        <span className="items__name-ePay">Anastasia</span>
        <span className="items__job-ePay">Sales Promotion Girl</span>
        <span className="items__date-ePay">30 December 2021</span>
        <button
          className="detailButton"
          style={{ border: "none", backgroundColor: "#fafafa" }}
          onClick={() => {
            setModalLoanOpen(true);
          }}
        >
          Detail
        </button>
        {modalLoanOpen && <ModalsEpay setModalLoanOpen={setModalLoanOpen} />}
      </div>
      <div className="boxProductOne">
        <img src={avatar__icon} alt="Image Product" />
        <span className="items__name-ePay">Anastasia</span>
        <span className="items__job-ePay">Sales Promotion Girl</span>
        <span className="items__date-ePay">30 December 2021</span>
        <button
          className="detailButton"
          style={{ border: "none", backgroundColor: "#fafafa" }}
        >
          Detail
        </button>
      </div>
      <div className="boxProductOne">
        <img src={avatar__icon} alt="Image Product" />
        <span className="items__name-ePay">Anastasia</span>
        <span className="items__job-ePay">Sales Promotion Girl</span>
        <span className="items__date-ePay">30 December 2021</span>
        <button
          className="detailButton"
          style={{ border: "none", backgroundColor: "#fafafa" }}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default LastEpaySlip;
