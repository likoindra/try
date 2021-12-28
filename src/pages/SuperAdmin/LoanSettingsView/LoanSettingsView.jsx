import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Grid, Switch } from "@mui/material";
import { Helmet } from "react-helmet";

import { AppLoanSettingView } from "../../../components/SuperAdmin/_loan/";
export default function LoanSettingsView() {
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
          <span style={{ paddingLeft: 10 }}> Loan Settings </span>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <AppLoanSettingView />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
