import React from "react";
import "./AttendanceSA.css";

import { Grid, Container } from "@mui/material";
import { Helmet } from "react-helmet";

import { AppTabSettings} from '../../../components/SuperAdmin/_attendance/'
export default function AttendanceSA() {
  return (
    <Container maxWidth="xl">
      <Helmet>
        <title>Kerja 365 | Attendance</title>
      </Helmet>
      <h2
        className="page-header"
        style={{ fontWeight: 500, color: "#0A0A0A", fontSize: 40 }}
      >
        Attendance
      </h2>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <AppTabSettings/>
        </Grid>
      </Grid>
    </Container>
  );
}
