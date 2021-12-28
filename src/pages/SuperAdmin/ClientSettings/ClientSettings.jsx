import React from "react";
import "./ClientSettings.css";

import { Box, Grid, Switch, Container } from "@mui/material";
import { Helmet } from "react-helmet";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ClientSettingMenu } from "../../../components/SuperAdmin/_client";
export default function ClientSettings() {
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
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <ClientSettingMenu />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
