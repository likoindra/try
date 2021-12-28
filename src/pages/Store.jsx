import React from "react";
import "../assets/css/storePages.css";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Helmet } from "react-helmet";

import {
  AppRecentStore,
  AppStoreWithDownload,
} from "../components/_store/index";
const Store = () => {
  return (
    <Container container spacing={3}>
      <Helmet>
        <title>Kerja 365 | Store</title>
      </Helmet>
      <div className="wrapperPageStore">
        <h2
          className="page-header"
          style={{ fontWeight: 500, color: "#0A0A0A" }}
        >
          Store
        </h2>
        <div className="wrapperPagesStoreReport">
          <Button className="wrapperPagesStoreReport">
            <span className="textReportStore">Report</span>
            <i className="bx bxs-printer"></i>
          </Button>
        </div>
      </div>

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <AppRecentStore />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppStoreWithDownload />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Store;
