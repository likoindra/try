import React from "react";
import { Helmet } from "react-helmet";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

import { AppAddStore, AppStoreMap} from "../components/_store";

function AddStore() {
  return (
    <Container container spacing={3}>
      <Helmet>
        <title>Kerja 365 | Add Store</title>
      </Helmet>
      <AppAddStore />

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <AppStoreMap/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddStore;
