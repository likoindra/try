import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

import { AppAddProducts, AppAddProductsMain} from "../components/_addProducts";

function AddProduct() {
    const [selected, setIsSelected] = useState("All")
  return (
    <Container container spacing={3}>
      <Helmet>
        <title>Kerja 365 | Add Products</title>
      </Helmet>
      <AppAddProducts />

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
         <AppAddProductsMain selected={selected} setIsSelected={setIsSelected}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddProduct;
