import React from "react";
import "./FooterPage.css";
import ios from "../../assets/ios.svg";
import playstore from "../../assets/playstore.svg";
import iconf from "../../assets/footer-icon.svg";
import MyCurrentYear from "../../components/Present-date";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="footer_column1_container">
      <p className="section__padding">
        <p className="footer_column1">
          <img src={iconf} alt="footer_icon"></img>
          <p className="footer_column1_text">Kobodrop</p>
        </p>
        <br />
        <h5 className="footer_column1_paragraph">
          Start spending the smart way
        </h5>
      </p>
      <div className="column_paragraph_text">
        <ul>
          <li className="product">Product</li> <br />
          <li>Overview</li>
          <li>Features</li>
          <li>Solutions</li>
          <li>Contact</li>
          <li>Releases</li>
        </ul>
        <ul>
          <li className="product">Resources</li> <br />
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Events</li>
          <li>Help centre</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="column_download_section section__padding">
        <div className="footer_download_button">
          <h5 className="download_text">Get the app</h5> <br />
          <img src={ios} alt="ios" className="footer_download_button" /> <br />
          <img
            src={playstore}
            alt="playstore"
            className="footer_download_button"
          />
        </div>
      </div>

      <div className="buttom_diver_section section__padding">
        <hr />
        <br />
        <div className="icons_date">
          <MyCurrentYear />
          <div className="my_icons">
            <FaTwitter />
            <FaLinkedinIn />
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
