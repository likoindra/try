import React from "react";
import "./customer.css";
import total_sales_logo from "../../../assets/images/total-sales.png";

const AppCustomer = () => {
  return (
    <div className="featuredItem">
      <div className="featuredTitle">
        <span className="featuredMain">Customer</span>
        <span className="featuredSub">1.200 Orang</span>
      </div>
      <div className="featuredIcon">
        <img src={total_sales_logo} alt="Sales Images" />
      </div>
    </div>
  );
};
export default AppCustomer;
