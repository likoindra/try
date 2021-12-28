import React, { useState } from "react";
import "./AddClientMenu.css";

import company_logo from "../../../../assets/images/company-logo.png";
import faker from "faker";

import { useDropzone } from "react-dropzone";
import PublishIcon from "@mui/icons-material/Publish";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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

export default function AddClientMenu() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={files.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: 300, height: 170 }}
          alt="preview"
        />
      </div>
    </div>
  ));
  return (
    <div className="container-add-menu-client">
      <div className="table-container-add-menu-client">
        <TableContainer container={Paper}>
          <Table
            sx={{
              width: "100%",
              maxHeight: "100%",
              backgroundColor: "#fafafa",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Clients Name</TableCell>
                <TableCell>Join Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((row) => (
                <TableRow component="th" key={row.name}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Grid container>
                      <Grid item xs={2}>
                        <img
                          src={company_logo}
                          alt={row.name}
                          sx={{ width: 26, height: 26 }}
                        />
                      </Grid>
                      <Grid item xs={6} style={{ paddingTop: 4 }}>
                        {row.client}
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.apply}</TableCell>
                  <TableCell align="right">
                    <Button
                      style={{
                        textTransform: "none",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "white",
                        width: 53,
                        height: 36,
                        backgroundColor: "#1571de",
                      }}
                      className="button-add-client-menu"
                      // onClick={() => setModalDataListOpen(true)}
                    >
                      Add
                    </Button>
                    {/* {modalDataListOpen && (
                      <ModalSA setModalDataListOpen={setModalDataListOpen} />
                    )} */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
