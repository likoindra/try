import React from "react";
import "./addProducts.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AppAddProducts() {
  return (
    <div className="wrapper__add-products">
      <div className="wrapper__title-top-products">
        <span style={{ paddingRight: 10 }}>Store</span>
        <ArrowForwardIosIcon
          style={{ fontSize: 14, marginRight: 10, color: "#255BFC" }}
          className="wraper__title-icon"
        />
        <span>Store Details</span>
        <ArrowForwardIosIcon
          style={{ fontSize: 14,  marginLeft: 10,color: "#255BFC", marginRight: 10}}
          className="wraper__title-icon"
        />
        <span>Add Products</span>
      </div>
    </div>
  );
}

export default AppAddProducts;
