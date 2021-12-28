import React, {useState} from "react";
import "./storePromo.css";
import { Link } from "react-router-dom";
import icon_circle_cust from "../../../assets/images/dummy-product.png";
import Modal from "../../modals/Modal";
import logo_table from "../../../assets/images/items_table.png";
import employee_icon from "../../../assets/images/employee-image.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NestedMenuItem from "material-ui-nested-menu-item";
function AppRecentProduct() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="recentStore">
      <div className="wrapperStorePromo">
        <span className="rectangleYellowStorePromo"></span>
        <h3 className="chartTitleStorePromo">Recent Store Promo</h3>
      </div>
      <div className="titleTopNavStorePromo">
        <span className="custNameStorePromo">Promo Type</span>
        <span className="productNameStorePromo">Product</span>
        <span className="StorePromo">Store</span>
        <span className="dateStorePromo">Date</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsStorePromoName">Food Promo</span>
        <span className="itemsStorePromoProduct">Susu Bendera</span>
        <span className="itemsStorePromo"> Indomaret</span>
        <span className="itemsDateStorePromo"> 31 December 2021</span>
        <div className="detailButton">
          <Link to="/storeDetails">
            <span style={{ fontSize: 14 }}>Detail</span>
          </Link>
        </div>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsStorePromoName">Floor Display</span>
        <span className="itemsStorePromoProductDisplay">Teh Celup Sosro</span>
        <span className="itemsStorePromoDisplay"> Alfamart</span>
        <span className="itemsDateStorePromoDisplay">31 December 2021</span>
        <span className="detailButton">Detail</span>
      </div>
      <div>
        <hr style={{ width: "100%", color: "#ECE6E6" }} />
      </div>
      <div className="boxProductCustBottom">
        <img src={icon_circle_cust} alt="" />
        <span className="itemsStorePromoName">Katalog</span>
        <span className="itemsStorePromoKatalog">Sprite</span>
        <span className="itemsStorePromoKatalogName">Alfamidi</span>
        <span className="itemsDateStorePromoKatalog"> 31 December 2021</span>
        <span className="detailButton">Detail</span>
      </div>
{/* store download */}

    </div>
  );
}

export default AppRecentProduct;
