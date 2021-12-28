import React from "react";
import "./storeBest.css";
import best__seller from "../../../assets/images/best-seller.png";
export default function StoreBest() {
  return (
    <div className="storeBest">
      <div className="wrapperStore">
        <div className="wrapperTextStore">
          <span className="rectangleYellowStore"></span>
          <h3 className="chartTitle">Store Best Seller</h3>
        </div>
        <div className="wrapperItemsStore">
          <img src={best__seller} alt="" />
          <div className="wrapper__text-best-seller">
            <span className="textItemsStoreMain">UD Sinar Jaya</span> <br />
            <span className="textItemsStoreSub">2000 Product Sales</span>
          </div>
        </div>
        <div className="wrapperItemsStore">
          <img src={best__seller} alt="" />
          <div className="wrapper__text-best-seller">
            <span className="textItemsStoreMain">Indomaret</span> <br />
            <span className="textItemsStoreSub">1500 Product Sales</span>
          </div>
        </div>
        <div className="wrapperItemsStore">
          <img src={best__seller} alt="" />
          <div className="wrapper__text-best-seller">
            <span className="textItemsStoreMain">Alfamart</span> <br />
            <span className="textItemsStoreSub">1000 Product Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
}
