import React from "react";
import "./BottomFeaturesShield.css";
import ShieldCheck from "../../assets/ShieldCheck.png";

const BottomFeaturesShield = () => {
  return (
    <div className="bottom_feautures_shield_wrapper">
      <div className="bottom_features_Shield_check">
        {<img src={ShieldCheck} alt="shield_check" />}
      </div>
      <h2 className="bottom_feautures_shield_heading">Bank level security</h2>
      <p className="bottom_features_shield_text">
        Your money is 100% safe and secure on Kobodrop. No hassles, no glitches,
        get access to your money anytime.
      </p>
    </div>
  );
};

export default BottomFeaturesShield;
