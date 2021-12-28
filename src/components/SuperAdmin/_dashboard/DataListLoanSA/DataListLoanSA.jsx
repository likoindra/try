import React, { useState } from "react";
import "./DataListLoanSA.css";
import { Link } from "react-router-dom";
import faker from "faker";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, Typography } from "@mui/material";
import ModalSA from "../ModalSA/ModalSA";

let USERS = [],
  STATUSES = ["Active", "Finished", "Denied"];
for (let i = 0; i < 5; i++) {
  USERS[i] = {
    name: [
      "Jaka Saputra",
      "Jack Empire",
      "Layla Clapton",
      "Layla Clapton",
      "Putri Tsunade",
    ],
    client: [
      "Pt Arla",
      "PT Loreal",
      "PT Samsung Indonesia",
      "PT Vission Plus",
      "PT Sabang Subur",
    ],
    scheme: ["Scheme 1", "Scheme 2"],
    apply: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

function DataListLoanSA() {
  const [modalDataListOpen, setModalDataListOpen] = useState(false);

  return (
    <div className="data-list-loan-container">
      <div className="wrapper__data-list-loan">
        <div className="title__data-list-loan">
          <span className="box__yellow-data-list"></span>
          <h3>Data List Loan</h3>
        </div>

        <div className="table__area-wrapper">
          <Table sx={{ width: "100%", maxHeight: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Emloyee Name</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Shceme</TableCell>
                <TableCell>Apply Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {USERS.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item xs={2} md={4}>
                        <Avatar alt={row.name} sx={{ width: 26, height: 26 }} />
                      </Grid>
                      <Grid item xs={6} md={8} style={{ paddingTop: 2 }}>
                        Jaka Saputra
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>PT. Arla</TableCell>
                  <TableCell>
                    <Typography
                      className="status__style"
                      style={{
                        backgroundColor:
                          (row.status === "Active" && "#498E0F") ||
                          (row.status === "Finished" && "#1B45D9") ||
                          (row.status === "Denied" && "#D1421A"),
                      }}
                    >
                      {row.status}
                    </Typography>
                  </TableCell>
                  <TableCell>Scheme 1 </TableCell>
                  <TableCell>{row.apply}</TableCell>

                  <TableCell align="right">
                    <Button
                      style={{
                        textTransform: "none",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#1571DE",
                      }}
                      onClick={() => setModalDataListOpen(true)}
                    >
                      Lihat Detail
                    </Button>
                    {modalDataListOpen && (
                      <ModalSA setModalDataListOpen={setModalDataListOpen} />
                    )}
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

export default DataListLoanSA;
