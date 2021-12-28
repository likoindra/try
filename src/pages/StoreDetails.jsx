import React from "react";
import { Helmet } from "react-helmet";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

import {
  AppStoreDetails,
  AppDetailStore,
  AppEditStore,
} from "../components/_store";

function StoreDetails() {
  return (
    <Container container spacing={3}>
      <Helmet>
        <title>Kerja 365 | Add Store</title>
      </Helmet>
      <AppStoreDetails />

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <AppDetailStore />
        </Grid>
      </Grid>
    </Container>
  );
}

export default StoreDetails;
