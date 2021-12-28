import React from "react";
import "./bestSpg.css";
import anas__logo from "../../../assets/images/anas.png";
import sheila__logo from "../../../assets/images/sheila.png";
import marcella__logo from "../../../assets/images/marcella.png";

export default function BestSpg() {
  return (
    <div className="bestSpg">
      <div className="wrapperBestSpg">
        <span className="rectangleYellowBestSpg"></span>
        <h3 className="chartTitle">Best SPG</h3>
      </div>
      <div className="wrapper__ItemsBestSpg">
        <img src={anas__logo} alt="" />
        <div className="wrapper__text-best-spg">
          <span className="textItemsStoreMain">Anastasia</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
        </div>
      </div>
      <div className="wrapper__ItemsBestSpg">
        <img src={sheila__logo} alt="" />
        <div className="wrapper__text-best-spg">
          <span className="textItemsStoreMain">Sheilla</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
        </div>
      </div>{" "}
      <div className="wrapper__ItemsBestSpg">
        <img src={marcella__logo} alt="" />
        <div className="wrapper__text-best-spg">
          <span className="textItemsStoreMain">Marcella</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
        </div>
      </div>
    </div>
  );
}
