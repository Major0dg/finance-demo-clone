import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/hero-image.png";
import appStore from "../../assets/mobile-app-store.svg";
import googlePlay from "../../assets/mobile-google-play.svg";

const HeroSection = () => {
  return (
    <div className="herosection_container section__padding" id="hero">
      <div className="herosection_container-content">
        {/* content */}
        <h1>Start spending the smart way</h1>
        <p>
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>

        <div className="herosection_container-content_download-links">
          <img src={appStore} alt="app-store" />
          <img src={googlePlay} alt="app-store" />
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="heroImage" />
      </div>
    </div>
  );
};

export default HeroSection;
