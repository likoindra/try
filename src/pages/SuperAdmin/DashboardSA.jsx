import React from "react";
import { Grid, Container } from "@mui/material";
import { Helmet } from "react-helmet";
import {
  AppAttendanceOverview,
  AppLoanOverview,
  AppAverage,
  AppDataListLoan,
} from "../../components/SuperAdmin/_dashboard";

// import {} from "../components/_dashboard";
const DashboardSA = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Kerja 365 | Dashboard</title>
      </Helmet>
      <h2
        className="page-header"
        style={{ fontWeight: 500, color: "#0A0A0A", fontSize: 40 }}
      >
        Dashboard
      </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <AppAttendanceOverview />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AppLoanOverview />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <AppAverage />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <AppDataListLoan />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardSA;
