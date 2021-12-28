import React from "react";
import "./TopNavSA.css";
import { Link } from 'react-router-dom'
import user_image from "../../../assets/images/User.png";
import user_menu from "../../../assets/JsonData/user_menus.json";

import Dropdown from "../../dropdown/Dropdown";
import Notifications from "../../../assets/JsonData/notification.json";

const curr_user = {
  display_name: "Emil Fitriansyah",
  position: "Admin",
  image: user_image,
};
const renderNotificationsItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user_name">
      <span className="topnav__right-user_name-main">{user.display_name}</span>
      <span className="topnav__right-user_name-sub">{user.position}</span>
    </div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);
export default function TopNavSA() {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search" />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown */}
          <Dropdown
            icon="bx bx-bell"
            badge="10"
            contentData={Notifications}
            renderItems={(item, index) => renderNotificationsItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* dropdown */}
          <Dropdown
            //   icon="bx bx-user"
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          {/* <span>nName</span>
      <span>Position</span> */}
        </div>
        <div className="topnav__right-item">
          {/* dropdown */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
