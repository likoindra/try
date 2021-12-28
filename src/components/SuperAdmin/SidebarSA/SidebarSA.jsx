import React from "react";
import "./SidebarSA.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/kerja365.png";

import sidebarSA_items from "../../../assets/JsonData/sidebar_super-user.json";

const SidebarItemSA = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div> 
    </div>
  );
};
const SidebarSA = (props) => {
  const activeItem = sidebarSA_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <div className="sidebar__logo">
          <img src={logo} alt="company logo" />
        </div>
      </Link>
      {sidebarSA_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItemSA
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default SidebarSA;
