import React from "react";
import "./appStore.css";
import online_store from "../../../assets/images/online-store.png";
const AppStore = () => {
  return (
    <div className="featuredItem">
      <div className="featuredTitle">
        <span className="featuredMain">Store</span>
        <span className="featuredSub">230 Products</span>
      </div>
      <div className="featuredIcon">
        <img src={online_store} alt="Sales Images" />
      </div>
    </div>
  );
};

export default AppStore;
