import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./addEmployeeMain.css";
// import { Button } from "@mui/material";
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import product__table from "../../../assets/images/product-table.png";
import AddIcon from "@mui/icons-material/Add";
import { Tab } from "@mui/material";

export default function AddProductsMain({ selected, setIsSelected }) {
  const [active, setActive] = useState();
  const options = ["Name", "Price", "Stock"];

  return (
    <div className="container__add-products-main">
      <div className="wrapper__search-top">
        <div className="box__search-top">
          <input type="text" placeholder="Search Product" />
          <i className="bx bx-search" />
        </div>
        <div className="box__dropdown">
          <div className="dropdown__button" onClick={(e) => setActive(!active)}>
            <span value="All">{selected}</span>
            <KeyboardArrowDownIcon />
          </div>
          {active && (
            <div className="dropdown__content-add-product">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setIsSelected(option);
                    setActive(false);
                  }}
                  className="dropdown__item-add-product"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="box__table-product">
        <table style={{ width: "100%" }} className="table__class">
          <thead>
            <tr>
              <th>
                <span className="custom__checkbox">
                  <input type="checkbox"></input>
                  <label htmlFor="selectAll"></label>
                </span>
              </th>
              <th scope="col" id="th__change">
                Employee Name
              </th>
              <th scope="col">Position</th>
              <th scope="col">Store</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="custom__checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="option[]"
                    value="1"
                  />
                  <label htmlFor="checkbox1"></label>
                </span>
              </td>
              <td>
                {/* <img src={product__table} alt="" /> */}
                <span>Anastasia</span>
              </td>
              <td>Sales Promotion Girl</td>
              <td>Giant</td>
              <td>0828-7878-7737</td>
              <td>
                <Button
                  startIcon={<AddIcon />}
                  className="button__table"
                  style={{
                    width: 60,
                    height: 36,
                    borderRadius: "4px",
                    backgroundColor: "#1571de",
                    color: "#fff",
                    textTransform: "none",
                    fontSize: 16,
                  }}
                >
                  Add
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom__checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="option[]"
                    value="1"
                  />
                  <label htmlFor="checkbox1"></label>
                </span>
              </td>
              <td>
                {/* <img src={product__table} alt="" /> */}
                <span>Aisyah Dara</span>
              </td>
              <td>Sales Promotion Girl</td>
              <td>Giant</td>
              <td>0828-7878-7737</td>
              <td
                className="button__table"
                style={{
                  backgroundColor: "#1571de",
                  width: 53,
                  height: 36,
                  borderRadius: 4,
                }}
              >
                <Button startIcon={<AddIcon />}>Add</Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom__checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="option[]"
                    value="1"
                  />
                  <label htmlFor="checkbox1"></label>
                </span>
              </td>
              <td>
                {/* <img src={product__table} alt="" /> */}
                <span>Aisyah Dara</span>
              </td>
              <td>Sales Promotion Girl</td>
              <td>Giant</td>
              <td>0828-7878-7737</td>
              <td
                className="button__table"
                style={{
                  backgroundColor: "#1571de",
                  width: 53,
                  height: 36,
                  borderRadius: 4,
                }}
              >
                <Button startIcon={<AddIcon />}>Add</Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom__checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="option[]"
                    value="1"
                  />
                  <label htmlFor="checkbox1"></label>
                </span>
              </td>
              <td>
                {/* <img src={product__table} alt="" /> */}
                <span>Aisyah Dara</span>
              </td>
              <td>Sales Promotion Girl</td>
              <td>Giant</td>
              <td>0828-7878-7737</td>
              <td
                className="button__table"
                style={{
                  backgroundColor: "#1571de",
                  width: 53,
                  height: 36,
                  borderRadius: 4,
                }}
              >
                <Button startIcon={<AddIcon />}>Add</Button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom__checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="option[]"
                    value="1"
                  />
                  <label htmlFor="checkbox1"></label>
                </span>
              </td>
              <td>
                {/* <img src={product__table} alt="" /> */}
                <span>Aisyah Dara</span>
              </td>
              <td>Sales Promotion Girl</td>
              <td>Giant</td>
              <td>0828-7878-7737</td>
              <td
                className="button__table"
                style={{
                  backgroundColor: "#1571de",
                  width: 53,
                  height: 36,
                  borderRadius: 4,
                }}
              >
                <Button startIcon={<AddIcon />}>Add</Button>
              </td>
            </tr>
          </tbody>
          {/* </TableContainer> */}
          {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Code</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">
                    <Button startIcon={<AddIcon />}>Add</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}

          {/* <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table></Table>
          </TableContainer>
        </Card> */}
        </table>
      </div>
    </div>
  );
}
