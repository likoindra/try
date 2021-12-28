import React from "react";
import "./LoanAddScheme.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Grid, Switch } from "@mui/material";
import { Helmet } from "react-helmet";

import { AppAddLoanScheme } from "../../../components/SuperAdmin/_loan";
export default function LoanAddScheme() {
  return (
    <Container maxWidth="xl">
      <div className="container-client-settings">
        <Helmet>
          <title>Kerja 365 | Edit Settings</title>
        </Helmet>
        <div className="top__items-settings">
          <span style={{ paddingRight: 10 }}>Loan</span>
          <ArrowForwardIosIcon style={{ fontSize: 20, color: "#255bfc" }} />

          <span style={{ paddingLeft: 10 }}>Add Scheme</span>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <AppAddLoanScheme />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
