import React, { useState, useEffect } from "react";
import "../../All_comp_styles/Header.css";
import myimg from "../../assets/img/Masthead.png";

function Header(props) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Initial background color

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Calculate the color based on scroll position
    const newColor = `rgb(${scrollPosition}, ${255 - scrollPosition}, 150)`;
    setBackgroundColor(newColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="background_banner_img">
        <div className="Header_fixed">
          <div className="Header_main_flex_container">
            <div>
              <span className="right">RIGHT</span>
              <span className="fit">FIT.COM</span>
            </div>
            <div className="flex_container_right">
              <span
                className="right all_products "
                style={{ color: backgroundColor }}
              >
                All Products
              </span>
              <span
                className="right featured_products "
                style={{ color: backgroundColor }}
              >
                Featured Products
              </span>
              <span
                className="right cart_icon "
                style={{ color: backgroundColor }}
              >
                <i className="fas fa-cart-arrow-down "></i>
              </span>
              <span
                className="right cart_count "
                style={{ color: backgroundColor }}
              >
                {props.cart_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
