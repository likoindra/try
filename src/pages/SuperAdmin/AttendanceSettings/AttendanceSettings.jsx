import React from "react";
import "./AttendanceSettings.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Grid, Switch } from "@mui/material";
import { Helmet } from "react-helmet";
import { AttSettingMenu } from "../../../components/SuperAdmin/_client/";
export default function AttendanceSettings() {
  return (
    <Container maxWidth="xl">
      <div className="container-client-settings">
        <Helmet>
          <title>Kerja 365 | Client Settings</title>
        </Helmet>
        <div className="top__items-settings">
          <span style={{ paddingRight: 10 }}> Client</span>
          <ArrowForwardIosIcon style={{ fontSize: 20, color: "#255bfc" }} />
          <span style={{ paddingLeft: 10 }}> Settings </span>
          <ArrowForwardIosIcon
            style={{ fontSize: 20, color: "#255bfc", marginLeft: 10 }}
          />
          <span style={{ paddingLeft: 10 }}> Attendance Settings </span>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <AttSettingMenu />
            {/* <ClientSettingMenu /> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
