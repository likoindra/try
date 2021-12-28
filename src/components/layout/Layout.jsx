import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesLink from "../routes";
import TopNav from "../topNav/TopNav";

const Layout = () => {
  return (
    <Route
      render={(props) => (
        <div className="layout">
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <RoutesLink />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Layout;
