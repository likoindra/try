import React from "react";
import "./LayoutSA.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarSA from "../../SidebarSA/SidebarSA";
import TopNavSA from "../../TopNavSA/TopNavSA";
import RoutesSA from "../../RoutesSA";

const LayoutSA = () => {
  return (
    <Route
      render={(props) => (
        <div className="Layout_SA">
          <SidebarSA {...props} />
          <div className="LayoutSA_content">
            <TopNavSA />
            <div className="LayoutSA_content-main">
              <RoutesSA />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default LayoutSA;
