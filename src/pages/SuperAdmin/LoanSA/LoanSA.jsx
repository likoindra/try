import React from "react";
import "./LoanSA.css";

import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Helmet } from "react-helmet";


import { LoanSASettings } from "../../../components/SuperAdmin/_client";
export default function LoanSA() {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Kerja 365 | Loan</title>
      </Helmet>
      <div className="wrapper-client-SA">
        <h2
          className="page-header"
          style={{ fontWeight: 500, color: "#0A0A0A", fontSize: 40 }}
        >
          Loan
        </h2>
      </div>

      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <LoanSASettings />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          {/* <AppStoreWithDownload /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
