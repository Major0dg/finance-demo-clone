import React from "react";
import "./PaymentBanner.css";
import coin from "../../assets/coin.svg";

const PaymentBanner = () => {
  return (
    <div className="payment_banner_container">
      <div className="payment_banner_coin">{<img src={coin} alt="coin" />}</div>
      <h2 className="payment_banner_heading">Cost reduction</h2>
      <p className="payment_banner_text">
        Kobodrop reduced payments maintenance and processing fees. No hidden
        fees
      </p>
    </div>
  );
};

export default PaymentBanner;
