import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./addProductsMain.css";
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

function createData(name, calories, fat, carbs, protein, actions) {
  return { name, calories, fat, carbs, protein, actions };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
              {/* <div className="dropdown__item-add-product">Price</div>
              <div className="dropdown__item-add-product">Stock</div> */}
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
                Product Name
              </th>
              <th scope="col">Product Code</th>
              <th scope="col">Product Price</th>
              <th scope="col">Stock</th>
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
                <span>Kecap ABC</span>
              </td>
              <td>KD3372</td>
              <td>Rp. 12.000</td>
              <td>100 Karton</td>
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
                <span>Kecap ABC</span>
              </td>
              <td>KD3372</td>
              <td>Rp. 12.000</td>
              <td>100 Karton</td>
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
            </tr>{" "}
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
                <span>Kecap ABC</span>
              </td>
              <td>KD3372</td>
              <td>Rp. 12.000</td>
              <td>100 Karton</td>
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
            </tr>{" "}
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
                <span>Kecap ABC</span>
              </td>
              <td>KD3372</td>
              <td>Rp. 12.000</td>
              <td>100 Karton</td>
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
                <span>Kecap ABC</span>
              </td>
              <td>KD3372</td>
              <td>Rp. 12.000</td>
              <td>100 Karton</td>
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
