import React from "react";
import "./products.css";
import product_logo from "../../../assets/images/product.png";
const AppProducts = () => {
  return (
    <div className="featuredItem">
      <div className="featuredTitle">
        <span className="featuredMain">Products</span>
        <span className="featuredSub">1.200 Items</span>
      </div>
      <div className="featuredIcon">
        <img src={product_logo} alt="Sales Images" />
      </div>
    </div>
  );
};

export default AppProducts;
