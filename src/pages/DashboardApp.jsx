import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

import {
  AppCustomer,
  AppEmployee,
  AppProducts,
  AppStore,
  AppAttendances,
  SalesOverview,
  AppNewCustCircleCharts,
  AppStoreBest,
  AppRecentProductPromo,
  AppProductBest,
  AppBestSpg,
  AppNewCustBottom,
  AppLastEpaySlip,
  AppRecentLoan,
} from "../components/_dashboard";
const DashboardApp = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Kerja 365 | Dashboard</title>
      </Helmet>
      <h2 className="page-header" style={{ fontWeight: 500, color: "#0A0A0A" }}>
        Dashboard
      </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppCustomer />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppStore />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppProducts />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppEmployee />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {/* sales overview charts */}
          <SalesOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* attendances */}
          <AppAttendances />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {/* new customer circle charts*/}
          <AppNewCustCircleCharts />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* attendances charts */}

          <AppStoreBest />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AppRecentProductPromo />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* products best seller */}
          <AppProductBest />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {/* new cusomer bottom */}
          <AppNewCustBottom />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* Best Spg */}

          <AppBestSpg />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          {/* new cusomer bottom */}
          <AppLastEpaySlip />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* Best Spg */}

          <AppRecentLoan />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardApp;
