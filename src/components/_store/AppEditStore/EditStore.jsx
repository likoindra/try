import React from "react";
import "./editStore.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid, Container, Typography, Button } from "@mui/material";

function AppAddStore() {
  return (
    <div className="wrapper__edit-store">
      <div className="wrapper__title-top-edit-store">
        <span style={{ paddingRight: 10 }}>Store</span>
        <ArrowForwardIosIcon
          style={{ fontSize: 14, marginRight: 10, color: "#255BFC" }}
          className="wraper__title-icon-add-store"
        />
        <span>Edit Store</span>
      </div>
    </div>
  );
}

export default AppAddStore;
