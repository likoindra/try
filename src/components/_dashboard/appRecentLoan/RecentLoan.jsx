import React, {useState} from "react";
import "./recentLoan.css";

import anas__logo from "../../../assets/images/anas.png";
import sheila__logo from "../../../assets/images/sheila.png";
import marcella__logo from "../../../assets/images/marcella.png";
function RecentLoan() {
  return (
    <div className="recentLoan">
      <div className="wrapperRecentLoan">
        <span className="rectangleYellowRecentLoan"></span>
        <h3 className="chartTitleRecentLoan">Best SPG</h3>
      </div>
      <div className="wrapper__ItemsRecentLoan">
        <img src={anas__logo} alt="" />
        <div className="wrapper__text-recent-loan">
          <span className="textItemsStoreMain">Anastasia</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
          <br />
          {/* <label htmlFor="">2 month left</label> */}
        </div>
      </div>
      <div className="wrapper__ItemsRecentLoan">
        <img src={sheila__logo} alt="" />
        <div className="wrapper__text-best-spg">
          <span className="textItemsStoreMain">Sheilla</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span> <br />
          {/* <span htmlFor="">2 month left</span> */}
        </div>
      </div>{" "}
      <div className="wrapper__ItemsRecentLoan">
        <img src={marcella__logo} alt="" />
        <div className="wrapper__text-best-spg">
          <span className="textItemsStoreMain">Marcella</span> <br />
          <span className="textItemsStoreSub">2000 Product Sales</span>
          <br />
          {/* <label htmlFor="">2 month left</label> */}
        </div>
      </div>
    </div>
  );
}

export default RecentLoan;
