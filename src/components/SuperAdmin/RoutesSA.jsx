import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import AddClients from "../../pages/SuperAdmin/AddClients/AddClients";
import AttendanceAddScheme from "../../pages/SuperAdmin/AttendanceSA/Attendance-AddScheme/AttendanceAddScheme";
import AttendanceDetail from "../../pages/SuperAdmin/AttendanceSA/Attendance-Detail/AttendanceDetail";
import AttendanceSA from "../../pages/SuperAdmin/AttendanceSA/AttendanceSA";
import AttendanceSettings from "../../pages/SuperAdmin/AttendanceSettings/AttendanceSettings";
import ClientSA from "../../pages/SuperAdmin/ClientSA/ClientSA";
import ClientSettings from "../../pages/SuperAdmin/ClientSettings/ClientSettings";
import ClientUserSettings from "../../pages/SuperAdmin/ClientUserSettings/ClientUserSettings";
import DashboardSA from "../../pages/SuperAdmin/DashboardSA";
import EditClient from "../../pages/SuperAdmin/EditClients/EditClients";
import LoanAddScheme from "../../pages/SuperAdmin/LoanAddScheme/LoanAddScheme";
import LoanSA from "../../pages/SuperAdmin/LoanSA/LoanSA";
import LoanSettings from "../../pages/SuperAdmin/LoanSettings/LoanSettings";
import ClientProfile from "../../pages/SuperAdmin/ClientsProfileSA/ClientProfile";
import LoanSettingsView from "../../pages/SuperAdmin/LoanSettingsView/LoanSettingsView";
import AttendanceSettingsView from "../../pages/SuperAdmin/AttendanceSettingView/AttendanceSettingView";
import SettingViewLoan from '../../pages/SuperAdmin/LoanSettingMenu-Loan/SettingViewLoan'
import LoanEditScheme from "../../pages/SuperAdmin/LoanEditScheme/LoanEditScheme";
import SettingsAttendanceView from "../../pages/SuperAdmin/SettingAttendanceView/SettingsAttendanceView";
import AttendanceEditScheme from "../../pages/SuperAdmin/AttendanceSA/AttendanceEditScheme/AttendanceEditScheme";
const RoutesSA = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={DashboardSA} />
        {/* <Switch> */}
        <Route path="/client" component={ClientSA} />
        <Route path="/user-settings" component={ClientUserSettings} />
        <Route path="/client-settings" component={ClientSettings} />
        <Route path="/edit-clients" component={EditClient} />
        <Route path="/profile-clients" component={ClientProfile} />

        {/* </Switch> */}
        <Route path="/add-clients" component={AddClients} />
        <Route path="/loan-settings" component={LoanSettings} />
        <Route path="/attendance-settings" component={AttendanceSettings} />
        <Route path="/loan" component={LoanSA} />
        <Route path="/add-scheme" component={LoanAddScheme} />
        <Route path="/loan-settings-view" component={LoanSettingsView} />
        <Route path="/attendance-setting-view" component={AttendanceSettingsView} />
        <Route path="/loan-setting-view" component={SettingViewLoan} />
        <Route path="/loan-edit-scheme" component={LoanEditScheme} />
        <Route path="/setting-attendance-view" component={SettingsAttendanceView} />
        <Route path="/attendance-edit-scheme" component={AttendanceEditScheme} />


        {/*  */}
        <Route path="/attendance" component={AttendanceSA} />
        <Route path="/attendance-add-scheme" component={AttendanceAddScheme} />
        <Route
          path="/attendance-detail-attendance"
          component={AttendanceDetail}
        />

        {/* <Route path="/dashboard" component={DashboardApp} />
        <Route path="/store" component={Store} />
        <Route path="/addStore" component={AddStore} />
        <Route path="/editStore" component={EditStore} />
        <Route path="/storeDetails" component={StoreDetails} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/addEmployee" component={AddEmployee} />
        <Route path="/product" component={Product} /> */}
      </Switch>
    </div>
  );
};

export default RoutesSA;
