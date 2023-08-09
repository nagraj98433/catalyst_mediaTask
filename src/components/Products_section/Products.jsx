import React, { useState } from "react";
import "../../All_comp_styles/Products.css";
import product_img from "../../assets/img/Image.png";
import Pagination from "../Pagination_section/Pagination";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Filter from "../Filter_section/Filter";

function Products(props) {
  let [pagination, setpagination] = useState([1, 2, 3, 4]);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open, COunt_Incre) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });

    COunt_Incre();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Remove"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "" : ""}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // on click hide
  const [isClicked, setIsClicked] = useState(false);
  const [innerHTML, setinnerHTML] = useState("COTTON");

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleClick_Remov = (val) => {
    setIsClicked(false);
    // setinnerHTML(innerHTML == val.name);
    console.log(val);
  };

  const buttonClass = isClicked ? "clicked" : "";

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <Filter ClassRemov={handleClick_Remov} />
        </div>

        <div className="grid-item">
          <div
            style={{ textAlign: "center" }}
            className={`button ${buttonClass} cotton_heading_click`}
            onClick={handleClick}
          >
            {innerHTML}
          </div>
          <div className="product_container">
            <div className="grid-item">
              <div className="hover_container">
                <img src={product_img} alt="product-img" className="image" />
                <div className="overla">
                  <div className="text">Add to cart</div>
                </div>
              </div>
              <div className="product_name">Autumn flower top</div>
              <div className="product_type_Container">
                <span className="product_clr">BLACK</span>{" "}
                <span className="product_type">COTTON</span>
              </div>
              <div className="product_price">INR 1499.00</div>
            </div>

            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div className="grid-item clicking">
                    <div
                      className="hover_container"
                      onClick={toggleDrawer(anchor, true, props.COunt_Incre)}
                    >
                      <img
                        src={product_img}
                        alt="product-img"
                        className="image"
                      />
                      <div className="overlay">
                        <div className="text">Add to cart</div>
                      </div>
                    </div>
                    <div className="product_name">Autumn flower top</div>
                    <div className="product_type_Container">
                      <span className="product_clr">BLACK</span>{" "}
                      <span className="product_type">COTTON</span>
                    </div>
                    <div className="product_price">INR 1499.00</div>
                  </div>

                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <div style={{ width: "400px" }}>
                      <section className="sidebar_container_main">
                        <div className="header_sidebar">Shopping cart</div>
                        <div className="flex_container_sidebar">
                          <div>
                            <img
                              src={product_img}
                              alt="product-img"
                              className=""
                              width={200}
                              height={250}
                            />
                          </div>
                          <div className="flex_container_sidebar_content">
                            <div className="product_name">
                              Autumn flower top
                            </div>
                            <div className="product_type_Container">
                              <span className="product_clr">BLACK</span>{" "}
                              <span className="product_type">COTTON</span>
                            </div>
                            <div className="product_price">INR 1499.00</div>
                            <div
                              className="remove_btn"
                              onClick={() => {
                                props.COunt_Decr();
                              }}
                            >
                              {list(anchor)}
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </Drawer>
                </React.Fragment>
              ))}
            </div>

            <div className="grid-item">
              <div className="hover_container">
                <img src={product_img} alt="product-img" className="image" />
                <div className="overla">
                  <div className="text">Add to cart</div>
                </div>
              </div>
              <div className="product_name">Autumn flower top</div>
              <div className="product_type_Container">
                <span className="product_clr">BLACK</span>{" "}
                <span className="product_type">COTTON</span>
              </div>
              <div className="product_price">INR 1499.00</div>
            </div>

            <div className="grid-item">
              <div className="hover_container">
                <img src={product_img} alt="product-img" className="image" />
                <div className="overla">
                  <div className="text">Add to cart</div>
                </div>
              </div>
              <div className="product_name">Autumn flower top</div>
              <div className="product_type_Container">
                <span className="product_clr">BLACK</span>{" "}
                <span className="product_type">COTTON</span>
              </div>
              <div className="product_price">INR 1499.00</div>
            </div>

            <div className="grid-item">
              <div className="hover_container">
                <img src={product_img} alt="product-img" className="image" />
                <div className="overla">
                  <div className="text">Add to cart</div>
                </div>
              </div>
              <div className="product_name">Autumn flower top</div>
              <div className="product_type_Container">
                <span className="product_clr">BLACK</span>{" "}
                <span className="product_type">COTTON</span>
              </div>
              <div className="product_price">INR 1499.00</div>
            </div>

            <div className="grid-item">
              <div className="hover_container">
                <img src={product_img} alt="product-img" className="image" />
                <div className="overla">
                  <div className="text">Add to cart</div>
                </div>
              </div>
              <div className="product_name">Autumn flower top</div>
              <div className="product_type_Container">
                <span className="product_clr">BLACK</span>{" "}
                <span className="product_type">COTTON</span>
              </div>
              <div className="product_price">INR 1499.00</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Pagination data={pagination} />
      </div>
    </>
  );
}

export default Products;
