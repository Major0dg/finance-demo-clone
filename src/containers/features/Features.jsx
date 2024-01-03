import React from "react";
import "./Features.css";
import BottomFeatures from "./BottomFeatures";
import BottomFeaturesShield from "./BottomFeaturesShield";
import PaymentBanner from "../payment-banner/PaymentBanner";
import AccountsBanner from "../payment-banner/AccountsBanner";
import PartnersSection from "../payment-banner/PartnersSection";
import Cta from "../cta-pages/CallToAction";
import CallToAcionRight from "../cta-pages/CallToAcionRight";
import FooterPage from "../footer-pages/FooterPage";

const Features = () => {
  return (
    <>
      <div className="features_container section__padding">
        <h2 className="features_heading">Make every penny count</h2>
        <p className="features_text">
          Spend smarter, lower your bills, get cashback on everything you buy,
          <br></br> and unlock credit to grow your business.
        </p>
        <div className="features_wrapper_main">
          <BottomFeatures />
          <BottomFeaturesShield />
        </div>
        <div className="payment_features_wrapper">
          <PaymentBanner />
          <AccountsBanner />
        </div>
      </div>
      <div className="partners_section_wrapper">
        <PartnersSection />
      </div>
      <div className="cta_page_wrapper">
        <Cta />
        <CallToAcionRight />
      </div>
      <div className="footer_section">
        <FooterPage />
      </div>
    </>
  );
};

export default Features;
