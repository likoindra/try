import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Grid, Switch } from "@mui/material";
import { Helmet } from "react-helmet";

import { AppAttendanceSettingView } from "../../../components/SuperAdmin/_attendance/";
export default function SettingsAttendanceView() {
  return (
    <Container maxWidth="xl">
      <div className="container-client-settings">
        <Helmet>
          <title>Kerja 365 | Client Settings</title>
        </Helmet>
        <div className="top__items-settings">
          <span style={{ paddingRight: 10 }}>Attendance</span>
          <ArrowForwardIosIcon style={{ fontSize: 20, color: "#255bfc" }} />
          {/* <span style={{ paddingLeft: 10 }}> Settings </span>
          <ArrowForwardIosIcon
            style={{ fontSize: 20, color: "#255bfc", marginLeft: 10 }}
          /> */}
          <span style={{ paddingLeft: 10 }}>Scheme 1</span>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <AppAttendanceSettingView />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}