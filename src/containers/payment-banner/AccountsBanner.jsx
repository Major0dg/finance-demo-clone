import React from "react";
import "./AccountsBanner.css";
import payment from "../../assets/payment-banners.png";

const AccountsBanner = () => {
  return (
    <div className="account_banner_container">
      <div className="account_banner_text">
        <h2 className="account_banner_heading">
          Send, recieve and Exchange money
        </h2>

        <p className="account_banner_paragraph">
          Transfers, payments all work on Kobodrop. Get your alert message
          immediately after a completed transaction.
        </p>
      </div>
      <div className="account_bannner_media">
        <img src={payment} alt="payment_photo" />
      </div>
    </div>
  );
};

export default AccountsBanner;
