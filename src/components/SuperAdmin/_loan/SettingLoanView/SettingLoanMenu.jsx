import React from "react";

export default function SettingLoanMenu() {
  return (
    <div className="container-loan-add-scheme">
      <div className="wrapper-loan-add-scheme">
        <div className="row-item-loan-add-scheme">
          <span>Scheme Name</span>
          <label>Scheme 1</label>
          {/* <input type="text" /> */}
        </div>
        <div className="row-item-loan-add-scheme-desc">
          <span>Description</span>
          <label>View Setting for user your clients</label>
          {/* <input type="text" /> */}
        </div>
        <div className="container-scheme-detail">
          <div className="wrapper-scheme-detail">
            <div className="item-scheme-detail">
              <span>Tenor</span>
              <label>1 Month</label>
              {/* <input type="text" placeholder="Month" /> */}
            </div>
            <div className="item-scheme-detail-loan-max">
              <div className="wrapper-item-scheme-detail-loan-max">
                <span>Loan Max Size</span>
                <div className="item-sub-scheme-detail-loan-max">
                  <label>50 %</label>
                  {/* <input type="text" /> */}
                  <span>x &nbsp; Gaji Pokok</span>
                </div>
              </div>
            </div>
            <div className="item-scheme-detail-loan-salary">
              <div className="wrapper-item-scheme-detail-loan-salary">
                <span>Tanggal Gajian</span>
              </div>
              <div className="item-sub-scheme-deatail-loan-salary">
                <span>Setiap Tanggal</span>
                <p>30</p>
                {/* <input type="text" /> */}
                <label>/ &nbsp;Bulan</label>
              </div>
            </div>
            <div className="container-box-white">
              <div className="wrapper-box-white">
                <div className="item-box-white-left">
                  <div className="title-item-box-white-left">
                    <span>Range Date Request</span>
                    <div className="item-row-box-white-left">
                      <div className="item-row-one">
                        <span>From</span>
                        <p>5</p>
                        {/* <input type="text" /> */}
                      </div>
                      <div className="item-row-two">
                        <span>to</span>
                        <p>25</p>
                        {/* <input type="text" /> */}
                        <label>Dari tanggal gajian</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-box-white-right">
                  <div className="title-item-box-white-right">
                    <span>Admin Fee</span>
                    <div className="item-row-box-white-right">
                      <div className="item-row-right-one">
                        <label>7 %</label>
                        {/* <input type="text" /> */}
                        <span>x</span>
                        <label>6.500</label>
                        {/* <input type="text" /> */}
                      </div>
                      <span>Biaya Tf</span>
                    </div>
                  </div>
                </div>
                {/* <div className="item-button-white">
                    <Button
                      endIcon={
                        <DeleteOutlineIcon style={{ color: "#D1421A" }} />
                      }
                    ></Button>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
