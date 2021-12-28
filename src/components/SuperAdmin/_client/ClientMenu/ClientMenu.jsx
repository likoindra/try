import React from "react";
import "./ClientMenu.css";

import company_logo from "../../../../assets/images/company-logo.png";

import faker from "faker";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

let clients = [],
  CLIENTS_NAME = [
    "Pt Arla",
    "PT Loreal",
    "PT Samsung Indonesia",
    "PT Vission Plus",
    "PT Sabang Subur",
  ],
  NAMES = [
    "Jaka Saputra",
    "Jack Empire",
    "Layla Clapton",
    "Layla Clapton",
    "Putri Tsunade",
  ];
for (let i = 0; i < 5; i++) {
  clients[i] = {
    client: CLIENTS_NAME[i],
    scheme: ["Scheme 1", "Scheme 2"],
    apply: faker.date.past().toLocaleDateString("en-US"),
    // status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

export default function ClientMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="container__client-menu">
      <div className="wrapper__client-menu-download">
        <div className="client__menu-left" style={{ marginRight: "auto" }}>
          <input type="text" placeholder="Search by name" />
          <i className="bx bx-search"></i>
        </div>
        <div className="button__add-store-client">
          <Link to="/add-clients">
            <Button
              startIcon={<AddIcon style={{ color: "white" }} />}
              className="button__add-store-main-client"
              style={{ textTransform: "none", paddingLeft: 15 }}
            >
              <span style={{ fontSize: 14, color: "white" }}>Add Client</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="container__table-client">
        <div className="wrapper__table-client-menu">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Clients Name</TableCell>
                <TableCell align="right">Join Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Link to="/profile-clients">
                      <Grid container>
                        <Grid item xs={2}>
                          <img
                            src={company_logo}
                            alt={row.name}
                            sx={{ width: 26, height: 26 }}
                          />
                        </Grid>
                        <Grid item xs={6} style={{ paddingTop: 10 }}>
                          {row.client}
                        </Grid>
                      </Grid>
                    </Link>
                  </TableCell>

                  <TableCell align="right">{row.apply}</TableCell>

                  <TableCell align="right">
                    <Link to="/client-settings">
                      <Button>
                        <SettingsIcon style={{ color: "#757575" }} />
                      </Button>
                    </Link>
                    <Link to="/edit-clients">
                      <Button>
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button>
                      <DeleteOutlineIcon style={{ color: "#D1421A" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
