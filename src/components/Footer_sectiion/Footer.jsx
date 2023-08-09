import React from "react";
import "../../All_comp_styles/Footer.css";
import CardsImg from "../../assets/img/image1.png";
import FLogo from "../../assets/img/image2.png";

function Footer() {
  return (
    <>
      <footer className="footer_section">
        <div class="grid-containerFooter">
          <div class="grid-itemFooter">
            <span className="right">RIGHT</span>
            <span className="fit">FIT.COM</span>
            <section className="L_content_container">
              <div className="F-style">Home</div>
              <div className="F-style">All Products</div>
              <div className="F-style">Featured Products</div>
              <div className="F-style">Contact</div>
              <div className="F-style">About Us</div>
            </section>
          </div>

          <div class="grid-itemFooter">
            <div className="middle_content_section">
              We are a registered E-Commerce seller and we support a variety of
              Local and International payment modes
            </div>
            <div className="All_cards_img">
              <img src={CardsImg} alt="all-cards-img" />
            </div>
          </div>
          <div class="grid-itemFooter">
            <div className="R_content_section">Website protected by</div>
            <div className="FLogo_section">
              <img src={FLogo} alt="Footer-logo" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
