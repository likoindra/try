import React from "react";
import "./DataAttendance.css";

import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
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

import logo_jaka from "../../../../../assets/images/jaka-images.png";


let EMPLOYEE = [],
  NAMES = [
    "Jaka Saputra",
    "Jack Empire",
    "Layla Clapton",
    "Layla Clapton",
    "Putri Tsunade",
  ],
  POSITION = [
    "Product Designer",
    "Product Designer",
    "Front end Engineer",
    "Back End Engineer",
    "Product Manager",
  ],
  ATTEND = ["22 Days", "22 Days", "22 Days", "22 Days", "20Days"],
  LEAVE = ["0 Days", "0 Days", "0 Days", "0 Days", "2 Days"],
  SICK = ["0 Days", "0 Days", "0 Days", "0 Days", "0 Days"],
  OFF = ["0 Days", "0 Days", "0 Days", "0 Days", "0 Days"],
  RATE = ["90%", "90 %", "90 %", "90 %", "90 %"];

for (let i = 0; i < 5; i++) {
  EMPLOYEE[i] = {
    name: NAMES[i],
    position: POSITION[i],
    attend: ATTEND[i],
    leave: LEAVE[i],
    sick: SICK[i],
    off: OFF[i],
    rate: RATE[i],
    // client: [
    //   "Pt Arla",
    //   "PT Loreal",
    //   "PT Samsung Indonesia",
    //   "PT Vission Plus",
    //   "PT Sabang Subur",
    // ],
    // scheme: ["Scheme 1", "Scheme 2"],
    // apply: faker.date.past().toLocaleDateString("en-US"),
    // status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

function DataAttendance() {
  return (
    <div className="container__data-attendance">
      <div className="wrapper-table-data-att">
        <Table
          sx={{ width: "100%", maxHeight: "100%", backgroundColor: "#fafafa" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Emloyee Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Attend</TableCell>
              <TableCell>Leave</TableCell>
              <TableCell>Sick</TableCell>
              <TableCell>Off</TableCell>
              <TableCell>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {EMPLOYEE.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Grid container>
                    <Grid item xs={2} md={4}>
                      <img
                        src={logo_jaka}
                        alt={row.name}
                        sx={{ width: 26, height: 26 }}
                      />
                    </Grid>
                    <Grid item xs={6} md={8} style={{ paddingTop: 10 }}>
                      {row.name}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.attend}</TableCell>
                <TableCell>{row.leave}</TableCell>
                <TableCell>{row.sick}</TableCell>
                <TableCell>{row.off}</TableCell>
                <TableCell>{row.rate}</TableCell>
                <Link to="/attendance-detail-attendance">
                  <TableCell align="right">
                    <Button
                      style={{
                        textTransform: "none",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#1571DE",
                      }}
                      // onClick={() => setModalDataListOpen(true)}
                    >
                      Lihat Detail
                    </Button>
                    {/* {modalDataListOpen && (
                      <ModalSA setModalDataListOpen={setModalDataListOpen} />
                    )} */}
                  </TableCell>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataAttendance;
