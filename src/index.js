import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";

import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);
