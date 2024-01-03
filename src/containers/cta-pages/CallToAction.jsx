import React from "react";
import "./CallToAction.css";
import app from "../../assets/mobile-app-store.svg";
import google from "../../assets/mobile-google-play.svg";

const Cta = () => {
  return (
    <div className=" cta_page_container">
      <div className="section__padding">
        <h2 className="cta_heading">
          Join other thousands of people growing with Kobodrop.
        </h2>
        <br />
        <div className="cta_app_buttons">
          <img src={app} alt="apple_cta" className="cta_apple_button" />
          <img src={google} alt="google_cta" className="cta_google_button" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
