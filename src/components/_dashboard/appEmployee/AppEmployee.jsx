import React from "react";
import "./employee.css"
import employee_logo from '../../../assets/images/employee.png'
const AppEmployee = () => {
  return (
    <div className="featuredItem">
      <div className="featuredTitle">
        <span className="featuredMain">Employee</span>
        <span className="featuredSub">1.200 Employee</span>
      </div>
      <div className="featuredIcon">
        <img src={employee_logo} alt="Sales Images" />
      </div>
    </div>
  );
};

export default AppEmployee;
