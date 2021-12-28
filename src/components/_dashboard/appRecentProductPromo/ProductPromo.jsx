import React from "react";
import "./productPromo.css";

import product_promo_icon from "../../../assets/images/dummy-product.png";
export default function ProductPromo() {
  return (
    <div className="productPromo">
      <div className="wrapperProductPromo">
        <span className="rectangleYellowPromo"></span>
        <h3 className="chartTitle">Recent Product Promo</h3>
      </div>
      <div className="titleTopNav">
        <span>Promo Type</span>
        <span>Product</span>
        <span>Period</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductOne">
        <img src={product_promo_icon} alt="Image Product" />
        <span className="productTextOne"> Food Promo</span>
        <span className="productTextTwo"> Susu Bendera </span>
        <span className="productTextThree"> 21 Desember2021</span>
        <span className="detailButton">Detail</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductOne">
        <img src={product_promo_icon} alt="Image Product" />
        <span className="productTextOne"> Floor Display</span>
        <span className="productTextTwo2"> Teh Celup Sosro </span>
        <span className="productTextThree2"> 21 Desember2021</span>
        <span className="detailButton">Detail</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductOne">
        <img src={product_promo_icon} alt="Image Product" />
        <span className="productTextOne">Katalog</span>
        <span className="productTextTwo3">Sprite</span>
        <span className="productTextThree3"> 21 Desember2021</span>
        <span className="detailButton">Detail</span>
      </div>
    </div>
  );
}
