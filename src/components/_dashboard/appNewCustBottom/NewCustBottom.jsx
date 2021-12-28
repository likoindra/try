import React from "react";
import "./newCustBottom.css";
import icon_circle_cust from "../../../assets/images/new-cust-circle.png";
export default function NewCustBottom() {
  return (
    <div className="custBottom">
      <div className="wrapperCustBottom">
        <span className="rectangleYellowCustBottom"></span>
        <h3 className="chartTitle">New Customer</h3>
      </div>
      <div className="titleTopNavCustBottom">
        <span className="custName">Customer Name</span>
        <span className="productName">Product Name</span>
        <span className="storeCust">Store</span>
        <span className="dateCust">Date</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsCustName"> Edy Sanjaya</span>
        <span className="itemsProduct">Susu Frissian Flag</span>
        <span className="itemsStore"> UD Sinar Jaya</span>
        <span className="itemsDate"> 31 December 2021</span>
        <span className="detailButton">Detail</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsCustName"> Edy Sanjaya</span>
        <span className="itemsProduct">Susu Frissian Flag</span>
        <span className="itemsStore"> UD Sinar Jaya</span>
        <span className="itemsDate"> 31 December 2021</span>
        <span className="detailButton">Detail</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsCustName"> Edy Sanjaya</span>
        <span className="itemsProduct">Susu Frissian Flag</span>
        <span className="itemsStore"> UD Sinar Jaya</span>
        <span className="itemsDate"> 31 December 2021</span>
        <span className="detailButton">Detail</span>
      </div>
    </div>
  );
}
