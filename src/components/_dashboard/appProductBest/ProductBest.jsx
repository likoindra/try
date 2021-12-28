import React from "react";
import "./productBest.css";
import mie__goreng from "../../../assets/images/mie-goreng.png";
import susu__logo from "../../../assets/images/susu.png";
import coca__cola from "../../../assets/images/coca-cola.png";
export default function ProductBest() {
  return (
    <div className="productBest">
      <div className="wrapperProductBest">
        <span className="rectangleYellowProductBest"></span>
        <h3 className="chartTitle">Product Best Seller </h3>
      </div>
      <div className="wrapperItemsProduct">
        <img src={mie__goreng} alt="" />
        <div className="wrapper__product-best">
          <span className="textItemsStoreMain">Indomie Karie Ayam</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
        </div>
      </div>
      <div className="wrapperItemsProduct">
        <img src={susu__logo} alt="" />
        <div className="wrapper__product-best">
          <span className="textItemsStoreMain">Susu Bear Branc</span> <br />
          <span className="textItemsStoreSub">1500 Product Sales</span>
        </div>
      </div>
      <div className="wrapperItemsProduct">
        <img src={coca__cola} alt="" />
        <div className="wrapper__product-best">
          <span className="textItemsStoreMain">Coca Cola</span> <br />
          <span className="textItemsStoreSub">1000 Product Sales</span>
        </div>
      </div>
    </div>
  );
}
