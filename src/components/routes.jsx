import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import AddEmployee from "../pages/AddEmployee";
import AddProduct from "../pages/AddProduct";
import AddStore from "../pages/AddStore";
import DashboardApp from "../pages/DashboardApp";
import EditStore from "../pages/EditStore";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Store from "../pages/Store";
import StoreDetails from "../pages/StoreDetails";
import { AppAddStore } from "./_store";

const RoutesLink = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={DashboardApp} />
        <Route path="/store" component={Store} />
        <Route path="/addStore" component={AddStore} />
        <Route path="/editStore" component={EditStore} />
        <Route path="/storeDetails" component={StoreDetails} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/addEmployee" component={AddEmployee} />
        <Route path="/product" component={Product} />
      </Switch>
    </div>
  );
};

export default RoutesLink;
