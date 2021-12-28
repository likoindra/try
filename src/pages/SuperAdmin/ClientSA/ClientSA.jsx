import React from "react";
import "./ClientSA.css";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { Helmet } from "react-helmet";

import { ClientMenu } from "../../../components/SuperAdmin/_client/";
const ClientSA = () => {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Kerja 365 | Client</title>
      </Helmet>
      <div className="wrapper-client-SA">
        <h2
          className="page-header"
          style={{ fontWeight: 500, color: "#0A0A0A", fontSize: 40 }}
        >
          Client
        </h2>
        <div className="wrapper-button-client-SA">
          <Button className="">
            <span className="">Report</span>
            <i
              className="bx bxs-printer"
              style={{ fontSize: 20, paddingLeft: 10 }}
            ></i>
          </Button>
        </div>
      </div>

      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <ClientMenu />
          {/* <AppRecentStore /> */}
        </Grid>

        <Grid item xs={12} md={6} lg={8}></Grid>
      </Grid>
    </Container>
  );
};

export default ClientSA;
