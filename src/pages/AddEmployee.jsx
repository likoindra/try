import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

import { AppAddEmployee, AppAddEmployeeMain } from "../components/_addProducts";

function AddEmployee() {
  const [selected, setIsSelected] = useState("All");
  return (
    <Container container spacing={3}>
      <Helmet>
        <title>Kerja 365 | Add Employee</title>
      </Helmet>
      <AppAddEmployee />

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <AppAddEmployeeMain
            selected={selected}
            setIsSelected={setIsSelected}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddEmployee;
