import React from "react";
import "./BottomFeatures.css";
import phone from "../../assets/phone.png";

const BottomFeatures = () => {
  return (
    <div className="bottom_features">
      {/* left */}
      <div className="bottom_features-left">
        <h2 className="bottom_features_heading">
          Pay with Kobodrop, quick, simple and easy
        </h2>
        <p className="bottom_features_text">
          Paying your bills on Kobdrop has never been easier. Whether you are
          paying for electricity or internet, Kobodrop gets it done within
          seconds.
        </p>

        {/* right */}
      </div>
      <div className="bottom_features_phone">
        {<img src={phone} alt="phone" />}
      </div>
    </div>
  );
};

export default BottomFeatures;
