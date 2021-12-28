import React from "react";
import "./TabSetting.css";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Setting from "../Settings/Setting";
import Box from "@mui/material/Box";

import DataAttendance from "../DataAttendance/DataAttendance";

export default function TabSetting() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container__tab-setting">
      <div className="wrapper__tab-setting">
        <TabContext value={value}>
          <Box sx={{ borderColor: "#1571DE" }}>
            <TabList onChange={handleChange}>
              <Tab label={<span className="text__tabs">Setting</span>} value="1" />
              <Tab label={<span className="text__tabs">Data Attendance</span>} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Setting />
          </TabPanel>
          <TabPanel value="2">
            <DataAttendance />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
