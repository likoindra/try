import React from "react";
import "./appDetailStore.css";
import { Link } from "react-router-dom";
import product__items from "../../../assets/images/item-product-sale.png";
import employee__image from "../../../assets/images/employee-rectangle.png";
import employee__image_2 from "../../../assets/images/sujini.png";
import logo_table from "../../../assets/images/items_table.png";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import detail_picture from "../../../assets/images/image-store-details.png";
function AppDetailStore() {
  return (
    <div className="contaier__detail-store">
      <div className="wrapper_container-detail-top">
        <div className="container__image-detail">
          <img src={detail_picture} alt="" />
        </div>
        <div className="container__detail-store">
          <div className="items__detail-store-1">
            <div className="items__detail-1">
              <label htmlFor="">Coordinate</label>
              <span>12.11.98.1112</span>
            </div>
            <div className="items__detail-2">
              <label htmlFor="">Store Name</label>
              <span>UD. Sinar Jaya</span>
            </div>
          </div>
          <div className="items__detail-store-2">
            <div className="items__detail-3">
              <label htmlFor="">Owner</label>
              <span>Michelle Swints</span>
            </div>
            <div className="items__detail-4">
              <label htmlFor="">Phone Number</label>
              <span>0812-8818-2222</span>
            </div>
          </div>
          <div className="items__detail-store-3">
            <label htmlFor="">Social Media</label>
            <span>@sinarjaya.id</span>
          </div>
          <div className="items__detail-store-4">
            <div className="wrapper__button-buttom">
              <Button endIcon={<EditIcon />}>Edit</Button>
            </div>
            <div className="wrapper__button-bottom-red">
              <Button endIcon={<DeleteOutlineIcon />}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper__product-sale">
        <div className="product__sale-title">
          <span>Product for Sale</span>
        </div>
        <div className="items__rectangle">
          <div className="items__product-sale">
            <img src={product__items} alt="" />
            <div className="text__wrapper-product">
              <label htmlFor="">Susu Frissian Flag</label>
              <span>12 box available</span>
            </div>
          </div>
          <div className="items__product-sale">
            <img src={product__items} alt="" />
            <div className="text__wrapper-product">
              <label htmlFor="">Susu Frissian Flag</label>
              <span>12 box available</span>
            </div>
          </div>{" "}
          <div className="items__product-sale">
            <img src={product__items} alt="" />
            <div className="text__wrapper-product">
              <label htmlFor="">Susu Frissian Flag</label>
              <span>12 box available</span>
            </div>
          </div>{" "}
          <div className="items__product-sale">
            <img src={product__items} alt="" />
            <div className="text__wrapper-product">
              <label htmlFor="">Susu Frissian Flag</label>
              <span>12 box available</span>
            </div>
          </div>
          <div className="items__dashed-box">
            <div className="text__wrapper-product-dashed">
              <Link to="/addProduct">
                <div>
                  <AddIcon style={{ color: "#3072B8" }} />
                </div>
                <div
                  style={{ fontSize: 14, fontWeight: 500, color: "#3072B8" }}
                >
                  <span>Product</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper__add-employee">
        <div className="add__employee-title">
          <span>Employee</span>
        </div>
        <div className="items__rectangle-add-employee">
          <div className="items__add-employee">
            <img src={employee__image} alt="" />
            <div className="text__wrapper-employee">
              <label htmlFor="">Anastasia</label>
              <span>Sales Promotion Girl</span>
            </div>
          </div>
          <div className="items__add-employee">
            <img src={employee__image_2} alt="" />
            <div className="text__wrapper-employee">
              <label htmlFor="">Anton Sujini</label>
              <span>MD</span>
            </div>
          </div>
          <div className="items__dashed-box">
            <div className="text__wrapper-product-dashed">
              <Link to="addEmployee">
              <div>
                <AddIcon style={{ color: "#3072B8" }} size="large" />
              </div>
              <div>
                <span
                  style={{ fontSize: 14, fontWeight: 500, color: "#3072B8" }}
                >
                  Employee
                </span>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container__store-promo">
          <div className="wrapper__title-store-promo">
            <span>Store Promo</span>
          </div>
          <div className="box__store-promo-detail">
            <div className="wrapper__nav-store-detail-promo">
              <ul className="nav__store-detail-promo">
                <li>Promo Category</li>
                <li>Product Name</li>
                <li>Product Type</li>
                <li>Period</li>
              </ul>
            </div>
            <div>
              <hr style={{ width: "100%", color: "#ECE6E6" }} />
            </div>
            <div className="wrapper__product-one">
              <div className="item__text-detail">
                <img src={logo_table} alt="" />
                <span>Food Promo</span>
                <span style={{ paddingLeft: 50 }}>Saus ABC</span>
                <span style={{ paddingLeft: 105 }}>Bumbu dapur</span>
                <span style={{ paddingLeft: 65 }}>21 December</span>
              </div>
            </div>
            <div>
              <hr style={{ width: "100%", color: "#ECE6E6" }} />
            </div>
            <div className="wrapper__product-one">
              <div className="item__text-detail">
                <img src={logo_table} alt="" />
                <span>Food Promo</span>
                <span style={{ paddingLeft: 50 }}>Saus ABC</span>
                <span style={{ paddingLeft: 105 }}>Bumbu dapur</span>
                <span style={{ paddingLeft: 65 }}>21 December</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetailStore;
