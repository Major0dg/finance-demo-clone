import React from "react";
import "./PartnersSection.css";
import partnerslogo from "../../assets/partners-logo.png";
import partnerslogo1 from "../../assets/partners-logo1.png";

const PartnersSection = () => {
  return (
    <div className="partners_section_container">
      <h2 className="partners_section_heading">Transact seamlessly with...</h2>
      <p className="partner_section_text">
        Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
        200+
        <br /> integrations with other payment platforms like stripe, paypal,
        payoneer and others
      </p>
      <div className="partners_section_logo">
        <img src={partnerslogo} alt="partners_logo" /> <br />
        <img src={partnerslogo1} alt="partners_logo1" />
      </div>
    </div>
  );
};

export default PartnersSection;
